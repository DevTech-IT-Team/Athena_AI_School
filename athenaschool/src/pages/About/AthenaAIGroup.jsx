import React, { useState } from "react";

const K12OnlineSchoolGroup = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const stages = [
    {
      title: "Kindergarten & Early Years",
      subtitle: "Nursery to KG",
      description:
        "Build strong foundations through guided learning, curiosity, interactive activities and age-appropriate online learning experiences.",
      number: "01",
    },
    {
      title: "Primary School",
      subtitle: "Grades 1–5",
      description:
        "Develop essential literacy, numeracy, creativity and problem-solving skills through structured learning and teacher-led classes.",
      number: "02",
    },
    {
      title: "Middle School",
      subtitle: "Grades 6–8",
      description:
        "Explore core subjects, strengthen independent learning and prepare for the academic demands of secondary education.",
      number: "03",
    },
    {
      title: "Senior School",
      subtitle: "Grades 9–12",
      description:
        "Work towards International GCSE and A Level qualifications or NIOS Secondary and Senior Secondary examinations.",
      number: "04",
    },
  ];

  const faqs = [
    {
      question: "What does K12 mean?",
      answer:
        "K12 means Kindergarten through Grade 12, the full span of school education.",
    },
    {
      question: "Is a K12 online school a real school?",
      answer:
        "At Edulectual K12, students are enrolled full-time and work towards Pearson Edexcel or NIOS qualifications.",
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

      {/* Header & Breadcrumb */}
      <main className="container mx-auto px-6 md:px-12 pt-20">

        <nav className="text-xs tracking-widest uppercase text-blue-300 mb-8">
          Home / Academics /{" "}
          <span className="text-slate-950 font-bold">
            K12 Online School
          </span>
        </nav>

        {/* Hero Section */}
        <section className="mb-20">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* Left Section */}
            <div className="md:col-span-7">

              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                Full-Time Online Education
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-blue-950 leading-tight mt-6 mb-8">
                K12 Online School:
                <br />
                <span className="text-slate-950">
                  Kindergarten to Grade 12
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                "K12" means the whole of school, from Kindergarten through
                to Grade 12. A K12 online school teaches all of those years
                online as a full-time school, not as tuition or an
                after-school course.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-slate-600 mb-8">
                Edulectual K12 Online School is a K12 online school with
                two complete pathways and one consistent curriculum for
                every country we serve.
              </p>

              <div className="flex flex-wrap gap-4">

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

            {/* Right Section */}
            <div className="md:col-span-5">

              <div className="grid grid-cols-2 gap-3">

                <div className="bg-blue-950 aspect-square p-8 flex flex-col justify-end text-white">
                  <span className="text-4xl mb-4">🎓</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    Full-Time School
                  </h3>
                </div>

                <div className="bg-slate-100 aspect-square p-8 flex flex-col justify-end text-slate-950">
                  <span className="text-4xl mb-4">🌍</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    Global Education
                  </h3>
                </div>

                <div className="bg-slate-950 aspect-square p-8 flex flex-col justify-end text-white">
                  <span className="text-4xl mb-4">👩‍🏫</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    Live Teachers
                  </h3>
                </div>

                <div className="bg-blue-800 aspect-square p-8 flex flex-col justify-end text-white">
                  <span className="text-4xl mb-4">📚</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    Grades Nursery–12
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </section>

        <hr className="border-slate-100 my-20" />

        {/* Full-Time School Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

          <div className="md:col-span-4">

            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
              More Than Online Tuition
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 leading-tight">
              Full-Time School, Not Tuition
            </h2>

          </div>

          <div className="md:col-span-8">

            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              Our students are enrolled with us as their school. They
              follow a full timetable, study every core subject and take
              recognised exams at the end of Grade 10 and Grade 12.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-600">
              Tuition centres and video courses support school, but we are
              the school.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

              <div className="bg-blue-950 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">
                  Full Timetable
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Structured learning with a complete school schedule.
                </p>
              </div>

              <div className="bg-slate-100 p-6">
                <h3 className="font-bold text-lg mb-2 text-slate-950">
                  Core Subjects
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Students study the essential subjects required for
                  their educational stage.
                </p>
              </div>

              <div className="bg-slate-950 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">
                  Recognised Exams
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Prepare for recognised qualifications in Grade 10
                  and Grade 12.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Every Stage Under One Roof */}
        <section className="bg-slate-50 py-24">

          <div className="container mx-auto">

            <div className="text-center mb-16">

              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                Complete School Journey
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mt-4">
                Every Stage Under One Roof
              </h2>

              <p className="text-slate-500 max-w-2xl mx-auto mt-6 leading-relaxed">
                From the earliest learning years to senior school, your
                child can follow a complete educational journey with us.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="bg-white p-8 md:p-10 border-b-4 border-transparent hover:border-blue-950 transition-all duration-300 group"
                >

                  <div className="flex items-center justify-between mb-6">

                    <span className="text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                      {stage.number}
                    </span>

                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                      {stage.subtitle}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-4">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Why a Single K12 School Helps */}
        <section className="py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                Continuity Matters
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 mb-8">
                Why a Single K12 School Helps
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                When one school covers every year, there are no awkward
                changes of curriculum between primary and secondary.
                Teachers plan the whole journey, and records, reports
                and relationships carry forward.
              </p>

              <p className="text-slate-600 leading-relaxed">
                That matters even more for families who relocate.
                Continuity in learning helps children maintain their
                academic progress and school connections when families
                move between countries or regions.
              </p>

            </div>

            <div className="bg-blue-950 p-10 md:p-14 text-white">

              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                One School.
                <br />
                One Learning Journey.
              </h3>

              <div className="space-y-6">

                <div className="border-l-2 border-blue-400 pl-6">
                  <h4 className="font-bold mb-2">
                    Curriculum Continuity
                  </h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Students continue within a consistent educational
                    framework throughout their school years.
                  </p>
                </div>

                <div className="border-l-2 border-blue-400 pl-6">
                  <h4 className="font-bold mb-2">
                    Familiar Relationships
                  </h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Teachers, school records and learning relationships
                    carry forward.
                  </p>
                </div>

                <div className="border-l-2 border-blue-400 pl-6">
                  <h4 className="font-bold mb-2">
                    Support for Relocating Families
                  </h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Families can move without necessarily changing
                    their child's school curriculum.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Two Pathways */}
        <section className="bg-slate-950 py-24">

          <div className="container mx-auto">

            <div className="text-center mb-16">

              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-300">
                Your Choice
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                Two Pathways
              </h2>

              <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
                Choose the educational pathway that best fits your
                family's plans and your child's future.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* British Pathway */}
              <div className="bg-white p-10 md:p-12">

                <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                  International Pathway
                </span>

                <h3 className="text-3xl font-bold text-blue-950 mt-6 mb-8">
                  Pearson Edexcel British Pathway
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8">
                  The Pearson Edexcel British pathway leads to
                  International GCSE and International A Level
                  qualifications.
                </p>

                <div className="space-y-4">

                  <div className="bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-950">
                      International GCSE
                    </h4>
                    <p className="text-sm text-slate-500 mt-2">
                      Secondary-level international qualifications.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-950">
                      International A Level
                    </h4>
                    <p className="text-sm text-slate-500 mt-2">
                      Advanced-level study and preparation for
                      higher education.
                    </p>
                  </div>

                </div>

              </div>

              {/* Indian Pathway */}
              <div className="bg-blue-800 p-10 md:p-12 text-white">

                <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-200">
                  Indian Pathway
                </span>

                <h3 className="text-3xl font-bold mt-6 mb-8">
                  Indian Curriculum with NIOS
                </h3>

                <p className="text-blue-100 leading-relaxed mb-8">
                  The Indian curriculum pathway leads to NIOS
                  examinations and offers a structured educational
                  route for students following the Indian system.
                </p>

                <div className="space-y-4">

                  <div className="bg-white/10 p-5">
                    <h4 className="font-bold">
                      NIOS Secondary
                    </h4>
                    <p className="text-sm text-blue-100 mt-2">
                      Preparation for Secondary-level examinations.
                    </p>
                  </div>

                  <div className="bg-white/10 p-5">
                    <h4 className="font-bold">
                      NIOS Senior Secondary
                    </h4>
                    <p className="text-sm text-blue-100 mt-2">
                      Preparation for Senior Secondary examinations.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <p className="text-center text-slate-400 text-sm leading-relaxed mt-10 max-w-3xl mx-auto">
              Families can choose the pathway that fits their plans,
              and our admissions team can help.
            </p>

          </div>

        </section>

        {/* Is K12 Right For Us */}
        <section className="py-24">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
              Find the Right Fit
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mt-4 mb-8">
              Is a K12 Online School Right for Us?
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              It suits families who want one stable school through the
              whole of a child's education, especially if they relocate
              or live far from a good school.
            </p>

            <p className="text-slate-600 leading-relaxed mb-10">
              Try a free 2-week trial to see how it feels before you
              decide. Experience our live lessons, meet our teachers
              and explore how full-time online schooling works.
            </p>

            <button
              onClick={handleTrialClick}
              className="bg-blue-950 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-blue-800 transition-colors"
            >
              Book Your Free Trial
            </button>

          </div>

        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-24">

          <div className="container mx-auto max-w-4xl">

            <div className="text-center mb-16">

              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                Frequently Asked Questions
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mt-4">
                Frequently Asked Questions
              </h2>

            </div>

            <div className="space-y-4">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200"
                >

                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left p-6 md:p-8"
                  >

                    <h3 className="text-lg font-bold text-slate-950 pr-6">
                      {faq.question}
                    </h3>

                    <span className="text-2xl font-bold text-blue-950">
                      {openFAQ === index ? "−" : "+"}
                    </span>

                  </button>

                  {openFAQ === index && (
                    <div className="px-6 md:px-8 pb-8">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Admissions CTA */}
        <section className="mt-24">

          <div className="bg-blue-950 text-white p-10 md:p-20 text-center">

            <span className="text-blue-300 text-xs font-black uppercase tracking-[0.3em]">
              Admissions Open
            </span>

            <h2 className="text-3xl md:text-5xl font-black mt-6 mb-8">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
              Try a free 2-week trial class with our teachers, then
              apply when you are ready. The ₹999 registration fee
              is waived during our launch.
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

      </main>

    </div>
  );
};

export default K12OnlineSchoolGroup;