import React from 'react';
import { Globe, BookOpen, BrainCircuit, Wrench, ChevronRight } from 'lucide-react';
import priscillaImage from '../assets/priscilla-du-preez-XkKCui44iM0-unsplash.jpg';

const ProgramCard = ({ title, subtitle, features, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-300 group-hover:bg-blue-600 transition-colors duration-300"></div>
      
      {/* Icon & Header */}
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-950 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4 shadow-sm">
          <Icon size={28} />
        </div>
        <h3 className="text-lg font-bold text-blue-950 mb-1">{title}</h3>
        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{subtitle}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-blue-50"></div>

      {/* Features List */}
      <div className="p-6 pt-4 flex-grow bg-white">
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600 leading-snug">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-300 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer / CTA */}
      <div className="p-4 bg-blue-50 mt-auto text-center">
        <button className="text-xs font-bold text-blue-950 hover:text-blue-600 flex items-center justify-center gap-1 mx-auto transition-colors">
          View Details <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

const OurPrograms = () => {
  const programs = [
    {
      title: "British Pathway",
      subtitle: "Global Recognition",
      icon: Globe,
      features: [
        "Cambridge / IGCSE / A & AS Level",
        "Cambridge certified teachers",
        "Complete IGCSE preparation",
        "International assessments",
        "University pathway support",
        "International standards",
      ]
    },
    {
      title: "Indian Pathway",
      subtitle: "Board Exams Focus",
      icon: BookOpen,
      features: [
        "NCF / NIOS & NCERT aligned",
        "Board exam preparation",
        "Competitive exam coaching",
        "Foreign & regional languages",
        "Strong academic foundations",
        "NEP 2020 aligned"
      ]
    },
    {
      title: "Athena Learning FLOWW",
      subtitle: "Future Skills",
      icon: BrainCircuit,
      features: [
        "Fundamental Learning Ways",
        "Mastery Pathway (Eng & Math)",
        "Global Languages",
        "Capstone Projects",
        "Holistic development",
        "Learner-centric approach"
      ]
    },
    {
      title: "Athena Learning Garage",
      subtitle: "Experiential Learning",
      icon: Wrench,
      features: [
        "Imagine. Build. Belong.",
        "Robotics & Electronics",
        "Tinkering Garage",
        "AI & IoT Workshops",
        "Design Thinking",
        "Capstone Garage"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* HERO SECTION 
        Split layout: Text on Left, Image on Right
      */}
      <div className="relative bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10"></div> {/* Texture overlay if needed */}
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          
          {/* Left Content */}
          <div className="flex-1 p-8 py-16 lg:py-24 lg:pr-12 relative z-10 flex flex-col justify-center">
             {/* Left Accent Bar */}
            <div className="absolute left-0 top-20 bottom-20 w-2 bg-blue-300 hidden lg:block rounded-r"></div>
            
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300 text-sm font-medium mb-6">
                <span>📘</span> Our Programs
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Learning paths designed for <span className="text-blue-300">every learner</span>
              </h1>
              <p className="text-lg text-blue-100 max-w-lg mb-8 leading-relaxed">
                Choose from flexible programs that adapt to your child's goals and schedule. Whether it's global curriculum or skill building, we have the path.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-transparent z-10 lg:w-32"></div>
            <img 
              src={priscillaImage} 
              alt="Student studying with laptop" 
              className="w-full h-full object-cover object-center opacity-80"
            />
             {/* Decorative Box matching user's reference style */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>

      {/* CARDS SECTION 
        Overlapping the Hero section slightly for depth
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              {...program}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default OurPrograms;