
import React from "react";
import FooterLinks from "./FooterLinks.jsx";
import CallbackForm from "./CallbackForm.jsx";
import BottomLinks from "./BottomLinks.jsx";

const Footer = ({ showToast }) => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pt-10 pb-6 border-t border-gray-700 bg-black/95 text-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <FooterLinks />
        <CallbackForm showToast={showToast} />
        <BottomLinks />
      </div>
    </footer>
  );
};

export default Footer;


