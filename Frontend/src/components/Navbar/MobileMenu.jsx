import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginDropdown from "./LoginDropdown.jsx";
import { navLinks } from "../../Constants/index.ts";

const MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  openLoginModal,
  setIsMobileMenuOpen,
  isLoginDropdownOpen,
  toggleLoginDropdown,
  setIsLoginDropdownOpen,
  isAuthenticated,
  loginRef,
}) => {
  const location = useLocation();

  return (
    <>
      <button
        className="sm:hidden text-neutral-300 hover:text-white"
        onClick={toggleMobileMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <ul
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row absolute sm:static top-16 left-0 w-full sm:w-auto bg-black/90 sm:bg-transparent p-4 sm:p-0 gap-4 sm:gap-6 items-center`}
      >
        {navLinks?.length ? (
          navLinks.map(({ id, name, href }) => {
            const isLoginLink = name.toLowerCase().includes("login");
            if (isLoginLink && isAuthenticated) return null;
            return (
              <li
                key={id}
                className={`text-neutral-300 font-generalsans font-semibold w-full sm:w-auto text-center sm:text-left ${
                  location.pathname === href && !isLoginLink ? "text-white" : ""
                } hover:text-white transition-colors`}
              >
                {isLoginLink ? (
                  <div className="relative">
                    <button
                      onClick={toggleLoginDropdown}
                      className="text-base w-full sm:w-auto py-2 sm:py-0"
                    >
                      {name}
                    </button>
                    <LoginDropdown
                      isLoginDropdownOpen={isLoginDropdownOpen}
                      openLoginModal={openLoginModal}
                      setIsLoginDropdownOpen={setIsLoginDropdownOpen}
                      setIsMobileMenuOpen={setIsMobileMenuOpen}
                      loginRef={loginRef}
                    />
                  </div>
                ) : (
                  <Link
                    to={href}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-base block py-2 sm:py-0"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })
        ) : (
          <li className="text-neutral-400">No navigation links available.</li>
        )}
      </ul>
    </>
  );
};

export default MobileMenu;