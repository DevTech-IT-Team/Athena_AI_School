import React from "react";
import { Play, Download, MessageSquare } from "lucide-react";
import ParentPageHeroBg from '../../assets/optimized/parents-speak.webp';


const ParentsSpeak = () => {
  const sidebarCategories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council",
  ];

  const parentVideos = [
    {
      title: "Hear what parents think about Athena AI School",
      img: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Hear what parents think about Athena AI School",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Let's hear what parents think about Athena AI School",
      img: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Let's hear what parents think about Athena AI School",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#333]">
      <div className="relative h-112.5 w-full flex items-center justify-center mt-14">
        <img
          src={ParentPageHeroBg}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] brightness-[0.5]"
          alt="Parents Speak Banner"
        />
        <h1 className="relative z-10 text-white text-5xl font-bold tracking-tight">
          Parents Speak
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-24 relative z-20">
        <div className="bg-white rounded-t-[40px] shadow-2xl overflow-hidden min-h-225 border-x border-t border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-80 bg-[#F4F7F9] p-8 border-r border-gray-100">
              <ul className="space-y-1">
                {sidebarCategories.map((item, i) => (
                  <li
                    key={i}
                    className={`p-3 text-sm font-semibold cursor-pointer rounded transition-colors ${item === "Parents Speak" ? "bg-[#003366] text-white" : "text-gray-700 hover:bg-gray-200"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-4">
                <div className="border-t-4 border-t-[#FFB400] pt-4">
                  <p className="text-[11px] italic text-gray-600 mb-6 text-center leading-relaxed">
                    "How do your classes prepare you for the future? Athena AI
                    School + Stride student answers."
                  </p>
                </div>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#e5a200] flex items-center justify-center gap-2">
                  <MessageSquare size={14} /> Enquire Now
                </button>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#e5a200] flex items-center justify-center gap-2">
                  <Download size={14} /> Download Prospectus
                </button>
              </div>
            </div>

            <div className="flex-1 p-10">
              <nav className="text-[11px] mb-8 flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                <span>Home</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-gray-400">Being Athena</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-[#074D8D]">Parents Speak</span>
              </nav>

              <h2 className="text-[#003366] text-3xl font-bold mb-10">
                Parents Speak
              </h2>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {parentVideos.map((vid, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-sm overflow-hidden shadow-lg border border-gray-200 bg-black">
                      <img
                        src={vid.img}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        alt="Video thumbnail"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors">
                          <Play className="text-white fill-white" size={24} />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <div className="w-2 h-2 bg-[#FFB400] rounded-full" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-[13px] font-medium text-gray-500 leading-snug group-hover:text-[#003366]">
                      {vid.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-10 border-t border-gray-100 bg-[#F9FBFC]">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-8 w-1 bg-[#FFB400]" />
              <h3 className="text-[#003366] text-xl font-bold">
                #ATHENA_AI Stories
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "A Little art and a little maths",
                  img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=500",
                },
                {
                  title: "Tiya Grade-2A shows us the way",
                  img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=500",
                },
                {
                  title: "Understanding rainforests with Yug",
                  img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500",
                },
              ].map((vid, i) => (
                <div key={i} className="group">
                  <div className="relative aspect-video rounded-md overflow-hidden border-t-4 border-[#FFB400] shadow-md">
                    <img src={vid.img} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-0 left-0 bg-[#FFB400] px-2 py-0.5 text-[8px] font-black text-white uppercase tracking-tighter">
                      #ATHENA_AI
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        size={32}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-[12px] font-semibold text-gray-600 leading-tight">
                    {vid.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default ParentsSpeak;
