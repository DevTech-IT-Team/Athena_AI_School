import React from 'react';

const FlowwDifferent = () => {
  const data = [
    { title: "Live, Engaging Classes", desc: "Interactive sessions with exceptional facilitators who bring learning to life" },
    { title: "Athena AI School's Unique Pedagogy", desc: "Proven teaching methods designed for deep understanding and application" },
    { title: "AI-Powered Personalisation", desc: "Technology that adapts to each learner's pace and learning style" },
    { title: "Small Batches of 24-26", desc: "Age-appropriate groups for active participation and meaningful feedback" },
    { title: "Flexible Timings", desc: "Multiple batches and session timings to suit your family's schedule" },
    { title: "Complements Any School", desc: "Works alongside any curriculum — CBSE, ICSE, IGCSE, State boards" },
    { title: "Future-Ready Skills", desc: "Prepares children for skills that matter for lifelong success" },
    { title: "Progress Tracking", desc: "Regular assessments and parent updates on learner development" },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-260 py-16 px-4 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-950 text-xl font-bold mb-2 flex justify-center items-center gap-2">
            Why FLOWW
          </h2>
          <h3 className="text-blue-950 text-4xl md:text-5xl font-extrabold mb-4">
            What Makes FLOWW Different
          </h3>
          <p className="text-blue-900/80 max-w-2xl mx-auto text-lg">
            FLOWW leverages Athena AI School's unique pedagogy, technology and human connections to nurture deep understanding
          </p>
        </div>

        {/* Process/Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Chevron Shape */}
              <div 
                className="bg-blue-100 w-full h-24 flex items-center justify-center mb-6 shadow-lg"
                style={{
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)"
                }}
              >
              </div>
              
              {/* Text Content */}
              <div className="text-center px-4">
                <h4 className="text-blue-950 font-bold text-lg mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-blue-900/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowwDifferent;
