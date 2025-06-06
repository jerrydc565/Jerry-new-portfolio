import React from "react";
import Header from "../component/Header";
import ProfileImg from "../assets/img/pro3.png";
import "./css/About.css"
import AnotherTyping from "../component/AnotherTyping";

function About() {
  return (
    <>
  
      <section className="main-containers">
        <div className="left-container">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="right-container">
          <h1>
            About <span className="me">Me</span>
          </h1>
          <h3> <AnotherTyping/></h3>
          <p>
            Hello, my name is Jerry, i am a third year student in the university
            of benin, i live in Nigeria, Benin city. I am an abicious person and
            i have many goals. I worked in many feilds until i found my
            speciality, which is programming and designing, i have a talent of
            design, i am a skiled designer. I worked alone in my home. I won the
            hearts of many clients. In addition, i have certificates in graphics
            design and programming from Aptec educational center
          </p>
          <button> Book a Call</button>
        </div>
      </section>
    </>
  );
}

export default About;
