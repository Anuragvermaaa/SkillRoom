import React from "react";

const MissionSection = () => {
  return (
    <section
      className="py-24 px-4 md:px-16 text-center max-w-7xl mx-auto bg-gradient-to-b from-white via-gray-50 to-white"
      aria-labelledby="mission-heading"
    >
      <h2
        id="mission-heading"
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 tracking-wide uppercase relative"
      >
        Our Mission
        <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      <div className="text-gray-700 text-lg md:text-xl space-y-6 max-w-4xl mx-auto leading-relaxed">
        <p>
          Founded in 2025,{" "}
          <span className="font-semibold text-blue-700">SkillRoom</span> is
          dedicated to bridging the global skill gap by delivering world-class
          training in technology and soft skills. Our vision is to empower
          individuals and organizations to thrive in a rapidly evolving digital
          landscape.
        </p>
        <p>
          We believe that education should be{" "}
          <span className="italic">practical</span>,{" "}
          <span className="italic">accessible</span>, and{" "}
          <span className="italic">transformative</span>. Our programs combine
          industry-relevant curricula with hands-on projects to ensure learners
          are job-ready.
        </p>
        <p>
          From college students to corporate teams, we’re committed to fostering
          innovation, leadership, and excellence. Join us in shaping the future
          of education.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
