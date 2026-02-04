import React from 'react';
import { Monitor, Clock, Globe } from 'lucide-react';
import josephImage from '../assets/optimized/joseph-gonzalez-iFgRcqHznqg-unsplash.webp';

const AthenaFeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Technology Driven Learning",
      description: "Our Online Learning School provides a seamless, tech-driven learning experience. With features such as progress tracking, on-demand access to materials, and interactive tools, our learners and expert faculty are always supported. Our Online Learning School's ease of use provides a holistic learning experience.",
      icon: <Monitor className="w-6 h-6" />,
      iconColor: "text-sky-500",
      bgColor: "bg-sky-50"
    },
    {
      id: 2,
      title: "Anytime Learning",
      description: "With over 1,250 hours of live, interactive classes conducted daily, our online school learners engage in dynamic, real-time learning. All sessions are recorded, giving learners the flexibility to revisit lessons anytime and anywhere, making our learner community truly diverse and our educational borderless.",
      icon: <Clock className="w-6 h-6" />,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "Future Ready Education",
      description: "Offering globally recognized curriculums with a future-oriented approach, Athena AI School prepares learners for success not only academically but in a rapidly evolving world. It enables us cater to both local and global educational standards, opening doors to international opportunities.",
      icon: <Globe className="w-6 h-6" />,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white font-sans overflow-hidden">
      
      {/* LEFT SIDEBAR SECTION (Blue Background) */}
      <div className="relative w-full lg:w-[35%] bg-blue-300 min-h-[300px] lg:min-h-auto flex items-center justify-center lg:block">
        
        {/* Decorative Circles (Top Right of the sidebar) */}
        <div className="absolute top-8 right-8 lg:-right-6 flex gap-3 z-20">
          <div className="w-4 h-4 rounded-full bg-sky-400"></div>
          <div className="w-4 h-4 rounded-full bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full bg-blue-900"></div>
        </div>

        {/* Floating Image Card */}
        <div className="relative z-10 w-96 h-[28rem] lg:absolute lg:top-1/2 lg:right-[-100px] lg:transform lg:-translate-y-1/2 shadow-2xl rounded-lg overflow-hidden border-4 border-white/10 group">
          <img 
            src={josephImage} 
            alt="Online Education" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4">
             <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/30">
                <Monitor className="text-white w-6 h-6" />
             </div>
          </div>
        </div>

        {/* Background Pattern for Sidebar */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 L100 0 L0 0 Z" fill="white" />
            </svg>
        </div>
      </div>

      {/* RIGHT CONTENT SECTION */}
      <div className="flex-1 px-6 py-12 lg:p-24 lg:pl-32 bg-white">
        <div className="max-w-3xl mx-auto lg:mx-0">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-12 relative inline-block">
            Why Athena School is better
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-sky-400 rounded-full"></span>
          </h2>

          {/* Cards List */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-sky-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Box */}
                <div className={`shrink-0 w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center transition-colors group-hover:bg-blue-950`}>
                  <div className={`${feature.iconColor} group-hover:text-white transition-colors`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-blue-950 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AthenaFeatureSection;
