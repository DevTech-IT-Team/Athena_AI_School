import React from "react";

const WhatSetsUsApart = () => {
  const features = [
    {
      number: "01",
      title: "Two recognised pathways in one school",
      description:
        "Choose the Pearson Edexcel British pathway, leading to International GCSE and International A Level, or the Indian curriculum pathway with NIOS examinations. You can stay with one school from Nursery to Grade 12.",
      icon: "🎓",
    },
    {
      number: "02",
      title: "The same curriculum in every country",
      description:
        "Whether you live in India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US or Canada, your child follows the same curriculum. If your family relocates, school continues as before.",
      icon: "🌍",
    },
    {
      number: "03",
      title: "Live teaching, not just videos",
      description:
        "Our classes are taught live by teachers, with discussion, group work and feedback. Recorded material supports learning but does not replace the teacher.",
      icon: "👩‍🏫",
    },
    {
      number: "04",
      title: "Timetables for your time zone",
      description:
        "Class batches are arranged by region, so lessons fit your family's day.",
      icon: "🕒",
    },
    {
      number: "05",
      title: "Clear, published fees",
      description:
        "Our 2027-28 fee ranges and every discount, including founding-family, early-bird, sibling, referral and scholarship offers, are listed openly, with a 35% cap on combined discounts.",
      icon: "💰",
    },
    {
      number: "06",
      title: "Try before you commit",
      description:
        "Every family can book a free 2-week trial or demo class, and the ₹999 registration fee is waived during launch.",
      icon: "✨",
    },
    {
      number: "07",
      title: "Built on a learning-technology company",
      description:
        "Our platform is built with Athena LMS, so timetables, assignments, feedback and parent reports sit in one place.",
      icon: "💻",
    },
  ];

  const handleTrialClick = () => {
    window.location.href = "/contact";
  };

  const handleApplyClick = () => {
    window.location.href = "/admissions";
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">

      {/* Header */}
      <header className="container mx-auto px-6 pt-16 pb-12">
        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / About /{" "}
          <span className="text-slate-950 font-bold">
            Why Choose Us
          </span>
        </nav>

        <div className="border-b border-gray-100 pb-12">
          <div className="max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-950">
              What Sets Us Apart
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-slate-950 leading-tight mt-4 mb-6">
              Why Choose{" "}
              <span className="text-blue-950">
                Edulectual K12 Online School?
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              There are many ways to learn online. Here is what is specific
              to Edulectual K12 Online School, so you can compare us fairly
              with other options.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handleTrialClick}
                className="bg-blue-950 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-800 transition-all duration-300"
              >
                Book a free 2-week trial
              </button>

              <button
                onClick={handleApplyClick}
                className="border border-blue-950 text-blue-950 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-950 hover:text-white transition-all duration-300"
              >
                Apply for 2027-28
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-950">
              A Different Approach to Online Education
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Education That Goes Beyond the Screen
            </h2>

            <p className="text-slate-600 leading-relaxed">
              At Edulectual K12 Online School, we combine recognised
              curricula, live teaching, flexible regional timetables and
              technology to create a learning experience designed around
              children and families.
            </p>

            <p className="text-slate-600 leading-relaxed">
              We believe online schooling should offer more than recorded
              lessons. It should provide structure, teachers, support,
              transparent information and a genuine school experience.
            </p>

            <button
              onClick={handleTrialClick}
              className="bg-slate-950 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-900 transition-colors"
            >
              Experience a Trial Class
            </button>
          </div>

          {/* Decorative Grid */}
          <div className="grid grid-cols-2 gap-3">

            <div className="aspect-square bg-blue-950 p-8 flex flex-col justify-end text-white">
              <span className="text-3xl mb-3">🎓</span>
              <h4 className="font-bold uppercase text-sm tracking-widest">
                Recognised Education
              </h4>
            </div>

            <div className="aspect-square bg-slate-100 p-8 flex flex-col justify-end text-slate-950">
              <span className="text-3xl mb-3">🌍</span>
              <h4 className="font-bold uppercase text-sm tracking-widest">
                Global Learning
              </h4>
            </div>

            <div className="aspect-square bg-slate-950 p-8 flex flex-col justify-end text-white">
              <span className="text-3xl mb-3">👩‍🏫</span>
              <h4 className="font-bold uppercase text-sm tracking-widest">
                Live Teachers
              </h4>
            </div>

            <div className="aspect-square bg-blue-800 p-8 flex flex-col justify-end text-white">
              <span className="text-3xl mb-3">💻</span>
              <h4 className="font-bold uppercase text-sm tracking-widest">
                Smart Technology
              </h4>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-950 mb-3">
              Our Difference
            </h2>

            <p className="text-3xl md:text-4xl font-bold text-slate-950">
              What Makes Edulectual Different?
            </p>

            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
              Seven reasons families can make an informed choice about
              their child's online education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-10 group hover:bg-slate-950 transition-all duration-300 border-b-4 border-transparent hover:border-blue-800 shadow-sm"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl">
                    {feature.icon}
                  </span>

                  <span className="text-4xl font-black text-blue-100 group-hover:text-slate-700 transition-colors">
                    {feature.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* What We Will Not Claim */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-950">
              Transparency Matters
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">
              What We Will Not Claim
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              We do not publish learner numbers, rankings or awards that
              we cannot back up with evidence. As our first cohorts
              complete their year, we will share real outcomes.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Until then, the best evidence is a lesson, so we invite
              every family to try one.
            </p>

            <div className="mt-8">
              <button
                onClick={handleTrialClick}
                className="bg-blue-950 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-800 transition-colors"
              >
                Experience Our Classes
              </button>
            </div>
          </div>

          <div className="bg-blue-950 p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[10rem] font-black text-white/5 leading-none">
              "
            </div>

            <div className="relative z-10">
              <span className="text-blue-300 text-sm font-bold uppercase tracking-[0.3em]">
                Our Promise
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-6 leading-relaxed">
                The best evidence of an online school is the learning
                experience itself.
              </h3>

              <p className="text-blue-100 leading-relaxed">
                We believe families deserve the opportunity to experience
                our teaching, interact with our teachers and understand
                how our school works before making a commitment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Compare For Yourself */}
      <section className="bg-slate-100 py-24">
        <div className="container mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">

            <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-950">
              Make an Informed Decision
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mt-4 mb-8">
              Compare for Yourself
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Use the points on this page as a checklist when comparing
              online schools, and ask each school the same questions.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Look at the curriculum, teaching methods, fees, flexibility,
              technology and student support. We encourage families to
              compare their options and choose the school that best
              supports their child's learning.
            </p>

          </div>

        </div>
      </section>

      {/* Admissions CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-blue-950 p-10 md:p-16 text-white text-center">

          <span className="text-blue-300 text-sm font-bold uppercase tracking-[0.3em]">
            Admissions Open
          </span>

          <h2 className="text-3xl md:text-5xl font-black mt-6 mb-8 leading-tight">
            Admissions for 2027-28 Are Open
          </h2>

          <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Try a free 2-week trial class with our teachers, then apply
            when you are ready. The ₹999 registration fee is waived
            during our launch.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button
              onClick={handleTrialClick}
              className="bg-white text-blue-950 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-100 transition-colors"
            >
              Book a free 2-week trial
            </button>

            <button
              onClick={handleApplyClick}
              className="border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-blue-950 transition-colors"
            >
              Apply for 2027-28
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default WhatSetsUsApart;