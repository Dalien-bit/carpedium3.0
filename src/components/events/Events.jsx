import React from "react";
import Event from "./Event";
import "./styles.css";

const Events = () => {
  return (
    <div className="bg-black" id="events">
      <Event leftFirst={true} eventno={"1"} />
      <Event leftFirst={false} eventno={"2"} />
      <Event leftFirst={true} eventno={"3"} />
    </div>
  );
};

export default Events;
