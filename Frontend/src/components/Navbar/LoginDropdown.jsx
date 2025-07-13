import React from "react";
import { User, Building2 } from "lucide-react";

const LoginDropdown = ({
  isLoginDropdownOpen,
  openLoginModal,
  setIsLoginDropdownOpen,
  setIsMobileMenuOpen,
  loginRef,
}) => {
  if (!isLoginDropdownOpen) return null;

  const handleClick = (type) => {
    openLoginModal(type);
    setIsLoginDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      ref={loginRef}
      className="absolute right-0 mt-4 w-64 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl z-50 animate-fade-in-up"
      role="menu"
      aria-label="Login Options"
    >
      <button
        onClick={() => handleClick("user")}
        className="flex items-center gap-3 w-full px-5 py-4 text-left text-sm text-white hover:bg-white/10 transition-all duration-200 rounded-t-xl"
        role="menuitem"
      >
        <User size={18} /> Login as User
      </button>
      <button
        onClick={() => handleClick("business")}
        className="flex items-center gap-3 w-full px-5 py-4 text-left text-sm text-white hover:bg-white/10 transition-all duration-200 rounded-b-xl"
        role="menuitem"
      >
        <Building2 size={18} /> Login as Business
      </button>
    </div>
  );
};

export default LoginDropdown;
