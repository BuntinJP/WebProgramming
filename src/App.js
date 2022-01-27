import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { React } from "react";

const containerStyle = {
    width: "100%",
    height: "50vh",
};

const center = {
    lat: 35.537509,
    lng: 139.802322,
};
const positionJyorikuti = {
    lat: 35.476607,
    lng: 139.798191,
};
const positionYuigahama = {
    lat: 35.310011,
    lng: 139.544386,
};

const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyDqSf-2YnoG-pK3fhapRfS1SpQ09v9C6rg">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>
                <Marker
                    position={positionJyorikuti}
                    label={"呉爾羅第一上陸地"}
                />
                <Marker
                    position={positionYuigahama}
                    label={"呉爾羅第二上陸地"}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
