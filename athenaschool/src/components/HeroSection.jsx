import React from 'react';
import alesiaImage from '../assets/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg';

const HeroSection = ({ hero }) => {
  return (
    <section className="relative w-full h-[600px] md:h-screen overflow-hidden bg-slate-900 font-sans">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={alesiaImage} 
          alt="Education Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div>
      </div>

      {/* 2. The Main Geometric Overlay */}
      <div 
        className="absolute top-0 right-0 w-full h-full bg-sky-400/95 z-10"
        style={{
          clipPath: "polygon(35% 0%, 100% 0, 100% 100%, 0% 100%)"
        }}
      >
        {/* Texture/Gradient detail */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-500 opacity-100"></div>
      </div>

      {/* 3. Decorative Geometric Accents */}
      
      {/* Top Left White Triangle */}
      <div className="absolute top-0 left-[20%] w-32 h-32 bg-white z-20 shadow-lg transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

      {/* Bottom Left Accent */}
      <div 
        className="absolute bottom-0 left-0 w-[40%] h-[30%] bg-blue-950/20 z-15"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
      ></div>
      
      {/* Bottom Left White Triangle Accent */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white z-20 transform translate-y-1/2 -translate-x-1/2 rotate-45"></div>

      {/* 4. Content Container */}
      <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center items-end text-right">
        
        <div className="max-w-2xl mt-10 md:mt-0 mr-4 md:mr-10">
          
          {/* Main Title */}
          <h1 
            className="text-5xl md:text-7xl font-bold text-blue-950 mb-4 tracking-tight"
            data-aos="fade-up"
          >
            {hero.title}
          </h1>

          {/* Subheading / Tagline */}
          <h2 
            className="text-2xl md:text-4xl text-blue-900 font-light mb-8"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            {hero.schoolName}
          </h2>

          {/* Paragraph Text */}
          <p 
            className="text-sm md:text-base text-blue-900/80 mb-8 leading-relaxed max-w-lg ml-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {hero.subtitle}
          </p>

          {/* The Thick Accent Line */}
          <div 
            className="w-24 h-2 bg-blue-950 ml-auto rounded-sm" 
            data-aos="fade-up" 
            data-aos-delay="300"
          ></div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
