import React from "react";
import "./styles.css";

const Right = ({ eventno }) => {
  const cl = "event-right" + eventno;
  const numberImage = {
    1: "https://uploads-ssl.webflow.com/5da865df3e5488677ddc8818/5e78e1a64d5104c5a1fb75b6_1.svg",
    2: "https://uploads-ssl.webflow.com/5da865df3e5488677ddc8818/5e78e1a7cd6d7c0684d786fb_2.svg",
    3: "https://uploads-ssl.webflow.com/5da865df3e5488677ddc8818/5e78e1a62f8ca06ea23fab1d_3.svg",
  };
  return (
    <div>
      <div class={`${cl} sm:max-w-sm max-w-lg m-auto  `}>
        <img src={numberImage[eventno]} alt="" class="mb-3 pl-5 sm:pl-0 " />
        <div class="event-right-text-box">
          <div class="event-right-subtitle mb-3 text-white rounded pl-5 sm:pl-0">
            Sample text xyzzzz
          </div>
          <h1 class="event-right-title text-5xl mb-6 font-extrabold pl-5 sm:pl-0 text-white ">
            IPL AUCTION
          </h1>

          <div>
            <p class="event-right-desc md:w-11/12 text-white mb-5 pl-5 pr-5 sm:pl-0 sm:pr-0 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              neque dicta error aperiam magnam, voluptates obcaecati et! Maiores
              exercitationem nesciunt libero. Hic aliquid illo, quae quia esse
              mollitia beatae nobis doloremque impedit fugit illum qui animi
              delectus, dolor ea harum dignissimos sunt dicta laudantium?
              Provident sint dicta et totam odio ipsum asperiores delectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
