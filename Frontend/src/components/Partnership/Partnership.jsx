


import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection ";
import WhyPartnerSection from "./WhyPartnerSection";
import StatsSection from "./StatsSection";
import PartnersSection from "./PartnersSection";
import CaseStudiesSection from "./CaseStudiesSection";
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";
import ContactSection from "./ContactSection";

const BusinessPartnership = ({ showToast }) => {
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const [stats, setStats] = useState({
    partners: 0,
    trainees: 0,
    countries: 0,
  });

  const benefits = [
    {
      title: "Skyrocket Productivity",
      description:
        "Our programs boost team performance by 35%, delivering measurable ROI through enhanced skills and efficiency.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Close Skill Gaps",
      description:
        "90% of our partners report significant skill improvements, ensuring your team is ready for future challenges.",
      icon: "fas fa-puzzle-piece",
    },
    {
      title: "Global Scalability",
      description:
        "Train distributed teams across 10+ countries with our flexible, cloud-based learning platforms.",
      icon: "fas fa-globe",
    },
    {
      title: "Cost-Effective Growth",
      description:
        "Achieve up to 25% cost savings with our scalable training models, designed for maximum impact.",
      icon: "fas fa-wallet",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Chief HR Officer",
      role: "Tech Industry",
      quote:
        "This partnership transformed our workforce, reducing onboarding time by 40% and boosting project delivery speed.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Academic Director",
      role: "Higher Education",
      quote:
        "The tailored programs delivered exceptional results, with 85% of our students securing top-tier tech roles.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Startup Founder",
      role: "Innovation Sector",
      quote:
        "The flexible training solutions helped our team scale rapidly, driving a 30% increase in operational efficiency.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  useEffect(() => {
    const animateStats = () => {
      const partnersTarget = 75;
      const traineesTarget = 10000;
      const countriesTarget = 15;
      let partners = 0,
        trainees = 0,
        countries = 0;

      const timer = setInterval(() => {
        if (partners < partnersTarget) partners += 1;
        if (trainees < traineesTarget) trainees += 100;
        if (countries < countriesTarget) countries += 1;

        setStats({ partners, trainees, countries });

        if (
          partners >= partnersTarget &&
          trainees >= traineesTarget &&
          countries >= countriesTarget
        ) {
          clearInterval(timer);
          setStats({
            partners: partnersTarget,
            trainees: traineesTarget,
            countries: countriesTarget,
          });
        }
      }, 30);
    };
    animateStats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection />
      <WhyPartnerSection
        currentBenefit={currentBenefit}
        setCurrentBenefit={setCurrentBenefit}
        benefits={benefits}
      />
      <StatsSection stats={stats} />
      <PartnersSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection
        currentBenefit={currentBenefit}
        setCurrentBenefit={setCurrentBenefit}
        testimonials={testimonials}
      />
      <CtaSection />
      <ContactSection showToast={showToast} />
    </div>
  );
};

export default BusinessPartnership;