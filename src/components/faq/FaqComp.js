import React from "react";
import "./FaqComp.css";
function FaqComp(props) {
  const [active, setActive] = React.useState(false);

  return (
    <div
      className="m-4 p-2 cursor-pointer rounded-md shadow-2xl hover:bg-white w-4/5  transition  delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... 
      ease-in bg-white dark:bg-sky-200"
      onClick={() => {
        setActive(!active);
      }}>
      <div>
        <span className="flex px-4 lg:px-8 my-2 items-center w-full">
          <span className="absolute inline-flex w-6 h-6 sm:w-8 sm:h-8 "></span>
          <span className="flex-shrink-0 relative flex justify-center h-6 w-6 sm:w-8 sm:h-8 rounded-full items-center bg-purple-400 ">
            {props.quesnum}
          </span>
          <div className="ml-4 text-sm lg:text-xl font-semibold">
            {props.ques}
          </div>
          <div className="ml-auto">
            <div>
              <svg
                className={`h-6 w-6 ${
                  !active ? "" : "transform rotate-180"
                }  ease-in-out duration-2000`}
                // xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </span>
      </div>
      <div className={`${!active ? "hidden" : null} ease-in duration-900 `}>
        <div className="">{props.ans}</div>
      </div>
    </div>
  );
}

export default FaqComp;
