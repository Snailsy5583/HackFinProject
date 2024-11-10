import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import App from "./App.tsx";
import MapPage from "./MapPage.tsx";
import RiskA from "./Riskassesment.tsx";


function Webpage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<App />} />
                <Route path="/Map" element={<MapPage />} />
                <Route path="/RiskAssessment" element={<RiskA />} />
            </Routes>
        </Router>
    );
}





export default Webpage;
