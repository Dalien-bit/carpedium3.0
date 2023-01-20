import React from "react";
import { events } from "../../content/content";
import ipl_brochure from "../../assets/iplauction-brochure.pdf";

const Event1 = () => {
  return (
    <div>
      <section class="min-h-screen bg-white dark:bg-black">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {events.ipl.name}
            </h2>
            <p class="mb-6 font-medium text-gray-500 md:text-lg dark:text-gray-400">
              {events.ipl.description}
            </p>
            <a
              href="#"
              class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-white font-bold rounded-lg text-lg px-5 py-2.5 text-center mr-3"
            >
              <a download="" href={ipl_brochure}>Download Brochure</a>

              <svg
                class="ml-2 -mr-1 w-5 h-5"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                // class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-white font-bold rounded-lg text-lg px-5 py-2.5 text-center md:ml-3 mt-6"
            >
              Register Now
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                // class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event1;
