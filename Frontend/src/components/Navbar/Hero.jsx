import React, { useState, useEffect, useRef, useContext } from "react";
import ProfileDropdown from "./ProfileDropdown.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { UserAuthContext } from "../../Context/UserAuthContext.jsx";
import { BusinessAuthContext } from "../../Context/BusinessAuthContext.jsx";

const Hero = ({ openLoginModal, openSignupModal, showToast }) => {
  const {
    user: userData,
    isAuthenticated: isUserAuthenticated,
    logout: userLogout,
  } = useContext(UserAuthContext) || {};
  const {
    business: businessData,
    isAuthenticated: isBusinessAuthenticated,
    logout: businessLogout,
  } = useContext(BusinessAuthContext) || {};

  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileRef = useRef(null);
  const loginRef = useRef(null);

  const isAuthenticated = isUserAuthenticated || isBusinessAuthenticated;

  const user = isUserAuthenticated
    ? {
        fullname: userData?.fullname || { firstname: "N/A", lastname: "N/A" },
        email: userData?.email || "N/A",
        contact: userData?.contact || "N/A",
        organization: userData?.organization || null,
        query: userData?.query || null,
        type: "user",
      }
    : isBusinessAuthenticated
    ? {
        fullname: businessData?.fullname || {
          firstname: "N/A",
          lastname: "N/A",
        },
        email: businessData?.email || "N/A",
        contact: businessData?.contact || "N/A",
        organization: businessData?.organization || "N/A",
        query: businessData?.query || "N/A",
        type: "business",
      }
    : null;

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen((prev) => !prev);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
    setIsLoginDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsLoginDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const handleSignout = async () => {
    try {
      if (isUserAuthenticated) {
        await userLogout?.();
      } else if (isBusinessAuthenticated) {
        await businessLogout?.();
      }
      showToast("Logged out successfully!", "success");
      setIsProfileDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
      showToast("Logout failed, please try again", "error");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        openLoginModal={openLoginModal}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isLoginDropdownOpen={isLoginDropdownOpen}
        toggleLoginDropdown={toggleLoginDropdown}
        setIsLoginDropdownOpen={setIsLoginDropdownOpen}
        isAuthenticated={isAuthenticated}
        loginRef={loginRef}
      />

      {/* Profile Icon */}
      <div className="relative" ref={profileRef}>
        <button
          onClick={toggleProfileDropdown}
          className="text-neutral-300 hover:text-white transition-colors"
          aria-label="User Profile"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>

        <ProfileDropdown
          isProfileDropdownOpen={isProfileDropdownOpen}
          isAuthenticated={isAuthenticated}
          user={user}
          handleSignout={handleSignout}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
          setIsProfileDropdownOpen={setIsProfileDropdownOpen}
        />
      </div>
    </>
  );
};

export default Hero;
