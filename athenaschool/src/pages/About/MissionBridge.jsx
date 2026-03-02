import React from 'react';

const MissionBridge = () => {
  return (
    <div className="min-h-screen bg-white font-serif p-6 md:p-12 text-slate-900">
      {/* Editorial Layout Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 border-t-8 border-blue-900 shadow-sm">
        
        {/* LEFT SIDEBAR: The Branding & Title */}
        <aside className="md:col-span-4 bg-blue-50 p-8 md:p-12 flex flex-col justify-between border-r border-blue-100">
          <div>
            <h1 className="text-sm font-sans font-black uppercase tracking-[0.5em] text-blue-900 mb-20">
              WisdomAI School
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold text-blue-900 leading-none italic">
              Our<br />Mission
            </h2>
            <div className="w-16 h-2 bg-blue-300 mt-6"></div>
          </div>
          
          <div className="hidden md:block">
            <p className="text-xs font-sans uppercase tracking-widest text-blue-400 font-bold">
              Prospectus / 2026
            </p>
          </div>
        </aside>

        {/* RIGHT CONTENT: The Core Text */}
        <main className="md:col-span-8 p-8 md:p-16">
          {/* Mission Statement */}
          <section className="mb-16">
            <p className="text-2xl md:text-3xl leading-snug text-blue-900 font-medium mb-8">
              At WisdomAI, our mission is to empower young learners by integrating high-level 
              Artificial Intelligence into the core of early childhood education.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              We are dedicated to providing a secure, engaging, and forward-thinking online 
              environment where students from Nursery to K5 can develop the essential skills 
              of the future.
            </p>
          </section>

          {/* Grid: How We Achieve It */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {[
              { title: "Practical Innovation", text: "Curriculum that goes beyond theory, teaching logic, coding, and AI to solve real-world problems." },
              { title: "Holistic Development", text: "Nurturing emotional intelligence and creativity alongside premium digital literacy." },
              { title: "Accessibility", text: "World-class tech modules available globally through our flexible interactive platform." },
              { title: "Safe Exploration", text: "A 'walled garden' for discovery, ensuring steps into AI are guided, ethical, and safe." }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-blue-300 pl-6">
                <h4 className="font-sans font-bold text-blue-900 uppercase text-xs tracking-tighter mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Quote / Commitment Section */}
          <div className="mt-20 relative">
            <div className="absolute -top-10 -left-4 text-9xl text-blue-100 font-serif opacity-50 select-none">"</div>
            <div className="bg-blue-900 text-white p-10 md:p-14 rounded-sm shadow-xl">
              <p className="text-2xl italic leading-relaxed mb-6">
                "Our mission is to bridge the gap between early childhood curiosity and the power of Artificial Intelligence."
              </p>
              <div className="h-px w-20 bg-blue-300 mb-4"></div>
              <p className="text-sm font-sans uppercase tracking-[0.2em] text-blue-200">
                Our Commitment to You
              </p>
              <p className="text-sm mt-4 text-blue-50 opacity-80 leading-relaxed">
                We stay at the cutting edge, constantly updating our WisdomAI modules to ensure 
                students are prepared for a life of continuous leadership in a digital age.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Page Numbering Style Footer */}
      <footer className="max-w-6xl mx-auto mt-8 flex justify-between items-center px-4 text-[10px] font-sans text-slate-400 uppercase tracking-widest">
        <span>WisdomAI Education Group</span>
        <span className="font-bold text-blue-900">Module 01 / Page 04</span>
      </footer>
    </div>
  );
};

export default MissionBridge;
