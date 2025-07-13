import React from "react";
import UnauthenticatedDropdown from "./UnauthenticatedDropdown.jsx";
import UserProfileDropdown from "./UserProfileDropdown.jsx";
import BusinessProfileDropdown from "./BusinessProfileDropdown.jsx";

const ProfileDropdown = ({
  isProfileDropdownOpen,
  isAuthenticated,
  user,
  handleSignout,
  openLoginModal,
  openSignupModal,
  setIsProfileDropdownOpen,
}) => {
  if (!isProfileDropdownOpen) return null;

  return (
    <>
      {!isAuthenticated && (
        <UnauthenticatedDropdown
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
          setIsProfileDropdownOpen={setIsProfileDropdownOpen}
        />
      )}
      {isAuthenticated && user?.type === "user" && (
        <UserProfileDropdown user={user} handleSignout={handleSignout} />
      )}
      {isAuthenticated && user?.type === "business" && (
        <BusinessProfileDropdown user={user} handleSignout={handleSignout} />
      )}
    </>
  );
};

export default ProfileDropdown;
