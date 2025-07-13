import React from "react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Global Tech Firm: Workforce Transformation",
      description:
        "Our 6-month AI and cloud training program for 1,000+ employees led to a 40% boost in project efficiency and innovation.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Educational Institution: Student Success",
      description:
        "A customized coding bootcamp resulted in 90% placement rates for graduates in top tech companies within 3 months.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Startup Growth: Agile Training",
      description:
        "Our tailored leadership and tech training enabled a startup to triple its team size while maintaining high performance.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      className="py-24 px-4 md:px-16 bg-gradient-to-r from-cyan-50 to-pink-50 text-center max-w-7xl mx-auto"
      aria-labelledby="case-studies-heading"
    >
      <h2
        id="case-studies-heading"
        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 mb-6 uppercase tracking-wide"
      >
        Success Stories
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
        Real-world impact through strategic learning. Discover how our training
        solutions created tangible success.
      </p>
      <p className="text-base text-gray-600 max-w-3xl mx-auto mb-12">
        From enabling workforce transformation in global firms to boosting
        student placement in top tech companies — our journey is powered by
        partnerships.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={study.title}
            className="relative p-6 bg-white rounded-xl border border-transparent hover:border-pink-500 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-pink-500 font-medium uppercase mb-1">
              Case Study
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {study.title}
            </h3>
            <p className="text-gray-600 text-sm">{study.description}</p>
            <a
              href="#contact"
              className="inline-block mt-6 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full shadow hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
