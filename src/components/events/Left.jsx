import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Left = ({ eventno }) => {
  const navigate = useNavigate();
  const cl = "event-left" + eventno;
  const clb = "event-left-box" + eventno;
  const name = [, "IPL AUCTION", "MISTEREO", "BID DE'LEAST"];
  const date = [, "27th January", "28th January", "29th January"];
  const size = [, "5 members", "2-4 members per team", "2-4 members per team"];
  return (
    <div>
      <div class={`course-card ${cl} max-w-xs m-auto w-full`}>
        <div
          class={`${clb} relative w-full mb-9 m-auto  absolute max-w-lg rounded-md text-white bg-black`}
        >
          <a
            href="#"
            class="course-card-button pt-4 pb-3 pr-2 pl-8 w-full box-border inline-block"
          >
            <div class="event-left-inside mb-3">
              <div class="event-left-inside-info">
                <div class="event-left-data">
                  <h3 class="event-left-heading mb-4">
                    <strong class="text-xl"> {name[eventno]}:</strong>
                  </h3>

                  <div class="event-left-date text-xl">
                    {date[eventno]}
                    <div class="op-50"></div>
                  </div>
                  <div class="event-left-team text-lg">
                    Team Size: {size[eventno]}<div class="op-50"></div>
                  </div>
                  <div class="course-card-duration">
                    <div class="op-50"></div>
                  </div>
                </div>
              </div>
              <div class="event-left-image">
                <div class="event-left-inside-image w-10">
                  <img src="" alt="" width="100vw/" />
                </div>
              </div>
            </div>

            <div>
              <button
                class="learn-more mb-3"
                onClick={() => {
                  navigate(`/event${eventno}`);
                }}
              >
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">EVENT DETAILS</span>
              </button>
              <button class="learn-more mb-3">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text ">REGISTER</span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
