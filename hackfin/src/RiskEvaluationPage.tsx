import React, { useState } from "react";
import "./RiskEvaluationPage.css";

const RiskAssesment: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [crimeRisk, setCrimeRisk] = useState<number | "">("");
    const [airPollutionRisk, setAirPollutionRisk] = useState<number | "">("");
    const [etcRisk, setEtcRisk] = useState<number | "">("");
    const [environmentRisk, setEnvironmentRisk] = useState<number | "">("");
    const [fireRisk, setFireRisk] = useState<number | "">("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
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
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Enter latitude and longitude"
                            className="searchBar"
                        />

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Enter and longitude"
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
                        <p></p>
                    </div>
                </div>

                <div id="rightContainer">
                    <p>Right Container Content</p>
                </div>
            </div>
        </div>
    );
};

export default RiskAssesment;
