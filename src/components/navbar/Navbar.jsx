import React from "react";
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
                }}>
                E-Summit<span>'23</span>
              </button>
            ) : (
              <div>
                {" "}
                <img src={logo} className="logo-ecell" alt="" />
              </div>
            )}
          </div>
          <ul className="menu hidden sm:flex">
            {navigations.map((value, index) => {
              return (
                <li key={index}>
                  {" "}
                  <p
                    className="menu-btn"
                    onClick={() => {
                      navigateTo(value);
                    }}>
                    {value.toUpperCase()}
                  </p>{" "}
                </li>
              );
            })}
          </ul>

          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

const navigateTo = (place) => {
  switch (place) {
    case "about": {
      window.scrollTo({ top: window.innerHeight - 100 });
      break;
    }
    case "events": {
      window.scrollTo({ top: window.innerHeight });
      break;
    }
    case "contact": {
      window.scrollTo(0, document.body.scrollHeight);
      break;
    }
    case "speakers": {
      window.scrollTo(0, window.innerHeight * 2 + 500);
      break;
    }
    case "sponsors": {
      break;
    }
    case "home": {
      window.scrollTo({ top: 0 });
      break;
    }

    default:
      break;
  }
};

export default Navbar;
