import React from "react";
import FaqComp from "./FaqComp";

function Faq() {
  return (
    <div className="w-full flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center  lg:m-auto pb-52 lg:w-1/2">
        <FaqComp
          className=""
          quesnum="1"
          ques="Who can take part in all the events conducted by E-Cell?"
          ans="All the students from NIT Agartala and other colleges of Tripura of any branch and year and regardless of degree they are pursuing, can participate in Carpe Diem events.
"
        />
        <FaqComp
          quesnum="2"
          ques="Where will the events take place?
"
          ans="IPL AUCTION, MISTEREO, and speaker sessions will be held in Visvesvaraya Auditorium while Bid 'd least will be conducted online.
"
        />
        <FaqComp
          quesnum="3"
          ques="Can  languages other than English be used in Mistereo Panel discussion?
"
          ans="While English is preferred, students may use other languages such as Hindi, if they prefer."
        />
        <FaqComp
          quesnum="4"
          ques="Can students participate individually in IPL AUCTION?"
          ans="Yes, students can participate individually and will be grouped by the organizing team as a team."
        />
        <FaqComp
          quesnum="5"
          ques="Can students register each event independently ?"
          ans="Yes, students can choose to participate in one or all the events, registering independently for each event.
"
        />
      </div>
    </div>
  );
}

export default Faq;
