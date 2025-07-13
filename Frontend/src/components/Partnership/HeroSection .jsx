import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[75vh] md:h-[90vh]"
      aria-labelledby="hero-heading"
    >
      <img
        src="/partnership.jpg"
        alt="SkillRoom partnership background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-center px-6 md:px-20">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4 animate-pulse"
        >
          Partner with SkillRoom to Build the Future
        </h1>
        <h2 className="text-lg md:text-xl text-white/90 font-medium mb-4 max-w-3xl mx-auto animate-fade-in-up">
          Join hands with India’s leading EdTech innovator in delivering
          future-ready training programs for corporates, colleges, and
          communities.
        </h2>
        <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Since 2025, SkillRoom has collaborated with global partners to upskill
          10,000+ learners through immersive, cutting-edge curriculums and
          mentorship-led training.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform duration-300 animate-bounce"
          aria-label="Start your partnership journey"
        >
          Start Your Partnership
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
