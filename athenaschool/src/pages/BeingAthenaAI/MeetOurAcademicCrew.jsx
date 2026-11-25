import React from "react";
import AcademicHeroBg from "../../assets/optimized/academic-crew.webp";

const AcademicCrewPage = () => {
  const sections = [
    {
      title: "How we recruit",
      description:
        "We carefully select teachers who bring subject knowledge, teaching expertise and a strong understanding of online education.",
      items: [
        "Recognised teaching qualifications and degrees in their subject.",
        "Experience of the curriculum they teach, Pearson Edexcel or Indian/NIOS.",
        "A live demonstration lesson as part of selection.",
        "Background and reference checks [PLACEHOLDER: confirm checks carried out].",
      ],
    },
    {
      title: "Training and support",
      description:
        "New teachers complete onboarding on our learning platform and online teaching methods. Throughout the year, teachers take part in training on assessment, inclusion and exam preparation, and their lessons are observed and discussed. [PLACEHOLDER: confirm.]",
    },
    {
      title: "Teaching online well",
      description:
        "Good online teaching keeps every child active, checks understanding often and makes feedback personal. Our teachers use short segments, questioning, breakout groups and quick quizzes to do exactly that.",
    },
    {
      title: "Teachers for each pathway",
      description:
        "Our British pathway teachers specialise in the Pearson Edexcel curriculum and exams, while our Indian pathway teachers know the Indian curriculum and NIOS requirements well. In the senior years, students are taught by subject specialists who understand exactly what the exams expect.",
    },
    {
      title: "How teachers get to know your child",
      description:
        "Teachers use early check-ins, short diagnostic tasks and regular conversation to understand each child's strengths and needs. They share what they learn with parents and adjust their teaching accordingly.",
    },
  ];

  const handleTrialClick = () => {
    // Replace this with your trial booking route or form
    window.location.href = "/contact";
  };

  const handleApplyClick = () => {
    // Replace this with your admissions route
    window.location.href = "/admissions";
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full flex items-center justify-center mt-16">
        <img
          src={AcademicHeroBg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Our Teachers at Edulectual K12 Online School"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
            Our Teachers
          </h1>

          <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
            Meet the educators who make learning engaging, personal and meaningful.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl -mt-16 relative z-20">
        <div className="bg-white rounded-t-[40px] shadow-2xl overflow-hidden border-x border-t border-gray-100">
          <div className="p-6 md:p-12">

            {/* Breadcrumb */}
            <nav className="text-[11px] mb-8 flex flex-wrap items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
              <span>Home</span>
              <span className="text-gray-300">&gt;</span>
              <span>Edulectual K12 Online School</span>
              <span className="text-gray-300">&gt;</span>
              <span className="text-[#074D8D]">Our Teachers</span>
            </nav>

            {/* Introduction */}
            <section className="mb-16">
              <h2 className="text-[#003366] text-3xl md:text-4xl font-bold mb-6">
                Meet Our Online School Teachers
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl">
                Teachers make a school. At Edulectual K12 Online School, every
                class is taught live by a teacher who knows the curriculum and
                knows how to teach well online. This page introduces our teaching
                team and explains how we recruit, train and support them.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={handleTrialClick}
                  className="bg-[#FFB400] text-white px-7 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#e5a200] transition-colors shadow-md"
                >
                  Book a free 2-week trial
                </button>

                <button
                  onClick={handleApplyClick}
                  className="bg-[#003366] text-white px-7 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#00254d] transition-colors shadow-md"
                >
                  Apply for 2027-28
                </button>
              </div>
            </section>

            {/* Our Teachers */}
            <section className="mb-16">
              <h2 className="text-[#003366] text-3xl font-bold mb-6">
                Our Teachers
              </h2>

              <div className="bg-[#F4F7F9] rounded-xl p-8 border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  Our teaching team brings together subject expertise,
                  qualifications and experience to support students throughout
                  their learning journey.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Teacher profile placeholders */}
                  {[1, 2, 3].map((teacher) => (
                    <div
                      key={teacher}
                      className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                    >
                      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-5">
                        <span className="text-gray-400 text-sm">
                          Teacher Photo
                        </span>
                      </div>

                      <h3 className="text-[#003366] font-bold text-xl mb-2">
                        Teacher Name
                      </h3>

                      <p className="text-gray-500 text-sm mb-3">
                        Subjects & Grades
                      </p>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        Pathway, qualifications, teaching experience and a
                        short teacher biography will be added here.
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mt-6">
                  [PLACEHOLDER: for each teacher – real name, photo with
                  consent, subjects and grades, pathway, qualifications,
                  years of teaching experience and a 40–80 word bio.
                  No stock photos.]
                </p>
              </div>
            </section>

            {/* Recruitment, Training and Teaching Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section
                  key={index}
                  className="border-b border-gray-100 pb-10 last:border-0"
                >
                  <h2 className="text-[#003366] text-2xl md:text-3xl font-bold mb-5">
                    {section.title}
                  </h2>

                  <p className="text-gray-600 text-base leading-relaxed max-w-4xl">
                    {section.description}
                  </p>

                  {section.items && (
                    <ul className="mt-6 space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-[#FFB400] shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Join the Team */}
            <section className="mt-12 mb-12 bg-[#F4F7F9] rounded-2xl p-8 md:p-10">
              <h2 className="text-[#003366] text-3xl font-bold mb-5">
                Join the Team
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Interested in teaching with us? Send your CV to{" "}
                <span className="text-[#074D8D] font-semibold">
                  [PLACEHOLDER: careers email]
                </span>
                .
              </p>
            </section>

            {/* Meet a Teacher */}
            <section className="mb-16">
              <h2 className="text-[#003366] text-3xl font-bold mb-5">
                Meet a Teacher Before You Join
              </h2>

              <p className="text-gray-600 text-base leading-relaxed max-w-4xl">
                During the free 2-week trial class, your child is taught by
                our teachers, and you can ask questions afterwards.
              </p>

              <button
                onClick={handleTrialClick}
                className="mt-6 bg-[#FFB400] text-white px-7 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#e5a200] transition-colors shadow-md"
              >
                Book a free 2-week trial
              </button>
            </section>

            {/* Admissions CTA */}
            <section className="bg-[#003366] rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Admissions for 2027-28 are Open
              </h2>

              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Try a free 2-week trial class with our teachers, then apply
                when you are ready. The ₹999 registration fee is waived
                during our launch.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button
                  onClick={handleTrialClick}
                  className="bg-[#FFB400] text-white px-7 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#e5a200] transition-colors shadow-md"
                >
                  Book a free 2-week trial
                </button>

                <button
                  onClick={handleApplyClick}
                  className="bg-white text-[#003366] px-7 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-md"
                >
                  Apply for 2027-28
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-20" />
    </div>
  );
};

export default AcademicCrewPage;