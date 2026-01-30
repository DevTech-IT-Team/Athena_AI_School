import React from 'react';
import alesiaImage from '../assets/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg';

const PhilosophySection = () => {
  const content = {
    philosophy: {
      title: "Different Minds, Different Goals",
      subtitle: "One Tailored Path to Success",
      description: "Our alumni are proof that unique journeys lead to extraordinary destinations. From diverse goals to tailored paths, Athena AI School online learners have gone on to thrive in top colleges and careers, showcasing the power of personalized inclusive education."
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-12 overflow-hidden relative">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={alesiaImage} 
          alt="Education Background" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-950/20"></div>
      </div>

      {/* MAIN CARD CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl bg-white shadow-2xl min-h-[600px] flex">
        
        {/* LEFT SIDE TAB */}
        <div className="absolute left-0 top-12 md:top-20 -ml-4 md:-ml-8 z-20">
          <div className="bg-sky-400 text-blue-950 py-8 px-3 md:px-5 shadow-lg flex items-center justify-center">
             {/* Vertical Text */}
            <span className="block font-bold text-sm md:text-xl tracking-widest uppercase ">
              Our Philosophy
            </span>
          </div>
          {/* Detailed triangle fold for 3D effect */}
          <div className="w-0 h-0 border-t-[16px] border-t-sky-600 border-l-[16px] border-l-transparent absolute top-full right-0"></div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 p-8 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
           
           {/* Subtle background decoration inside the card */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full opacity-50 pointer-events-none"></div>

            {/* HEADER */}
            <div className="mb-12 relative z-10">
                <h3 className="text-sky-500 uppercase tracking-widest font-bold mb-4 text-sm md:text-base">
                    Why We Do It
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold text-blue-950 leading-tight">
                    {content.philosophy.title}
                </h2>
                <h3 className="text-2xl md:text-4xl font-light text-sky-500 mt-3">
                    {content.philosophy.subtitle}
                </h3>
                <div className="w-24 h-1.5 bg-blue-950 mx-auto mt-8"></div>
            </div>

            {/* DESCRIPTION TEXT */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto relative z-10">
                {content.philosophy.description}
            </p>

        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
