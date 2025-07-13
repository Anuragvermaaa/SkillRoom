// import React from 'react';
// import HeroSection from './HeroSection';
// import MissionSection from './MissionSection';
// import JobOpeningsSection from './JobOpeningsSection';
// import CtaSection from './CtaSection';
// import CvDropSection from './CvDropSection';

// const Careers = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <HeroSection />
//       <MissionSection />
//       <JobOpeningsSection />
//       <CtaSection />
//       <CvDropSection />
//     </div>
//   );
// };

// export default Careers;

import React from "react";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import JobOpeningsSection from "./JobOpeningsSection";
import CtaSection from "./CtaSection";
import CvDropSection from "./CvDropSection";

const Careers = ({ showToast }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <MissionSection />
      <JobOpeningsSection />
      <CtaSection />
      <CvDropSection showToast={showToast} />
    </div>
  );
};

export default Careers;