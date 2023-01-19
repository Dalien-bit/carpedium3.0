import React from "react";
import "./styles.css";
import logo from "./carpedium-logo-hd.png";
// import bgvideo from "./bg-video.mp4";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      {/* <video className="vid" src={bgvideo} autoPlay={true}></video> */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="home-content-background">
              {/* <div class="text-1">
                Entreprenurship Cell, NIT Agartala brings to you
              </div> */}
              <img className="home-carpedium-img" src={logo} alt="" />
              {/* <div class="text-2">Carpe Diem 3.0</div> */}

              <button className="shadow__btn">Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <script src="script.js"></script>
    </div>
  );
};

export default Landing;
