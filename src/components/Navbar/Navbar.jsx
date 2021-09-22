import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/sports">Sports</Link>
      <a href="#contact">Politics</a>
      <a href="#about">Education</a>
    </div>
  );
};

export default Navbar;
