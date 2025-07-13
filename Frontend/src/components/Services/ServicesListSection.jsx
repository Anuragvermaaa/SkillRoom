import React from "react";

const ServicesListSection = () => {
  const services = [
    {
      id: 1,
      title: "IT Development",
      description:
        "Master coding, web dev, AI, and software engineering with hands-on training.",
      icon: "💻",
    },
    {
      id: 2,
      title: "Manpower Recruitment",
      description:
        "Connect with top tech and corporate talent through our recruitment services.",
      icon: "🤝",
    },
    {
      id: 3,
      title: "Corporate Training",
      description:
        "Upskill your workforce with tailored tech and soft skills programs.",
      icon: "🏢",
    },
    {
      id: 4,
      title: "Student Training",
      description:
        "Prepare college students for industry with career-ready skills.",
      icon: "🎓",
    },
    {
      id: 5,
      title: "Fresher Training",
      description: "Transform fresh graduates into job-ready professionals.",
      icon: "🌟",
    },
    {
      id: 6,
      title: "Professional Training",
      description:
        "Advance your career with specialized tech and leadership courses.",
      icon: "📈",
    },
    {
      id: 7,
      title: "College Campus Training",
      description: "On-campus programs bridging academia and industry.",
      icon: "🏫",
    },
    {
      id: 8,
      title: "Overseas & Online Training",
      description:
        "World-class training accessible globally via online platforms.",
      icon: "🌍",
    },
    {
      id: 9,
      title: "Summer Training",
      description:
        "Intensive tech and soft skills bootcamps during summer breaks.",
      icon: "☀️",
    },
    {
      id: 10,
      title: "6 Months Industrial Training",
      description: "Real-world experience with industry-focused training.",
      icon: "🏭",
    },
    {
      id: 11,
      title: "6 Months Training",
      description: "Structured programs for in-depth skill development.",
      icon: "⏳",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-16 text-center max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight uppercase relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-3">
        Our Training & Recruitment Services
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
        We offer a wide range of modern, impact-driven programs designed for
        students, professionals, and enterprises around the world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`p-6 rounded-2xl border shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03] ${
              index % 2 === 0
                ? "bg-gradient-to-br from-white via-blue-50 to-white"
                : "bg-gradient-to-br from-blue-50 to-purple-50"
            }`}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesListSection;
