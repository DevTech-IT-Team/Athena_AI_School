import React from "react";
import { ArrowUpRight, MessageCircle, Users, GraduationCap, HeartHandshake, Briefcase } from "lucide-react";

const OurLeaders = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind",
  ];

  const coFounders = [
    {
      name: "PaulMichael Rowland",
      title: "Co-Founder",
      tagline: "Transforming how the world learns.",
      description:
        "PaulMichael is a visionary leader with over 15 years of experience in educational technology. He is passionate about creating learning solutions that transform lives and bridge the gap between traditional and digital education. He is also a co-founder of Athena LMS, the learning platform company behind our technology.",
      image: "/api/placeholder/400/300",
    },
    {
      name: "[PLACEHOLDER: second co-founder's full name]",
      title: "Co-Founder",
      tagline: "Crafting engaging learning experiences.",
      description:
        "An education specialist with 25 years of experience, including 8 years in e-learning and content writing. An expert in designing engaging learning experiences that captivate and educate, and a co-founder of Athena LMS.",
      image: "/api/placeholder/400/300",
    },
  ];

  const schoolLeaders = [
    {
      title: "Head of School",
      description: "[PLACEHOLDER: name, qualifications, short bio, photo]",
    },
    {
      title: "Head of British Pathway (Pearson Edexcel)",
      description: "[PLACEHOLDER: name, bio, photo]",
    },
    {
      title: "Head of Indian Pathway (NIOS)",
      description: "[PLACEHOLDER: name, bio, photo]",
    },
    {
      title: "Head of Learner Support and Inclusion",
      description: "[PLACEHOLDER: name, bio, photo]",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      <main className="container mx-auto px-6 md:px-12 pt-20">

        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / About /{" "}
          <span className="text-slate-950 font-bold">Our Leaders</span>
        </nav>

        {/* Header Section */}
        <header className="max-w-7xl mx-auto mb-16 pt-16">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none mb-4">
                Edulectual K12{" "}
                <span className="text-blue-400">Leadership</span> Team
              </h1>

              <div className="flex flex-wrap gap-2 mt-6">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    className={`px-4 py-1 rounded-full text-xs font-medium border ${
                      cat === "Our Leaders"
                        ? "bg-blue-950 text-white"
                        : "border-blue-200 text-blue-950"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Icon */}
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-blue-200">
                <MessageCircle className="text-blue-600 w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold">Have a question?</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-blue-900 leading-relaxed text-lg max-w-4xl">
              Our leaders bring together long experience in education and in
              learning technology. They set the direction for the school, look
              after the quality of teaching and make sure every family gets a
              clear, honest service. This page introduces our co-founders and
              the team that runs the school day to day.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-blue-950 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors">
              Book a free 2-week trial
              <ArrowUpRight className="inline ml-2" size={16} />
            </button>

            <button className="border border-blue-950 text-blue-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
              Apply for 2027-28
              <ArrowUpRight className="inline ml-2" size={16} />
            </button>
          </div>
        </header>

        {/* Co-Founders Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              Meet the visionaries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our <span className="text-blue-400">Co-Founders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coFounders.map((leader, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group rounded-2xl"
              >
                <div className="flex-1 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    Leadership Team
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-3">
                    {leader.name}
                  </h3>

                  <p className="text-blue-600 font-medium italic mb-4">
                    "{leader.tagline}"
                  </p>

                  <p className="text-sm text-blue-900 mb-6 opacity-80 leading-relaxed">
                    {leader.description}
                  </p>

                  <div className="flex items-center gap-2 bg-white w-fit px-4 py-2 rounded-full">
                    <span className="text-xs font-bold text-blue-950">
                      {leader.title}
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-48 h-64 overflow-hidden relative rounded-xl shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  <div className="absolute bottom-4 right-4 bg-white p-2 shadow-lg rounded-full">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* School Leadership Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              Academic leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              School <span className="text-blue-400">Leadership</span>
            </h2>
            <p className="text-blue-900 leading-relaxed mt-4 max-w-3xl">
              The academic team leads curriculum planning, teacher training and
              assessment for both pathways.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {schoolLeaders.map((leader, index) => (
              <div
                key={index}
                className="border border-blue-100 bg-white p-6 rounded-2xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  <GraduationCap className="text-blue-950" size={24} />
                </div>

                <h3 className="text-lg font-bold text-blue-950 mb-3">
                  {leader.title}
                </h3>

                <p className="text-sm text-blue-900 opacity-80 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How Leadership Works With Families */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="bg-blue-950 text-white p-8 md:p-12 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-400/20 p-3 rounded-xl">
                <HeartHandshake size={28} className="text-blue-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                How leadership works with families
              </h2>
            </div>

            <p className="text-blue-100 leading-relaxed max-w-4xl mb-8">
              Parents can raise questions with the class teacher first, then
              with the pathway head, and finally with school leadership. We aim
              to answer every query within{" "}
              <span className="text-blue-300 font-semibold">
                [PLACEHOLDER: response time]
              </span>
              . Feedback from parents and learners is reviewed every term and
              used to improve the timetable, teaching and support.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "01. Class Teacher",
                "02. Pathway Head",
                "03. School Leadership",
              ].map((step, index) => (
                <div
                  key={index}
                  className="border border-blue-400/30 bg-white/5 p-5 rounded-xl"
                >
                  <p className="font-bold text-blue-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="bg-blue-50 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-500" size={28} />
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                  Career opportunities
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join <span className="text-blue-400">Our Team</span>
              </h2>

              <p className="text-blue-900 leading-relaxed max-w-3xl">
                We are always glad to hear from experienced teachers who want
                to teach online on the British or Indian pathway.
              </p>

              <p className="text-sm font-semibold text-blue-950 mt-4">
                [PLACEHOLDER: careers email or link]
              </p>
            </div>

            <div className="shrink-0">
              <button className="bg-blue-950 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors">
                Explore Careers
                <ArrowUpRight className="inline ml-2" size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Where to Find Us */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="border border-blue-100 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-blue-400" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">
                Where to <span className="text-blue-400">Find Us</span>
              </h2>
            </div>

            <p className="text-blue-900 leading-relaxed max-w-4xl">
              Our leadership team can be reached through the contact page.
              Parents are welcome to request a call with a pathway head about
              their child's learning.
            </p>

            <button className="mt-6 border border-blue-950 text-blue-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
              Contact Us
              <ArrowUpRight className="inline ml-2" size={16} />
            </button>
          </div>
        </section>

        {/* Admissions Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="relative overflow-hidden bg-blue-300 p-8 md:p-14 rounded-3xl text-white">
            <div className="relative z-10 max-w-4xl">
              <span className="text-xs font-black uppercase tracking-widest text-blue-950">
                Admissions now open
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                Admissions for <br />
                <span className="text-blue-950">2027-28 are open</span>
              </h2>

              <p className="text-blue-950 text-lg leading-relaxed mb-6">
                Try a free 2-week trial class with our teachers, then apply
                when you are ready. The ₹999 registration fee is waived
                during our launch.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-950 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors">
                  Book a free 2-week trial
                  <ArrowUpRight className="inline ml-2" size={16} />
                </button>

                <button className="border border-blue-950 text-blue-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-white/30 transition-colors">
                  Apply for 2027-28
                  <ArrowUpRight className="inline ml-2" size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-blue-100 pt-8">
          <div className="text-4xl font-black text-blue-950">
            k12onlineschool
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-950 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors">
              Book a free 2-week trial
            </button>

            <button className="border border-blue-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
              Apply for 2027-28
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default OurLeaders;