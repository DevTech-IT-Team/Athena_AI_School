import React, { memo } from "react";
import { ArrowRight, BookOpen, Globe, GraduationCap } from "lucide-react";
import heroImage from "../assets/gemini.webp (2).webp";

const Hero = memo(() => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF9F2]">

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl" />

      {/* Hero Container */}
      <div className="relative container mx-auto px-6 lg:px-12 py-20 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Admissions Open for 2027-28
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#142B59] leading-tight tracking-tight">

              Online School for

              <span className="block text-blue-600">
                Nursery to Grade 12
              </span>

              <span className="block text-[#142B59] text-3xl sm:text-4xl lg:text-5xl mt-3">
                Wherever You Live
              </span>

            </h1>

            {/* Accent */}
            <div className="w-20 h-1.5 bg-yellow-400 rounded-full my-6 mx-auto lg:mx-0" />

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">

              Edulectual K12 Online School is a fully online school for
              children from Nursery to Grade 12. Your child learns from
              home with qualified teachers in live online classes,
              follows one clear curriculum and works towards recognised
              qualifications.

            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4 max-w-xl mx-auto lg:mx-0">

              Choose the Pearson Edexcel British pathway or the Indian
              curriculum pathway with NIOS examinations. A structured
              school day, real teachers and a curriculum that travels
              with your family.

            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

              {/* Trial Button */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-[#142B59] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Book a free 2-week trial
                <ArrowRight size={18} />
              </a>

              {/* Apply Button */}
              <a
                href="/apply-now"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#142B59] hover:bg-blue-900 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Apply for 2027-28
                <ArrowRight size={18} />
              </a>

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

              {/* Feature 1 */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">

                <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                  <GraduationCap size={22} />
                </div>

                <div className="text-left">
                  <p className="text-sm font-bold text-[#142B59]">
                    Nursery–12
                  </p>
                  <p className="text-xs text-gray-500">
                    Complete schooling
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">

                <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                  <BookOpen size={22} />
                </div>

                <div className="text-left">
                  <p className="text-sm font-bold text-[#142B59]">
                    Two Pathways
                  </p>
                  <p className="text-xs text-gray-500">
                    British & Indian
                  </p>
                </div>

              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">

                <div className="w-11 h-11 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
                  <Globe size={22} />
                </div>

                <div className="text-left">
                  <p className="text-sm font-bold text-[#142B59]">
                    Global Learning
                  </p>
                  <p className="text-xs text-gray-500">
                    Learn from anywhere
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT – IMAGE */}
          <div className="relative flex items-center justify-center">

            {/* Background Shape */}
            <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-100 rounded-full opacity-60" />

            {/* Decorative Circle */}
            <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] border-2 border-blue-200 rounded-full" />

            {/* Image */}
            <img
              src={heroImage}
              alt="Students learning online with Edulectual K12"
              className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain drop-shadow-xl"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />

            {/* Floating Badge */}
            <div className="absolute top-5 right-0 sm:right-5 z-20 bg-white rounded-2xl shadow-lg px-5 py-4">

              <p className="text-xs text-gray-500 font-medium">
                Academic Year
              </p>

              <p className="text-xl font-bold text-[#142B59]">
                2027–28
              </p>

              <p className="text-xs text-green-600 font-semibold">
                Admissions Open
              </p>

            </div>

            {/* Floating Trial Badge */}
            <div className="absolute bottom-5 left-0 sm:left-5 z-20 bg-white rounded-2xl shadow-lg px-5 py-4">

              <p className="text-sm font-bold text-[#142B59]">
                Start with a free trial
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Experience a real online class
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
});

export default Hero;