import React, { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import "./styles.css";

const Event = ({ leftFirst, eventno }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  if (isMobile) {
    return (
      <div>
        <Right eventno={eventno} />
        <Left eventno={eventno} />
      </div>
    );
  }
  return (
    <div>
      <div class="event lg:flex pt-24 gap-12 justify-center items-center bg-black h-fit">
        {leftFirst ? <Left eventno={eventno} /> : <Right eventno={eventno} />}
        {leftFirst ? <Right eventno={eventno} /> : <Left eventno={eventno} />}
      </div>
    </div>
  );
};

export default Event;
