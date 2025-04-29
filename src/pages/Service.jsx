import React from 'react'
import Graphic from "../assets/img/vector.png"
import Programmer from "../assets/img/programmer.png"
import webDev from "../assets/img/website.png"
import webDes from "../assets/img/web-design.png"
import "./css/Service.css"
function Service() {
  return (
    <main className='full-section'>
      <h1> Our Services</h1>
      <section className='cards-section'>
        <div className='div1'>
          <img src={Programmer} alt="" />
          <h3>Pragramming Language</h3>
          <p>15 Projects</p>
        </div>
        <div className='div2'>
          <img src={webDes} alt="" />
          <h3>Ui/Ux Design</h3>
          <p>22 Projects</p>
        </div>
        <div className='div3'>
          <img src={webDev} alt="" />
          <h3> Web Development</h3>
          <p>10 Projects</p>
        </div>
        <div className='div4'>
          <img src={Graphic} alt="" />
          <h3> Graphics Design</h3>
          <p> 53 Projects</p>
        </div>
      </section>
      <div></div>
    </main>
  );
}

export default Service
