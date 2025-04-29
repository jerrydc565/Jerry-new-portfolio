import React from "react";
import Logo from "../assets/img/pngwing.com (14).png"
import '../App.css'
import { Link } from "react-router-dom";
function Header() {
  return (
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
      </nav>
    </header>
  );
}

export default Header;
