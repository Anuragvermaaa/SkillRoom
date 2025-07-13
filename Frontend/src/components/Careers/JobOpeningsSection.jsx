import React from "react";

const JobOpeningsSection = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "Join our engineering team to craft sleek, responsive, and high-performance user interfaces using React.js and modern web technologies. You'll collaborate with designers and backend engineers to deliver seamless learning experiences.",
      responsibilities:
        "Build dynamic UI components • Optimize performance • Maintain design consistency",
      location: "Remote",
      applyLink: "#",
    },
    {
      id: 2,
      title: "Content Creator – Tech Education",
      description:
        "We’re seeking storytellers with a tech edge. Create hands-on tutorials, coding walkthroughs, and educational videos that inspire thousands to start their coding journeys with confidence and clarity.",
      responsibilities:
        "Design engaging curriculums • Create coding demos • Collaborate with SMEs",
      location: "Hybrid – Bangalore",
      applyLink: "#",
    },
    {
      id: 3,
      title: "Data Scientist – EdTech Insights",
      description:
        "Analyze learning patterns, student behavior, and course effectiveness to help us improve learning outcomes. Your insights will directly influence how we personalize education at scale.",
      responsibilities:
        "Work with large datasets • Build ML models • Deliver actionable insights",
      location: "Remote",
      applyLink: "#",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2">
        Explore Opportunities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobOpenings.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <p className="text-sm text-gray-500 mb-2 font-medium">
                <span className="text-gray-700">Key Focus:</span>{" "}
                {job.responsibilities}
              </p>
              <p className="text-gray-500 mb-4">
                <strong className="text-gray-700">Location:</strong>{" "}
                {job.location}
              </p>
            </div>
            <a
              href={job.applyLink}
              className="mt-auto inline-block w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpeningsSection;
