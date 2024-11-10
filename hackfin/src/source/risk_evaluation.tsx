//@ts-ignore
//import http from 'axiom'
//@ts-ignore
import {GOV_API, GOOGLE_API} from "../../api"
//@ts-ignore

interface Location {
    latitude: number;
    longitude: number;
}

type RiskData = [
    total: number,
    crime: number,
    air: number
]

type CrimeAgencyData = {
    "ori": string,
    "counties": string,
    "is_nibrs": boolean,
    "latitude": number,
    "longitude": number,
    "state_abbr": string,
    "state_name": string,
    "agency_name": string,
    "agency_type_name": string,
    "nibrs_start_date": string
}

type CrimeData = {
    "rates": {},
    "actuals": Record<string, number[]>,
    "populations": {"populations":{}, "participated_population": Record<string, any>}
}

let crime_years_past = 5;
let air_years_future = 5;

function spherical_distance_squared(loc1: Location, loc2: Location): number {
    const deg2rad = Math.PI/180;
    const earth_radius_km = 6378; // km
    let delta_lat:number = (loc2.latitude-loc1.latitude) * deg2rad, delta_long:number = (loc2.longitude-loc1.longitude) * deg2rad;
    let dist_squared = (delta_lat*delta_lat + delta_long*delta_long) * earth_radius_km;
    return dist_squared;
}

export async function evaluate_risk(location: Location, coefficients: RiskData): Promise<RiskData> {
    let result: RiskData = coefficients;

    result[1] = await evaluate_crime(location) * coefficients[1];
    result[2] = await evaluate_air(location)   * coefficients[2];

    let total = 0;
    let coeff_total = 0;
    for (let i=1; i<coefficients.length; i++) { 
        total += result[i]; 
        coeff_total += coefficients[i];
    }

    result[0] = total/coeff_total * coefficients[0];
    return result;
}

async function evaluate_crime(location: Location, agencies_to_check=5): Promise<number> {
    // find state and county
    let address_json = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${GOOGLE_API}`)
                                .then(x=>x.json());
    if (!address_json)
        return -1;
    let state_json = address_json["results"][0]["address_components"].find((element:any) => element["types"][0] === "administrative_area_level_1");
    if (!state_json)
        return -1;
    let state: string = state_json["short_name"];
    let county: string = address_json["results"][0]["address_components"].find((element:any) => element["types"][0] === "administrative_area_level_2")["short_name"];
    county = county.split(" ")[0].toUpperCase();

    console.log(state);
    console.log(county);

    // find ORI
    let agencies_json = await fetch(`https://api.usa.gov/crime/fbi/cde/agency/byStateAbbr/${state}?API_KEY=${GOV_API}`).then(x=>x.json());
    let agencies_from_county: CrimeAgencyData[] = Array.from(agencies_json[county]);
    let oris: string[][];
    if (agencies_from_county) {
        oris = agencies_from_county.sort(function(e1, e2): number {
            let loc1: Location = {latitude: e1["latitude"], longitude: e1["longitude"]};
            let loc2: Location = {latitude: e2["latitude"], longitude: e2["longitude"]};
            return spherical_distance_squared(loc1, location) - spherical_distance_squared(loc2, location);
        }).slice(0, agencies_to_check).map((e)=>[e["agency_name"],e["ori"]]);

    } else {
        let arr: CrimeAgencyData[] = Array.from(Object.values(agencies_json));
        oris = arr.sort(function(e1:CrimeAgencyData, e2:CrimeAgencyData): number {
            let loc1: Location = {latitude: e1["latitude"], longitude: e1["longitude"]};
            let loc2: Location = {latitude: e2["latitude"], longitude: e2["longitude"]};
            return spherical_distance_squared(loc1, location) - spherical_distance_squared(loc2, location);
        }).slice(0, agencies_to_check).map((e)=>[e["agency_name"],e["ori"]]);
    }

    // find crimes
    let today = new Date();
    let to_year = today.getFullYear();
    let month = today.getMonth()+1;
    let from_year = to_year - crime_years_past;

    let from = `${month}-${from_year}`;
    let to   = `${month}-${to_year}`;

    let total_crimes = 0;

    for (let ori of oris) {
        let crimes_json: CrimeData = await fetch(`https://api.usa.gov/crime/fbi/cde/arrest/agency/${ori[1]}/all?type=counts&ori=${ori[1]}&from=${from}&to=${to}&API_KEY=${GOV_API}`)
                                    .then(x=>x.json());
        
        let arrests_list: any = Array.from(Object.values(crimes_json["actuals"][ori[0]+" Arrests"]));
        let part_population_list: number[] = Array.from(Object.values(crimes_json["populations"]["participated_population"][ori[0]]))
        for (let i=0; i<arrests_list.length; i++)
            if (part_population_list[i])
                total_crimes += arrests_list[i]/part_population_list[i];
    }

    total_crimes *= 10;

    console.log(total_crimes);
    return total_crimes;
}

async function evaluate_air(location: Location): Promise<number> {
    let dateTime = new Date(Date.now());

    const response: Record<string, any> = await fetch(`https://airquality.googleapis.com/v1/currentConditions:lookup?key=${GOOGLE_API}`, {
        method: "POST",
        body: JSON.stringify({
            "location": {
                "latitude": location.latitude,
                "longitude": location.longitude
            },
            "universalAqi": true,
        })
    }).then(x=>x.json());
    console.log(response);

    let risk: number = response["indexes"][0]["aqi"]/20;
    return risk;
}