import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import App from "./App.tsx";
// @ts-ignore
import MapPage from "./MapPage.jsx";
import RiskA from "./RiskEvaluationPage.tsx";
//@ts-ignore

function Webpage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<App />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/risk_assessment" element={<RiskA />} />
            </Routes>
        </Router>
    );
}

export default Webpage;
