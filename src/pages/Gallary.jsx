import React from "react";
import Project1 from "../assets/img/ScreenShot Tool -20250428200140.png";
import Project2 from "../assets/img/ScreenShot Tool -20250428200411.png";
import Project3 from "../assets/img/ScreenShot Tool -20250428201428.png";
import Project4 from "../assets/img/kq2vdzxiqeb3lxcd5vdl.webp";
import Project5 from "../assets/img/q7yvs5yvgchjhjs2znay.webp";
import Project6 from "../assets/img/todo3.jpg";
import "./css/Gallary.css";
function Gallary() {
  return (
    <main className="ful-cont">
      <h1>Our Latest Project</h1>
      <div className="all-project">
        <a href="https://cars-rentals-by-jerry.netlify.app/" target="blank">
          <img src={Project1} alt="" className="project" />
        </a>{" "}
        <a href="https://carpolis-by-jerry.netlify.app/" target="blank">
          {" "}
          <img src={Project2} alt="" className="project" />
        </a>{" "}
        <a href="https://calculator-by-jerry1.netlify.app/" target="blank">
          {" "}
          <img src={Project3} alt="" className="project" />
        </a>{" "}
        <img src={Project4} alt="" className="project" />
        <img src={Project5} alt="" className="project" />
        <img src={Project6} alt="" className="project" />
      </div>
    </main>
  );
}

export default Gallary;
