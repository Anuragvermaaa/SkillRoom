import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[75vh] md:h-[90vh]"
      aria-labelledby="career-hero-heading"
      role="banner"
    >
      <img
        src="/bannerImage.jpg"
        alt="Join the SkillRoom team"
        title="Exciting opportunities at SkillRoom"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-center items-center px-4 md:px-16 text-center">
        <h1
          id="career-hero-heading"
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 tracking-wide animate-pulse drop-shadow-lg"
        >
          Build the Future with SkillRoom
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl mb-4 animate-fade-in-up drop-shadow-md">
          We’re not just creating tech professionals — we’re nurturing leaders,
          innovators, and change-makers of tomorrow.
        </p>
        <p className="text-base md:text-lg text-white max-w-3xl mb-8 animate-fade-in-up animation-delay-200 drop-shadow-md">
          Join a mission-driven team shaping the next wave of digital talent
          through creativity, collaboration, and continuous learning.
        </p>
        <a
          href="#open-roles"
          className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-pink-400/50 hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Explore career opportunities"
        >
          Explore Careers
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
