import React from 'react';
import { BookOpenIcon, AcademicCapIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const CurriculumOverview = () => {
  const images = {
    pen: "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=800&auto=format&fit=crop",
    library: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop",
    statue: "https://images.unsplash.com/photo-1555662707-74443b40eb33?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <section className="min-h-screen bg-white flex items-center overflow-hidden relative">
      
      {/* HALF-SECTION BACKGROUND ON LEFT SIDE - Extended */}
      <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-br from-blue-50 via-blue-100/80 to-sky-100/60 z-0">
        {/* Additional decorative elements within half background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-sky-300/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-300/40 rounded-full blur-2xl"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[length:40px_40px] bg-grid-blue-950"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 lg:justify-end">
        
        {/* LEFT SIDE - Geometric Image Composition */}
        <div className="hidden lg:block relative h-[600px] w-full">
          {/* Dark blue decorative blob - enhanced to stand out against light background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-950/10 rounded-full blur-3xl"></div>

          {/* Top Left Image (Pen) */}
          <div className="absolute top-0 left-10 w-72 h-72 bg-blue-950 p-2 shadow-2xl overflow-hidden border-[8px] border-blue-950 z-20">
            <div className="w-full h-full overflow-hidden bg-white">
              <img 
                src={images.pen} 
                alt="Classic Pen" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Middle Right Image (Library) */}
          <div className="absolute top-32 right-0 w-80 h-80 bg-blue-950 p-2 shadow-2xl overflow-hidden border-[8px] border-blue-950 z-10">
            <div className="w-full h-full overflow-hidden bg-white">
              <img 
                src={images.library} 
                alt="Old Library" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Bottom Left Image (Statue) */}
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-blue-950 p-2 shadow-2xl overflow-hidden border-[8px] border-blue-950 z-30">
            <div className="w-full h-full overflow-hidden bg-white">
              <img 
                src={images.statue} 
                alt="Classic Statue" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-8">
          <div>
            <h4 className="text-sky-600 font-bold tracking-wider uppercase mb-3 text-sm lg:text-base">
              British Curriculum Excellence
            </h4>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-950 leading-tight mb-6">
              Following rigorous standards of the UK National Curriculum
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-blue-900 block mb-2">World-Class British Education Online</strong>
              Our curriculum follows the UK National Curriculum framework, adapted for online delivery. Students receive internationally recognized qualifications and develop skills valued by universities and employers worldwide.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-6 pt-6">
            
            {/* Feature 1 - Core Subjects */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-sky-100 rounded-lg mr-4">
                <BookOpenIcon className="w-6 h-6 text-sky-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">Core Subjects</h3>
                <p className="text-slate-600">English, Mathematics, Science with specialized instruction</p>
              </div>
            </div>

            {/* Feature 2 - Foundation Subjects */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-sky-100 rounded-lg mr-4">
                <AcademicCapIcon className="w-6 h-6 text-sky-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">Foundation Subjects</h3>
                <p className="text-slate-600">History, Geography, Art, Music, Computing and more</p>
              </div>
            </div>

            {/* Feature 3 - Assessment */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-sky-100 rounded-lg mr-4">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-sky-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">Assessment Framework</h3>
                <p className="text-slate-600">Regular assessments aligned with UK standards</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CurriculumOverview;