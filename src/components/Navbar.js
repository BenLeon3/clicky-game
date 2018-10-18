import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Counter from "../components/Counter/Counter.js";

const Navbar = () => (
  <ul className="navbar navbar-fixed-top">
    <div className="container-fluid">
      <h2 className="brand">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
        Clicky Game
      </Link>
    </h2>
    <h2 className="navbar-brand h2">Click an image to begin!</h2>
    
    <h2 className="nav-item">
      <span class="navbar-brand mb-0 h1"><Counter /></span>
    </h2>
    </div>
  </ul>
);



export default Navbar;
