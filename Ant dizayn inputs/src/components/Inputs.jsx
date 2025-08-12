import React, { useState } from "react";

const Inputs = () => {
  const [value, setValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);
  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* Error state select */}
      <div className="relative w-full">
        <select
          className="w-full p-2 border-2 border-red-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200"
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="" disabled hidden>
            Error
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Warning state multi-select */}
      <div className="relative w-full">
        <select
          multiple
          className="w-full p-2 border-2 border-yellow-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 h-auto"
          value={multiValue}
          onChange={(e) => {
            const options = [...e.target.options];
            const selectedValues = options
              .filter((option) => option.selected)
              .map((option) => option.value);
            setMultiValue(selectedValues);
          }}
        >
          <option value="" disabled hidden>
            Warning multiple
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
