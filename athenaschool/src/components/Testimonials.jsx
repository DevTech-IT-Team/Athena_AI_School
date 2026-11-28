import React from "react";
import backgroundImage from "../assets/bg.webp";
import successStoryImage from "../assets/optimized/relxro.webp";
import { ArrowRight, GraduationCap, BookOpen, Users } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2] py-20 md:py-28">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" />
              Admissions Open · 2027–28
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] leading-tight mb-6">
              Join Our
              <span className="block text-blue-600">
                Learning Community
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-8">
              A complete online school experience from Nursery to Grade 12,
              with live teachers, a structured school day and recognised
              learning pathways.
            </p>

            {/* Pathway Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="font-bold text-[#172554] mb-2">
                  British Pathway
                </h3>

                <p className="text-sm text-gray-600">
                  Pearson Edexcel curriculum with International GCSE
                  and International A Level.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>

                <h3 className="font-bold text-[#172554] mb-2">
                  Indian Pathway
                </h3>

                <p className="text-sm text-gray-600">
                  Indian curriculum pathway with NIOS examinations.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                Book a Free 2-Week Trial
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/apply-now"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-blue-600 text-blue-700 font-semibold bg-white hover:bg-blue-50 transition-all duration-300"
              >
                Apply for 2027–28
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden bg-white p-4 shadow-xl border border-white">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="relative z-10">
                <img
                  src={successStoryImage}
                  alt="Online learning at Edulectual K12"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  width="1200"
                  height="800"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-[#DFF5E8] rounded-2xl p-5 shadow-lg border border-green-100 max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-700" />
                </div>

                <div>
                  <p className="text-sm text-green-800 font-medium">
                    Full-time Online School
                  </p>
                  <p className="text-xs text-green-700">
                    Nursery to Grade 12
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FDE68A] rounded-full opacity-70 -z-10" />
          </div>
        </div>
      </div>

      {/* Admissions CTA */}
      <CTASection />
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="relative mt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#172554] via-blue-900 to-[#1E40AF] rounded-[2rem]" />

      {/* Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 px-6 py-16 md:py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
          <span className="text-sm font-semibold text-white">
            Admissions Open for 2027–28
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Give Your Child a School
          <span className="block text-blue-200">
            That Fits Your Family
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore our British and Indian learning pathways, meet our teachers
          and experience online school through a free 2-week trial class.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 rounded-full font-bold shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
          >
            Book a Free 2-Week Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/apply-now"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Apply for 2027–28
          </a>
        </div>

        {/* Launch Offer */}
        <p className="text-sm text-blue-200 mt-8">
          The ₹999 registration fee is waived during our launch.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;