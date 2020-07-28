import React, { Children } from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Savings from "./Products/Savings";
import EarlyCash from "./Products/EarlyCash";
import Chil from "./Products/Chil";
import Sidebar from "./Sidebar";
import Details from "./Details";
export const Products = () => {
  return (
    <div className="container product">
      <div className="myproduct p-4 mb-4">
        <h1
          style={{
            marginTop: "40px",
            marginBottom: "60px",
            fontFamily: "Mulish",
            fontWeight: "lighter",
            fontSize: "30px",
          }}
        >
          Our{" "}
          <strong style={{ fontWeight: "1000", color: "black" }}>
            Products
          </strong>
        </h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="container" style={{ padding: "50px" }}>
        <div className="row" id="test" style={{ padding: "30px" }}>
          <div className="col-sm-3">
            <Sidebar />
          </div>

          <div className="col-sm-9">
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
};
