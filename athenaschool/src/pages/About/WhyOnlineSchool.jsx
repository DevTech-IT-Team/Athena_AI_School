import React from 'react';

const WhyOnlineSchool = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-blue-100 py-12 lg:py-20">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-300/10 -skew-x-12 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-32" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-blue-300"></span>
              <span className="text-blue-900 font-bold tracking-[0.2em] uppercase text-sm">Athena AI School</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight mb-6">
              The World is Changing. <br />
              <span className="text-blue-600">So is Education.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl">
              While traditional schools have their place, Athen AI offers a modern alternative designed specifically for the digital age. We provide a unique blend of safety, flexibility, and advanced learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-sm transition-all uppercase text-sm tracking-wider">
                Enroll for 2026
              </button>
              <button className="border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold px-6 py-3 rounded-sm transition-all uppercase text-sm tracking-wider">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE BENEFITS GRID --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 uppercase">Why Choose Athen AI?</h2>
            <div className="h-1.5 w-24 bg-blue-300 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 border-b-4 border-blue-300 bg-slate-50 hover:shadow-xl transition-shadow">
              <span className="text-5xl font-black text-blue-200 block mb-4">01</span>
              <h3 className="text-xl font-bold text-blue-900 mb-4 uppercase">Education Without Borders</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Access a global-standard curriculum and high-level AI modules regardless of location. We bring the world’s best education to your living room.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border-b-4 border-blue-900 bg-white shadow-lg hover:shadow-xl transition-shadow transform md:-translate-y-4">
              <span className="text-5xl font-black text-blue-300 block mb-4">02</span>
              <h3 className="text-xl font-bold text-blue-900 mb-4 uppercase">Personalized Learning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every child learns differently. Fast learners dive deeper into AI modules, while steady learners master foundations without pressure.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border-b-4 border-blue-300 bg-slate-50 hover:shadow-xl transition-shadow">
              <span className="text-5xl font-black text-blue-200 block mb-4">03</span>
              <h3 className="text-xl font-bold text-blue-900 mb-4 uppercase">Safety and Comfort</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nursery and Kindergarten transitions can be overwhelming. We offer a secure, stress-free digital space where parents stay involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECONDARY FEATURES SECTION --- */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="group">
              <h4 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm">04</span>
                Mastery of Digital Literacy
              </h4>
              <p className="text-slate-600 pl-11">
                Children naturally become proficient with digital tools—skills essential before they even reach middle school.
              </p>
            </div>
            <div className="group">
              <h4 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">05</span>
                Flexibility for Families
              </h4>
              <p className="text-slate-600 pl-11">
                Eliminate commutes and rigid schedules. Our model respects your family’s time while ensuring premium education.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-300 w-full h-80 rounded-sm shadow-2xl flex items-center justify-center text-blue-900 font-black text-2xl p-12 text-center">
              "The medium is the message. By learning online, children naturally lead the future."
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-900 -z-10" />
          </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-blue-900 text-center mb-12 uppercase">How We Compare</h2>
          <div className="overflow-hidden rounded-lg border border-slate-200 shadow-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-6 font-bold uppercase tracking-wider text-sm">Feature</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-sm border-l border-blue-800">Traditional School</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-sm bg-blue-600">Athen AI Online</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-blue-50/50">
                  <td className="p-6 font-bold text-blue-900">Tech Focus</td>
                  <td className="p-6 text-slate-500 italic">Occasional Lab Time</td>
                  <td className="p-6 font-bold text-blue-600 bg-blue-50/50">AI Integrated Daily</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-6 font-bold text-blue-900">Environment</td>
                  <td className="p-6 text-slate-500">Fixed Classroom</td>
                  <td className="p-6 font-bold text-blue-600 bg-blue-50/50">Safe Home Space</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-6 font-bold text-blue-900">Curriculum</td>
                  <td className="p-6 text-slate-500">Standardized</td>
                  <td className="p-6 font-bold text-blue-600 bg-blue-50/50">International & Tech-first</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-6 font-bold text-blue-900">Learning Pace</td>
                  <td className="p-6 text-slate-500">Group-dependent</td>
                  <td className="p-6 font-bold text-blue-600 bg-blue-50/50">Adaptive & Child-centered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-blue-900 py-12 border-t border-blue-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-300 font-black text-xl">ATHENA AI SCHOOL</p>
          <p className="text-blue-400 text-sm">© 2026 Future Ready Education. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WhyOnlineSchool;
