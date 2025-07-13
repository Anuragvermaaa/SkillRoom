import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="SkillRoom Services"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/50 to-black/70 backdrop-blur-sm z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-6 md:px-16">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-2xl">
            Building <span className="text-blue-400">Future-Ready Teams</span>{" "}
            <br />
            With <span className="text-purple-400">World-Class Training</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            From upskilling your internal workforce to sourcing top talent
            across borders — SkillRoom is your end-to-end training and hiring
            partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
