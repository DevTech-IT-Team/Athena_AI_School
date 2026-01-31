import React, { memo, useState, useEffect } from 'react';
import { Brain, Settings, Target, Headset, MessageCircleQuestion } from 'lucide-react';

const Hero = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Use a smaller, optimized version for initial load
    const smallImage = new Image();
    smallImage.src = '/src/assets/gemini.webp%20(2).webp';
    smallImage.onload = () => {
      setImageSrc(smallImage.src);
      setImageLoaded(true);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden flex items-center justify-center font-sans" style={{ contain: 'layout style paint' }}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/3 via-blue-900/3 to-black/3 z-0"></div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left Column: Text */}
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

        {/* Right Column: Robot & Icons */}
        <div className="relative flex justify-center items-center">
          {/* The Glowing Rings Background */}
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-blue-950/5 rounded-full"></div>
          <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] border border-blue-950/10 rounded-full"></div>
          
          {/* Main Gemini Image with optimized loading */}
          <div className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl">
            {!imageLoaded && (
              <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg animate-pulse"></div>
            )}
            {imageSrc && (
              <img 
                src={imageSrc} 
                alt="Athena AI School" 
                className="w-full h-auto object-contain transition-opacity duration-300"
                style={{ opacity: imageLoaded ? 1 : 0 }}
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            )}
          </div>

          {/* Floating Icons - Optimized with reduced animations */}
          <div className="absolute top-10 left-10 w-10 h-10 md:w-12 md:h-12 bg-blue-950/5 border border-blue-950/20 rounded-full flex items-center justify-center text-blue-950 z-20">
            <Brain size={20} />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-10 h-10 md:w-12 md:h-12 bg-blue-950/5 border border-blue-950/20 rounded-full flex items-center justify-center text-blue-950 z-20">
            <Settings size={20} />
          </div>
          <div className="absolute top-10 right-10 w-10 h-10 md:w-12 md:h-12 bg-blue-950/5 border border-blue-950/20 rounded-full flex items-center justify-center text-blue-950 z-20">
            <Target size={20} />
          </div>
          <div className="absolute bottom-20 right-10 w-10 h-10 md:w-12 md:h-12 bg-blue-950/5 border border-blue-950/20 rounded-full flex items-center justify-center text-blue-950 z-20">
            <Headset size={20} />
          </div>
          <div className="absolute bottom-20 left-10 w-10 h-10 md:w-12 md:h-12 bg-blue-950/5 border border-blue-950/20 rounded-full flex items-center justify-center text-blue-950 z-20">
            <MessageCircleQuestion size={20} />
          </div>
        </div>

      </div>
    </section>
  );
});

export default Hero;
