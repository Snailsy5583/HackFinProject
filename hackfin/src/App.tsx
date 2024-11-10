
import { useNavigate } from "react-router-dom";
import reactLogo from "/src/assets/output-onlinepngtools (1).png";
import "./App.css";
import { useState } from "react";

function App() {
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
