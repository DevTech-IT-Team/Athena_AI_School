import React from 'react';

const FollowHero = () => {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center bg-white p-8 md:p-16">
      {/* Framing Container */}
      <div className="relative flex max-w-5xl flex-col items-center justify-center px-10 py-24 text-center md:px-24">
        
        {/* Corner Brackets */}
        {/* Top Left */}
        <div className="absolute left-0 top-0 h-28 w-28 border-l-2 border-t-2 border-blue-950 md:h-36 md:w-36" />
        {/* Top Right */}
        <div className="absolute right-0 top-0 h-28 w-28 border-r-2 border-t-2 border-blue-950 md:h-36 md:w-36" />
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 h-28 w-28 border-b-2 border-l-2 border-blue-950 md:h-36 md:w-36" />
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 h-28 w-28 border-b-2 border-r-2 border-blue-950 md:h-36 md:w-36" />

        {/* Content */}
        <div className="z-10 flex flex-col items-center gap-5">
          <h1 className="text-4xl font-bold tracking-tight text-blue-950 md:text-6xl lg:text-7xl">
            WisdomAI Learning FLOWW
          </h1>
          
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300 md:text-lg">
            Fundamental Learning of Working Ways
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-blue-950/80 md:text-base">
            Foundational & future skills for learners who want to grow beyond the classroom. 
            WisdomAI FLOWW prepares children with strong foundational and future skills without 
            requiring them to leave the comfort of their existing schools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FollowHero);