import React, { memo } from 'react';

const FollowHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f2f6ff] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#ffe8c5] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c9f0e8] rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-700">
                FLOWW Learning Programme
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-[#14234f] mb-6">
              k12onlineschool
              <span className="block text-blue-600 mt-2">
                Learning FLOWW
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-base sm:text-lg font-bold text-teal-700 mb-5 tracking-wide">
              Fundamental Learning of Working Ways
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
              Foundational and future skills for learners who want to grow
              beyond the classroom. k12onlineschool FLOWW prepares children
              with strong foundational and future skills without requiring
              them to leave the comfort of their existing schools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-3 bg-[#f5c542] hover:bg-yellow-400 text-[#14234f] px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300"
              >
                Explore Programmes
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white border border-blue-200 hover:border-blue-600 text-[#14234f] px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300"
              >
                Get Started
              </a>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">

            {/* Outer Decorative Shape */}
            <div className="absolute w-[90%] h-[80%] bg-[#f6c34a] rounded-[45%_55%_50%_50%] rotate-[-8deg]" />

            {/* Middle Shape */}
            <div className="absolute w-[85%] h-[75%] bg-teal-600 rounded-[55%_45%_45%_55%] rotate-[5deg]" />

            {/* Inner Shape */}
            <div className="relative w-[80%] h-[70%] bg-white rounded-[50%] overflow-hidden shadow-xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-teal-100" />

              {/* FLOWW Illustration Placeholder */}
              <div className="relative z-10 text-center px-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-blue-600 flex items-center justify-center shadow-lg mb-5">
                  <span className="text-white text-3xl sm:text-4xl font-black">
                    F
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14234f]">
                  Learn
                </h3>

                <p className="text-sm sm:text-base text-slate-500 mt-2">
                  Grow · Explore · Master
                </p>
              </div>
            </div>

            {/* Floating Info Card 1 */}
            <div className="absolute top-8 left-0 sm:left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 max-w-[220px]">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-600 text-lg">✦</span>
              </div>

              <div>
                <p className="text-xs font-bold text-[#14234f]">
                  Personalised learning
                </p>
                <p className="text-[10px] text-slate-500">
                  Learn at your own pace
                </p>
              </div>
            </div>

            {/* Floating Info Card 2 */}
            <div className="absolute bottom-8 right-0 sm:right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 max-w-[220px]">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <span className="text-teal-700 text-lg">✓</span>
              </div>

              <div>
                <p className="text-xs font-bold text-[#14234f]">
                  Skill development
                </p>
                <p className="text-[10px] text-slate-500">
                  Build future-ready skills
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FollowHero);