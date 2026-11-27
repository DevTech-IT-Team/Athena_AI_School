import React from 'react';
import LazyImage from './LazyImage';
import alesiaImage from '/assets/images/heroes/alesia.webp';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[650px] md:min-h-screen overflow-hidden bg-slate-900 font-sans">

      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src={alesiaImage}
          alt="Edulectual K12 Online School"
          className="w-full h-full object-cover opacity-50"
        />

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-950/50 mix-blend-multiply"></div>
      </div>

      {/* 2. Main Geometric Overlay */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-sky-400/95 z-10"
        style={{
          clipPath: "polygon(35% 0%, 100% 0, 100% 100%, 0% 100%)"
        }}
      >
        {/* Gradient Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-500"></div>
      </div>

      {/* 3. Decorative Geometric Accents */}

      {/* Top Left White Triangle */}
      <div className="absolute top-0 left-[20%] w-32 h-32 bg-white z-20 shadow-lg transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

      {/* Bottom Left Accent */}
      <div
        className="absolute bottom-0 left-0 w-[40%] h-[30%] bg-blue-950/20 z-[15]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 0 0)"
        }}
      ></div>

      {/* Bottom Left White Triangle */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white z-20 transform translate-y-1/2 -translate-x-1/2 rotate-45"></div>

      {/* 4. Content Container */}
      <div className="relative z-30 container mx-auto px-6 py-24 md:py-20 min-h-[650px] md:min-h-screen flex flex-col justify-center items-end text-right">

        <div className="max-w-3xl mt-10 md:mt-0 mr-2 md:mr-10 lg:mr-16">

          {/* Admissions Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 text-blue-950 px-5 py-2 rounded-full text-sm font-semibold shadow-md mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Admissions Open for 2027-28
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-950 leading-tight mb-5 tracking-tight">

            Online School for

            <span className="block text-white">
              Nursery to Grade 12
            </span>

          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-950 font-medium mb-6">
            Wherever You Live
          </h2>

          {/* Main Description */}
          <p className="text-sm sm:text-base md:text-lg text-blue-950/90 mb-6 leading-relaxed max-w-2xl ml-auto">

            Edulectual K12 Online School is a fully online school for
            children from Nursery to Grade 12. Your child learns from
            home with qualified teachers in live online classes,
            follows one clear curriculum and works towards recognised
            qualifications.

          </p>

          {/* Pathways Description */}
          <p className="text-sm sm:text-base text-blue-950/80 mb-8 leading-relaxed max-w-2xl ml-auto">

            Choose the Pearson Edexcel British pathway or the Indian
            curriculum pathway with NIOS examinations. Learn from
            anywhere with a structured school day and live online
            teaching.

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end mb-8">

            {/* Trial Button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Book a free 2-week trial
              <ArrowRight size={18} />
            </a>

            {/* Apply Button */}
            <a
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-950 hover:bg-blue-900 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Apply for 2027-28
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Accent Line */}
          <div className="w-24 h-2 bg-blue-950 ml-auto rounded-full"></div>

        </div>
      </div>

    </section>
  );
};

export default React.memo(HeroSection);