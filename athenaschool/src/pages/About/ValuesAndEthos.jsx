import React from "react";

const ValuesAndEthos = () => {
  const values = [
    {
      title: "Learning First",
      description:
        "Every decision starts with whether it helps children learn. Technology, timetables and policies all serve that aim.",
      icon: "1",
    },
    {
      title: "Real Teachers, Real Relationships",
      description:
        "Children learn best from adults who know them. Our classes are live, and teachers follow each learner's progress.",
      icon: "2",
    },
    {
      title: "Honesty",
      description:
        "We publish our curriculum, our fees and our policies clearly, and we only make claims we can back up.",
      icon: "3",
    },
    {
      title: "Inclusion",
      description:
        "Children learn in different ways and at different speeds. We plan support for those who need it and stretch for those who are ready.",
      icon: "4",
    },
    {
      title: "Partnership with Parents",
      description:
        "Parents should always know how their child is doing and how to get help. We report regularly and answer questions quickly.",
      icon: "5",
    },
    {
      title: "Safety and Wellbeing",
      description:
        "A secure platform, sensible screen time and a respectful online community come before anything else.",
      icon: "6",
    },
  ];

  const commitments = [
    "Same curriculum and standards in every country we serve.",
    "Fees set out openly on our fees page.",
    "A free 2-week trial, so families can judge our teaching for themselves.",
    "Regular parent feedback, reviewed every term.",
  ];

  const handleTrialClick = () => {
    window.location.href = "/contact";
  };

  const handleApplyClick = () => {
    window.location.href = "/admissions";
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">

      {/* Hero Section */}
      <section className="pt-20 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase text-blue-400 mb-6">
          Home / About /{" "}
          <span className="text-slate-950 font-bold">
            Mission, Vision and Values
          </span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-500 font-bold tracking-widest text-sm mb-4 uppercase block">
              Mission, Vision & Values
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
              Our Mission, Vision and Online School Values
            </h1>

            <p className="text-slate-600 leading-relaxed text-lg">
              A school's values only matter if you can see them in its classes.
              This page sets out what Edulectual K12 Online School is trying to
              do and the principles we use when we make decisions about teaching,
              timetables, fees and support.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handleTrialClick}
                className="bg-blue-950 text-white px-6 py-4 font-semibold rounded-md hover:bg-blue-800 transition"
              >
                Book a free 2-week trial
              </button>

              <button
                onClick={handleApplyClick}
                className="bg-amber-400 text-blue-950 px-6 py-4 font-semibold rounded-md hover:bg-amber-300 transition"
              >
                Apply for 2027-28
              </button>
            </div>
          </div>

          {/* Hero Highlight */}
          <div className="bg-blue-950 p-8 md:p-12 rounded-2xl text-white">
            <div className="w-16 h-1 bg-amber-400 mb-8" />

            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              "A school's values only matter if you can see them in its classes."
            </p>

            <p className="text-blue-200 mt-6 leading-relaxed">
              At Edulectual, our principles shape the way we teach, support
              students, communicate with families and build our online learning
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 px-6 md:px-8 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-950 text-white rounded-xl flex items-center justify-center text-2xl mb-6">
              1
            </div>

            <h2 className="text-3xl font-bold text-blue-950 mb-5">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-relaxed text-lg">
              To give every child, wherever they live, a complete and well-taught
              school education online, with a recognised British or Indian
              qualification at the end of it.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-blue-950 p-8 md:p-10 rounded-2xl shadow-sm text-white hover:shadow-md transition">
            <div className="w-14 h-14 bg-amber-400 text-blue-950 rounded-xl flex items-center justify-center text-2xl mb-6">
              2
            </div>

            <h2 className="text-3xl font-bold mb-5">
              Our Vision
            </h2>

            <p className="text-blue-100 leading-relaxed text-lg">
              A world where a family's location, job or circumstances never
              decide the quality of a child's education.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
              What Guides Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Our Values
            </h2>

            <div className="h-1 w-20 bg-amber-400 mx-auto mt-5" />

            <p className="text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed">
              The principles that shape our classrooms, decisions and
              relationships with every learner and family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-950 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-950 rounded-xl flex items-center justify-center text-3xl text-white mb-6 group-hover:bg-blue-800 transition">
                  {value.icon}
                </div>

                <h3 className="text-blue-950 font-bold text-xl mb-4">
                  {value.title}
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Live Our Values */}
      <section className="py-20 bg-slate-50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
              Our Actions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3 mb-6">
              How We Live Our Values
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Our values are reflected in the everyday choices we make,
              from the way we deliver lessons to how we communicate with
              parents and support students.
            </p>
          </div>

          <div className="space-y-5">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="w-8 h-8 bg-blue-950 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  {index + 1}
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {commitment}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* When We Get It Wrong */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-l-4 border-amber-400 p-8 md:p-12 shadow-sm rounded-r-2xl">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              When We Get It Wrong
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              No school is perfect. If we fall short of these values, we want
              to hear about it. Tell your child's teacher or contact school
              leadership, and we will respond honestly and explain what we
              will change.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="bg-blue-950 text-white py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">
            Admissions
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
            Admissions for 2027-28 are Open
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
            Try a free 2-week trial class with our teachers, then apply
            when you are ready. The ₹999 registration fee is waived
            during our launch.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={handleTrialClick}
              className="bg-amber-400 text-blue-950 px-8 py-4 font-bold rounded-md hover:bg-amber-300 transition shadow-md"
            >
              Book a free 2-week trial
            </button>

            <button
              onClick={handleApplyClick}
              className="bg-white text-blue-950 px-8 py-4 font-bold rounded-md hover:bg-slate-100 transition shadow-md"
            >
              Apply for 2027-28
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ValuesAndEthos;