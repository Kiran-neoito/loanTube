// src/components/CustomSelect.tsx

"use client";

import React, { useState, FC, useEffect, useRef } from "react";
import styles from "./CustomSelect.module.scss";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  label?: string;
  isSelected?: boolean;
  onChange: (value: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  placeholder,
  label,
  isSelected = false,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSelected) {
      setIsOpen(true);
    }
  }, [isSelected]);

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
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={selectedOption ? "text-black" : "text-gray-400"}>
          {selectedOption || placeholder}
        </div>
        <svg className="h-6 w-6 text-gray-500" viewBox="0 0 20 20">
          <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
        </svg>
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
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
