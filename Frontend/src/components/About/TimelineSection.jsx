import React from "react";
import { motion } from "framer-motion";

const TimelineSection = () => {
  const timeline = [
    {
      year: "Jan 2025",
      event:
        "SkillRoom was officially launched with the vision to bridge the gap between raw talent and real-world skills. Our mission is to build future-ready youth through technology-driven learning.",
    },
    {
      year: "Mar 2025",
      event:
        "We proudly delivered our first corporate training program, helping teams upskill in emerging technologies and industry best practices with real impact.",
    },
    {
      year: "Jun 2025",
      event:
        "SkillRoom forged strategic partnerships with leading colleges and tech companies, expanding our reach and connecting talent with real career opportunities.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 tracking-wide relative">
        <span className="block uppercase">Our Journey Through</span>
        <span className="block text-blue-600 mt-1">The Year 2025</span>
        <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></span>
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600" />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center mb-14 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 px-6">
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-700">{item.year}</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {item.event}
                </p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
