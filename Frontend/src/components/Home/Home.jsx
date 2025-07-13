import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import ServicesSection from "./ServicesSection";
import StatsSection from "./StatsSection";
import PartnersSection from "./PartnersSection";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";
import { Helmet } from "react-helmet";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    learners: 0,
    partners: 0,
    countries: 0,
  });
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Abhishek Kumar",
      role: "Software Engineer",
      quote:
        "SkillRoom’s IT Development training transformed my career. The hands-on projects and mentorship prepared me for a dream job at a top tech firm!",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Kapil Mehta",
      role: "College Student",
      quote:
        "The public speaking and leadership training at SkillRoom boosted my confidence. I now lead campus events and stand out in interviews!",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Suraj Jha",
      role: "Team Lead",
      quote:
        "SkillRoom’s corporate training revolutionized our team’s productivity. The customized modules aligned perfectly with our business goals.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Data Scientist",
      quote:
        "The AI and Machine Learning course was a game-changer. I transitioned into a high-demand role with practical skills learned at SkillRoom.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const animateStats = () => {
      const learnersTarget = 500;
      const partnersTarget = 50;
      const countriesTarget = 3;
      let learners = 0,
        partners = 0,
        countries = 0;

      const timer = setInterval(() => {
        if (learners < learnersTarget) learners += 50;
        if (partners < partnersTarget) partners += 1;
        if (countries < countriesTarget) countries += 1;

        setStats({ learners, partners, countries });

        if (
          learners >= learnersTarget &&
          partners >= partnersTarget &&
          countries >= countriesTarget
        ) {
          clearInterval(timer);
          setStats({
            learners: learnersTarget,
            partners: partnersTarget,
            countries: countriesTarget,
          });
        }
      }, 30);
    };
    animateStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>SkillRoom | Learn, Grow, Succeed</title>
        <meta
          name="description"
          content="SkillRoom provides industry-relevant training in tech and soft skills to help individuals and teams succeed in a digital world."
        />
        <meta
          name="keywords"
          content="SkillRoom, coding bootcamp, tech education, soft skills, online learning, professional development"
        />
        <meta name="author" content="SkillRoom Team" />
      </Helmet>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <StatsSection stats={stats} />
      <PartnersSection />
      <TestimonialsSection
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />
      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CtaSection />
    </div>
  );
};

export default Home;
