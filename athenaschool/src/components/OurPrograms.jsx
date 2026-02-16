import React, { useState, useRef, useEffect } from 'react';
import { Globe, BookOpen, BrainCircuit, Wrench, ChevronRight } from 'lucide-react';
import robotImage from '/assets/images/cartoon-ai-robot-scene (3).webp';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover object-center transition-opacity duration-500 ${isLoaded ? 'opacity-80' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
      {!isLoaded && (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 animate-pulse" />
      )}
    </div>
  );
};

const ProgramCard = ({ title, subtitle, features, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-100 group-hover:bg-blue-400 transition-colors duration-300"></div>
      
      {/* Icon & Header */}
      <div className="p-5 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-900 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-3">
          <Icon size={24} />
        </div>
        <h3 className="text-base font-semibold text-blue-900 mb-1">{title}</h3>
        <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">{subtitle}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-50"></div>

      {/* Features List */}
      <div className="p-5 pt-3 flex-grow bg-white">
        <ul className="space-y-1.5">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start text-xs text-gray-600 leading-tight">
              <span className="mr-2 mt-1 w-1 h-1 bg-blue-200 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer / CTA */}
      <div className="p-3 bg-gray-50 mt-auto text-center">
        <button className="text-xs font-medium text-blue-900 hover:text-blue-600 flex items-center justify-center gap-1 mx-auto transition-colors">
          View Details <ChevronRight size={12} />
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
            <LazyImage 
              src={robotImage} 
              alt="AI Learning Robot" 
              className="w-full h-full"
            />
             {/* Simplified decorative elements */}
             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100/5 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>

      {/* CARDS SECTION 
        Overlapping the Hero section slightly for depth
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.slice(0, 4).map((program, index) => (
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