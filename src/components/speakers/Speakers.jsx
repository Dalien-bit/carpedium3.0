import React from "react";
import "./styles.css";
import speaker from "./anubhav-dubey.png";

const Speakers = () => {
  return (
    <div className="bg-black w-full speakers-background h-1/2 lg:flex lg:flex-row justify-center items-center lg:px-64 py-20 mb-20">
      <div class="card1">
        <img class="speaker-image" src={speaker} alt="" />
        <p className="text-white flex flex-row justify-center pt-3 text-xl">
          Anubhav Dubey
        </p>
      </div>
      <div class="card1">
        <img class="speaker-image" src={speaker} alt="" />
        <p className="text-white flex flex-row justify-center pt-3 text-xl">
          Anubhav Dubey
        </p>
      </div>
      <div class="card1">
        <img class="speaker-image" src={speaker} alt="" />
        <p className="text-white flex flex-row justify-center pt-3 text-xl">
          Anubhav Dubey
        </p>
      </div>
      <div class="card1">
        <img class="speaker-image" src={speaker} alt="" />
        <p className="text-white flex flex-row justify-center pt-3 text-xl">
          Anubhav Dubey
        </p>
      </div>
    </div>
  );
};

export default Speakers;
