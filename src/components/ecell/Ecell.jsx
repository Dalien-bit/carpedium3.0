import React from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

const Ecell = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen ecell flex flex-col justify-center items-center">
      <div className="content-background ">
        <div className="mb-10 p-4 b-2 rounded">
          <p className="quote-text">Are you ready?</p>
          <p className="quote-text2">Screw it lets do it!</p>
        </div>

        <div className="flex flex-row justify-center items-spacebetween gap-10">
          <button className="ecell-button">
            <p>Ecell - NITA</p>
          </button>
          <button
            className="ecell-button"
            onClick={(value) => {
              navigate("carpediem");
            }}
          >
            <p>Carpediem</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ecell;
