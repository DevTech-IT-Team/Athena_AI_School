import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const AcademicCrew = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="order-2 lg:order-1 relative z-10">
            {/* Decorative Label */}
            <div className="inline-block mb-4">
              <span className="text-sky-500 font-bold tracking-widest uppercase text-xs border-b-2 border-sky-500 pb-1">
                Leadership & Mentors
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-8 leading-tight">
              Meet Our <br />
              <span className="text-sky-600">Academic Crew</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Building the future of learning needs a team of <strong className="text-blue-900">325+ passionate educators</strong> and innovators.
            </p>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              At Wisdom School, our leadership and mentors are committed to guiding learners on their unique learning paths. We are here to inspire, mentor, and support our learners every step of the way.
            </p>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-950 text-white rounded-full font-bold transition-all duration-300 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-200 hover:-translate-y-1">
              <span>Meet The Crew</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>


          {/* RIGHT SIDE: Geometric Photo Grid */}
          <div className="order-1 lg:order-2 relative">
            
            {/* Background Decor: A large abstract circle behind the grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-50 rounded-full blur-3xl -z-10"></div>

            {/* The Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* IMAGE 1: Top Left (Rounded Top-Left & Bottom-Right) */}
              <div className="aspect-square overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Head of Education" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 2: Top Right (Rounded Top-Right & Bottom-Left) */}
              <div className="aspect-square overflow-hidden rounded-tr-[80px] rounded-bl-[80px] shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105 mt-8 lg:mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Senior Mentor" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 3: Bottom Left (Rounded Top-Right & Bottom-Left - Matching top right) */}
              <div className="aspect-square overflow-hidden rounded-tr-[80px] rounded-bl-[80px] shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105 -mt-8 lg:-mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" 
                  alt="Curriculum Director" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 4: Bottom Right (Rounded Top-Left & Bottom-Right - Matching top left) */}
              <div className="aspect-square overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                  alt="Student Success Lead" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Decorative "Year" or "Stat" floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-sky-500 text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-xl hidden md:block animate-bounce-slow">
               <span className="block text-3xl font-bold">15+</span>
               <span className="text-xs font-medium uppercase tracking-wider">Years Exp.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademicCrew;