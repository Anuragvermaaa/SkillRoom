import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At SkillRoom, we believe in transforming raw talent into tech power.
            Since our launch in 2025, our mission has been clear — empower every
            learner with real-world skills that matter in today's fast-changing
            industries.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Our curriculum is built to deliver impact — from AI and software
            development to public speaking and leadership. We're redefining
            learning by blending expert instruction with hands-on projects.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With strategic partnerships across colleges, startups, and global
            companies, we’re scaling high-impact programs that prepare youth for
            tomorrow's challenges.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="SkillRoom training session"
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
