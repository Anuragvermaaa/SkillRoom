import React from "react";

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description:
        "We start with a deep-dive analysis of your organization's goals, challenges, and vision. This helps us build a custom roadmap that aligns with your long-term business outcomes, ensuring each step of the partnership adds measurable value.",
      icon: "fas fa-search",
    },
    {
      id: 2,
      title: "Custom Curriculum Design",
      description:
        "Our instructional design experts and industry professionals co-develop impactful learning modules tailored to your workforce needs. The content is practical, outcome-based, and aligned with market trends and emerging technologies.",
      icon: "fas fa-cogs",
    },
    {
      id: 3,
      title: "Dynamic Delivery",
      description:
        "Flexible delivery modes—online, hybrid, or on-site—are curated for your audience’s convenience. Our instructors use interactive teaching methods and real-world simulations to ensure hands-on, high-retention learning experiences.",
      icon: "fas fa-play-circle",
    },
    {
      id: 4,
      title: "Ongoing Impact Analysis",
      description:
        "We don’t stop at delivery. You get comprehensive insights with real-time analytics, performance dashboards, and regular progress check-ins to refine the learning path and ensure ROI-focused continuous improvement.",
      icon: "fas fa-analytics",
    },
  ];

  return (
    <section
      className="py-24 px-4 md:px-16 text-center max-w-7xl mx-auto"
      aria-labelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-pink-500 after:mx-auto after:mt-2"
      >
        Our Partnership Process
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 animate-fade-in">
        Our proven framework ensures that every collaboration is strategically
        aligned, efficiently executed, and continuously optimized for long-term
        success.
      </p>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 animate-fade-in animation-delay-200">
        From the first conversation to measurable outcomes, we work as an
        extension of your team—adapting to your evolving needs and delivering
        tangible results at every stage.
      </p>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-pink-500 h-full"></div>
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } animate-fade-in`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="w-1/2 p-6">
              <div className="bg-white rounded-xl shadow-2xl p-6 hover:shadow-cyan-500/50 transition-all duration-300">
                <i className={`${step.icon} text-4xl text-cyan-500 mb-4`}></i>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {step.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
