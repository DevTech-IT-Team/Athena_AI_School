import React from 'react';

const OurVision = () => {
  return (
    <div className="min-h-screen bg-white font-serif text-slate-900">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-sky-50 py-16 lg:py-24">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-sky-200/30 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-black text-blue-900 leading-tight mb-6">
              Wisdom <span className="text-blue-600">AI SCHOOL</span>
            </h1>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Our Vision</h2>
          </div>
        </div>
      </section>

      {/* --- MAIN VISION STATEMENT --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-50 border-l-4 border-blue-900 p-8 md:p-12 rounded-r-lg">
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-6">
              At WisdomAI, our vision is to redefine early childhood education by creating a world
              where every child, from Nursery to Grade 5, is not just a consumer of technology, but
              a confident creator of it.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              We envision a future where the next generation grows up with a natural
              understanding of Artificial Intelligence and logic, using these tools to solve problems,
              express creativity, and build a better world.
            </p>
          </div>
        </div>
      </section>

      {/* --- PILLARS SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 uppercase mb-4">The Pillars of Our Vision</h2>
            <div className="h-1.5 w-32 bg-blue-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pillar 1 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-blue-300 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Human-Centric Technology</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We believe technology should enhance human potential, not replace it. Our goal is to teach children how to use AI as a partner in their learning journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Leveling the Playing Field</h3>
                  <p className="text-slate-600 leading-relaxed">
                    By providing high-quality, tech-focused education online, we aim to make world-class STEM and AI modules accessible to children everywhere, regardless of their location.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-blue-300 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Cultivating Curiosity</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We strive to keep the "spark" of wonder alive. Our vision is to turn every "Why?" a child asks into an opportunity to explore the mechanics of the digital and physical world.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Building Ethical Leaders</h3>
                  <p className="text-slate-600 leading-relaxed">
                    As we teach AI, we also teach responsibility. We envision our students growing into leaders who understand the ethical impact of technology on society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ULTIMATE GOAL SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 uppercase mb-4">Our Ultimate Goal</h2>
            <div className="h-1.5 w-32 bg-blue-300 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-sky-900 text-white p-12 rounded-lg shadow-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Our goal is to be the global gold standard for primary tech-integrated education. We
              want to ensure that by the time a WisdomAI student reaches the end of K5, they
              possess the critical thinking, digital literacy, and innovative mindset required to excel
              in a rapidly changing 21st-century landscape.
            </p>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-blue-300/50 font-serif">"</div>
              <p className="text-xl md:text-2xl italic font-medium text-blue-100 pl-8">
                To inspire a generation of digital natives to become the visionary architects of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-blue-900 py-12 border-t border-blue-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-300 font-black text-xl">WISDOMAI SCHOOL</p>
          <p className="text-blue-400 text-sm">© 2026 Vision for Future Education. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OurVision;
