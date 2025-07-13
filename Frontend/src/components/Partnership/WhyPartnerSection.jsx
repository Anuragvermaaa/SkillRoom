import React from "react";

const WhyPartnerSection = ({ currentBenefit, setCurrentBenefit, benefits }) => {
  return (
    <section
      className="py-24 px-4 md:px-16 text-center max-w-7xl mx-auto"
      aria-labelledby="why-partner-heading"
    >
      <h2
        id="why-partner-heading"
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-pink-500 after:mx-auto after:mt-2"
      >
        Why Choose SkillRoom?
      </h2>

      <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 animate-fade-in">
        We’re not just an EdTech provider—we’re your growth partner in shaping a
        skilled, future-ready workforce.
      </p>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 animate-fade-in animation-delay-200">
        Backed by results since 2025, our tailored programs drive innovation and
        transformation across industries, campuses, and communities.
      </p>

      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentBenefit * 100}%)` }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="min-w-full p-8 bg-white rounded-2xl shadow-xl hover:shadow-cyan-500/50 transition-transform transform hover:-translate-y-2 duration-300"
            >
              <i
                className={`${benefit.icon} text-5xl text-cyan-500 mb-6`}
                aria-hidden="true"
              ></i>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBenefit(index)}
              aria-label={`Go to benefit ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentBenefit
                  ? "bg-gradient-to-r from-cyan-500 to-pink-500 shadow-md scale-110"
                  : "bg-gray-300 hover:bg-cyan-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
