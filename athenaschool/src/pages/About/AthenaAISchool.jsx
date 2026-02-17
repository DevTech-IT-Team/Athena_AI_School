import React from 'react';

const AthenaAISchool = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-300">
      {/* SECTION 1: HERO / COVER */}
      <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 border-b border-blue-900">
        <div className="flex flex-col justify-center p-12 border-r border-blue-900">
          <span className="text-blue-600 font-bold tracking-widest uppercase mb-4">Established 2024</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-blue-900 leading-tight">
            ATHENA <br /> AI SCHOOL
          </h1>
          <p className="mt-8 text-xl text-blue-800 max-w-md italic">
            "Empowering little minds to master the big world of technology."
          </p>
        </div>
        <div className="bg-sky-600 flex items-center justify-center p-12 text-white">
          <div className="border-4 border-blue-300 p-8 text-center uppercase tracking-tighter">
            <h2 className="text-3xl md:text-4xl font-serif">Nurturing Little Geniuses</h2>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT US (Editorial Layout) */}
      <section className="py-24 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-5xl font-serif text-blue-900 sticky top-10">About Us</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg leading-relaxed text-slate-700">
            <p className="text-2xl text-blue-900 font-medium">
              At Athena AI, we believe that the journey to greatness starts early. 
              We are a specialized online school designed for children from Nursery to K5.
            </p>
            <p>
              Our mission is to turn <span className="text-blue-600 font-bold">"Screen Time"</span> into 
              <span className="text-blue-600 font-bold"> "Smart Time."</span> We don't just teach kids how 
              to use a tablet; we teach them how to think, solve problems, and understand the 
              digital world around them in a safe, fun, and age-appropriate way.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CURRICULUM TABLE */}
      <section className="bg-blue-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-blue-300"></div>
            <h2 className="text-3xl font-serif text-blue-900 uppercase tracking-widest">Our Unique Curriculum</h2>
            <div className="h-px flex-1 bg-blue-300"></div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-900 text-blue-900 uppercase text-sm tracking-widest">
                  <th className="py-4 px-6">Grade</th>
                  <th className="py-4 px-6">Level Focus</th>
                  <th className="py-4 px-6">What They Learn</th>
                </tr>
              </thead>
              <tbody className="text-blue-900">
                {[
                  { grade: "Nursery", focus: "Digital Awareness", learn: "Identifying smart devices and understanding machines help humans." },
                  { grade: "LKG", focus: "Logical Foundations", learn: "Learning that devices follow commands and basic sequencing." },
                  { grade: "UKG", focus: "Problem Solving", learn: "Using apps for daily tasks and practicing responsible digital behavior." },
                  { grade: "Grade 1-5", focus: "Creative Tech", learn: "Introduction to coding concepts, logical thinking, and basic AI logic." },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-blue-200 hover:bg-blue-100 transition-colors">
                    <td className="py-6 px-6 font-bold">{row.grade}</td>
                    <td className="py-6 px-6 italic text-blue-700">{row.focus}</td>
                    <td className="py-6 px-6">{row.learn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY PARENTS LOVE US (Card Style) */}
      <section className="py-24 px-8 md:px-24 bg-white">
        <h2 className="text-5xl font-serif text-blue-900 mb-16 text-center">Why Families Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Play-Based", desc: "Interactive games and stories where learning feels like play." },
            { title: "Safety First", desc: "100% secure environment designed for young digital explorers." },
            { title: "Future Ready", desc: "Understanding the 'how' and 'why' behind the tech tools." },
            { title: "Global Standards", desc: "International curriculum blended with futuristic tech skills." }
          ].map((item, i) => (
            <div key={i} className="border border-blue-300 p-8 flex flex-col justify-between hover:bg-blue-900 hover:text-white transition-all duration-300 group">
              <span className="text-4xl font-serif mb-4 text-blue-300 group-hover:text-white">0{i+1}</span>
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: OUR PROMISE */}
      <footer className="bg-blue-900 text-white py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif">Our Promise</h2>
          <p className="text-blue-200 leading-relaxed">
            At Athena AI, we are committed to shaping the next generation of innovators. 
            We provide the tools, the guidance, and the inspiration to help your child grow.
          </p>
          <div className="pt-10">
            <button className="bg-white text-blue-900 px-10 py-4 uppercase font-bold tracking-widest hover:bg-blue-300 transition-colors">
              Enroll Your Genius
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AthenaAISchool;
