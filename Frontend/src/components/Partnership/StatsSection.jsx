import React from "react";
import { FaHandshake, FaUsers, FaGlobe } from "react-icons/fa";

const StatsSection = ({ stats }) => {
  return (
    <section
      className="py-24 px-4 md:px-16 bg-gradient-to-br from-cyan-100 via-pink-100 to-white text-center max-w-7xl mx-auto rounded-3xl shadow-lg"
      aria-labelledby="stats-heading"
    >
      <h2
        id="stats-heading"
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight uppercase relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-pink-500 after:mx-auto after:mt-3"
      >
        Our Global Impact
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 animate-fade-in">
        Since 2025, we’ve transformed organizations worldwide with cutting-edge,
        tailored training.
      </p>
      <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in animation-delay-150">
        SkillRoom empowers your teams with the skills of tomorrow—today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-cyan-300 transition-transform hover:-translate-y-1">
          <FaHandshake className="text-5xl mx-auto text-cyan-500 mb-4" />
          <h3 className="text-4xl font-bold text-cyan-600 animate-pulse">
            {stats.partners}+
          </h3>
          <p className="text-gray-700 text-lg mt-1">Trusted Partners</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-pink-300 transition-transform hover:-translate-y-1">
          <FaUsers className="text-5xl mx-auto text-pink-500 mb-4" />
          <h3 className="text-4xl font-bold text-pink-600 animate-pulse">
            {stats.trainees.toLocaleString()}+
          </h3>
          <p className="text-gray-700 text-lg mt-1">Trainees Empowered</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-purple-300 transition-transform hover:-translate-y-1">
          <FaGlobe className="text-5xl mx-auto text-purple-500 mb-4" />
          <h3 className="text-4xl font-bold text-purple-600 animate-pulse">
            {stats.countries}+
          </h3>
          <p className="text-gray-700 text-lg mt-1">Countries Reached</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
