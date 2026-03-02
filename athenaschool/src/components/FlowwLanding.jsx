import React from 'react';

const FlowwLanding = () => {
  const features = [
    {
      icon: "",
      title: "Pedagogy-Led Mastery",
      desc: "Proven teaching methods that ensure deep understanding and retention"
    },
    {
      icon: "",
      title: "AI-Driven Personalisation",
      desc: "Technology that adapts to each learner's unique needs and pace"
    },
    {
      icon: "",
      title: "Strong Human Connections",
      desc: "Exceptional facilitators who mentor and inspire every learner"
    },
    {
      icon: "",
      title: "Flexible Pathways",
      desc: "Accelerated learning options that match your child's potential"
    }
  ];

  const values = [
    "Learner-first decisions",
    "Integrity in personalisation",
    "Excellence with ownership",
    "Innovation with empathy"
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden p-8 md:p-16">
      {/* Background Graphic (Mimicking the image's right-side curves) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-50 opacity-50 -z-0 pointer-events-none transform translate-x-1/4">
        <div className="w-full h-full border-l-[40px] border-sky-100 rounded-l-[500px] flex items-center justify-center">
            <div className="w-full h-[80%] border-l-[20px] border-sky-200 rounded-l-[400px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 flex items-center gap-2">
            The Wisdom Difference
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-sky-600 mb-6">
            Powered by the Learning Pyramid for Success
          </h2>
          <p className="max-w-2xl text-slate-600 leading-relaxed text-lg">
            FLOWW is not a collection of courses. It is a coherent learning system designed to deliver multi-dimensional success at scale.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm border border-sky-200">
                <div className="w-8 h-8 bg-sky-100 rounded-full"></div>
              </div>
              <h3 className="font-bold text-blue-900 text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Values */}
        <div className="border-t border-sky-100 pt-8">
          <div className="flex flex-wrap justify-between gap-4">
            {values.map((v, i) => (
              <span key={i} className="text-xs font-bold uppercase tracking-widest text-sky-700/60">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowwLanding;
