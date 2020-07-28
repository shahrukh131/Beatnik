import React from "react";
import image2 from "../images/iamge2.jpg";
import "./Card.css";
const Card = props => {
    return (
        <div className="d-flex justify-content-around">
            <div className="card rounded " id="card">
                <div
                    className="card-header w-120"
                    style={{ fontSize: "9px", textAlign: "center" }}
                >
                    {props.title}
                </div>
                <div className="card-body">
                    <img
                        src={props.imgsrc}
                        className="card-img-top"
                        alt="..."
                    />
                </div>
                <div className="card-footer " style={{ fontWeight: "500" }}>
                    {props.footer}
                </div>
            </div>
        </div>
    );
};

export default Card;
