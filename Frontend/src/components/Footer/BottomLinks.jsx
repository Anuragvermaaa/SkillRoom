import React from "react";

const BottomLinks = () => {
  return (
    <div className="md:col-span-3 text-center mt-8 border-t border-gray-700 pt-6 text-sm">
      <div className="flex flex-col sm:flex-row justify-center gap-2 mb-2">
        <a href="#" className="hover:text-white transition-colors">
          Terms & Conditions
        </a>
        <span className="hidden sm:inline">|</span>
        <a href="#" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} SkillRoom Pvt. Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default BottomLinks;