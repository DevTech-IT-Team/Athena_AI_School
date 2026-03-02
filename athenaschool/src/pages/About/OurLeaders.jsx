import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const OurLeaders = () => {
  const categories = ["What sets us apart?", "Values & Ethos", "Our Leaders", "Habits of Mind"];

  const leaders = [
    {
      name: "Yeshwanth Raj Parasmal",
      title: "Founder & CEO",
      description: "Yeshwanth is a value-driven entrepreneur with over 20 years of experience. He has facilitated over 75 educational institutions and was a UK Global Alumni Awards finalist in 2022.",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Dr Senthil Kumaran",
      title: "Non-Executive Director",
      description: "An authority in excellence frameworks like EFQM and NAAC, Dr. Senthil has 30+ years of experience and launched the groundbreaking Learners Confluence in India.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      <main className="container mx-auto px-6 md:px-12 pt-20">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / About / <span className="text-slate-950 font-bold">Our Leaders</span>
        </nav>
      {/* HEADER SECTION - Inspired by Foli Top Layout */}
      <header className="max-w-7xl mx-auto mb-16 pt-16">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none mb-4">
              Our Leaders: Shaping <span className="text-blue-400">Educational</span> <br />
              Excellence Worldwide
            </h1>
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((cat, i) => (
                <button key={i} className={`px-4 py-1 rounded-full text-xs font-medium border ${cat === "Our Leaders" ? 'bg-blue-950 text-white' : 'border-blue-200 text-blue-950'}`}>
                  {String(i + 1).padStart(2, '0')} {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-blue-200">
               <MessageCircle className="text-blue-600 w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold">Have a question?</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-blue-900 leading-relaxed text-lg">
            At Wisdom, we harness cutting-edge pedagogical methodologies to power a sustainable future. 
            Our leaders guide the way in human-centric education and academic innovation.
          </p>
          <button className="flex items-center gap-2 font-bold border-b-2 border-blue-950 pb-1 hover:text-blue-400 transition-colors">
            Read more <ArrowUpRight size={16} />
          </button>
        </div>
      </header>

      {/* LEADERS GRID - Inspired by Foli "Eco-Power Solutions" Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 mb-20">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-blue-50 p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
            <div className="flex-1 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Executive Board</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">{leader.name}</h2>
              <p className="text-sm text-blue-900 mb-6 opacity-80">{leader.description}</p>
              <div className="flex items-center gap-2 bg-white w-fit px-4 py-2">
                <span className="text-xs font-bold text-blue-950">{leader.title}</span>
              </div>
            </div>
            <div className="w-full md:w-48 h-64 overflow-hidden relative">
               <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               <div className="absolute bottom-4 right-4 bg-white p-2 shadow-lg">
                  <ArrowUpRight size={20} />
               </div>
            </div>
          </div>
        ))}
      </section>

      {/* STATS/IMPACT SECTION - Inspired by Foli Green Cards */}
      <section className="max-w-7xl mx-auto mb-20">
        <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Impact: Transforming Lives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-300 p-8 text-white flex flex-col justify-between h-80">
            <h4 className="text-7xl font-bold italic">95%</h4>
            <p className="font-medium leading-tight">Our students report increased confidence and academic engagement.</p>
            <div className="flex justify-between items-center pt-4 border-t border-white/30">
              <span className="text-[10px] font-black uppercase">Success Rate</span>
              <ArrowUpRight size={18} />
            </div>
          </div>
          <div className="bg-blue-950 p-8 text-white flex flex-col justify-between h-80">
            <h4 className="text-7xl font-bold italic">30+</h4>
            <p className="font-medium leading-tight">Years of combined leadership experience in global education.</p>
            <div className="flex justify-between items-center pt-4 border-t border-white/30">
              <span className="text-[10px] font-black uppercase">Expertise</span>
              <ArrowUpRight size={18} />
            </div>
          </div>
          <div className="bg-white p-8 text-blue-950 flex flex-col justify-between h-80">
            <h4 className="text-7xl font-bold italic">0%</h4>
            <p className="font-medium leading-tight">Compromise on the "Habits of Mind" and student-first philosophy.</p>
            <div className="flex justify-between items-center pt-4 border-t border-blue-950">
              <span className="text-[10px] font-black uppercase">Compromise</span>
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="max-w-7xl mx-auto flex justify-between items-center border-t border-blue-100 pt-8">
        <div className="text-4xl font-black text-blue-950">WisdomAI</div>
        <div className="flex gap-4">
           <button className="bg-blue-950 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors">Enquire Now</button>
           <button className="border border-blue-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-50">Download Prospectus</button>
        </div>
      </footer>
      </main>
    </div>
  );
};

export default OurLeaders;