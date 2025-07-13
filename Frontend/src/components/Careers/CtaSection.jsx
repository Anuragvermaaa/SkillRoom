import React from "react";

const CtaSection = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-white after:mx-auto after:mt-2">
        Ready to Transform Talent into Tech Power?
      </h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Join the SkillRoom revolution — where passion meets purpose and learners
        become leaders. Contribute to reshaping tech education and unlock the
        future of global upskilling.
      </p>
      <a
        href="#apply"
        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
      >
        Explore Opportunities
      </a>
    </section>
  );
};

export default CtaSection;
