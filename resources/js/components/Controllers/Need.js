import React from "react";
import "./Need.css";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsFillAwardFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";

const Need = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-sm-2"></div>
        <div className="col-sm-10 d-flex justify-content-center need ">
          <div className="row">
            <div className="col-sm-1" style={{ marginTop: "15px" }}>
              {" "}
              <div className="card-rounded">
                <div className="card-body">
                  <FiSearch
                    size={20}
                    className="myiconsearch"
                    id="myiconsearch"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-3" style={{ marginTop: "15px" }}>
              {" "}
              <div className="card-rounded">
                <div className="card-body">
                  <h5>What do you want?</h5>
                </div>
              </div>
            </div>
            <div
              className="col-sm-2"
              style={{ backgroundColor: "whiteSmoke !important" }}
            >
              <div className="card-rounded">
                <div className="card-body " style={{ textAlign: "center" }}>
                  <BsFillAwardFill size={16} className="myicon" id="myicon" />
                  <h5>products</h5>
                </div>
              </div>
            </div>
            <div
              className="col-sm-2"
              style={{ backgroundColor: "white!important" }}
            >
              <div className="card-rounded">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <FaUserAlt size={16} className="myicon" id="myicon" />
                  <h5>Hospitals</h5>
                </div>
              </div>
            </div>
            <div
              className="col-sm-2"
              style={{ backgroundColor: "white !important" }}
            >
              <div className="card-rounded">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <TiLocation size={20} className="myicon" id="myicon" />
                  <h5>Branch</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Need;
