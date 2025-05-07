import React from "react";
import "./css/contact.css";
function Contact() {
  return (
    <main className="form-main">
      <div className="left-form-div">
        <h2>Contact Information</h2>
        <p>Fuill up the form and our Tean will get back to you within 1 hour</p>
        <ul>
          <li>+2347039434273</li>
          <li>jerrydc56538@gmail.com</li>
          <li className="address">
            37 upper sakponba road Benin city Edo state
          </li>
        </ul>
        <section className="contact">
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
        </section>
      </div>
      <div className="right-form-div">
        <form className="first-form">
          <div>
            <label htmlFor="text">First Name*</label>
            <input
              type="text"
              name="first-name"
              required
              className="first-name"
            />
          </div>
          <div>
            <label htmlFor="text">Last Name*</label>
            <input
              type="text"
              name="last-name"
              required
              className="last-name"
            />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              required
            />
          </div>
          <div>
            <label htmlFor="number">Phone*</label>
            <input
              type="number"
              name="number"
              id="number"
              required
              className="number"
            />
          </div>
        </form>
        <form className="second-form">
          <p>What do you need me to do for you</p>
          <section className="radios-container">
            <div>
              <input type="radio" name="web-design" id="web-design" required />{" "}
              <label htmlFor="radio">Web Design</label>
            </div>
            <div>
              <input
                type="radio"
                name="web-Development"
                id="web-development"
                required
              />{" "}
              <label htmlFor="radio">Web Development</label>
            </div>
            <div>
              <input
                type="radio"
                name="logo-design"
                id="logo-design"
                required
              />{" "}
              <label htmlFor="radio">Logo Design</label>{" "}
            </div>
            <div>
              <input type="radio" name="other" required />{" "}
              <label htmlFor="radio">Other</label>
            </div>
          </section>
          <div className="textarea-container">
            <label htmlFor="textarea">Messeage*</label>
            <textarea
              name="messeage"
              id="messeage"
              placeholder="Write your messeage"
              required
            ></textarea>
          </div>
          <button id="snd-messeage">Send Messeage</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
