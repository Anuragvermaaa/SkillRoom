import React from "react";

const CtaSection = () => {
  return (
    <section
      className="py-24 px-4 text-center bg-gradient-to-r from-cyan-600 to-pink-600 text-white max-w-7xl mx-auto"
      aria-labelledby="cta-heading"
    >
      <h2
        id="cta-heading"
        className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-20 after:h-1 after:bg-white after:mx-auto after:mt-2"
      >
        Ready to Transform Your Future?
      </h2>
      <p className="text-lg md:text-xl mb-4 max-w-4xl mx-auto animate-fade-in">
        At SkillRoom, we help organizations empower their teams with
        future-ready skills, hands-on learning, and custom upskilling journeys.
      </p>
      <p className="text-lg md:text-xl mb-4 max-w-4xl mx-auto animate-fade-in animation-delay-200">
        Whether you're an early-stage startup or a growing enterprise, our
        partnership programs are designed to fit your unique goals and scale.
      </p>
      <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto animate-fade-in animation-delay-300">
        Let's work together to create impactful learning experiences and nurture
        the next generation of innovators.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Get in touch for partnership"
      >
        Let’s Collaborate
      </a>
    </section>
  );
};

export default CtaSection;
