import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const ProgramHighlight = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* DECORATIVE GRID LINES (Thin lines characteristic of the reference design) */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-slate-200 hidden lg:block"></div>
        <div className="absolute top-0 right-1/4 h-full w-px bg-slate-200 hidden lg:block"></div>
        <div className="absolute top-1/3 w-full h-px bg-slate-200"></div>

        <div className="grid lg:grid-cols-12 gap-12 relative z-10">
          
          {/* LEFT COLUMN: Large Number & Text Block */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* 1. Large Serif Number */}
            <h1 className="text-[120px] leading-none font-serif text-blue-950 opacity-100 font-medium mb-[-20px] z-20 mix-blend-multiply">
              NO. 1
            </h1>

            {/* 2. Title Section */}
            <div className="relative z-10 pl-4">
              <h2 className="text-4xl font-serif text-blue-950 mb-6">
                Personalized <br />
                <span className="italic text-sky-600">Mentorship</span>
              </h2>
              
              {/* Decorative short line */}
              <div className="w-16 h-1 bg-blue-950 mb-8"></div>
            </div>

            {/* 3. Dark Blue Content Box (Overlapping style) */}
            <div className="bg-blue-950 text-white p-8 md:p-12 shadow-2xl relative lg:-mr-20 z-20 mt-8">
              <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                The Athena Method
              </span>
              <h3 className="text-xl font-bold mb-4">1-on-1 Academic Guidance</h3>
              <p className="text-blue-100/80 leading-relaxed text-sm mb-6">
                Unlike traditional schools, every student is paired with a dedicated success mentor. We monitor progress weekly, adjust learning paths in real-time, and ensure no student is ever left behind.
              </p>
              <button className="group flex items-center gap-2 text-sky-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wide">
                Meet our mentors
                <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Bottom Abstract Text Box */}
            <div className="mt-12 pl-4 border-l-2 border-sky-200">
               <h4 className="font-bold text-blue-950 text-sm uppercase mb-2">Global Standards</h4>
               <p className="text-slate-500 text-xs leading-loose max-w-xs">
                 Our mentorship program is aligned with UK teaching standards, providing pastoral care that rivals top physical boarding schools.
               </p>
            </div>
          </div>


          {/* RIGHT COLUMN: Image & Offset Composition */}
          <div className="lg:col-span-7 relative pt-12 lg:pt-24">
            
            {/* Background Color Block (The "Sky Blue" rectangle behind the image) */}
            <div className="absolute top-0 right-0 w-3/4 h-[80%] bg-sky-50 -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] shadow-2xl overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop" 
                 alt="Student studying with mentor" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               
               {/* Image Overlay Gradient */}
               <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Floating "Quote" or "Stat" Box (Overlapping the image) */}
            <div className="absolute bottom-12 left-0 lg:-left-12 bg-white p-8 shadow-xl max-w-xs border-t-4 border-sky-500">
               <div className="text-4xl text-sky-200 absolute top-4 left-4 font-serif">"</div>
               <p className="text-slate-700 italic text-sm relative z-10 pt-4">
                 The personalized attention my daughter receives is unmatched. She has never been more confident.
               </p>
               <div className="mt-4 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="Parent" />
                 </div>
                 <div className="text-xs">
                    <p className="font-bold text-blue-950">Sarah Jenkins</p>
                    <p className="text-slate-400">Parent, Year 9 Student</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlight;