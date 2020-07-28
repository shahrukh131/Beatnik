import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Controllers/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Controllers/Header";
import Need from "./Controllers/Need";
import Information from "./Controllers/Information";
import { Products } from "./Controllers/Products";
import Image from "./Controllers/Image";

function App() {
    return (
        <>
            <div className="container">
                <Router>
                    <Navbar />
                </Router>
            </div>
            <div className="container myheader">
                <Header />
            </div>
            <Need />
            <div className="info">
                <Information />
            </div>
            <div className="products">
                <Router>
                    <Products />
                </Router>
            </div>
            <Image />
        </>
    );
}

export default App;
