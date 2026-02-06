import React from 'react';

const ValuesAndEthos = () => {
  const categories = ["What sets us apart?", "Values & Ethos", "Our Leaders", "Habits of Mind"];

  const missionElements = [
    { title: "Custom Learning Pathways", description: "Differentiated programs aligned with each learner's stage and goals." },
    { title: "Passionate Facilitators", description: "Dedicated to growth, mentorship, and collaboration for meaningful outcomes." },
    { title: "Inclusive Environments", description: "Spaces where every learner's voice matters, fostering an adaptable experience." },
    { title: "Enriching Resources", description: "Innovative, interactive resources that stimulate interest and participation." },
    { title: "Data-Driven Insights", description: "Adaptive learning through insights, helping to pivot the approach at the right time." },
    { title: "Community Collaboration", description: "A culture that values community and parental involvement in the shared journey." }
  ];

  const stakeholders = [
    { title: "For Learners", icon: "👨‍🎓" },
    { title: "For Facilitators", icon: "👩‍🏫" },
    { title: "For Families", icon: "👨‍👩‍👧‍👦" },
    { title: "For Society", icon: "🌍" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      {/* Header Section with Breadcrumb */}
      <section className="pt-20 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          {/* Breadcrumb */}
          <nav className="text-xs tracking-widest uppercase text-blue-300 mb-4">
            Home / About / <span className="text-slate-950 font-bold">Values & Ethos</span>
          </nav>
          <h1 className="text-blue-300 font-bold tracking-widest text-sm mb-4 uppercase">Values & Ethos</h1>
          <h2 className="text-5xl font-extrabold text-blue-950 mb-6 leading-tight">Personalized education direct to your home.</h2>
          <p className="text-slate-500 leading-relaxed text-lg">
            At Athena AI School, our vision is to create a world where every child embarks on a journey of self-discovery, empowered to shape their future.
          </p>
        </div>
        <div className="flex-1 bg-blue-100 p-8">
           <p className="text-xl italic text-blue-950 mb-6">"The future is online, where are you?"</p>
           <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-blue-950 text-white px-6 py-3 font-semibold hover:bg-blue-800 transition">Enquire Now</button>
              <button className="bg-white text-blue-950 px-6 py-3 font-semibold hover:bg-blue-50 transition">Download Prospectus</button>
           </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="bg-blue-950 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {categories.map((cat, i) => (
            <span key={i} className="text-blue-300 text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-white transition">{cat}</span>
          ))}
        </div>
      </div>

      {/* Mission Grid (Based on Slide 2/5) */}
      <section className="py-20 bg-slate-50 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950 uppercase tracking-tight">Our Mission</h2>
            <div className="h-1 w-20 bg-blue-300 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {missionElements.map((item, index) => (
              <div key={index} className="bg-white p-8 shadow-sm border-2 border-slate-200 hover:border-blue-950 transition group">
                <div className="w-12 h-12 bg-blue-950 text-white flex items-center justify-center mb-6 group-hover:bg-blue-800 transition">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-bold text-blue-950 mb-3 uppercase text-sm tracking-wide">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders (Based on Slide 4) */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-blue-950 uppercase tracking-widest">Our Commitment</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stakeholders.map((person, i) => (
            <div key={i} className="bg-white p-8 text-center group hover:bg-blue-950 transition-colors duration-300">
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition">{person.icon}</div>
              <h3 className="font-bold text-blue-950 group-hover:text-white uppercase text-xs tracking-tighter">{person.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Content / Highlights */}
      <section className="bg-blue-950 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-4">#Being Athena AI</h2>
            <p className="text-slate-300 mb-8">Reimagining school as a 16-year journey of meaningful, joyful experiences, fostering growth for learners and families alike.</p>
          </div>
          <div className="space-y-4">
            {["Demonstration of Learning Portal", "Nursery Activity-based Learning", "Mindfulness Sessions"].map((text, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValuesAndEthos;
