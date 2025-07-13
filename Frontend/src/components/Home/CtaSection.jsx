import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section
      className="relative py-24 px-6 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden shadow-xl rounded-xl max-w-7xl mx-auto"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <h2
        id="cta-heading"
        className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight uppercase relative z-10"
      >
        Start Your Journey with SkillRoom
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto z-10 relative">
        Ready to unlock your potential? Join SkillRoom to gain tech and soft
        skills that will propel your career forward.
      </p>
      <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto z-10 relative">
        Whether you’re a student, professional, or organization, our programs
        are designed to help you succeed in a tech-driven world.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 z-10 relative"
        aria-label="Sign up for SkillRoom"
      >
        Sign Up Now
      </Link>
    </section>
  );
};

export default CtaSection;
