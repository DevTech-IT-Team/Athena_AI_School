import React from 'react';

const AWisdomAISchool = () => {
  return (
    <div className="bg-white text-blue-900 font-serif selection:bg-blue-100">
      
      {/* --- COVER SPREAD --- */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12 border-b-8 border-blue-900">
        <div className="md:col-span-7 p-8 md:p-20 flex flex-col justify-center border-r border-slate-200">
          <div>
            <span className="uppercase tracking-[0.3em] text-sm font-sans font-bold text-blue-400 block mb-6">Established 2024</span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl leading-none font-black tracking-tighter mb-6">
              WISDOM <br /> <span className="text-blue-500">AI</span>
            </h1>
            <p className="text-3xl italic leading-tight text-slate-700 max-w-md">
              "Empowering little minds to master the big world of technology."
            </p>
          </div>
        </div>
        <div className="md:col-span-5 relative bg-blue-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
            alt="Children with tablet" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="relative h-full p-12 flex flex-col justify-end text-white">
            <h2 className="text-5xl font-bold uppercase tracking-widest">School</h2>
            <div className="h-1 w-20 bg-blue-400 mt-4"></div>
          </div>
        </div>
      </section>

      {/* --- INTRO SPREAD (Magazine Style) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="p-8 md:p-20 bg-slate-50 flex flex-col justify-center">
          <h3 className="text-blue-400 uppercase font-sans tracking-widest mb-4">About Us</h3>
          <h2 className="text-5xl mb-8 leading-tight">Nurturing Little <br/> Geniuses</h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            At WisdomAI, we believe that the journey to greatness starts early. We are a specialized online school designed for children from Nursery to K5.
          </p>
        </div>
        <div className="relative p-8 md:p-20 flex items-center justify-center">
           {/* Overlapping Image Box */}
           <div className="relative z-10 w-full aspect-square border-4 border-blue-900 overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000" 
               alt="Smart Time" 
               className="w-full h-full object-cover"
             />
           </div>
           <div className="absolute top-1/2 left-0 w-3/4 h-1/2 bg-blue-900 -z-0 translate-y-[-50%] hidden md:block"></div>
           <div className="absolute bottom-10 right-10 z-20 bg-white p-6 shadow-xl max-w-xs border-l-4 border-blue-500">
              <p className="text-sm font-sans font-bold uppercase text-blue-500 mb-2">The Mission</p>
              <p className="text-lg italic">Turning "Screen Time" into "Smart Time."</p>
           </div>
        </div>
      </section>

      {/* --- CURRICULUM SPREAD (Dark Mode Page) --- */}
      <section className="bg-blue-900 text-white p-8 md:p-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-blue-700 pb-8">
            <h2 className="text-6xl font-bold italic">The Curriculum</h2>
            <p className="text-blue-300 font-sans tracking-widest uppercase">Phase 01 — 04</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { g: "Nursery", f: "Digital Awareness", d: "Identifying smart devices and understanding machines." },
              { g: "LKG", f: "Logical Foundations", d: "Learning commands and basic sequencing." },
              { g: "UKG", f: "Problem Solving", d: "Using apps for daily tasks and digital behavior." },
              { g: "Grade 1-5", f: "Creative Tech", d: "Introduction to coding concepts and AI logic." },
            ].map((item, i) => (
              <div key={i} className="border-t border-blue-700 pt-6">
                <span className="text-blue-400 font-sans font-bold text-xs uppercase">Level {i+1}</span>
                <h4 className="text-2xl font-bold mt-2 mb-4">{item.g}</h4>
                <p className="text-blue-200 text-sm mb-4 font-sans font-semibold italic">{item.f}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE "WHY" SECTION (White Page with heavy text) --- */}
      <section className="py-20 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-5xl font-bold text-blue-900 leading-none sticky top-10">
            Why <br /> Families <br /> Choose Us
          </h2>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { n: "01", t: "Play-Based", d: "Interactive games and stories where learning feels like play." },
            { n: "02", t: "Safety First", d: "100% secure environment designed for young digital explorers." },
            { n: "03", t: "Future Ready", d: "Understanding the 'how' and 'why' behind the tech tools." },
            { n: "04", t: "Global Standards", d: "International curriculum blended with futuristic tech skills." }
          ].map((item) => (
            <div key={item.n} className="group">
              <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500">{item.n}</span>
              <div className="-mt-6 relative z-10">
                <h4 className="text-2xl font-bold mb-2">{item.t}</h4>
                <p className="text-slate-500">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL SPREAD (Call to Action) --- */}
      <section className="relative h-[80vh] flex items-center justify-center bg-blue-900">
         <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1500" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            alt="Student"
         />
         <div className="relative text-center text-white px-4">
            <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">Enroll Your Genius</h2>
            <button className="bg-blue-500 hover:bg-white hover:text-blue-900 text-white px-12 py-5 text-xl font-bold uppercase tracking-widest transition-all shadow-2xl">
              Apply Now — 2024
            </button>
         </div>
      </section>

    </div>
  );
};

export default AWisdomAISchool;