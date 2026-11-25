import React from 'react';

const HabitsOfMind = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const habits = [
    "Persisting",
    "Managing Impulsivity",
    "Listening with Understanding and Empathy",
    "Thinking Flexibly",
    "Thinking About Thinking",
    "Striving for Accuracy",
    "Questioning and Posing Problems",
    "Applying Past Knowledge to New Situations",
    "Communicating Clearly and Precisely",
    "Creating, Imagining and Innovating"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <main className="container mx-auto px-6 md:px-12 pt-20">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / About / <span className="text-slate-950 font-bold">Habits of Mind</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-16 relative">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10 rounded-l-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Habits of Mind: <br />
                  <span className="text-blue-950">Building Thinking Skills</span> <br />
                  in Every Lesson
                </h1>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Knowing facts is only part of learning. Children also need good
                habits for when they do not know the answer yet: keeping going,
                thinking flexibly, asking good questions and listening to others.
                Educators Arthur Costa and Bena Kallick described a set of such
                "habits of mind", and at Edulectual K12 Online School we use the
                idea to shape how children approach learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-950 text-white px-8 py-4 font-bold hover:scale-105 transition-transform">
                  Book a free 2-week trial
                </button>
                <button className="bg-white text-blue-950 px-8 py-4 font-bold border border-blue-950/10 shadow-sm">
                  Apply for 2027-28
                </button>
              </div>
            </div>

            {/* Right Content - Category Navigation */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 shadow-xl border border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                  Explore
                </h3>

                <div className="space-y-3">
                  {categories.map((cat, i) => (
                    <div
                      key={i}
                      className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50 transition-all cursor-pointer border border-transparent hover:border-blue-200"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-blue-700">
                        {cat}
                      </span>

                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
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
            "Knowing facts is only part of learning. Building the habits to
            think, question and persevere is what helps children grow."
          </p>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button className="bg-blue-950 text-white px-8 py-4 font-bold hover:scale-105 transition-transform">
              Book a free 2-week trial
            </button>

            <button className="bg-white text-blue-950 px-8 py-4 font-bold border border-blue-950/10 shadow-sm">
              Apply for 2027-28
            </button>
          </div>
        </div>

        {/* Habits Approach Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-blue-950 mb-10 flex items-center gap-4">
            <span className="w-12 h-1 bg-blue-300"></span>
            Habits We Focus On
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-8 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-950 text-blue-300 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524a1 1 0 01-1.4 0zM6 18a1 1 0 001-1h4a1 1 0 110 2H7a1 1 0 01-1-1z" />
                </svg>
              </div>

              <h3 className="text-xl font-black text-blue-950 mb-4 uppercase tracking-tight">
                What it Looks Like Online
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Teachers name the habit a task needs, for example "today we
                are persisting". Children reflect on it at the end of the
                lesson, and parents get simple prompts to use at home. In
                discussion, students practise listening, building on others'
                ideas and disagreeing respectfully.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-300 text-blue-950 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723 3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723 3.066 3.066 0 00-1.745.723A3.066 3.066 0 006.267 3.455z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-black text-blue-950 mb-4 uppercase tracking-tight">
                Why it Matters for Online Learners
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Learning from home asks more of children's self-management.
                Habits such as persisting, managing impulsivity and thinking
                about thinking help them stay focused and independent.
              </p>
            </div>
          </div>
        </div>

        {/* Habits Grid */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-black text-blue-950 mb-2">
                Habits We Focus On
              </h2>

              <p className="text-slate-500">
                Building thoughtful, independent and confident learners
              </p>
            </div>

            <div className="hidden md:block text-right">
              <span className="text-5xl font-black text-blue-300">
                10
              </span>
              <p className="text-xs uppercase font-bold text-slate-400">
                Key Habits
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {habits.map((habit, index) => (
              <div
                key={index}
                className="group p-6 bg-white border border-slate-100 shadow-sm hover:bg-blue-950 transition-all duration-300 cursor-default"
              >
                <span className="text-xs font-bold text-blue-300 mb-2 block group-hover:text-blue-300/50">
                  HABIT {index + 1}
                </span>

                <h3 className="font-bold text-blue-950 leading-tight group-hover:text-white transition-colors">
                  {habit}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-slate-900 p-12 mb-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/10 -mr-20 -mt-20"></div>

          <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
            <span className="text-blue-300">#</span>
            Our Approach
          </h3>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                t: "Woven Into Everyday Lessons",
                d: "Habits of mind are woven into everyday lessons across both pathways rather than taught as a separate subject."
              },
              {
                t: "Reflective Learning",
                d: "Children reflect on how they approach challenges, recognise their learning strategies and build confidence in their thinking."
              },
              {
                t: "Learning Together",
                d: "Teachers and parents reinforce habits through discussions, reflection and everyday learning experiences."
              }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-blue-300 pl-6">
                <h4 className="font-bold text-lg mb-2 text-blue-300">
                  {item.t}
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Habits at Home */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-blue-950 mb-10 flex items-center gap-4">
            <span className="w-12 h-1 bg-blue-300"></span>
            Habits at Home
          </h2>

          <div className="bg-slate-50 border border-slate-200 p-8 hover:border-blue-300 transition-colors">
            <p className="text-slate-600 leading-relaxed">
              Parents can reinforce the same habits with simple questions:
              "What could you try next?", "How do you know that's right?"
              or "What would you do differently?" We share a short list of
              prompts each term to help families support thoughtful learning
              at home.
            </p>
          </div>
        </div>

        {/* Admissions CTA */}
        <div className="bg-blue-950 p-10 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 mb-16 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button className="bg-blue-950 text-white px-8 py-4 font-bold hover:scale-105 transition-transform">
              Book a free 2-week trial
            </button>

            <button className="bg-white text-blue-950 px-8 py-4 font-bold border border-blue-950/10 shadow-sm">
              Apply for 2027-28
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default HabitsOfMind;