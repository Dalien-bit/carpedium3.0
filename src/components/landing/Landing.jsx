import React from "react";
import "./styles.css";
import logo from "./carpedium-logo-hd.png";
import bgvideo from "./bg-video.mp4";

const Landing = () => {
  return (
    <div className="landing">
      <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
      </div>
      <nav class="navbar">
        <div class="max-width">
          <div class="logo">
            <a href="#">
              E-Summit<span>'23</span>
            </a>
          </div>
          <ul class="menu">
            <li>
              <a href="#home" class="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" class="menu-btn">
                Events
              </a>
            </li>
            <li>
              <a href="#skills" class="menu-btn">
                Speakers
              </a>
            </li>
            <li>
              <a href="#teams" class="menu-btn">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#contact" class="menu-btn">
                Contact Us
              </a>
            </li>
          </ul>
          <div class="menu-btn">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
        <video className="vid" src={bgvideo} autoPlay={true}></video>
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div className="home-content-background">
              {/* <div class="text-1">
                Entreprenurship Cell, NIT Agartala brings to you
              </div> */}
              <img className="home-carpedium-img" src={logo} alt="" />
              {/* <div class="text-2">Carpe Diem 3.0</div> */}

              <button class="shadow__btn">Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <script src="script.js"></script>
    </div>
  );
};

export default Landing;
