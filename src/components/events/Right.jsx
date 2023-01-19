import React from "react";
import "./styles.css";

const Right = ({ eventno }) => {
  const cl = "event-right" + eventno;
  const name = [, "IPL AUCTION", "MISTEREO", "BID DE'LEAST"];
  const desc = [
    ,
    "Welcome to the thrill of a live IPL auction! Have you ever wondered what would you do if you get a chance to build your own IPL team? If not, here is a chance to put yourself in the shoes of a bidder and build your dream IPL team in these zero-cool minutes of nerves, strategy, game theory and gut. If you love cricket and can mix wit with passion into bidding strategy, then this event is a must-try shot for you.",

    "As the world expects Recession 2023 and milieu demands awareness, E-CELL NIT Agartala shall convenes its first event Mistereo - Case Study Competition by collaborating with the existing North eastern Startups of India and bringing forth the problems a startup usually faces.",

    "Business, MUN, stock-market and auction simulations. And for the first time we, E-CELL NIT Agartala introduce the Government Tendering simulation. Tendering usually refers to the process whereby governments and financial institutions invite bids for large projects that must be submitted within a finite deadline where the lowest quotation wins.",
  ];
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
            
          </div>
          <h1 class="event-right-title text-5xl mb-6 font-extrabold pl-5 sm:pl-0 text-white ">
            {name[eventno]}
          </h1>

          <div>
            <p class="event-right-desc md:w-11/12 text-white mb-5 pl-5 pr-5 sm:pl-0 sm:pr-0 text-justify">
              {desc[eventno]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
