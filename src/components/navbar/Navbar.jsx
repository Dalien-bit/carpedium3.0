import React, { useState } from "react";
import "./styles.css";
import logo from "./ecell-logo.png";

const navigations = [
  "home",
  "about",
  "events",
  "speakers",
  "sponsors",
  "contact",
];

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            {window.innerWidth > 1105 ? (
              <button
                type="button"
                className="main-logo"
                onClick={() => {
                  navigateTo("home");
                }}
              >
                E-Summit<span>'23</span>
              </button>
            ) : (
              <div>
                {" "}
                <img src={logo} className="logo-ecell" alt="" />
              </div>
            )}
          </div>
          <ul className={`menu sm:flex justify-center items-center`}>
            {navigations.map((value, index) => {
              return (
                <li key={index}>
                  {" "}
                  <p
                    className="menu-btn"
                    onClick={() => {
                      navigateTo(value);
                    }}
                  >
                    {value.toUpperCase()}
                  </p>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const navigateTo = (place) => {
  console.log("cliceked");
  let scroll_to = document.getElementById(place).offsetTop;
  window.scrollTo({ behavior: "smooth", top: scroll_to });
};

export default Navbar;
