import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const servicesPreview = [
    {
      id: 1,
      title: "IT Development",
      description:
        "Master coding, AI, web development, and more through hands-on projects and expert-led sessions. From beginner to advanced, our courses prepare you for tech careers.",
      icon: "fas fa-code",
    },
    {
      id: 2,
      title: "Corporate Training",
      description:
        "Elevate your team with tailored programs in tech, leadership, and soft skills. Our training aligns with your business goals to drive productivity and innovation.",
      icon: "fas fa-briefcase",
    },
    {
      id: 3,
      title: "Student Training",
      description:
        "Equip college students with industry-ready skills in tech and communication. Our programs bridge the gap between academia and professional success.",
      icon: "fas fa-graduation-cap",
    },
    {
      id: 4,
      title: "Soft Skills",
      description:
        "Develop essential skills like public speaking, leadership, and teamwork. Our workshops empower you to excel in any professional environment.",
      icon: "fas fa-users",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 md:px-16 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-white after:mx-auto after:mt-2"
        >
          Our Services
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Discover our comprehensive training programs designed to meet the
          needs of individuals and organizations. Each course is crafted to
          deliver practical skills and measurable outcomes.
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          Whether you’re looking to launch a tech career, upskill your team, or
          prepare for industry challenges, SkillRoom has the right program for
          you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesPreview.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white/95 text-left rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              role="article"
            >
              <i
                className={`${service.icon} text-4xl text-blue-600 mb-4`}
                aria-hidden="true"
              ></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="/services"
                className="text-blue-600 font-medium hover:underline"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="inline-block mt-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
          aria-label="View all services"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
