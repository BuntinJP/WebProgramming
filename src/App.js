import { GoogleMap, InfoWindow, LoadScript } from "@react-google-maps/api";
import React, { useState } from "react";
import Sign from "./sign";
import Header from "./Header";
import "bulma/css/bulma.css";
import ModalSecond from "./ModalSecond";

const containerStyle = {
    width: "100%",
    height: "70vh",
};

const center = {
    lat: 36.18691629165214,
    lng: 139.7157247096371,
};
const pTPotision = [
    { lat: 36.17534116079143, lng: 139.72608995903704 },
    { lat: 36.197162891006734, lng: 139.7124847311575 },
    { lat: 36.1968831637104, lng: 139.7018258585636 },
    { lat: 36.1945054413408, lng: 139.7053788160949 },
    { lat: 35.66243299886032, lng: 139.63430649866487 },
];
const pTLabel = [
    "ホテル7",
    "ホテルエスハイド",
    "ホテル山水",
    "大和プラザ",
    "日本大学文理学部",
];
const divStyle = {
    background: "white",
    fontSize: 8.0,
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
                        zoom={14}>
                        <InfoWindow position={pTPotision[0]}>
                            <div style={divStyle}>
                                <h1>{pTLabel[0]}</h1>
                            </div>
                        </InfoWindow>
                        <InfoWindow position={pTPotision[1]}>
                            <div style={divStyle}>
                                <h1>{pTLabel[1]}</h1>
                            </div>
                        </InfoWindow>
                        <InfoWindow position={pTPotision[2]}>
                            <div style={divStyle}>
                                <h1>{pTLabel[2]}</h1>
                            </div>
                        </InfoWindow>
                        <InfoWindow position={pTPotision[3]}>
                            <div style={divStyle}>
                                <h1>{pTLabel[3]}</h1>
                            </div>
                        </InfoWindow>
                    </GoogleMap>
                </LoadScript>
            )}
            {mapNum == 2 && (
                <LoadScript googleMapsApiKey="AIzaSyDqSf-2YnoG-pK3fhapRfS1SpQ09v9C6rg">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={pTPotision[4]}
                        zoom={13}>
                        <InfoWindow position={pTPotision[4]}>
                            <div style={divStyle}>
                                <h1>{pTLabel[4]}</h1>
                            </div>
                        </InfoWindow>{" "}
                    </GoogleMap>
                </LoadScript>
            )}
            <Sign />
        </>
    );
};

export default App;
