import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white overflow-hidden">
      {/* Gradient ring background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20 z-0 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 uppercase"
        >
          Ready to Shape the Future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/90 mb-10"
        >
          Join SkillRoom and become part of a revolution in education. Whether
          you're a student, mentor, or institution — the future needs you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 text-lg animate-bounce"
          >
            Get Involved Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
