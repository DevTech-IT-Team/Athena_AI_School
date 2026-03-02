import React from "react";
import { Play, Download, MessageSquare } from "lucide-react";
import LearnerHeroBg from '../../assets/optimized/learner-works.webp';


const LearnerWork = () => {
  const learners = [
    {
      name: "Aarav Saini",
      grade: "Grade 1B",
      img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400",
      description:
        "He is always enthusiastic and has many laurels under his belt already. He was selected in nationals in Primary Section for Worli Art Competition, and won second position in skipping race on sports day.",
    },
    {
      name: "Chebrolu Nuthana Adithi",
      grade: "Grade 1",
      img: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&q=80&w=400",
      description:
        "Nuthana has her YouTube channel where she showcases her talents. She started young and is now in Grade 1.",
    },
    {
      name: "Dhuruvan K",
      grade: "Grade 5A",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
      description:
        "He is training in Kalaripayattu and Silambam, a few lesser known Indian Martial Arts forms. He is also learning Bharatanatyam.",
    },
  ];

  const sidebarCategories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council",
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#333]">
      <div className="relative h-100 w-full flex items-center justify-center mt-14">
        <img
          src={LearnerHeroBg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Learner Work Banner"
        />
        <div className="absolute inset-0 bg-black/55" />
        <h1 className="relative z-10 text-white text-5xl font-bold tracking-tight">
          Learner Work
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-20 relative z-20">
        <div className="bg-white rounded-t-[40px] shadow-2xl overflow-hidden min-h-200 border-x border-t border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-80 bg-[#F4F7F9] p-8 border-r border-gray-100">
              <ul className="space-y-1">
                {sidebarCategories.map((item, i) => (
                  <li
                    key={i}
                    className={`p-3 text-sm font-semibold cursor-pointer rounded transition-colors ${item === "Learner Work" ? "bg-[#004A99] text-white shadow-md" : "text-gray-700 hover:bg-gray-200"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-3">
                <p className="text-[11px] italic text-gray-500 mb-4 text-center leading-relaxed">
                  "A day in the life of WisdomAI School+ Stride - British
                  Curriculum student"
                </p>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#e5a200] transition-colors shadow-sm flex items-center justify-center gap-2">
                  <MessageSquare size={14} /> Enquire Now
                </button>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#e5a200] transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Download size={14} /> Download Prospectus
                </button>
              </div>
            </div>

            <div className="flex-1 p-10">
              <nav className="text-[11px] mb-8 flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                <span>Home</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-gray-400">Being Wisdom</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-[#074D8D]">Learner Work</span>
              </nav>

              <h2 className="text-[#003366] text-3xl font-bold mb-8">
                Learner Work
              </h2>

              <div className="space-y-12">
                {learners.map((learner, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 last:border-0"
                  >
                    <div className="w-48 h-56 shrink-0 overflow-hidden rounded-sm shadow-md border border-gray-100">
                      <img
                        src={learner.img}
                        className="w-full h-full object-cover"
                        alt={learner.name}
                      />
                    </div>
                    <div>
                      <h3 className="text-[#003366] text-xl font-bold mb-1">
                        {learner.name}
                      </h3>
                      <p className="text-[#FFB400] text-sm font-bold mb-4">
                        {learner.grade}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-2xl whitespace-pre-line">
                        {learner.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-10 border-t border-gray-100 bg-[#F9FBFC]">
            <div className="mb-8 border-l-4 border-[#FFB400] pl-4">
              <h3 className="text-[#003366] text-xl font-bold">
                #WisdomAI Spotlight
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "It is never too early to take up responsibility",
                  img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=500",
                },
                {
                  title: "Actions Speak louder than words.",
                  img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=500",
                },
                {
                  title:
                    "Starting the weekend with love we get from our students",
                  img: "https://images.unsplash.com/photo-1491152348392-4c612300b000?auto=format&fit=crop&q=80&w=500",
                },
              ].map((vid, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-lg overflow-hidden border-t-4 border-[#FFB400] shadow-lg bg-gray-200">
                    <img
                      src={vid.img}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="text-white fill-white" size={20} />
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 bg-[#FFB400] px-3 py-1 text-[9px] font-black text-white uppercase tracking-wider">
                      #WisdomAI
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-gray-700 leading-snug group-hover:text-[#004A99] transition-colors">
                    {vid.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
};

export default LearnerWork;
