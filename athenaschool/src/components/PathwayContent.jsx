import React from 'react';
import { GraduationCap } from 'lucide-react';
import AthenaFeatureSection from './AthenaFeatureSection';
import PhilosophySection from './PhilosophySection';
import AccreditationUISection from './AccreditationUISection';
import OurPrograms from './OurPrograms';
import ClassSelection from './ClassSelection';
import BlogCards from './BlogCards';
import ParentTestimonials from './ParentTestimonials';
import HeroSection from './HeroSection';
import FAQSection from './FAQSection';
import { pathwayContent } from '../data/pathwayContent';

const AthenaElegantLayout = () => {
  return (
    <div className="font-sans text-blue-950 bg-white">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <HeroSection hero={pathwayContent.hero} />

      {/* ---------------- ATHENA FEATURE SECTION ---------------- */}
      <AthenaFeatureSection />

      {/* ---------------- PHILOSOPHY SECTION ---------------- */}
      <PhilosophySection />

      {/* ---------------- ACCREDITATION UI SECTION ---------------- */}
      <AccreditationUISection />

      {/* ---------------- OUR PROGRAMS SECTION ---------------- */}
      <OurPrograms />

      {/* ---------------- CLASS SELECTION SECTION ---------------- */}
      <ClassSelection />

      {/* ---------------- BLOG CARDS ---------------- */}
      <BlogCards />

      {/* ---------------- PARENT TESTIMONIALS ---------------- */}
      <ParentTestimonials />

      {/* ---------------- FAQS ---------------- */}
      <FAQSection />

    </div>
  );
};

export default AthenaElegantLayout;