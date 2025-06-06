import React, { useState } from "react";
import Logo from "../assets/img/pngwing.com (14).png";
import "../App.css";
import { Link } from "react-router-dom";
import menuBar from "../assets/img/menu.png";

function Header() {
  const [nav, setNav] = useState("Hide");

  const handleModeChange = () => {
    if (nav === "Hide") {
      setNav("Show");
    } else {
      setNav("Hide");
    }
  };

  return (
    <>
      <div
        style={{
          display: nav === "Hide" ? "none" : "block",
        }}
        className="mobile-nav-links"
      >
        <ul className="nav-links">
          <Link to={"/"}>
            <li className="li">Home</li>
          </Link>
          <Link to={"/about-us"}>
            <li className="li">About us</li>
          </Link>
          <Link to={"/services"}>
            <li className="li">Services</li>
          </Link>
          <Link to={"/gallary"}>
            {" "}
            <li className="li">Gallary</li>
          </Link>
          <Link to={"/contact-me"}>
            <li className="li">Contact me</li>
          </Link>
        </ul>
        <button style={{width:"100%"}} onClick={handleModeChange} id="closedbtn">Closed Menu</button>
      </div>
      <header className="header">
        <img src={Logo} alt="" width={"50px"} />
        <nav>
          <ul className="nav-links">
            <Link to={"/"}>
              <li className="li">Home</li>
            </Link>
            <Link to={"/about-us"}>
              <li className="li">About us</li>
            </Link>
            <Link to={"/services"}>
              <li className="li">Services</li>
            </Link>
            <Link to={"/gallary"}>
              {" "}
              <li className="li">Gallary</li>
            </Link>
            <Link to={"/contact-me"}>
              <li className="li">Contact me</li>
            </Link>
          </ul>
          <img src={menuBar} alt="" onClick={handleModeChange} width={"40px"} className="menu-bar"/>
        </nav>
      </header>
    </>
  );
}

export default Header;
