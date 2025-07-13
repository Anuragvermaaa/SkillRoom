import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";

const Navbar = ({ openLoginModal, openSignupModal, showToast }) => {
  return (
    <header className="bg-black/90 fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                SkillRoom
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Hero
              openLoginModal={openLoginModal}
              openSignupModal={openSignupModal}
              showToast={showToast}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
