import React, { useState } from 'react';
import backgroundImage from '../assets/6247537.jpg';
import stripImage from '../assets/6247537.jpg';
import successStoryImage from '../assets/10681.jpg';
import robotImage from '../assets/robot-decorating-with-wallpaper.jpg';
import futureReadyImage from '../assets/3d-render-robot-with-books.jpg';
import anytimeLearningImage from '../assets/robot-with-document-folders.jpg';
import relxroImage from '../assets/relxro.webp.webp';
import { 
  Star, 
  Clock, 
  GraduationCap, 
  Monitor, 
  Quote, 
  ArrowRight, 
  Play, 
  Award, 
  Users,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  Sparkles,
  Trophy,
  Brain,
  Zap,
  TargetIcon,
  UsersIcon,
  ArrowRightIcon
} from 'lucide-react';

// No testimonial data - CTA only component

// Feature Cards Data
const features = [
  {
    id: 1,
    icon: <Monitor className="w-8 h-8" />,
    title: "Technology Driven Learning",
    description: "Our Online Learning School provides a seamless, tech-driven learning experience with progress tracking and interactive tools.",
    gradient: "from-sky-50 to-sky-100",
    stats: "AI-Powered",
    link: "#",
    iconColor: "text-sky-600",
    bgColor: "bg-gradient-to-br from-sky-50/40 via-white to-white",
    color: "from-sky-500 to-sky-400",
    backgroundImage: robotImage
  },
  {
    id: 2,
    icon: <Clock className="w-8 h-8" />,
    title: "Anytime Learning",
    description: "With over 1,250 hours of live classes daily, all sessions are recorded for flexible, on-demand learning.",
    gradient: "from-blue-50 to-blue-100",
    stats: "1,250+ Hours",
    link: "#",
    iconColor: "text-blue-950",
    bgColor: "bg-gradient-to-br from-blue-50/30 via-white to-white",
    color: "from-blue-950 to-blue-900",
    backgroundImage: anytimeLearningImage
  },
  {
    id: 3,
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Future Ready Education",
    description: "We prepare students for the future with skills-based learning, critical thinking, and problem-solving abilities.",
    gradient: "from-sky-50 to-sky-100",
    stats: "21st Century Skills",
    link: "#",
    iconColor: "text-sky-600",
    bgColor: "bg-gradient-to-br from-sky-50/40 via-white to-white",
    color: "from-sky-500 to-sky-400",
    backgroundImage: futureReadyImage
  },
  {
    id: 4,
    icon: <Target className="w-8 h-8" />,
    title: "Personalized Curriculum",
    description: "Tailored learning paths for each student based on their interests, strengths, and career aspirations.",
    gradient: "from-blue-50 to-blue-100",
    stats: "100% Customized",
    link: "#",
    iconColor: "text-blue-950",
    bgColor: "bg-gradient-to-br from-blue-50/30 via-white to-white",
    color: "from-blue-950 to-blue-900",
    backgroundImage: relxroImage
  }
];

// Statistics Data
const stats = [
  { value: "98%", label: "Student Success Rate", icon: <TargetIcon className="w-6 h-6" />, color: "text-sky-600" },
  { value: "1,250+", label: "Daily Learning Hours", icon: <Clock className="w-6 h-6" />, color: "text-blue-950" },
  { value: "50+", label: "Expert Faculty", icon: <Users className="w-6 h-6" />, color: "text-sky-600" },
  { value: "10,000+", label: "Happy Students", icon: <Sparkles className="w-6 h-6" />, color: "text-blue-950" }
];

const Testimonials = () => {
  return (
    <section className="relative min-h-[120vh] bg-white overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>

      <div className="relative w-full">
        {/* Header Section - CTA Focus */}
        <div className="text-center mb-16 lg:mb-20 relative rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 px-8 py-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-black">Join Our</span>
              <span className="text-black">
                Learning Community
              </span>
            </h1>
            
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Start your child's educational journey with world-class online learning.
            </p>
          </div>
          
          {/* Background Image Section */}
          <div 
            className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: -1
            }}
          >
            <img 
              src={successStoryImage} 
              alt="Success Story" 
              className="max-w-2xl mx-auto h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* --- BACKGROUND GLOWING ARCS (The Design Element) --- */}
      
      {/* Left Glowing Arc */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border-[20px] border-sky-500/10 blur-xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Right Glowing Arc */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full border-[20px] border-blue-600/10 blur-xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* -------------------------------------------------- */}

      <div className="relative z-10 w-full px-6 text-center">
        
        {/* Optional "Badge" at the top like the reference image */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-xs font-medium text-sky-200 uppercase tracking-wide">
                Admissions Open for 2025
            </span>
        </div>

        {/* Heading */}
        <h3 className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-12 tracking-tight py-8">
          Ready to Start Your Child's <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-950">
            Success Story?
          </span>
        </h3>

        {/* Paragraph */}
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Join thousands of successful students who have found their perfect learning path with us. Experience world-class British education from home.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          
          {/* Primary Button (Gradient) */}
          <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-sky-500/30 transition-all duration-300 hover:scale-105 hover:shadow-sky-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ring-offset-white">
            <UsersIcon className="w-5 h-5 text-sky-100" />
            <span>Start Free Trial</span>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Secondary Button (Outline/Glass) */}
          <button className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-950/5 backdrop-blur-sm text-blue-950 font-bold text-lg rounded-full border border-blue-950/10 hover:bg-blue-950/10 hover:border-blue-950/30 transition-all duration-300">
            <span>Schedule a Demo</span>
            <ArrowRightIcon className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
        </div>

        {/* Trust/Social Proof Text */}
        <p className="mt-10 text-sm text-gray-500 font-medium">
            No credit card required for trial • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default Testimonials;