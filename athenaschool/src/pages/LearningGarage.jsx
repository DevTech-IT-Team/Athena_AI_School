import React from 'react';
import LearningGarageNavbar from '../components/LearningGarage/LearningGarageNavbar';
import LearningGarageHero from '../components/LearningGarage/LearningGarageHero';
import LearningGarageAbout from '../components/LearningGarage/LearningGarageAbout';
import LearningGaragePrograms from '../components/LearningGarage/LearningGaragePrograms';
import LearningGarageBenefits from '../components/LearningGarage/LearningGarageBenefits';
import LearningGarageWho from '../components/LearningGarage/LearningGarageWho';
import LearningGarageHow from '../components/LearningGarage/LearningGarageHow';
import LearningGarageGallery from '../components/LearningGarage/LearningGarageGallery';
import LearningGarageLocations from '../components/LearningGarage/LearningGarageLocations';
import LearningGaragePricing from '../components/LearningGarage/LearningGaragePricing';
import LearningGarageTestimonials from '../components/LearningGarage/LearningGarageTestimonials';
import LearningGarageFAQ from '../components/LearningGarage/LearningGarageFAQ';
import LearningGarageCTA from '../components/LearningGarage/LearningGarageCTA';
import LearningGarageFooter from '../components/LearningGarage/LearningGarageFooter';

const LearningGarage = () => {
  return (
    <div className="min-h-screen">
      <LearningGarageNavbar />
      <div id="home">
        <LearningGarageHero />
      </div>
      <div id="about">
        <LearningGarageAbout />
      </div>
      <div id="programs">
        <LearningGaragePrograms />
      </div>
      <div id="benefits">
        <LearningGarageBenefits />
      </div>
      <div id="who">
        <LearningGarageWho />
      </div>
      <div id="how">
        <LearningGarageHow />
      </div>
      <div id="gallery">
        <LearningGarageGallery />
      </div>
      <div id="locations">
        <LearningGarageLocations />
      </div>
      <div id="pricing">
        <LearningGaragePricing />
      </div>
      <div id="testimonials">
        <LearningGarageTestimonials />
      </div>
      <div id="faq">
        <LearningGarageFAQ />
      </div>
      <div id="contact">
        <LearningGarageCTA />
      </div>
      <LearningGarageFooter />
    </div>
  );
};

export default LearningGarage;
