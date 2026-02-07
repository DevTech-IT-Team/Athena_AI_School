import React from "react";
import { Download, MessageSquare } from "lucide-react";
import PressHeroBg from '../../assets/optimized/press.webp';


const Press = () => {
  const sidebarCategories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council",
  ];

  const coverage = [
    "Forbes India",
    "Meta Facebook",
    "ANI News",
    "Times of India",
    "The Hindu",
    "Hindustan Times",
    "Silicon India",
    "APN News",
    "BW Education",
    "Financial Express",
    "Hans India",
    "Relocate Magazine",
  ];

  const sections = [
    {
      title: "Athena AI School",
      items: ["Daily Hunt", "Edu Times", "Social Nama", "The Print"],
    },
    {
      title: "Stride + Athena AI",
      items: [
        "Live Mint",
        "Indian Express",
        "Republic World",
        "Education World",
      ],
    },
    {
      title: "Galvanize",
      items: ["Business Standard", "Yahoo Finance", "Nyooz", "Magzter"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#333]">
      <div className="relative h-100 w-full flex items-center justify-center bg-[#001529] mt-16">
        <img
          src={PressHeroBg}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Press Hero"
          onError={(e) => {
            e.target.style.display = "none";
          }} // Fallback if image fails
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/10" />
        <h1 className="relative z-10 text-white text-5xl font-bold tracking-tight drop-shadow-md">
          Press
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-20 relative z-20">
        <div className="bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] overflow-hidden min-h-250 border-x border-t border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-80 bg-[#F4F7F9] p-8 border-r border-gray-100">
              <ul className="space-y-1">
                {sidebarCategories.map((item, i) => (
                  <li
                    key={i}
                    className={`p-3 text-sm font-semibold cursor-pointer rounded transition-colors ${item === "Press" ? "bg-[#003366] text-white" : "text-gray-700 hover:bg-gray-200"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-4">
                <div className="border-t-4 border-[#FFB400] pt-4">
                  <p className="text-[11px] italic text-gray-500 mb-6 text-center leading-relaxed font-medium">
                    "When you see your child looking forward to his classes, you
                    know the school is doing something really right."
                  </p>
                </div>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-[#e5a200] shadow-sm flex items-center justify-center gap-2">
                  <MessageSquare size={14} /> Enquire Now
                </button>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-[#e5a200] shadow-sm flex items-center justify-center gap-2">
                  <Download size={14} /> Prospectus
                </button>
              </div>
            </div>

            <div className="flex-1 p-10">
              <nav className="text-[11px] mb-8 flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                <span>Home</span>
                <span className="text-gray-300"> &gt; </span>
                <span className="text-gray-400">Being Athena</span>
                <span className="text-gray-300"> &gt; </span>
                <span className="text-[#074D8D]">Press</span>
              </nav>

              <h2 className="text-[#003366] text-3xl font-bold mb-2">Press</h2>
              <p className="text-gray-500 font-semibold mb-10">Coverage</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {coverage.map((name, idx) => (
                  <div
                    key={idx}
                    className="h-24 bg-white border border-gray-200 flex flex-col items-center justify-center p-4 hover:border-[#FFB400] transition-all group shadow-sm rounded-sm"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 group-hover:bg-[#FFF9E6] flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-300 group-hover:bg-[#FFB400] rounded-full" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter text-center group-hover:text-gray-600">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              {sections.map((sec, sIdx) => (
                <div key={sIdx} className="mb-12">
                  <h4 className="text-gray-700 font-bold mb-6 border-b border-gray-100 pb-2 text-sm">
                    {sec.title}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {sec.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-[#F8FAFC] border border-gray-100 p-4 flex flex-col items-center justify-center h-20 rounded shadow-inner opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest italic">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-20 border-t border-gray-100 pt-10">
                <h2 className="text-[#003366] text-2xl font-bold mb-8">
                  Awards
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center h-40 rounded-xl">
                    <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-3">
                      <span className="text-yellow-600 font-bold text-xl">
                        ★
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold text-center uppercase">
                      Education Excellence Award
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default Press;
