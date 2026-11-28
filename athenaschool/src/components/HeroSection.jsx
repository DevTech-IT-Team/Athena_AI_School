import React from 'react';
import LazyImage from './LazyImage';
import alesiaImage from '/assets/images/heroes/alesia.webp';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1F0FF] font-sans">

      {/* Background Decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#FFE4D1] opacity-60 blur-[2px]" />

      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-[#BFE9E2] opacity-60" />

      {/* Decorative Dots */}
      <div
        className="absolute top-20 left-[45%] hidden md:block w-36 h-28 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#4F46E5 2px, transparent 2.5px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-24 md:pt-36 md:pb-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-left">

            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-blue-900 shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Admissions Open for 2027–28
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-[#172554] mb-6">
              Online School for Nursery to Grade 12,
              <span className="text-[#4F46E5]">
                {' '}Wherever You Live
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-5">
              Edulectual K12 Online School is a fully online school for children
              from Nursery to Grade 12. Your child learns from home with
              qualified teachers in live online classes, follows one clear
              curriculum and works towards recognised qualifications.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8">
              We offer two pathways, and each provides structured learning,
              personalised support and a flexible online school experience
              designed for your child's future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-8">

              {/* Free Trial */}
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FACC15] hover:bg-yellow-500 text-[#172554] font-bold rounded-full shadow-sm transition-all duration-300 hover:-translate-y-1"
              >
                Book a free 2-week trial
                <ArrowRight size={17} />
              </a>

              {/* Apply Button */}
              <a
                href="/apply-now"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#172554] text-[#172554] font-semibold rounded-full transition-all duration-300 hover:bg-[#172554] hover:text-white"
              >
                Apply for 2027–28
                <ArrowRight size={17} />
              </a>

            </div>

            {/* Country and Grade Tags */}
            <div className="flex flex-wrap gap-2.5">

              {[
                'India',
                'UAE',
                'Qatar',
                'UK',
                'USA',
                'Canada',
                'Australia',
                'Grades 1–5',
                'Grades 6–8',
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white text-slate-700 text-xs sm:text-sm font-semibold shadow-sm border border-white"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">

            {/* Gradient Ring */}
            <div className="absolute inset-0 scale-[1.03] rounded-[50%] bg-gradient-to-br from-[#2563EB] via-[#14B8A6] to-[#A855F7] blur-[1px]" />

            {/* Image Container */}
            <div className="relative w-full max-w-[550px] h-[350px] sm:h-[420px] lg:h-[480px] rounded-[50%] overflow-hidden border-[10px] border-[#F1F0FF] shadow-xl">

              <LazyImage
               src={alesiaImage}
               alt="Online learning"
               className="w-full h-64 rounded-2xl"
               objectFit="cover"
              />
                

            </div>

            {/* Floating Badge 1 */}
            <div className="absolute top-[8%] left-[-2%] sm:left-[-5%] z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-[#FFE4E9] flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_0_5px_rgba(244,63,94,0.15)]"></span>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  Live Online Classes
                </p>
                <p className="text-xs text-slate-500">
                  With qualified teachers
                </p>
              </div>

            </div>

            {/* Floating Badge 2 */}
            <div className="absolute bottom-[8%] right-[-2%] sm:right-[-5%] z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-[#FFF3D6] flex items-center justify-center text-xl">
                🎓
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  Nursery – Grade 12
                </p>
                <p className="text-xs text-slate-500">
                  Edexcel or NIOS
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[70px] md:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C240,100 480,20 720,50 C960,80 1200,20 1440,45 L1440,100 L0,100 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          section .grid {
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          section h1 {
            font-size: 2.3rem;
            line-height: 1.2;
          }

          section p {
            font-size: 15px;
          }

          section .grid {
            gap: 36px;
          }
        }
      `}</style>

    </section>
  );
};

export default React.memo(HeroSection);