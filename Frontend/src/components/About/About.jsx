import React from 'react';
import HeroSection from './HeroSection ';
import MissionSection from './MissionSection';
import TimelineSection from './TimelineSection';
import ImpactSection from './ImpactSection';
import CtaSection from './CtaSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <MissionSection />
      <TimelineSection />
      <ImpactSection />
      <CtaSection />
    </div>
  );
};

export default About;