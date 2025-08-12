import React, { useState, useRef, useEffect } from "react";

const Inputs = () => {
  const [value, setValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const errorRef = useRef(null);
  const warningRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (errorRef.current && !errorRef.current.contains(event.target)) {
        setIsErrorOpen(false);
      }
      if (warningRef.current && !warningRef.current.contains(event.target)) {
        setIsWarningOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth height transition for dropdowns
  const DropdownTransition = ({ isOpen, children }) => {
    const [height, setHeight] = useState(0);
    const dropdownRef = useRef(null);

    useEffect(() => {
      if (isOpen && dropdownRef.current) {
        setHeight(dropdownRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [isOpen]);

    return (
      <div
        ref={dropdownRef}
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ height: `${height}px` }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-6 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Error state select */}
      <div className="relative w-full" ref={errorRef}>
        <button
          className={`w-full p-3 pl-4 pr-10 text-left transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isErrorOpen ? "rounded-t-lg" : "rounded-lg"
          } border-2 ${
            value ? "border-red-400" : "border-red-500"
          } bg-white text-gray-700 focus:outline-none focus:ring-4 focus:ring-red-100 shadow-sm hover:border-red-400`}
          onClick={() => setIsErrorOpen(!isErrorOpen)}
          aria-expanded={isErrorOpen}
          aria-haspopup="listbox"
        >
          {value ? `Selected: Option ${value}` : "Error"}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <div className="relative h-5 w-5">
              <svg
                className={`h-5 w-5 text-red-500 absolute transition-all duration-200 ${
                  isErrorOpen
                    ? "opacity-0 rotate-90"
                    : "opacity-100 rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`h-5 w-5 text-red-500 absolute transition-all duration-200 ${
                  isErrorOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 -rotate-90"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </button>

        <div className="absolute z-20 w-full mt-0.5">
          <DropdownTransition isOpen={isErrorOpen}>
            <div className="bg-white rounded-b-lg  ">
              <div className="py-1 max-h-60 overflow-auto border bg-white  rounded-b-lg border-[#80808034] shadow-xl" role="listbox">
                {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                  <div
                    key={index}
                    className={`block px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                      value === String(index + 1)
                        ? "bg-red-50 text-red-800"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setValue(String(index + 1));
                      setIsErrorOpen(false);
                    }}
                    role="option"
                    aria-selected={value === String(index + 1)}
                  >
                    <div className="flex items-center">
                      <span className="flex-1">{option}</span>
                      {value === String(index + 1) && (
                        <svg
                          className="h-4 w-4 text-red-500 ml-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DropdownTransition>
        </div>
      </div>

      {/* Warning state multi-select */}
      <div className="relative w-full" ref={warningRef}>
        <button
          className={`w-full p-3 pl-4 pr-10 text-left transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isWarningOpen ? "rounded-t-lg" : "rounded-lg"
          } border-2 ${
            multiValue.length > 0 ? "border-yellow-400" : "border-yellow-500"
          } bg-white text-gray-700 focus:outline-none focus:ring-4 focus:ring-yellow-100 shadow-sm hover:border-yellow-400`}
          onClick={() => setIsWarningOpen(!isWarningOpen)}
          aria-expanded={isWarningOpen}
          aria-haspopup="listbox"
        >
          {multiValue.length > 0
            ? `Selected: ${multiValue.length} item${multiValue.length > 1 ? "s" : ""}`
            : "Warning multiple"}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <div className="relative h-5 w-5">
              <svg
                className={`h-5 w-5 text-yellow-500 absolute transition-all duration-200 ${
                  isWarningOpen
                    ? "opacity-0 rotate-90"
                    : "opacity-100 rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`h-5 w-5 text-yellow-500 absolute transition-all duration-200 ${
                  isWarningOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 -rotate-90"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </button>

        <div className="absolute z-20 w-full mt-0.5">
          <DropdownTransition isOpen={isWarningOpen}>
            <div className="bg-white">
              <div className="py-1 max-h-60 overflow-auto border bg-white  rounded-b-lg border-[#80808034] shadow-xl" role="listbox">
                {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                      multiValue.includes(String(index + 1))
                        ? "bg-yellow-50 text-yellow-800"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      const newValue = String(index + 1);
                      setMultiValue((prev) =>
                        prev.includes(newValue)
                          ? prev.filter((v) => v !== newValue)
                          : [...prev, newValue]
                      );
                    }}
                    role="option"
                    aria-selected={multiValue.includes(String(index + 1))}
                  >
                    <div className="flex items-center h-5">
                      <div
                        className={`border-2 rounded-sm w-4 h-4 flex items-center justify-center transition-all duration-150 ${
                          multiValue.includes(String(index + 1))
                            ? "bg-yellow-500 border-yellow-500"
                            : "border-gray-300"
                        }`}
                      >
                        {multiValue.includes(String(index + 1)) && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 flex-1">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </DropdownTransition>
        </div>
      </div>

      {/* Floating error message with smooth entrance */}
      {value === "1" && (
        <div
          className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-sm animate-[fadeIn_0.3s_ease-out]"
          role="alert"
        >
          <div className="flex items-start">
            <svg
              className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium">Warning: Option 1 has known issues</p>
              <p className="text-sm mt-1 text-red-600">
                This option is currently experiencing problems. Please consider
                alternatives.
              </p>
            </div>
            <button
              className="ml-auto -mt-1 -mr-1 p-1 rounded-full hover:bg-red-100 transition-colors duration-150"
              onClick={() => setValue(null)}
              aria-label="Close warning"
            >
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inputs;