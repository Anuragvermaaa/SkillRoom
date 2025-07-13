import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[110vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/homeBanner.jpg')" }}
      aria-label="Hero section showcasing SkillRoom introduction"
    >
      {/* Gradient Overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-4 md:px-16">
        <div className="animate-fade-in-up space-y-6" role="banner">
          <h1 className="text-4xl mt-7 md:text-6xl font-abold tracking-tight leading-tight">
            SkillRoom: Transforming Talent into Tech Power
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Launched in 2025, SkillRoom is revolutionizing education with
            cutting-edge tech and soft skills training. We empower students,
            professionals, and organizations to excel in a tech-driven world
            through hands-on learning and expert mentorship.
          </p>

          <p className="text-base text-gray-300">
            Our programs bridge the skill gap, offering everything from coding
            bootcamps to leadership workshops. Join us to unlock your potential
            and shape the future.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400"
            aria-label="Join SkillRoom now"
          >
            Join Now
          </Link>
        </div>

        {/* Optional empty div for grid balance */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default HeroSection;
