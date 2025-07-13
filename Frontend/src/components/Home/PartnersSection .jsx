import React from "react";

const PartnersSection = () => {
  return (
    <section
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white text-center max-w-7xl mx-auto"
      aria-labelledby="partners-heading"
    >
      <h2
        id="partners-heading"
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 tracking-wide uppercase relative after:content-[''] after:block after:w-24 after:h-1.5 after:bg-blue-600 after:mx-auto after:mt-4"
      >
        Strategic Collaborations
      </h2>

      <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-14">
        We proudly collaborate with visionary organizations across the globe to
        drive innovation, transform learning, and create future-ready
        workforces. Our partnerships span industries, enabling mutual growth and
        knowledge exchange.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Global Outreach",
            desc: "Our network spans continents, facilitating access to diverse perspectives and international best practices.",
          },
          {
            title: "Innovation in Learning",
            desc: "Collaborations bring fresh ideas, cutting-edge technologies, and forward-thinking solutions to our learners.",
          },
          {
            title: "Customized Programs",
            desc: "Together with our partners, we co-create learning experiences tailored to specific industries and teams.",
          },
          {
            title: "Talent Transformation",
            desc: "We support organizations in building skill-rich teams aligned with modern business goals.",
          },
          {
            title: "Academic Integration",
            desc: "Educational institutions partner with us to blend curriculum with industry relevance and practical training.",
          },
          {
            title: "Research & Development",
            desc: "We join hands to explore new methodologies, platforms, and tools that redefine learning outcomes.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition duration-300 text-left hover:scale-[1.02] transform"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-lg text-gray-700 max-w-5xl mx-auto space-y-6">
        <p>
          Our collaboration philosophy is rooted in trust, transparency, and a
          shared passion for progress. We value long-term relationships that
          create real-world impact through knowledge sharing, technology
          transfer, and co-innovation.
        </p>
        <p>
          If you're interested in partnering with us, we welcome the opportunity
          to explore synergies. Together, we can build a smarter, more skilled
          tomorrow.
        </p>
      </div>

      <div className="mt-12">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 shadow-md transition duration-300"
        >
          Become a Partner
        </a>
      </div>
    </section>
  );
};

export default PartnersSection;
