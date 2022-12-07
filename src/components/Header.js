import React from "react";
import logo from "../assets/1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-bg-color container-fluid d-flex justify-content-center shadow">
          <img
            src={logo}
            className="d-block mb-2 mt-2 w-25 me-auto"
            alt="logo"
          />
          {/* <div className=""><i class="bi bi-gear-fill" style={{"font-size": "30px"}}></i></div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
