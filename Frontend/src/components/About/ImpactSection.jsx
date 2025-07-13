import React from "react";
import { motion } from "framer-motion";

const ImpactSection = () => {
  const stats = [
    {
      value: "500+",
      label: "Learners Trained",
      description:
        "Students and professionals across various backgrounds have gained industry-relevant skills through our project-based learning approach.",
      color: "from-blue-500 to-blue-700",
    },
    {
      value: "25+",
      label: "Partner Institutions",
      description:
        "We've collaborated with top universities, colleges, and edtech partners to expand the reach of our learning programs.",
      color: "from-purple-500 to-purple-700",
    },
    {
      value: "3+",
      label: "Countries Reached",
      description:
        "Our global curriculum has touched learners in over 10 countries through online bootcamps and hybrid sessions.",
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-16 text-center max-w-7xl mx-auto bg-gradient-to-br from-gray-100 to-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2"
      >
        Our Impact in 2025
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
      >
        In just one year, SkillRoom has helped learners unlock their potential.
        Our community is growing rapidly — stronger, smarter, and more
        connected.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl shadow-xl text-white bg-gradient-to-br ${item.color} transform transition-transform hover:scale-105 duration-300`}
          >
            <h3 className="text-5xl font-extrabold mb-2">{item.value}</h3>
            <p className="text-xl font-semibold mb-4">{item.label}</p>
            <p className="text-white/90 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
