import React from 'react';
import { PlayCircle, ArrowRight, Trophy, Star } from 'lucide-react';
import personalizedImage from '../assets/3.webp';
import chessImage from '../assets/2.webp';
import keyaImage from '../assets/1.webp';

const StudentSpotlight = () => {
  const students = [
    {
      id: 1,
      name: "Divith Reddy",
      age: "8 years old",
      mainBadge: "Chess Champion",
      description: "An 8-year-old prodigy, Divith, recently won the U-8 World Chess Championship in Italy. With his love for chess, he is determined to become the world's youngest Grandmaster.",
      tags: ["World Champion", "Chess Prodigy", "Math Genius"],
      image: chessImage, // Local image
      hasVideo: true
    },
    {
      id: 2,
      name: "Keya Hatkar",
      age: "13 years old",
      mainBadge: "Award Winner",
      description: "Thirteen-year-old Keya, recipient of the prestigious Pradhan Mantri Rashtriya Bal Puraskar, is an award-winning author, artist, and social impact entrepreneur.",
      tags: ["Award Winner", "Author", "Artist"],
      image: keyaImage, // Local image
      hasVideo: false
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white font-sans overflow-hidden">
      
      {/* LEFT COLUMN - Hero Section (Blue 950 Theme) */}
      <div className="w-full lg:w-5/12 bg-sky-600 text-white relative p-8 lg:p-12 flex flex-col justify-between">
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10">
          <div className="mb-8">
            <span className="font-serif text-8xl opacity-20 absolute -top-10 -left-4">01</span>
            <h2 className="text-sky-300 font-medium tracking-widest text-sm uppercase mb-2 ml-2">Success Stories</h2>
            <h1 className="text-5xl lg:text-6xl font-serif leading-tight">
              Meet Our <br />
              <span className="text-sky-200 italic">Outstanding</span> <br />
              Students
            </h1>
          </div>

          <div className="mt-8 border-l-2 border-sky-500 pl-6">
            <p className="text-blue-100 text-lg leading-relaxed font-light">
              "No two learners are alike, so why should their journey be? Discover how personalized education creates exceptional results."
            </p>
          </div>
        </div>

        {/* Featured Image Container (mimicking the Polaroid/Frame style in reference) */}
        <div className="relative mt-12 lg:mt-auto mb-8 mx-auto w-full max-w-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="bg-white p-3 shadow-2xl shadow-black/50">
            <img 
              src={personalizedImage} 
              alt="Student holding a trophy" 
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 90vw, 420px"
              width="640"
              height="512"
              className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="pt-3 flex justify-between items-end">
              <div className="flex flex-col">
                 <span className="text-sky-600 font-bold text-lg">Excellence</span>
                 <span className="text-gray-500 text-xs uppercase tracking-wider">Class of 2025</span>
              </div>
              <Trophy className="text-sky-500 w-6 h-6" />
            </div>
          </div>
          {/* Decorative Square behind */}
          <div className="absolute -z-10 top-4 -right-4 w-full h-full border-2 border-sky-500/50"></div>
        </div>

        {/* Vertical Text Decoration */}
        <div className="absolute left-4 bottom-8 hidden lg:block origin-bottom-left -rotate-90">
           <span className="text-sky-500/30 text-xs tracking-[0.3em] uppercase">Empowering the next generation</span>
        </div>
      </div>

      {/* RIGHT COLUMN - List Section (White/Sky Blue Theme) */}
      <div className="w-full lg:w-7/12 bg-slate-50 p-6 lg:p-16 overflow-y-auto">
        
        <div className="mb-10">
          <h3 className="text-sky-600 text-3xl font-serif mb-2">Student Spotlight</h3>
          <p className="text-slate-500">Inspiring stories from our brilliant learners</p>
          <hr className="mt-4 border-sky-200 w-24" />
        </div>

        <div className="space-y-8">
          {students.map((student) => (
            <div key={student.id} className="group relative">
              {/* Card Container */}
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row overflow-hidden border border-slate-100">
                
                {/* Content Side */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center bg-sky-600 text-white relative overflow-hidden">
                  {/* Subtle background decoration for card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h4 className="text-2xl font-bold text-white">{student.name}</h4>
                      <span className="text-sky-300 text-sm font-medium">— {student.age}</span>
                    </div>
                    
                    <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                      <Star className="w-3 h-3 fill-current" />
                      {student.mainBadge}
                    </div>

                    <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
                      {student.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {student.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-900 border border-blue-800 text-xs text-sky-200 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-300 transition-colors group/btn">
                        Read Full Story <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      {student.hasVideo && (
                        <button className="flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-white transition-colors">
                          <PlayCircle className="w-4 h-4" /> Watch Story
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Side - Stays on right like the reference */}
                <div className="w-full md:w-48 lg:w-56 h-48 md:h-auto relative">
                  <img 
                    src={student.image} 
                    alt={student.name} 
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 224px"
                    width="320"
                    height="320"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-sky-600/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA (Optional filler to balance height) */}
        <div className="mt-12 text-center">
            <button className="px-6 py-3 border border-sky-600 text-sky-600 font-medium hover:bg-sky-600 hover:text-white transition-colors uppercase text-sm tracking-widest">
                View All Achievers
            </button>
        </div>

      </div>
    </div>
  );
};

export default StudentSpotlight;