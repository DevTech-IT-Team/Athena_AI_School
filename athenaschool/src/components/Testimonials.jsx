import React from 'react';
import backgroundImage from '../assets/bg.webp';
import successStoryImage from '../assets/optimized/relxro.webp';
import { Users as UsersIcon, ArrowRight } from 'lucide-react';

// No testimonial data - CTA only component

const Testimonials = () => {
  return (
    <section className="relative min-h-[120vh] bg-white overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>

      <div className="relative w-full">
        {/* Header Section - CTA Focus */}
        <div className="text-center mb-16 lg:mb-20 relative rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 px-8 py-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              <span className="block text-black italic">Join Our</span>
              <span className="text-black italic">
                Learning Community
              </span>
            </h1>
            
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Start your child's educational journey with world-class online learning.
            </p>
          </div>
          
          {/* Background Image Section */}
          <div 
            className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: -1
            }}
          >
            <img 
              src={successStoryImage} 
              alt="Success Story" 
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 90vw, 960px"
              width="1200"
              height="800"
              className="max-w-2xl mx-auto h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* --- BACKGROUND GLOWING ARCS (The Design Element) --- */}
      
      {/* Left Glowing Arc */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border-[20px] border-sky-500/10 blur-xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Right Glowing Arc */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full border-[20px] border-blue-600/10 blur-xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* -------------------------------------------------- */}

      <div className="relative z-10 w-full px-6 text-center">
        
        {/* Optional "Badge" at the top like the reference image */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700/50 backdrop-blur-md mb-16">
            <span className="text-sm font-bold text-white uppercase tracking-wide">
                Admissions Open for 2026
            </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6 tracking-tight">
          Start Your Child's Success Story
        </h2>
        
        {/* Supporting Subheading */}
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Join thousands of successful students who have found their perfect learning path with us. Experience world-class British education from home.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          
          {/* Primary Button (Gradient) */}
          <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-sky-500/30 transition-all duration-300 hover:scale-105 hover:shadow-sky-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ring-offset-white">
            <span>Start Free Trial</span>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Secondary Button (Outline/Glass) */}
          <button className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-950/5 backdrop-blur-sm text-blue-950 font-bold text-lg rounded-full border border-blue-950/10 hover:bg-blue-950/10 hover:border-blue-950/30 transition-all duration-300">
            <span>Schedule a Demo</span>
            <ArrowRight className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
        </div>

        {/* Trust/Social Proof Text */}
        <p className="mt-10 text-sm text-gray-500 font-medium">
            No credit card required for trial • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default Testimonials;