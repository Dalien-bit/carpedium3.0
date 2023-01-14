import React from "react";
import Left from "./Left";
import Right from "./Right";
import "./styles.css";

const Event = ({ leftFirst, eventno }) => {
  return (
    <div>
      <div class="event lg:flex pt-24 justify-center items-center bg-black h-fit">
        {leftFirst ? <Left eventno={eventno} /> : <Right eventno={eventno} />}
        {leftFirst ? <Right eventno={eventno} /> : <Left eventno={eventno} />}
      </div>
    </div>
  );
};

export default Event;
