"use client";

import { useState, useEffect, ChangeEvent, useRef } from "react";

import Image from "next/image";

import NavBar from "@/src/components/NavBar/NavBar";
import CustomSelect from "@/src/components/CustomSelect/CustomSelect";
import Autosuggestion from "@/src/components/Autosuggestion/Autosuggestion";

export default function Home() {
  const [loanAmount, setLoanAmount] = useState<string>("£");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loanTurnover, setTurnover] = useState<string>("£");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [cardPaymentValue, setCardPaymentValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(1, 1);
    }
  }, []);

  const validateLoanAmount = (value: string) => {
    const amount = parseFloat(value.replace("£", "").replace(/,/g, ""));

    if (isNaN(amount) || amount < 5000 || amount > 5000000) {
      setErrorMessage("Loan amount must be between £5,000 and £5,000,000");
    } else {
      setErrorMessage("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value) {
      value = `£${Number(value).toLocaleString()}`;
    }
    setLoanAmount(value);
    validateLoanAmount(value);
  };

  const handleChangeTurnOver = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value) {
      value = `£${Number(value).toLocaleString()}`;
    }
    setTurnover(value);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectCardPayments = (value: string) => {
    setCardPaymentValue(value);
  };

  const optionPurpose = [
    { value: "Business Growth", label: "Business Growth" },
    { value: "Additional Cashflow", label: "Additional Cashflow" },
    {
      value: "Stock & Inventory purchase",
      label: "Stock & Inventory purchase",
    },
    {
      value: "Plant & Machinery Purchase",
      label: "Plant & Machinery Purchase",
    },
    { value: "Vehicle Purchase", label: "Vehicle Purchase" },
    { value: "Existing Loan Refinance", label: "Existing Loan Refinance" },
    { value: "Other Purpose", label: "Other Purpose" },
  ];
  const options = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const optionCardSale = [
    { value: "Up to 25% of sales", label: "Up to 25% of sales" },
    { value: "25% - 50% of sales", label: "25% - 50% of sales" },
    { value: "50% - 75% of sales", label: "50% - 75% of sales" },
    { value: "More than 75% of sales", label: "More than 75% of sales" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center  py-5 px-8">
      <NavBar />
      <div className="max-w-[1200px] w-full">
        <div className="flex items-start pb-4 bg-[#FBFBFB] px-7 pt-8 rounded-2xl flex-col">
          <h2 className="text-[rgba(0, 0, 0, 0.88)] font-bold mb-1 text-xl pb-8">
            Your loan application
          </h2>
          <div className="flex w-full gap-6">
            <div className="flex-1">
              <div className="relative float-label-input">
                <input
                  type="text"
                  id="name"
                  value={loanAmount}
                  onChange={handleChange}
                  placeholder="£"
                  ref={inputRef}
                  className={`block w-full bg-white outline-none border-none rounded-md py-3 px-3 appearance-none leading-normal focus:shadow-none focus:border-transparent focus:ring-transparent text-gray-900`}
                />
                <label
                  htmlFor="name"
                  className={`absolute top-3 left-0 pointer-events-none transition duration-200 ease-in-out bg-white px-3 text-grey-darker font-poppins ${
                    loanAmount !== "" ? "text-black" : "text-gray-400 text-base"
                  } `}
                >
                  Loan amount
                </label>
              </div>
              {errorMessage && (
                <p
                  className="text-red-500 flex items-center pt-1 ml-1"
                  style={{
                    color: "rgb(198, 0, 41)",
                    opacity: 0.8,
                    fontSize: "clamp(13.6px, 1.388vh, 15px)",
                    paddingLeft: "0.4px",
                  }}
                >
                  <span role="img" aria-label="info-circle" className="pr-1">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="info-circle"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                  </span>

                  {errorMessage}
                </p>
              )}
            </div>

            <div className="flex-1">
              <CustomSelect
                options={optionPurpose}
                placeholder="Select purpose"
                onChange={handleSelectChange}
                label="Purpose"
              />
            </div>
          </div>
        </div>

        <div className="flex items-start pb-4 bg-[#FBFBFB] px-7 pt-6 rounded-2xl flex-col mt-6">
          <h2 className="text-[rgba(0, 0, 0, 0.88)] font-bold mb-1 text-xl pb-8">
            Business details
          </h2>

          <div className="flex w-1/2 mb-8 pr-3">
            <div className="flex-1">
              <Autosuggestion
                options={optionPurpose}
                placeholder="Type your Business name"
                onChange={handleSelectChange}
                label="Business name"
              />
            </div>
          </div>

          <div className="flex w-full gap-6">
            <div className="flex-1">
              <div className="relative float-label-input">
                <input
                  type="text"
                  id="name"
                  value={loanTurnover}
                  onChange={handleChangeTurnOver}
                  placeholder="£"
                  ref={inputRef}
                  className={`block w-full bg-white outline-none border-none rounded-md py-3 px-3 appearance-none leading-normal focus:shadow-none focus:border-transparent focus:ring-transparent text-gray-900`}
                />
                <label
                  htmlFor="name"
                  className={`absolute top-3 left-0 pointer-events-none transition duration-200 ease-in-out bg-white px-3 text-grey-darker font-poppins ${
                    loanAmount !== "" ? "text-black" : "text-gray-400 text-base"
                  } `}
                >
                  Annual sales/turnover
                </label>
              </div>
            </div>

            <div className="flex-1">
              <CustomSelect
                options={options}
                placeholder="Do you accept card payments"
                onChange={handleSelectCardPayments}
                label="Card payment accepted"
              />
            </div>
          </div>

          {cardPaymentValue === "yes" ? (
            <div className="flex w-full gap-6 mt-8">
              <div className="flex-1">
                <CustomSelect
                  options={optionCardSale}
                  placeholder="Turnover from card sales"
                  onChange={handleSelectChange}
                  label="Annual card sales"
                />
              </div>
              <div className="flex-1">
                <CustomSelect
                  options={options}
                  placeholder="Do you issue invoices?"
                  onChange={handleSelectChange}
                  label="Invoices sent to customers"
                />
              </div>
            </div>
          ) : (
            <div className="flex w-1/2 mt-8 pr-3">
              <div className="flex-1">
                <CustomSelect
                  options={options}
                  placeholder="Do you issue invoices?"
                  onChange={handleSelectChange}
                  label="Invoices sent to customers"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
