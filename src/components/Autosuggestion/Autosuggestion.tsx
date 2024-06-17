// src/components/Autosuggestion.tsx

"use client";

import React, { useState, FC, useEffect, useRef, ChangeEvent } from "react";
import styles from "./Autosuggestion.module.scss";

interface Option {
  value: string;
  title: string;
  subTitle: string;
}

interface AutosuggestionProps {
  options: Option[];
  placeholder?: string;
  label?: string;
  inputRef1?: any;
  onChange: (value: string) => void;
}

const Autosuggestion: FC<AutosuggestionProps> = ({
  options,
  placeholder,
  label,
  onChange,
  inputRef1,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSelectedLoading, setSelectedLoading] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    setSelectedOption(value);
    setSelectedLoading(true);
    setTimeout(() => {
      setSelectedLoading(false);
      setIsOpen(!isOpen);
    }, 1000);
  };

  return (
    <div
      className={`relative float-label-select rounded-[10px] ${
        isOpen ? "rounded-b-none" : ""
      }`}
      ref={selectRef}
    >
      <label
        className={`absolute -top-3 left-[2px] pointer-events-none transition duration-200 ease-in-out bg-white px-3 text-grey-darker font-poppins ${
          isOpen ? "text-red-700" : "text-gray-900"
        } `}
      >
        {label}
      </label>

      <div
        className="flex w-full bg-white outline-none justify-between items-center border-none rounded-md py-3 px-3 appearance-none leading-normal focus:shadow-none focus:border-transparent focus:ring-transparent text-[1rem]"
        // onChange={() => setIsOpen(!isOpen)}
      >
        <div className="flex relative w-full">
          <input
            type="text"
            id="name"
            className="w-full outline-none border-none focus:outline-none focus:border-none focus:shadow-none focus:ring-transparent p-0"
            value={selectedOption}
            placeholder={placeholder}
            onChange={handleSelectChange}
            ref={inputRef1}
          />
          {isSelectedLoading ? (
            <div className="absolute inset-0 flex justify-center items-center mx-auto w-full h-full">
              <span className="ant-spin-dot ant-spin-dot-spin">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          ) : null}
        </div>

        {isOpen ? (
          <svg
            enable-background="new 0 0 32 32"
            className="h-5 w-5"
            id="Слой_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Cancel">
              <path
                clip-rule="evenodd"
                d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z"
                fill="#121313"
                fill-rule="evenodd"
              />
              <path
                clip-rule="evenodd"
                d="M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z"
                fill="#121313"
                fill-rule="evenodd"
              />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="search"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        )}
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {options.map((option, index) => (
            <div
              key={option.value}
              className={`border-b-2 px-4 py-3 text-black hover:text-red-700 hover:cursor-pointer ${
                options.length === index + 1 ? "" : "border-gray-700"
              }`}
              onClick={() => handleSelect(option.value)}
            >
              <div className="font-bold uppercase pb-1">{option.title}</div>
              <div className="text-gray-600 hover:text-red-700">
                {option.subTitle}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autosuggestion;
