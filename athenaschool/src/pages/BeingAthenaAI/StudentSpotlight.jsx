import React, { useState, useEffect } from "react"; // Added useState and useEffect
import { ChevronRight } from "lucide-react";

const StudentSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const students = [
    {
      name: "Adarsh",
      grade: "Grade 7",
      curriculum: "Indian",
      img: "https://images.unsplash.com/photo-1503919919749-64292629620f?auto=format&fit=crop&q=80&w=400",
      description:
        "Adarsh - Grade 7 MC has won U 14 tournament on the new year open tournament conducted by Boston Indians open tournament...",
    },
    {
      name: "Aishwarya Jingade",
      grade: "Grade 6",
      curriculum: "Indian",
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400",
      description:
        "I started roller skating in 2021 in the month of november in a skating ground near my house. Now it's almost the end 2022...",
    },
    {
      name: "Ananya Vishwesh",
      grade: "Grade 6",
      curriculum: "British",
      img: "https://images.unsplash.com/photo-1491309059938-b4abc2ca3d61?auto=format&fit=crop&q=80&w=400",
      description:
        "Ananya Vishwesh participated and represented the school in Azadi ka Amrut Mahotsav and 125th Anniversary of Swami Vivekananda's return...",
    },
    {
      name: "Manishka Dubey",
      grade: "Grade 5",
      curriculum: "American",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
      description:
        "Manishka Dubey, the youngest winner of the Inventor Challenge by Colors Infinity TV and a Gold Medalist at the International Innovation Expo.",
    },
    {
      name: "Maria",
      grade: "Grade 2",
      curriculum: "Indian",
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400",
      description:
        "Maria has written and published a book for 'Bri Books National Young Authors Fair' titled 'The Day She Saw Santa'...",
    },
    {
      name: "Pranjal Dedhia",
      grade: "Grade 6",
      curriculum: "Indian",
      img: "https://images.unsplash.com/photo-1612872080536-f211f6c77fca?auto=format&fit=crop&q=80&w=400",
      description:
        "Pranjal won a silver medal in the U13 Maharashtra State-Level tournament and was named the Most Promising player.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
    }, 5000); // Interval set to 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [students.length]);

  const sidebarList = [
    "Adarsh",
    "Aadvik Srivastava",
    "Alisha",
    "Aishwarya Jingade",
    "Ananya Vishwesh",
    "Manishka Dubey",
    "Maria",
    "Pranjal Dedhia",
    "Ravyanshi Singh",
    "Sameeksha Sinha",
    "Siri Vinay Bandakka",
    "Vaidic Mukherjee",
    "Yashvi",
  ];

  return (
    <div className="min-h-screen bg-white mt-14">
      <div className="relative h-112.5 w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
          alt="Students learning"
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            STUDENT SPOTLIGHT
          </h1>
          <div className="h-1.5 w-24 bg-[#FFC107] mx-auto rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <nav className="text-[11px] mb-8 flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
          <span>Home</span>
          <span className="text-gray-300">&gt; </span>
          <span className="text-gray-400">Being Athena</span>
          <span className="text-gray-300"> &gt;</span>
          <span className="text-[#074D8D]">Student Spotlight</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-1/4 bg-gray-50 rounded-2xl overflow-hidden shadow-sm self-start">
            <div className="bg-[#1e3a8a] p-5 text-white font-bold text-center text-sm tracking-widest uppercase">
              Student Spotlight
            </div>
            <ul className="py-2">
              {sidebarList.map((item, idx) => (
                <li
                  key={idx}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button className="w-full text-left px-6 py-4 text-[12px] font-bold text-gray-600 hover:bg-blue-50 hover:text-[#074D8D] transition-colors flex justify-between items-center group">
                    {item}
                    <ChevronRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="bg-white rounded-4xl shadow-xl overflow-hidden mb-16 border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={students[currentIndex].img}
                  className="w-full h-full object-cover transition-all duration-700"
                  alt={students[currentIndex].name}
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-[#074D8D] text-3xl font-black mb-4">
                  {students[currentIndex].name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {students[currentIndex].description}
                </p>
                <button className="bg-[#074D8D] text-white px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#FFC107] hover:text-[#074D8D] transition-all w-fit">
                  Read More
                </button>

                <div className="flex gap-2 mt-8">
                  {students.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-4 bg-[#074D8D]" : "w-2 bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-50 overflow-hidden flex flex-col group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={student.img}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={student.name}
                    />
                  </div>
                  <div className="p-6 flex flex-col grow text-center">
                    <h3 className="text-[#074D8D] text-lg font-black mb-1">
                      {student.name}
                    </h3>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                      {student.grade} | {student.curriculum}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 grow line-clamp-3">
                      {student.description}
                    </p>
                    <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg text-[9px] font-black uppercase tracking-widest self-center hover:bg-[#FFC107] hover:text-[#074D8D] transition-all">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentSpotlight;
