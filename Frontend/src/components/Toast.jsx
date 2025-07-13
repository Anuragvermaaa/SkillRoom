import React, { useEffect } from "react";

const Toast = ({ id, message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div
      className={`relative w-[90%] max-w-xs sm:max-w-sm p-4 rounded-lg shadow-xl text-white animate-toast-in flex items-center justify-between border border-opacity-30 bg-clip-padding bg-gradient-to-r ${
        type === "success"
          ? "from-green-600 to-green-700 border-green-400"
          : "from-red-600 to-red-700 border-red-400"
      } mb-2`}
    >
      <div className="flex items-center">
        <span className="mr-2">
          {type === "success" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </span>
        <span className="text-sm font-medium">{message}</span>
      </div>
      <button
        onClick={() => onClose(id)}
        className="text-white hover:text-gray-200 focus:outline-none"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Toast;