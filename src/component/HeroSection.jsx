import React from "react";
import "./HeroSection.css";
import ProfileImg from "../assets/img/pro3.png";
import Typing from "./Typing";
import FaceBook from "../assets/img/facebook.png";
import Instagram from "../assets/img/instagram.png";
import Tiktok from "../assets/img/tiktok.png";
import Whatsapp from "../assets/img/whatsapp_2504957.png";

 function HeroSection() {
  return (
    <section className="main-container">
      <div className="text-container">
        <h3>Hello, it's Me </h3>
        <h1>Programmer Jerry</h1>
        <h3 id="my-name">
          I'm a{" "}
          <span>
            <Typing />
          </span>
        </h3>
        <p>
          Please hold your breath as we dive into a world full of creativity
          with programmer jerry
        </p>
        <div className="contact">
          <a href="https://www.facebook.com/share/18VYZVzFsm/?mibextid=wwXIfr">
            <button className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </button>
          </a>
          <a href="https://www.instagram.com/joyehigiator466/?utm_source=ig_web_button_share_sheet">
            <button className="icon">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </a>
          <button className="icon">
            <i className="fa-brands fa-whatsapp"></i>
          </button>
          <a href="https://www.tiktok.com/@jerry__dc?is_from_webapp=1&sender_device=pc">
            <button className="icon">
              <i className="fa-brands fa-tiktok"></i>
            </button>
          </a>
        </div>

        <button className="button-section">Book a call</button>
      </div>
      <div className="img-container">
        <img src={ProfileImg} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
