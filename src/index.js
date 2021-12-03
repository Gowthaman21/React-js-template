import React from "react";
import ReactDOM from "react-dom";
import RoutePages from "./navigations/RoutePages";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
    <React.StrictMode>
        <RoutePages />
    </React.StrictMode>,
    document.getElementById("root")
);
