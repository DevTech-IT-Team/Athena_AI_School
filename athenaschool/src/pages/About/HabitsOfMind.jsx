import React from 'react';

const HabitsOfMind = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const habits = [
    "Persisting", "Managing Impulsivity", "Listening with Understanding and Empathy",
    "Thinking Flexibly", "Thinking About Thinking", "Striving for Accuracy",
    "Questioning and Posing Problems", "Applying Past Knowledge", 
    "Thinking and Communicating", "Gathering Data Through All Senses",
    "Creating, Imagining, and Innovating", "Responding with Wonderment",
    "Taking Responsible Risks", "Finding Humor", "Thinking Interdependently",
    "Remaining Open to Learning"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <main className="container mx-auto px-6 md:px-12 pt-20">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / About / <span className="text-slate-950 font-bold">Habits of Mind</span>
        </nav>
        {/* Hero Section - Modern Redesign */}
        <section className="mb-16 relative">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10 rounded-l-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Main Heading & Intro */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Comprehensive <br />
                  <span className="text-blue-950">Habits of Mind</span> <br />
                  Framework
                </h1>
              </div>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Empowering future-ready learners with the world-renowned 16 Habits of Mind, 
                infused into academic practices to develop critical thinking and cognitive frameworks.
              </p>
            </div>
            
            {/* Right Content - Category Navigation */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 shadow-xl border border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Explore</h3>
                <div className="space-y-3">
                  {categories.map((cat, i) => (
                    <div key={i} className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50 transition-all cursor-pointer border border-transparent hover:border-blue-200">
                      <span className="font-medium text-slate-700 group-hover:text-blue-700">{cat}</span>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Card */}
        <div className="bg-blue-950 p-10 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 mb-16 text-white">
          <p className="text-2xl md:text-3xl font-bold italic max-w-2xl">
            "When you see your child looking forward to his classes, you know the school is doing something really right."
          </p>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button className="bg-blue-950 text-white px-8 py-4 font-bold hover:scale-105 transition-transform">Enquire Now</button>
            <button className="bg-white text-blue-950 px-8 py-4 font-bold border border-blue-950/10 shadow-sm">Download Prospectus</button>
          </div>
        </div>

        {/* Certification Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-blue-950 mb-10 flex items-center gap-4">
            <span className="w-12 h-1 bg-blue-300"></span> IHOM Certified
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-8 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-950 text-blue-300 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524a1 1 0 01-1.4 0zM6 18a1 1 0 001-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"/></svg>
              </div>
              <h3 className="text-xl font-black text-blue-950 mb-4 uppercase tracking-tight">Community of Excellence</h3>
              <p className="text-slate-600 leading-relaxed">WisdomAI School is the first School in Asia to receive this prestigious certification of excellence.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-300 text-blue-950 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723 3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723 3.066 3.066 0 00-1.745.723A3.066 3.066 0 006.267 3.455z" /></svg>
              </div>
              <h3 className="text-xl font-black text-blue-950 mb-4 uppercase tracking-tight">The Institute</h3>
              <p className="text-slate-600 leading-relaxed">Founded by Dr Arthur Costa and Dr Bena Kallick, helping educators learn and practice thinking skills.</p>
            </div>
          </div>
        </div>

        {/* 16 Habits Grid */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-black text-blue-950 mb-2">The 16 Habits</h2>
              <p className="text-slate-500">Cutting-edge research for Thinking-Based Learning</p>
            </div>
            <div className="hidden md:block text-right">
                <span className="text-5xl font-black text-blue-300">150</span>
                <p className="text-xs uppercase font-bold text-slate-400">Schools Worldwide</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {habits.map((habit, index) => (
              <div key={index} className="group p-6 bg-white border border-slate-100 shadow-sm hover:bg-blue-950 transition-all duration-300 cursor-default">
                <span className="text-xs font-bold text-blue-300 mb-2 block group-hover:text-blue-300/50">HABIT {index + 1}</span>
                <h3 className="font-bold text-blue-950 leading-tight group-hover:text-white transition-colors">{habit}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Hashtag Section */}
        <div className="bg-slate-900 p-12 mb-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/10 -mr-20 -mt-20"></div>
          <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
             <span className="text-blue-300">#</span>Being WisdomAI
          </h3>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {t: "Introducing the Habits", d: "Our comprehensive approach to developing critical thinking skills"},
              {t: "The Framework", d: "The complete framework for cognitive development"},
              {t: "Why Teach Habits?", d: "The importance of thinking skills in modern education"}
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-blue-300 pl-6">
                <h4 className="font-bold text-lg mb-2 text-blue-300">{item.t}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HabitsOfMind;