import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";
import HeroSection from "./component/HeroSection";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact-me" element={<Contact />} />
          
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
