import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Example.css";

function Example() {
    return (
        <div className="">
            <App />
        </div>
    );
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
