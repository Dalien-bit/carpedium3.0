import React from "react";
import "./styles.css";
import { FiInstagram, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div class="body">
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <FiInstagram />
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <FiLinkedin />
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <FiTwitter />
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <FiFacebook />
            </a>
          </li>
        </ul>
        <p>
          &copy;<strong>E-CELL NIT AGARTALA</strong> | All Rights Reserved
        </p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Footer;