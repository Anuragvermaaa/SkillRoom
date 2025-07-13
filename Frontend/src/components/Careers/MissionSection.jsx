import React from "react";

const MissionSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 text-center max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2">
        Why Work at SkillRoom?
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        At SkillRoom, we’re not just building products—we’re building futures.
        Join a team that thrives on innovation, supports each other’s growth,
        and empowers learners across the globe through next-gen tech and
        education.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">
            Make Real Impact
          </h3>
          <p className="text-gray-600">
            Everything you build helps bridge real-world skill gaps. From
            students in small towns to professionals upskilling online, your
            work will shape meaningful learning journeys every day.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">
            Accelerate Your Growth
          </h3>
          <p className="text-gray-600">
            We move fast and so will your career. Whether it’s building MVPs,
            launching new features, or learning from team mentors—you’ll be
            hands-on and ahead of the curve from day one.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">
            Culture of Belonging
          </h3>
          <p className="text-gray-600">
            We embrace diversity of thought, experience, and identity. At
            SkillRoom, you're not just another employee—you’re a valued voice
            helping us co-create a better, more inclusive learning ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
