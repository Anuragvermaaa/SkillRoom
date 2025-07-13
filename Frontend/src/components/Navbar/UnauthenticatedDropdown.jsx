import React from "react";

const UnauthenticatedDropdown = ({ openLoginModal, openSignupModal, setIsProfileDropdownOpen }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2 z-50 animate-slide-in border-2 border-transparent bg-clip-padding bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="px-4 py-3 bg-gray-800 rounded-lg">
        <p className="text-white font-semibold text-sm">Please Log In</p>
        <p className="text-gray-300 text-xs mt-1">
          Access your profile by logging in or creating an account.
        </p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => {
              openLoginModal("user");
              setIsProfileDropdownOpen(false);
            }}
            className="flex-1 px-3 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all"
          >
            User Login
          </button>
          <button
            onClick={() => {
              openLoginModal("business");
              setIsProfileDropdownOpen(false);
            }}
            className="flex-1 px-3 py-2 text-sm text-white bg-purple-500 rounded-md hover:bg-purple-600 transition-all"
          >
            Business Login
          </button>
        </div>
        <p className="text-gray-300 text-xs mt-2 text-center">
          New here?{" "}
          <button
            onClick={() => {
              openSignupModal("user");
              setIsProfileDropdownOpen(false);
            }}
            className="text-blue-400 hover:text-blue-300"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default UnauthenticatedDropdown;