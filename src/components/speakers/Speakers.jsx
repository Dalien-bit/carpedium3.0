import React from "react";
import "./styles.css";
import speaker1 from "./images/Aman_dhatarwal.png";
import speaker2 from "./images/Anubhav_Dubey.png";
import speaker3 from "./images/Ishan_sharma.png";
import speaker4 from "./images/Yasg_garg.png";
import speaker5 from "./images/Ritendebnath.png";
import speaker6 from "./images/Bamboo_wala.png";

const Speakers = () => {
  return (
    <div class="speakersec">
      <h1 className="speakersh1"> OUR SPEAKERS</h1>
      <div class="speakerscontainer">
        <div>
          <div class="speakerscard">
            <img class="speaker-image" src={speaker1} alt="/" />
            <div class="details">
              <div class="sicon">
                <a href="https://www.instagram.com/dhattarwalaman/?hl=en">
                  <i class="fa-brands fa-instagram fa-1x"></i>
                </a>
                <a href="https://twitter.com/AmanDhattarwal">
                  <i class="fa-brands fa-twitter fa-1x"></i>
                </a>
                <a href="https://www.linkedin.com/in/dhattarwalaman/">
                  <i class="fa-brands fa-linkedin-in fa-1x"></i>
                </a>
                <a href="https://www.youtube.com/@AmanDhattarwal">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div class="info">
                <h3>
                  Aman Dhattarwal
                  <br />
                  <span>Founder Apna College</span>
                </h3>
              </div>
            </div>
          </div>
          <div class="speakerscard">
            <img class="speaker-image" src={speaker4} alt="/" />
            <div class="details">
              <div class="sicon">
                <a href="https://www.instagram.com/yashgeez/?hl=en">
                  <i class="fa-brands fa-instagram fa-1x"></i>
                </a>
                <a href="https://twitter.com/yashgeez">
                  <i class="fa-brands fa-twitter fa-1x"></i>
                </a>
                <a href="https://www.linkedin.com/in/yashgargdl/">
                  <i class="fa-brands fa-linkedin-in fa-1x"></i>
                </a>
                <a href="https://www.youtube.com/@YashGargOfficial">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div class="info">
                <h3>
                  Yash Garg
                  <br />
                  <span>Founder Konsa College</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="speakerscard">
            <img class="speaker-image" src={speaker3} alt="" />
            <div class="details">
              <div class="sicon">
                <a href="https://www.instagram.com/ishansharma7390/?hl=en">
                  <i class="fa-brands fa-instagram fa-1x"></i>
                </a>
                <a href="https://twitter.com/Ishansharma7390">
                  <i class="fa-brands fa-twitter fa-1x"></i>
                </a>
                <a href="https://www.linkedin.com/in/ishansharma7390/">
                  <i class="fa-brands fa-linkedin-in fa-1x"></i>
                </a>
                <a href="https://www.youtube.com/@IshanSharma7390">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div class="info">
                <h3>
                  Ishan Sharma
                  <br />
                  <span>Co-Founder MarkitUp</span>
                </h3>
              </div>
            </div>
          </div>
          <div class="speakerscard">
            <img class="speaker-image" src={speaker5} alt="" />
            <div class="details">
              <div class="sicon">
                <a href="https://www.instagram.com/thehustleguy/?hl=en">
                  <i class="fa-brands fa-instagram fa-1x"></i>
                </a>
                <a href="https://twitter.com/ritendn">
                  <i class="fa-brands fa-twitter fa-1x"></i>
                </a>
                <a href="https://www.linkedin.com/in/ritendebnath/">
                  <i class="fa-brands fa-linkedin-in fa-1x"></i>
                </a>
                <a href="https://www.youtube.com/@ritendn/featured">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div class="info">
                <h3>
                  Riten Debnath
                  <br />
                  <span>Founder Fueler.io</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="speakerscard">
            <img class="speaker-image" src={speaker2} alt="" />
            <div class="details">
              <div class="sicon">
                <a href="https://www.instagram.com/anubhavdubey1/?hl=en">
                  <i class="fa-brands fa-instagram fa-1x"></i>
                </a>
                <a href="https://twitter.com/tbhAnubhav">
                  <i class="fa-brands fa-twitter fa-1x"></i>
                </a>
                <a href="https://www.linkedin.com/in/anubhavdubey/">
                  <i class="fa-brands fa-linkedin-in fa-1x"></i>
                </a>
                <a href="https://www.youtube.com/@ChaiSuttaBar">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div class="info">
                <h3>
                  Anubhab Dubey
                  <br />
                  <span>Founder Chai Sutta Bar</span>
                </h3>
              </div>
            </div>
          </div>
          <div class="speakerscard">
            <img class="speaker-image" src={speaker6} alt="" />
            <div class="details">
              <div class="sicon">
                <a href="https://www.instagram.com/swattik.bw/?hl=en">
                  <i class="fa-brands fa-instagram fa-1x"></i>
                </a>

                <a href="https://www.linkedin.com/in/swattik/">
                  <i class="fa-brands fa-linkedin-in fa-1x"></i>
                </a>
              </div>
              <div class="info">
                <h3>
                  Swattik Chakraborty
                  <br />
                  <span>Founder Bamboowala</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
