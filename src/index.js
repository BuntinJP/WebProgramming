import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Sign from "./sign";
import Header from "./Header";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
ReactDOM.render(<Sign />, document.querySelector("#signature"));
ReactDOM.render(<Header />, document.querySelector("#Header"));
reportWebVitals();
