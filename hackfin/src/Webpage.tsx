import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import App from "./App.tsx";
import MapPage from "./MapPage.tsx";
import RiskA from "./RiskEvaluationPage.tsx";


function Webpage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<App />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/risk_assessment" element={<RiskA />} />
            </Routes>
        </Router>
    );
}





export default Webpage;
