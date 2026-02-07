import React from 'react';
import { GraduationCap, Globe, ShieldCheck, Users } from 'lucide-react';
import robotScene from '../assets/optimized/cartoon-ai-robot-scene (2).webp';

const AffordableAccredited = () => {
  return (
    <div className="min-h-screen bg-sky-600 flex items-center justify-center p-6 md:p-12 font-sans">
      <div className="max-w-7xl w-full relative">

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative mt-12 md:mt-0">

          {/* Left Side: Image */}
          {/* Aligned to the bottom (items-end on parent) so it overlaps the bottom-left of the taller text card */}
          <div className="md:col-span-5 md:row-start-1 md:col-start-1 relative z-20">
            <div className="relative h-[500px] w-full md:w-[90%] rounded-sm overflow-hidden shadow-2xl border-4 border-slate-950">
              <img
                src={robotScene}
                alt="AI Robot Scene - Athena AI School"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
              />
              {/* Decorative outline box */}
              <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-sky-500/30 rounded-sm hidden md:block"></div>
            </div>
          </div>

          {/* Right Side: The "Blue Block" (Content) */}
          {/* Now contains the Header Text, so the bg-blue-100 covers everything */}
          <div className="md:col-span-9 md:col-start-4 md:row-start-1 bg-blue-100 rounded-sm p-8 md:pl-48 md:pr-12 md:py-20 shadow-xl z-10 w-full">

            {/* Header Text - Now inside the blue block (Visible on all screens) */}
            <div className="mb-12">
              <p className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-2">
                Affordable & Accredited
              </p>
              <h1 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                AI-Powered Online School in Delhi
              </h1>
            </div>

            {/* Content Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 text-gray-900">

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-blue-600 font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 text-lg mb-2">Grade Levels</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Nursery to Grade 12 education supported by expert teachers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-blue-600 font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 text-lg mb-2">Global Curricula</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We offer recognised Indian and British curricula for students aged 3–18.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-blue-600 font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 text-lg mb-2">Future-Ready</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Experience flexible learning with personalised AI learning paths.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <span className="text-blue-600 font-bold text-lg">04</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 text-lg mb-2">Virtual Classrooms</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Safe, engaging environments to help students reach full potential from home.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA / Footer */}
            <div className="mt-12 border-t border-blue-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 italic text-sm">
                Empowering students to learn from home.
              </p>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded transition-colors duration-300 flex items-center gap-2">
                Learn more about us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AffordableAccredited;