import React from "react";

const StatsSection = ({ stats }) => {
  return (
    <section
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-white text-center max-w-7xl mx-auto"
      aria-labelledby="stats-heading"
    >
      <h2
        id="stats-heading"
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 tracking-wide uppercase relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-3"
      >
        Our Impact
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
        SkillRoom is reshaping education by bridging industry and learners with
        practical, outcome-driven programs.
      </p>
      <p className="text-md text-gray-600 max-w-3xl mx-auto mb-12">
        From individual upskilling to organizational transformation, our
        initiatives span continents and industries, all backed by data,
        dedication, and digital excellence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="bg-white p-8 shadow-lg rounded-xl border-t-4 border-blue-600">
          <h3 className="text-5xl font-bold text-blue-600 mb-3">
            {stats.learners.toLocaleString()}+
          </h3>
          <p className="text-gray-700 font-medium">Learners Empowered</p>
          <p className="text-gray-500 text-sm mt-2">
            Through personalized and project-based curriculum.
          </p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-xl border-t-4 border-green-600">
          <h3 className="text-5xl font-bold text-green-600 mb-3">
            {stats.partners}+
          </h3>
          <p className="text-gray-700 font-medium">Partners Onboarded</p>
          <p className="text-gray-500 text-sm mt-2">
            Collaborating on innovation and skilling transformation.
          </p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-xl border-t-4 border-purple-600">
          <h3 className="text-5xl font-bold text-purple-600 mb-3">
            {stats.countries}+
          </h3>
          <p className="text-gray-700 font-medium">Countries Reached</p>
          <p className="text-gray-500 text-sm mt-2">
            Building global bridges through inclusive learning.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-blue-700 mb-3">
            Student Success Stories
          </h4>
          <p className="text-gray-700">
            Thousands of learners have secured jobs in tech, product, and
            business domains. Many have transitioned careers or built startups
            with our mentorship and ecosystem.
          </p>
        </div>
        <div className="bg-green-50 p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-green-700 mb-3">
            Corporate Upskilling
          </h4>
          <p className="text-gray-700">
            Leading organizations rely on SkillRoom to reskill their teams in
            cutting-edge domains like AI, cloud, product management, and more.
          </p>
        </div>
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-yellow-700 mb-3">
            Global Reach
          </h4>
          <p className="text-gray-700">
            We support learners from over 40 countries through localized
            content, live classes, and multilingual support to foster equity in
            education.
          </p>
        </div>
        <div className="bg-purple-50 p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-purple-700 mb-3">
            Community & Ecosystem
          </h4>
          <p className="text-gray-700">
            Our thriving community hosts 500+ events per year, including
            hackathons, webinars, AMAs, and bootcamps led by global mentors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
