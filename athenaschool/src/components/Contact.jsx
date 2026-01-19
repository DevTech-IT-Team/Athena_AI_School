import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative">
      
      {/* LEFT SIDE: Visuals & Contact Info (Blue 950 Theme) */}
      <div className="lg:w-5/12 bg-blue-950 relative overflow-hidden flex flex-col justify-center p-8 lg:p-16 text-white z-10">
        
        {/* GEOMETRIC BACKGROUND (Diagonal Slashes) */}
        {/* Top Texture */}
        <div className="absolute top-[-10%] right-[-20%] w-[400px] h-[600px] bg-slate-900 rotate-12 opacity-50 z-0 overflow-hidden border-l-4 border-sky-500">
             <img 
               src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
               alt="Student Texture" 
               className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
             />
        </div>
        {/* Bottom Texture */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900 -rotate-12 opacity-30 z-0 rounded-tr-[100px]"></div>

        {/* Content Container */}
        <div className="relative z-10">
          <div className="mb-2 inline-block px-3 py-1 border border-sky-500 rounded-full text-sky-400 text-xs font-bold uppercase tracking-wider">
            Contact Our Experts
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">
            Get In <span className="text-sky-400">Touch</span>
          </h2>

          <div className="space-y-8 mt-12">
            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-sky-500 transition-colors duration-300">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-sky-300 font-bold uppercase tracking-wider mb-1">Call Us</p>
                <p className="text-2xl font-semibold text-white">+91 99999 99999</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-sky-500 transition-colors duration-300">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-sky-300 font-bold uppercase tracking-wider mb-1">Email Us</p>
                <p className="text-xl font-semibold text-white">info@aischool.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* RIGHT SIDE: Enquire Now Form (White Theme) */}
      <div className="lg:w-7/12 bg-white flex items-center justify-center p-8 lg:p-20 relative">
        
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-bl-full -z-0"></div>

        <div className="w-full max-w-lg relative z-10">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-blue-950 mb-2">Enquire Now</h3>
            <div className="h-1 w-20 bg-sky-500 rounded-full"></div>
          </div>

          <form className="space-y-6">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone Input with Country Code */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Phone</label>
              <div className="flex">
                <select className="px-3 py-3 rounded-l-lg bg-slate-100 border border-r-0 border-slate-200 text-slate-700 font-medium focus:border-sky-500 focus:ring-0 outline-none">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input 
                  type="tel" 
                  placeholder="98765 43210"
                  className="w-full px-4 py-3 rounded-r-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
              />
            </div>

            {/* Child's Age Select */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Child's Age</label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none appearance-none cursor-pointer">
                  <option value="" disabled selected>Select age group</option>
                  <option>Under 3 years</option>
                  <option>3-5 years (Early Years)</option>
                  <option>6-10 years (Primary)</option>
                  <option>11-13 years (Middle School)</option>
                  <option>14-17 years (Senior School)</option>
                </select>
                {/* Chevron Icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full py-4 mt-4 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-sky-600 hover:to-sky-500 text-white font-bold text-lg rounded-lg shadow-xl shadow-blue-900/20 transform transition-all duration-300 hover:-translate-y-1">
              Enquire Now
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;