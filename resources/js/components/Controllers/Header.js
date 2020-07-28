import React from "react";
import image from "../images/image.jpg";
import image2 from "../images/iamge2.jpg";
import image3 from "../images/image3.jpg";
import "./Header.css";
import { data } from "./Datas/Data";
import Card from "./Card";
import Service from "./Service";

const Header = props => {
    return (
        <div className="container">
            <div className="row ">
                <div
                    className="col-sm-8"
                    style={{ marginTop: "40px", marginBottom: "40px" }}
                >
                    <h3
                        style={{
                            fontFamily: "Mulish",
                            fontSize: "40px",
                            fontWeight: "bold"
                        }}
                    >
                        Family Protection plans
                    </h3>
                    <h5
                        className="mt4"
                        style={{ marginTop: "40px", textAlign: "justify" }}
                    >
                        When you buy insurance from us,you get more then
                        financial safety.You also get: our promise of
                        simplifying complex insurence terms and conditions,quick
                        stress free claims, instant quotoes top insurers and
                        being present for you in the toughest of times
                    </h5>
                    <div>
                        <Service />
                    </div>
                </div>

                <div className="col-sm-4" style={{ marginTop: "150px" }}>
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol class="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="2"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={image2}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={image2}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={image2}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
{
    data.map((val, ind) => {
        return (
            <Card
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                footer={val.footer}
            />
        );
    });
}
