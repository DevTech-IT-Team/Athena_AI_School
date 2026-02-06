import React from 'react';

const WhatSetsUsApart = () => {
  const categories = ["What sets us apart?", "Values & Ethos", "Our Leaders", "Habits of Mind"];

  const features = [
    { title: "Deep Learning", description: "Immersive educational experiences that go beyond surface-level knowledge" },
    { title: "World of Flexibility", description: "Learn anytime, anywhere with schedules that adapt to your lifestyle" },
    { title: "Inspiring Facilitators", description: "Dedicated educators who nurture curiosity and drive excellence" },
    { title: "Dynamic Curriculum", description: "Cutting-edge educational approaches backed by research and innovation" },
    { title: "Personalised Learning", description: "Customized educational paths that match individual learning styles" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      {/* Navigation & Header - Minimalist Style */}
      <header className="container mx-auto px-6 pt-16 pb-12">
        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / About / <span className="text-slate-950 font-bold">What sets us apart?</span>
        </nav>
        
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-100 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-black text-slate-950 leading-tight mb-4">
              What Sets <br/><span className="text-blue-950">Us Apart?</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Athena AI School, we go beyond the boundaries of traditional education, 
              reaching over 7,500 learners across 78+ countries.
            </p>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            {categories.map((cat, i) => (
              <button key={i} className="text-[10px] font-bold tracking-tighter uppercase px-4 py-2 border border-slate-200 hover:bg-slate-950 hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section - Inspired by "Our Business" slide */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-blue-950 pl-6">
            Empowering Tomorrow's <br/>Global Learners
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Our journey began in June 2020 with a mission to make high-quality, personalized, 
            and transparent education accessible to all—anytime, anywhere. Today, we're a 
            global community that empowers learners to explore and thrive.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-slate-950 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-900 transition-colors">
              Enquire Now
            </button>
            <button className="bg-blue-950 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-900 transition-colors">
              Prospectus
            </button>
          </div>
        </div>
        
        {/* Decorative Grid - Inspired by the 4-box layout in image */}
        <div className="grid grid-cols-2 gap-1">
          <div className="aspect-square bg-blue-950 p-8 flex flex-col justify-end text-white">
            <h4 className="font-bold uppercase text-xs tracking-widest">Innovation</h4>
          </div>
          <div className="aspect-square bg-slate-100 p-8 flex flex-col justify-end">
            <h4 className="font-bold uppercase text-xs tracking-widest">Global</h4>
          </div>
          <div className="aspect-square bg-slate-950 p-8 flex flex-col justify-end text-white">
            <h4 className="font-bold uppercase text-xs tracking-widest">Inclusive</h4>
          </div>
          <div className="aspect-square bg-blue-950 p-8 flex flex-col justify-end text-white">
            <h4 className="font-bold uppercase text-xs tracking-widest">Growth</h4>
          </div>
        </div>
      </section>

      {/* Features - Inspired by the "Analysis" node diagram */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-950 mb-2">Key Features</h2>
            <p className="text-4xl font-bold text-slate-950">Why Athena AI is Different</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-10 group hover:bg-slate-950 transition-all duration-300 border-b-4 border-transparent hover:border-blue-950">
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">{f.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
            
            {/* Quote Card - Timeline inspired */}
            <div className="bg-blue-950 p-10 flex flex-col justify-center">
               <p className="text-2xl font-black text-white leading-tight italic">
                 "The future is online, where are you?"
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-style section - Inspired by S.W.O.T slide */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div className="relative">
          <span className="absolute -top-12 -left-4 text-[12rem] font-black text-slate-100 -z-10">A</span>
          <h3 className="text-3xl font-bold uppercase mb-8">#Being Athena AI</h3>
          <div className="space-y-8">
            <div className="border-l-2 border-slate-950 pl-6">
              <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Resilience</h4>
              <p className="text-sm text-slate-600">Make Some Rain While The Sun Shines Outside</p>
            </div>
            <div className="border-l-2 border-slate-950 pl-6">
              <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Balance</h4>
              <p className="text-sm text-slate-600">A Little Play in Between Classes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-950 p-12 text-white">
          <h3 className="text-xl font-bold mb-6">Why Parents Choose Us?</h3>
          <p className="text-slate-400 text-sm italic mb-8">
            "Hearing from parents about their experience with our online education helps us maintain 
            our gold standard in K-12 schooling."
          </p>
          <div className="h-1 w-12 bg-blue-950"></div>
        </div>
      </section>
    </div>
  );
};

export default WhatSetsUsApart;
