import React from 'react';
import { GraduationCap, Globe, ShieldCheck, Users } from 'lucide-react';

const AffordableAccredited = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
      <div className="max-w-7xl w-full relative">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative mt-20 md:mt-0">
          
          {/* Left Side: Image (Overlapping) */}
          <div className="md:col-span-5 relative z-20">
            <div className="relative h-[500px] w-full md:w-[90%] rounded-sm overflow-hidden shadow-2xl border-4 border-slate-950">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                alt="Student using online learning platform" 
                className="object-cover w-full h-full"
              />
              {/* Decorative outline box behind image for style */}
              <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-sky-500/30 rounded-sm hidden md:block"></div>
            </div>
          </div>

          {/* Right Side: The "Blue Block" (Content) */}
          <div className="md:col-span-12 md:absolute md:bottom-10 md:right-0 md:w-[75%] bg-sky-900 rounded-sm p-8 md:pl-48 md:pr-12 md:py-16 shadow-xl z-0">
            
            {/* Header inside the blue box */}
            <div className="mb-8">
              <p className="text-sky-400 uppercase tracking-widest text-xs font-semibold mb-2">
                Affordable & Accredited
              </p>
              <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                AI-Powered Online <br /> School in Delhi
              </h1>
            </div>
            
            {/* Mobile Header (Visible only on small screens) */}
            <div className="block md:hidden mb-8">
              <p className="text-sky-400 uppercase tracking-widest text-xs font-semibold mb-2">
                Affordable & Accredited
              </p>
              <h1 className="text-3xl font-serif text-white leading-tight">
                AI-Powered Online School in Delhi
              </h1>
            </div>

            {/* Content Highlights - Mimicking the 4 circles in the reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-sky-300 font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sky-200 text-lg mb-1">Grade Levels</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Nursery to Grade 12 education supported by expert teachers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-sky-300 font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sky-200 text-lg mb-1">Global Curricula</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We offer recognised Indian and British curricula for students aged 3–18.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-sky-300 font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sky-200 text-lg mb-1">Future-Ready</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Experience flexible learning with personalised AI learning paths.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-sky-300 font-bold text-lg">04</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sky-200 text-lg mb-1">Virtual Classrooms</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Safe, engaging environments to help students reach full potential from home.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA / Footer of card */}
            <div className="mt-10 border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
               <p className="text-sky-100 italic text-sm">
                 Empowering students to learn from home.
               </p>
               <button className="px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded transition-colors duration-300 flex items-center gap-2">
                 Learn more about us
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
               </button>
            </div>

          </div>
        </div>
        
        {/* Footer mark (from original image) */}
        <div className="absolute bottom-2 right-0 text-slate-600 text-xs hidden md:block">
           © 2024 ONLINE SCHOOL
        </div>
      </div>
    </div>
  );
};

export default AffordableAccredited;