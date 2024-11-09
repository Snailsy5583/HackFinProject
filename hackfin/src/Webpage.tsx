import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import App from "./App.tsx";
import MapPage from "./MapPage.tsx";

function Webpage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<App />} />
                <Route path="/Map" element={<MapPage />} />
            </Routes>
        </Router>
    );
}

export default Webpage;
