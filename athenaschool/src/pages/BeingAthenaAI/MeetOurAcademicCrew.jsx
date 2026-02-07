import React from "react";
import {
  ChevronRight,
  GraduationCap,
  MapPin,
  Download,
  MessageSquare,
  Play,
  Video,
  Search,
} from "lucide-react";
import AcademicHeroBg from '../../assets/optimized/academic-crew.webp';

const AcademicCrewPage = () => {
  const staff = [
    {
      name: "Aruna Shetty",
      role: "Head of schools and Senior principal",
      location: "Mumbai",
      details:
        "BA (Mumbai University), Diploma in Fashion designing (JD Institute of fashion designing), PG Diploma in ECCE (Early Childhood Care and Education - SNDT University, Mumbai), CIDTT - Cambridge International Diploma for Teachers and Trainers",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Tanuja Amin",
      role: "Principal - Indian School",
      location: "Mumbai",
      details:
        "Cambridge International Diploma - CIDTT (Cambridge International Diploma For Teachers And Trainers) Podar Institute of Education- E.C.C.ED.& A University Of Mumbai- MA (Sociology) Rizvi College of Art, Science and Commerce (Bandra) - BA",
      // High-reliability professional image for a school principal profile
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500",
      ctaText: "View Details",
      category: "Principal",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      <div className="relative h-100 w-full flex items-center justify-center mt-16">
        <img
          src={AcademicHeroBg}
          className="absolute inset-0 w-full h-full object-cover shadow-inner"
          alt="Academic Crew Banner"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-5xl font-bold tracking-tight">
          Meet Our Academic Crew
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-16 relative z-20">
        <div className="bg-white rounded-t-[40px] shadow-2xl overflow-hidden min-h-200 border-x border-t border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-80 bg-[#F4F7F9] p-8 border-r border-gray-100">
              <ul className="space-y-1">
                {[
                  "Meet Our Academic Crew",
                  "Principal",
                  "Language Facilitators",
                  "Computer Facilitators",
                  "Activity Facilitators",
                  "Wellbeing Counsellors",
                  "Senior School Facilitators",
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`p-3 text-sm font-semibold cursor-pointer rounded transition-colors ${i === 0 ? "bg-[#004A99] text-white shadow-md" : "text-gray-700 hover:bg-gray-200"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-3">
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#e5a200] transition-colors shadow-sm">
                  Enquire Now
                </button>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#e5a200] transition-colors shadow-sm">
                  Download Prospectus
                </button>
              </div>
            </div>

            <div className="flex-1 p-10">
              <nav className="text-[11px] mb-8 flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                <span>Home</span>
                <span className="text-gray-300"> &gt;</span>
                <span className="text-gray-400">Being Athena</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-[#074D8D]">Meet Our Academic Crew</span>
              </nav>

              <h2 className="text-[#003366] text-3xl font-bold mb-8">
                Meet Our Academic Crew
              </h2>

              <div className="mb-10 max-w-xs">
                <select className="w-full p-3 bg-[#F0F0F0] border-none rounded text-sm font-medium text-gray-700 outline-none ring-1 ring-gray-200">
                  <option>Principal</option>
                </select>
              </div>

              <div className="space-y-12">
                {staff.map((person, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 last:border-0"
                  >
                    <img
                      src={person.img}
                      className="w-48 h-56 object-cover rounded-sm shadow-md shrink-0"
                      alt={person.name}
                    />
                    <div>
                      <h3 className="text-[#003366] text-xl font-bold mb-1">
                        {person.name}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium mb-1">
                        {person.role}
                      </p>
                      <p className="text-gray-500 text-xs mb-4">
                        {person.location}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mb-4">
                        {person.details}
                      </p>
                      <button className="bg-[#B58E58] text-white px-4 py-1.5 text-[10px] font-bold rounded uppercase tracking-wide hover:bg-[#9a784a]">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-10 border-t border-gray-100 bg-white">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Scholastic Report - Guide Video",
                  img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500",
                },
                {
                  title: "Learning a new language always fun",
                  img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=500",
                },
                {
                  title: "Our orators brought out their a game",
                  img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=500",
                },
              ].map((vid, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-lg overflow-hidden border-t-4 border-[#FFB400] shadow-lg bg-gray-200">
                    <img
                      src={vid.img}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-xl">
                        <Play className="text-white fill-white" size={20} />
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 bg-[#FFB400] px-3 py-1 text-[10px] font-bold text-white uppercase">
                      #Athena AI School
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-gray-700 line-clamp-2">
                    {vid.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buffer */}
      <div className="h-20" />
    </div>
  );
};

export default AcademicCrewPage;
