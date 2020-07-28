import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { routes } from "./Route";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div
      className="sidebar pt-4 pb-4"
      style={{ backgroundColor: "purple", textAlign: "center" }}
    >
      <nav
        style={{ listStyleType: "none", padding: "40px" }}
        className="navBar"
      >
        <li>
          <NavLink
            className="nav-link active"
            activeClassName="menu_active"
            id="menu_active"
            to="/savings"
            style={{ color: "white", textDecoration: "None" }}
          >
            Savings
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link active"
            to="/earlycash"
            id="menu_active"
            activeClassName="menu_active"
            style={{ color: "white", textDecoration: "None" }}
          >
            Early Cash
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link active"
            to="/children"
            activeClassName="menu_active"
            id="menu_active"
            style={{ color: "white", textDecoration: "None" }}
          >
            Children
          </NavLink>
        </li>
      </nav>
    </div>
  );
};

export default Sidebar;
