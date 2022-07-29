import React, { Fragment, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="dropdown">
        <button className="dropdown-button">Category</button>
        <div className="dropdown-content">
          <Link to="/" className="Link">
            India
          </Link>
          <Link to="/global" className="Link">
            Global
          </Link>
        </div>
      </div>
      <h3>Covid status</h3>
    </div>
  ); 
};

export default Header;
