import React, { useState } from "react";
import "./RiskEvaluationPage.css";

//@ts-ignore
import Map from "./MapPage.jsx";
import { evaluate_risk } from "./source/risk_evaluation.js";

const RiskAssesment: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<google.maps.LatLngLiteral>({
        lat: 40,
        lng: -100,
    });
    const [crimeRisk, setCrimeRisk] = useState<number | "">("");
    const [airPollutionRisk, setAirPollutionRisk] = useState<number | "">("");
    const [etcRisk, setEtcRisk] = useState<number | "">("");
    const [environmentRisk, setEnvironmentRisk] = useState<number | "">("");
    const [fireRisk, setFireRisk] = useState<number | "">("");

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        isLat: boolean
    ) => {
        if (event.target.value === "") return;

        let newLocation = searchQuery;
        if (isLat) {
            newLocation.lat = Number(event.target.value);
        } else {
            newLocation.lng = Number(event.target.value);
        }
        setSearchQuery(newLocation);
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<number | "">>
    ) => {
        const value =
            event.target.value === "" ? "" : Number(event.target.value);
        setter(value);
    };

    return (
        <div id="root2">
            <header>
                <a href="/home">
                    <img
                        src="src/assets/Risk Monkey-4_processed.png"
                        alt="Company Logo"
                        id="logo"
                    />
                    <h1 id="companyName">Risk Monkey</h1>
                </a>
            </header>

            <div id="pageContainer">
                <div id="leftContainer">
                    <div id="searchBarContainer">
                        <input
                            type="number"
                            min="24"
                            max="49.5"
                            onChange={(e) => {
                                handleSearchChange(e, true);
                            }}
                            placeholder="Enter latitude"
                            className="searchBar"
                        />

                        <input
                            type="number"
                            max="-65"
                            min="-127"
                            onChange={(e) => {
                                handleSearchChange(e, false);
                            }}
                            placeholder="Enter longitude"
                            className="searchBar"
                        />
                    </div>

                    <div id="customization">
                        <h2>Additional Content</h2>
                        <p>Risk Factors:</p>

                        <label htmlFor="crimeRiskInput">
                            Crime Risk Factor:{" "}
                        </label>
                        <input
                            type="number"
                            id="crimeRiskInput"
                            value={crimeRisk}
                            onChange={(e) => handleInputChange(e, setCrimeRisk)}
                            placeholder="Enter a value"
                        />
                        <br></br>

                        <label htmlFor="airPollutionRiskInput">
                            Air Pollution Risk Factor:{" "}
                        </label>
                        <input
                            type="number"
                            id="airPollutionRiskInput"
                            value={airPollutionRisk}
                            onChange={(e) =>
                                handleInputChange(e, setAirPollutionRisk)
                            }
                            placeholder="Enter a value"
                        />
                        <br></br>

                        <label htmlFor="etcRiskInput">
                            Financial Risk Factor:{" "}
                        </label>
                        <input
                            type="number"
                            id="etcRiskInput"
                            value={etcRisk}
                            onChange={(e) => handleInputChange(e, setEtcRisk)}
                            placeholder="Enter a value"
                        />
                        <br></br>

                        <label htmlFor="environmentRiskInput">
                            Environment Risk Factor:{" "}
                        </label>
                        <input
                            type="number"
                            id="environmentRiskInput"
                            value={environmentRisk}
                            onChange={(e) =>
                                handleInputChange(e, setEnvironmentRisk)
                            }
                            placeholder="Enter a value"
                        />

                        <br></br>

                        <label htmlFor="fireRiskInput">
                            Fire Risk Factor:{" "}
                        </label>
                        <input
                            type="number"
                            id="fireRiskInput"
                            value={fireRisk}
                            onChange={(e) => handleInputChange(e, setFireRisk)}
                            placeholder="Enter a value"
                        />
                    </div>

                    <div id="analysis">
                        <h2>Analysis Content</h2>
                        {evaluate_risk(
                            {
                                latitude: searchQuery.lat,
                                longitude: searchQuery.lng,
                            },
                            [
                                10,
                                Number(crimeRisk),
                                Number(airPollutionRisk),
                                Number(environmentRisk),
                            ]
                        ).then((x) => (
                            <p>x</p>
                        ))}
                    </div>
                </div>

                <div id="rightContainer">
                    <Map initialLocation={searchQuery}></Map>
                </div>
            </div>
        </div>
    );
};

export default RiskAssesment;
