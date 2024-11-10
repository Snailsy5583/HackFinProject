
import { useNavigate } from "react-router-dom";
import reactLogo from "/src/output-onlinepngtools (1).png";
import "./App.css";
import { evaluate_crime } from "./source/risk_evaluation";
import { useState } from "react";

function App() {
    const crimes = evaluate_crime({latitude:33.9, longitude:-80.3});
    const [, setCount] = useState(0);
    
    const navigate = useNavigate(); 

    return (
        <div id="page">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h1>Swing into Better Investments</h1>
            <div className="card">
                <button onClick={() => { navigate("/risk_assessment"); }}>
                    Start Your Search Today
                </button>
                <p></p>
            </div>
        </div>
    );
}

export default App;
