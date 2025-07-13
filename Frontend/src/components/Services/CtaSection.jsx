import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 text-center bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 text-white max-w-7xl mx-auto rounded-2xl shadow-2xl">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide relative after:content-[''] after:block after:w-20 after:h-1 after:bg-white after:mx-auto after:mt-3">
        Ready to Upskill?
      </h2>
      <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto text-white/90">
        Explore SkillRoom’s services and start your journey today.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
      >
        Get Started
      </Link>
    </section>
  );
};

export default CtaSection;
