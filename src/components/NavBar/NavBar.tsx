"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import LogoSvg from "../../../public/svg/logo.svg";

const NavBar = () => {
  return (
    <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all p-4 bg-white mb-12">
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <nav aria-label="breadcrumb" className="w-max">
            <Image src={LogoSvg} alt="Logo" className="w-[198px] h-[38px]" />
          </nav>
        </div>
        <div className="flex items-center">
          <div className="mr-auto md:mr-4 md:w-56">
            <div className="relative w-full min-w-[200px] h-10">
              <div className="flex justify-center items-center">
                <span
                  style={{
                    color: "rgb(198, 0, 41)",
                  }}
                  className="w-[14px] h-[14.7px]"
                >
                  <svg
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.43583 6.93583C6.53624 6.83461 6.61567 6.71456 6.66959 6.58257C6.7235 6.45057 6.75082 6.30924 6.75 6.16667V1.83333C6.75 1.54602 6.63586 1.27047 6.4327 1.0673C6.22953 0.864137 5.95398 0.75 5.66667 0.75H1.33333C1.04602 0.75 0.770465 0.864137 0.567301 1.0673C0.364137 1.27047 0.25 1.54602 0.25 1.83333C0.25 6.71774 2.19032 11.4021 5.64412 14.8559C9.09791 18.3097 13.7823 20.25 18.6667 20.25C18.954 20.25 19.2295 20.1359 19.4327 19.9327C19.6359 19.7295 19.75 19.454 19.75 19.1667V14.8333C19.75 14.546 19.6359 14.2705 19.4327 14.0673C19.2295 13.8641 18.954 13.75 18.6667 13.75H14.3333C14.1908 13.7492 14.0494 13.7765 13.9174 13.8304C13.7854 13.8843 13.6654 13.9638 13.5642 14.0642L11.3975 16.2308L11.3217 16.3283C8.24481 14.7575 5.74253 12.2552 4.17167 9.17833L4.26917 9.1025L6.43583 6.93583ZM14.7775 15.9167H17.5833V18.0833C16.1813 17.988 14.7975 17.7113 13.4667 17.26L14.7775 15.9167ZM3.2725 7.03333C2.81015 5.70397 2.52246 4.32016 2.41667 2.91667H4.58333V5.7225L3.2725 7.03333Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>{" "}
                <span className="text-[#000000e0] font-bold pl-2 text-[clamp(18px, 2.1vh, 23px)] font-poppins">
                  020 8088 5001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
