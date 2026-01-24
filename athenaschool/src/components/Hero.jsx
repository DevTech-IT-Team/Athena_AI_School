import React from 'react';
import { Brain, Settings, Target, Headset, MessageCircleQuestion } from 'lucide-react';
import heroImage from '../assets/gemini.webp (2).webp';
import OptimizedImage from './OptimizedImage';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden flex items-center justify-center font-sans">

      {/* --- Background Effects (Optimized) --- */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-blue-900/5 to-black/5 z-0"></div>
      
      {/* Abstract Grid/Dots Pattern (Optimized) */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #1e3a8a 1px, transparent 1px)', 
             backgroundSize: '50px 50px',
             willChange: 'transform'
           }}>
      </div>

      {/* Decorative Side Lines (Bottom Left) */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-50">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" stroke="#1e3a8a" strokeWidth="2">
          <path d="M190 140 L150 100 L50 100 L10 60" />
          <path d="M140 140 L110 110" />
          <path d="M80 140 L60 120" />
          <circle cx="10" cy="60" r="3" fill="#1e3a8a" />
        </svg>
      </div>

      {/* Vertical Dotted Line (Left & Right) */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-1 border-l-2 border-dotted border-blue-950/20 hidden md:block"></div>
      <div className="absolute right-6 top-1/4 bottom-1/4 w-1 border-r-2 border-dotted border-blue-950/20 hidden md:block"></div>

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-6 py-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* --- Left Column: Text --- */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-950 tracking-tight drop-shadow-lg ml-4 lg:ml-8">
            Athena AI School
          </h1>
          <div className="h-1 w-32 bg-blue-950 my-4 rounded-full lg:hidden"></div>
          <p className="text-lg md:text-2xl text-blue-800 tracking-widest font-light uppercase mt-2 ml-4 lg:ml-8">
            Find your path
          </p>
          
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl ml-4 lg:ml-8">
            PERSONALIZED ONLINE SCHOOLING DESIGNED FOR THE MODERN LEARNER
          </p>
          
          <p className="text-sm md:text-base text-gray-500 mt-3 max-w-xl ml-4 lg:ml-8">
            Experience education tailored to your child's unique needs, interests, and learning style. Our AI-powered platform adapts to create a perfect learning journey.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 ml-8 lg:ml-16 mb-8">
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Enquire Now
            </button>
            <button className="px-8 py-3 bg-blue-950/10 hover:bg-blue-950/20 border border-blue-950/30 rounded-full text-blue-950 backdrop-blur-md transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* --- Right Column: Robot & Icons --- */}
        <div className="relative flex justify-center items-center">

          {/* The Glowing Rings Background (Optimized) */}
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-blue-950/5 rounded-full"></div>
          <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] border border-blue-950/10 rounded-full"></div>
          
          {/* Main Gemini Image */}
          <OptimizedImage 
            src={heroImage} 
            alt="Athena AI School" 
            className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
            width={400}
            height={400}
            priority={true}
            loading="eager"
            fetchpriority="high"
          />

          {/* Floating Icons - Properly aligned in circular formation */}
          <FloatingIcon icon={<Brain size={20} />} position="top-1/9 left-30 -translate-x-1/2.5 -translate-y-1/2" delay="0s" />
          <FloatingIcon icon={<Settings size={20} />} position="top-0 left-1/2 -translate-x-1/2 -translate-y-full" delay="1s" />
          <FloatingIcon icon={<Target size={20} />} position="top-1/9 right-35 translate-x-1/2 -translate-y-1/2" delay="2s" />
          <FloatingIcon icon={<Headset size={20} />} position="bottom-1/2 right-25 translate-x-1/2 translate-y-1/2" delay="1.5s" />
          <FloatingIcon icon={<MessageCircleQuestion size={20} />} position="bottom-1/2 left-14 translate-x-1/2 translate-y-1/2" delay="2.5s" />

        </div>

      </div>
    </section>
  );
};

// Helper Component for the floating bubbles (Optimized)
const FloatingIcon = ({ icon, position, delay }) => {
  return (
    <div 
      className={`absolute ${position} w-10 h-10 md:w-12 md:h-12 bg-blue-950/5 border border-blue-950/20 rounded-full flex items-center justify-center text-blue-950 z-20`}
    >
      {icon}
    </div>
  );
};

export default Hero;