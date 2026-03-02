import React from 'react';

const AWisdomAIGroup = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const institutions = [
    {
      name: "WisdomAI School",
      description: "Asia's leading online-only school, WisdomAI School offers both structured and flexible learning paths customized to each learner's unique journey. With a digital-first foundation, we focus on academic excellence and the holistic development of every learner's potential. Ranked India's #1 Leading Online School in the Education World India School Grand Jury Awards 2021-22, we emphasize an education that is seamless, relevant, and accessible to all."
    },
    {
      name: "WisdomAI Skills",
      description: "In a rapidly changing world, upskilling and reskilling are essential. WisdomAI Skills provides leading courses that prepare individuals, professionals, and even retired military personnel for the demands of tomorrow. With global partnerships in fields like software engineering and data science, WisdomAI Skills empowers learners to stay ahead in their careers, equipped with the skills that matter most."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <main className="container mx-auto px-6 md:px-12 pt-20">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / About / <span className="text-slate-950 font-bold">WisdomAI Group</span>
        </nav>
        {/* 2. PRIMARY HERO HEADER - Inspired by "Lorem, Ipsum & Dolor" */}
        <section className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-blue-900 mb-16">
            WisdomAI, <br />
            School & Skills
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: The Blue Block from image */}
            <div className="md:col-span-4">
              <div className="bg-blue-800 w-full aspect-[4/3] mb-8"></div>
              
              {/* The "02" and Profile section from image */}
              <div className="relative">
                <span className="text-[12rem] font-black text-slate-100 absolute -top-20 -left-4 -z-10 leading-none">
                  02
                </span>
                <div className="flex items-center gap-4 mt-12">
                   <div className="w-24 h-24 bg-slate-200 grayscale overflow-hidden">
                      {/* Placeholder for the profile face in image */}
                      <div className="w-full h-full bg-gradient-to-tr from-slate-400 to-slate-200"></div>
                   </div>
                   <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Established 2021
                   </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Content Block from image */}
            <div className="md:col-span-8">
              <h2 className="text-xl md:text-2xl font-bold mb-6 border-b-2 border-slate-900 pb-2 inline-block">
                Empowering Future-Ready Learners.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6">
                    In a world that's evolving faster than ever, education must keep pace. 
                    Imagine an environment where every learner can progress at their own speed, 
                    free from the constraints of a one-size-fits-all approach.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    WisdomAI School is redefining what education can be—an adaptive, 
                    forward-thinking journey designed to prepare young minds for a 
                    future where technology and creativity converge.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] leading-relaxed text-slate-500 uppercase tracking-wide">
                    {institutions[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100 my-20" />

        {/* 3. SUB-SECTION - Institutions (Grid Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
          <div className="md:col-span-4">
             <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">The Group</h3>
             <div className="flex flex-col gap-2">
                {categories.map((cat, i) => (
                  <span key={i} className="text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors">
                    {cat}
                  </span>
                ))}
             </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {institutions.map((inst, idx) => (
              <div key={idx}>
                <h4 className="text-2xl font-bold text-blue-900 mb-4">{inst.name}</h4>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  {inst.description.slice(0, 150)}...
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CALL TO ACTION - Minimalist Style */}
        <section className="bg-slate-900 text-white p-12 md:p-20 flex flex-col items-center text-center">
            <h2 className="text-4xl font-light mb-8 italic">"The future is online, where are you?"</h2>
            <div className="flex gap-6">
              <button className="border-b-2 border-white pb-1 text-sm font-bold uppercase tracking-widest hover:text-blue-400 hover:border-blue-400 transition-all">
                Enquire Now
              </button>
              <button className="border-b-2 border-white pb-1 text-sm font-bold uppercase tracking-widest hover:text-blue-400 hover:border-blue-400 transition-all">
                Prospectus
              </button>
            </div>
        </section>
      </main>
    </div>
  );
};

export default AWisdomAIGroup;
