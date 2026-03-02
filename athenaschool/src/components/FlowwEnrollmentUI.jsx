import React from 'react';
import { Star, Search, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';

const FlowwEnrollmentUI = () => {
  const categories = [
    {
      title: "Gifted Learners",
      desc: "Accelerate beyond the classroom",
      icon: <Star className="text-blue-500" size={24} />
    },
    {
      title: "Curious Minds",
      desc: "Explore and discover more",
      icon: <Search className="text-blue-500" size={24} />
    },
    {
      title: "Need Extra Support",
      desc: "Build strong foundations",
      icon: <Leaf className="text-blue-500" size={24} />
    },
    {
      title: "Thriving Students",
      desc: "Add depth to their learning",
      icon: <Sparkles className="text-blue-500" size={24} />
    }
  ];

  return (
    <div className="flex flex-col md:flex-row w-full font-sans">
      
      {/* LEFT SECTION: LIST OF SERVICES/CATEGORIES */}
      <div className="w-full md:w-3/5 bg-white p-8 md:p-12">
        <h2 className="text-3xl font-bold text-blue-950 mb-10">Who Must Enrol?</h2>
        
        <div className="grid gap-6">
          {categories.map((item, index) => (
            <div key={index} className="flex items-center gap-6 p-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <h3 className="font-bold text-lg text-blue-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION: MAIN HIGHLIGHT */}
      <div className="w-full md:w-2/5 bg-blue-950 p-8 md:p-12 flex flex-col justify-center text-white">
        <div className="flex items-center gap-2 mb-6 bg-blue-900/50 w-fit px-4 py-2 rounded-full border border-blue-800">
          <CheckCircle2 className="text-sky-400" size={20} />
          <span className="text-blue-100 font-semibold">For Grades 1-12</span>
        </div>

        <h1 className="text-4xl font-bold mb-6 leading-tight">
          FLOWW is designed for <span className="text-blue-300">any learner</span>.
        </h1>

        <p className="text-blue-100/80 leading-relaxed text-lg mb-10">
          Whether they study with WisdomAI School or any other school. It complements formal schooling 
          irrespective of the curriculum or board, preparing children for future skills and 
          depth in concepts foundational for success.
        </p>

        {/* Bottom Icons */}
        <div className="flex gap-6 mt-auto pt-10">
          <div className="w-12 h-12 rounded-full border border-blue-700 flex items-center justify-center text-blue-300">
            <Star size={20} />
          </div>
          <div className="w-12 h-12 rounded-full border border-blue-700 flex items-center justify-center text-blue-300">
            <Search size={20} />
          </div>
          <div className="w-12 h-12 rounded-full border border-blue-700 flex items-center justify-center text-blue-300">
            <Sparkles size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowwEnrollmentUI;
