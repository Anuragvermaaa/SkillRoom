import React from "react";

const FooterLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      <ul>
        <h1 className="mb-4 text-2xl font-bold text-white">Trending</h1>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Full Stack
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Java Training
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Machine Learning
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Python Training
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          DSA Training
        </li>
      </ul>
      <ul>
        <h1 className="mb-4 text-2xl font-bold text-white">More</h1>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Blogs
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          About Us
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Corporate
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Training
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Recruitment
        </li>
        <li className="mb-2 hover:text-white transition-colors cursor-pointer">
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;