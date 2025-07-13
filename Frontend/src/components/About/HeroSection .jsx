import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-800 to-purple-600 text-white py-20 px-4 md:px-16 h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/about.jpg"
          alt="SkillRoom team collaboration"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center flex flex-col items-center justify-center h-full space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 tracking-tight drop-shadow-xl"
        >
          About SkillRoom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl text-white/80 font-medium leading-relaxed px-4"
        >
          We're building a future where skills matter more than degrees. At
          SkillRoom, we empower students and professionals through real-world
          tech learning in AI, ML, coding, and more.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#mission"
            className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Discover Our Mission
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
