import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-md">
      <div className="navbar-container container-fluid">
        <div className="nav-div-with-logo">
          <NavLink to="/" className="navbar-brand">
            <img className="navbar-logo" src="images/logo.jpeg" />
          </NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-menu-icon icon fas fa-light fa-bars fa-1x"> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="my-nav-link">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
                Home
              </NavLink>
            </li>
            <li className="my-nav-link">
              <NavLink to="/team" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
                The Team
              </NavLink>
            </li>
            <li className="my-nav-link">
              <a className="nav-link" href="mailto:btcg@brown.edu">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
