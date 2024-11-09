import {gov_api} from "../api.js"

interface Location {
    latitude: number;
    longitude: number;
}

type RiskData = [
    total: number,
    crime: number
]

let years_past = 5;

function evaluate_risk(location: Location, coefficients: RiskData): RiskData {
    let result: RiskData = coefficients;

    result[1] *= evaluate_crime(location);

    let total = 0;
    for (let i=1; i<result.length; i++)
        total += result[i];

    result[0] *= total/result.length;
    return result;
}

function evaluate_crime(location: Location): number {
    let url = "https://api.usa.gov/crime/fbi/sapi/api/agencies?api_key="+gov_api;


    return 0;
}