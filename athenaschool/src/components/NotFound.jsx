import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Home, BookOpen } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F0F4FF] via-[#FFF7F2] to-[#EFFAF6] flex items-center justify-center px-6 py-20">

      {/* Decorative Background Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-[#F5C842] opacity-30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 bg-[#1D4ED8] opacity-20 rounded-full blur-3xl"></div>

      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#0F766E]/10"></div>

      {/* Main Content */}
      <div className="relative max-w-4xl w-full bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-14 text-center">

        {/* Brand Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFFAF6] rounded-full text-[#0F766E] text-sm font-bold mb-8">
          <BookOpen size={16} />
          Edulectual K12 Online School
        </div>

        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-8xl md:text-[10rem] font-extrabold leading-none text-[#1D4ED8]">
            404
          </h1>

          <span className="absolute top-0 right-[20%] md:right-[25%] text-4xl md:text-5xl">
            ✦
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#172554] mb-5">
          Oops! This page is off the map.
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-8 mb-10">
          It looks like the page you're looking for doesn't exist, has moved,
          or may have been renamed. Don't worry, let's get you back to learning!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F5C842] text-[#172554] font-bold hover:bg-[#EAB72B] transition-all duration-300 shadow-sm"
          >
            <Home size={18} />
            Back to Home
            <ArrowRight size={18} />
          </Link>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#1D4ED8] text-[#1D4ED8] font-bold hover:bg-blue-50 transition-all duration-300"
          >
            Contact Our Team
          </Link>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Admissions for <span className="font-bold text-[#172554]">2027-28</span> are open.
          </p>
        </div>

      </div>
    </section>
  );
};

export default NotFound;