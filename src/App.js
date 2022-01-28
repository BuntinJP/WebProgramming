import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import Sign from "./sign";
import Header from "./Header";
import "bulma/css/bulma.css";
import ModalSecond from "./ModalSecond";

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

function Form(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { mapNumber } = event.target.elements;
        props.onFormSubmit(mapNumber.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <div className="select is-fullwidth">
                            <select name="mapNumber" defaultValue="1">
                                <option value="1">バイト用</option>

                                <option value="2">大学用</option>
                            </select>
                        </div>
                    </div>

                    <div className="control">
                        <button type="submit" className="button is-dark">
                            OGE
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const App = () => {
    const [mapNum, setMapNum] = useState(1);
    const updateMapNumber = (props) => {
        setMapNum(props);
    };
    return (
        <>
            <Header />
            <ModalSecond />
            <section className="section">
                <div className="container">
                    <Form onFormSubmit={updateMapNumber} />
                </div>
            </section>
            {mapNum == 1 && (
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
            )}
            {mapNum == 2 && (
                <LoadScript googleMapsApiKey="AIzaSyDqSf-2YnoG-pK3fhapRfS1SpQ09v9C6rg">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}></GoogleMap>
                </LoadScript>
            )}
            <Sign />
        </>
    );
};

export default App;
