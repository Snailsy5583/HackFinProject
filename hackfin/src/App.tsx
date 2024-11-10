
import { useNavigate } from "react-router-dom";
import reactLogo from "/src/output-onlinepngtools (1).png";
import "./App.css";

function App() {
    
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        
        navigate("/RiskAssessment"); 
    };

    return (
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>Swing into Better Investments</h1>
            <div className="card">
                <button onClick={handleButtonClick}>
                    Start Your Search Today
                </button>
                <p></p>
            </div>
            <p className="read-the-docs"></p>
        </>
    );
}

export default App;
