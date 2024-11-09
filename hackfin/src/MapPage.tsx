//@ts-ignore
import { GOOGLE_API } from "../api.js";

import {
    /*AdvancedMarker,*/ APIProvider,
    Map,
} from "@vis.gl/react-google-maps";

function MapPage() {
    return (
        <>
            <APIProvider apiKey={GOOGLE_API}>
                <Map
                    defaultZoom={13}
                    defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
                ></Map>
            </APIProvider>
        </>
    );
}

export default MapPage;
