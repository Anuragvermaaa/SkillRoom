import React from "react";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";

const PartnersSection = () => {
  const partnerTypes = [
    {
      id: 1,
      title: "Tech Companies",
      description:
        "Empower your team with cutting-edge tech and leadership training, driving innovation and market leadership.",
      icon: <FaLaptopCode className="text-5xl text-cyan-500 mb-4" />,
    },
    {
      id: 2,
      title: "Educational Institutions",
      description:
        "Prepare students for high-demand careers with industry-aligned programs that bridge academia and industry.",
      icon: <FaGraduationCap className="text-5xl text-cyan-500 mb-4" />,
    },
    {
      id: 3,
      title: "Training Providers",
      description:
        "Scale your impact by partnering with us to deliver transformative, high-quality training solutions.",
      icon: <FaChalkboardTeacher className="text-5xl text-cyan-500 mb-4" />,
    },
    {
      id: 4,
      title: "Startups & SMEs",
      description:
        "Fuel growth with tailored, cost-effective training to build a skilled and agile workforce.",
      icon: <FaRocket className="text-5xl text-cyan-500 mb-4" />,
    },
  ];

  return (
    <section
      className="py-24 px-4 md:px-16 bg-white max-w-7xl mx-auto"
      aria-labelledby="partners-heading"
    >
      <h2
        id="partners-heading"
        className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-pink-500 after:mx-auto after:mt-2"
      >
        Who We Partner With
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-center mb-6 animate-fade-in">
        We collaborate with forward-thinking organizations across industries to
        deliver transformative training solutions that drive success.
      </p>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-10 animate-fade-in animation-delay-200">
        From tech giants to educational institutions, our partners benefit from
        our expertise and global reach.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partnerTypes.map((partner, index) => (
          <div
            key={partner.id}
            className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {partner.icon}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 tracking-tight">
              {partner.title}
            </h3>
            <p className="text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
