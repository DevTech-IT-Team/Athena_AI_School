import React from "react";
import {
  Download,
  MessageSquare,
  Trophy,
  Star,
  Medal,
  Award,
} from "lucide-react";
import AwardsHeroBg from '../../assets/optimized/awards.webp';


const Awards = () => {
  const sidebarCategories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council",
  ];

  const awards = [
    {
      title: "Best Curriculum School Award",
      description:
        "WisdomAI School has won Star Education Award 2024 in the Best Curriculum School Award category.",
    },
    {
      title: "HolonIQ South Asia EdTech 100",
      description:
        "Named one of the most promising EdTech startups in South Asia by HolonIQ.",
    },
    {
      title: "ETHR World Award",
      description:
        'Won The Economic Times-Future Ready Organisations Awards under the "Startup Category".',
    },
    {
      title: "Grand Jury Summit Award",
      description:
        "Awarded India's #1 Leading Online School of India in the Education World India School Grand Jury Award.",
    },
    {
      title: "Indian Education Award",
      description:
        "Awarded for Excellence and Innovation in Online Teaching (K12) at Entrepreneur's Indian Education Awards.",
    },
    {
      title: "Most Innovative School",
      description:
        "WisdomAI School Awarded as the Most Innovative school in India.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#333]">
      <div className="relative h-100 w-full flex items-center justify-center bg-[#002147] mt-14">
        <img
          src={AwardsHeroBg}
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[0.2]"
          alt="Awards and Recognition"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <h1 className="relative z-10 text-white text-5xl font-bold tracking-tight">
          Awards
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-20 relative z-20">
        <div className="bg-white rounded-t-[40px] shadow-2xl overflow-hidden min-h-225 border-x border-t border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-80 bg-[#F4F7F9] p-8 border-r border-gray-100">
              <ul className="space-y-1">
                {sidebarCategories.map((item, i) => (
                  <li
                    key={i}
                    className={`p-3 text-sm font-semibold cursor-pointer rounded transition-colors ${item === "Awards" ? "bg-[#003366] text-white shadow-md" : "text-gray-700 hover:bg-gray-200"}`}
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
                <span className="text-gray-300">&gt;</span>
                <span className="text-gray-400">Being Wisdom</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-[#074D8D]">Awards</span>
              </nav>

              <h2 className="text-[#003366] text-3xl font-bold mb-10">
                Awards
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="group p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                  >
                    {/* Award Icon Badge */}
                    <div className="w-20 h-20 bg-yellow-50 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="text-[#FFB400] w-10 h-10" />
                    </div>

                    <h3 className="text-[#003366] text-xl font-bold mb-3">
                      {award.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#FFB400] mb-4 rounded-full opacity-50" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-20 bg-[#F9FBFC] rounded-3xl p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Medal className="text-[#003366]" />
                  <h3 className="text-[#003366] text-2xl font-bold">
                    Recognition & Excellence
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-10 text-sm italic">
                  WisdomAI School has been consistently recognized for
                  excellence in education innovation, curriculum development,
                  and student wellness.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#003366]">
                    <h4 className="font-bold text-[#003366] mb-2 uppercase text-xs tracking-widest">
                      Industry Leadership
                    </h4>
                    <p className="text-gray-500 text-xs">
                      Recognized for innovation in K-12 online education.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#FFB400]">
                    <h4 className="font-bold text-[#003366] mb-2 uppercase text-xs tracking-widest">
                      Student Wellbeing
                    </h4>
                    <p className="text-gray-500 text-xs">
                      Awarded for commitment to mental health and development.
                    </p>
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

export default Awards;
