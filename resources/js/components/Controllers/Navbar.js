import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { BsFillPersonFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <h1
                            style={{
                                fontFamily: "Mulish",
                                color: "black",
                                fontWeight: "bolder",
                                letterSpacing: "-3px"
                            }}
                        >
                            Beatnik
                        </h1>
                    </NavLink>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    activeClassName="menu_actives"
                                    exact
                                    to="/"
                                >
                                    <h6>BRAND</h6>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="menu_actives"
                                    to="#"
                                >
                                    <h6>NYKAA FASHION</h6>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="menu_actives"
                                    to="#"
                                >
                                    <h6>BEAUTY ADVICE</h6>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="menu_actives"
                                    to="#"
                                >
                                    <h6>NYKAA NETWORK</h6>
                                </NavLink>
                            </li>
                        </ul>
                        <form
                            className="d-flex"
                            style={{ marginRight: "45px" }}
                        >
                            <input
                                className="form-control mr-2"
                                type="search"
                                placeholder="&#x1F50D; Search for Products,brands etc."
                                aria-label="Search"
                                style={{ width: "300px" }}
                            />
                        </form>

                        <div
                            className="nav-item "
                            style={{ marginRight: "45px" }}
                        >
                            <NavLink
                                className="nav-link"
                                activeClassName="menu_actives"
                                to="#"
                            >
                                <BsFillPersonFill /> Account
                            </NavLink>
                        </div>

                        <div
                            className="nav-item "
                            style={{ marginRight: "15px" }}
                        >
                            <NavLink
                                className="nav-link"
                                activeClassName="menu_actives"
                                to="#"
                            >
                                <AiFillShopping size={30} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
