import React from 'react';
import HeroSection from './HeroSection';
import ServicesListSection from './ServicesListSection';
import CtaSection from './CtaSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServicesListSection />
      <CtaSection />
    </div>
  );
};

export default Services;