import React from "react";
import "./styles.css";
import { about } from "../../content/content";

const About = () => {
  return (
    <div className="bg-black p-5" id="about">
      <div className="">
        {" "}
        <p>ss</p>
      </div>
      <div className="card flex m-auto lg:w-1/2 lg:h-1/2">
        <div className="card2">
          <h1 className="text-white pl-10 text-5xl pt-5">About Carpediem</h1>
          <p className="text-white px-14 py-12">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
