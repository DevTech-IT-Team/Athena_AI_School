import React from 'react';
import { ChevronRight } from 'lucide-react';
import FlowwLanding from './FlowwLanding';
import FlowwCTA from './FlowwCTA';
import jonathanImage from '../assets/optimized/jonathan-klok-JS8RhWVk74Q-unsplash.webp';

const FlowwTemplate = () => {
  const programs = [
    {
      id: "01",
      title: "Mastery Pathways",
      description: "Deep-focus English & Math mastery for Grades 1–8.",
      value: "AI-powered personalised learning with adaptive progression.",
      mode: "Online"
    },
    {
      id: "02",
      title: "Languages",
      description: "13 global & regional languages for Grades 1–8.",
      value: "Builds cultural fluency and communication.",
      mode: "Online"
    },
    {
      id: "03",
      title: "Capstone Programmes",
      description: "Modular, short-term applied learning for Grades 1–8.",
      value: "Builds foundational life and academic skills with certifications.",
      mode: "Online"
    }
  ];

  return (
    <>
      <div className="max-w-7xl w-full bg-white rounded-sm overflow-hidden border border-sky-100">
        
        {/* Header Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-blue-950 tracking-tight uppercase">
            FLOWW at a Glance
          </h1>
          <p className="text-blue-500 font-medium mt-2 tracking-widest uppercase text-sm">
            Compare Our Programs
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* Left Side: Program 01 & 02 */}
          <div className="flex-1 px-12 py-4 space-y-12">
            {programs.slice(0, 2).map((program) => (
              <div key={program.id} className="group">
                <span className="text-3xl font-black text-blue-950 block mb-2">{program.id}</span>
                <h3 className="text-xl font-bold text-blue-900 mb-1">{program.title}</h3>
                <p className="text-blue-700 text-sm leading-relaxed mb-2">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wider">
                  <span>{program.mode}</span>
                  <span className="w-1 h-1 bg-sky-300 rounded-full"></span>
                  <span>{program.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="flex-1 p-8">
            <div className="relative h-full min-h-[300px] w-full bg-blue-100 overflow-hidden shadow-inner">
               <img 
                src={jonathanImage} 
                alt="Students learning in modern classroom" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 border-8 border-white m-4 opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar: Program 03 */}
        <div className="bg-blue-950 text-white p-12 mt-4 relative">
          <div className="max-w-2xl">
            <span className="text-3xl font-black text-sky-400 block mb-2">03</span>
            <h3 className="text-xl font-bold mb-1">{programs[2].title}</h3>
            <p className="text-sky-100/80 text-sm leading-relaxed mb-4">
              {programs[2].description} — {programs[2].value}
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="mt-8 pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-lg font-semibold text-white">Start your child's FLOWW journey today!</p>
              <p className="text-sky-400 text-sm">Limited seats available for the upcoming batch.</p>
            </div>
            <button className="bg-sky-500 hover:bg-sky-400 text-blue-950 font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-sky-500/20">
              Enrol Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* FlowwLanding Section */}
      <FlowwLanding />
      
      {/* FlowwCTA Section */}
      <FlowwCTA />
    </>
  );
};

export default FlowwTemplate;
