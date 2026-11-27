import React from "react";
import { ArrowRight, BookOpen, GraduationCap, Users, Laptop } from "lucide-react";

const AcademicCrew = () => {
  const recruitmentPoints = [
    "Recognised teaching qualifications and degrees in their subject.",
    "Experience with Pearson Edexcel or the Indian/NIOS curriculum.",
    "A live demonstration lesson as part of the selection process.",
    "Background and reference checks [PLACEHOLDER: confirm checks carried out].",
  ];

  const trainingPoints = [
    "Onboarding on our learning platform and online teaching methods.",
    "Training on assessment, inclusion and exam preparation.",
    "Lessons observed and discussed throughout the year [PLACEHOLDER: confirm].",
  ];

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-6 text-sky-600 font-bold tracking-widest uppercase text-xs border-b-2 border-sky-500 pb-2">
              Our Teaching Team
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight mb-6">
              Meet Our
              <br />
              <span className="text-sky-600">
                Online School Teachers
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Teachers make a school. At Edulectual K12 Online School,
              every class is taught live by a teacher who knows the
              curriculum and knows how to teach well online.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our teaching team helps learners stay engaged, understand
              concepts, develop confidence and make progress through
              personalised support and interactive online lessons.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">

              <a
                href="/book-trial"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-blue-950 text-white rounded-full font-bold transition-all duration-300 hover:bg-sky-600 hover:shadow-xl hover:-translate-y-1"
              >
                Book a Free 2-Week Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/apply"
                className="inline-flex items-center gap-3 px-7 py-4 border-2 border-blue-950 text-blue-950 rounded-full font-bold transition-all duration-300 hover:bg-blue-950 hover:text-white"
              >
                Apply for 2027-28
              </a>

            </div>
          </div>

          {/* RIGHT SIDE - TEACHER PLACEHOLDERS */}
          <div className="relative">

            <div className="absolute inset-0 bg-sky-50 rounded-full blur-3xl scale-110 -z-10"></div>

            <div className="grid grid-cols-2 gap-5">

              {/* Teacher Card 1 */}
              <div className="bg-sky-50 rounded-tl-[60px] rounded-br-[60px] p-6 sm:p-8 text-center border border-sky-100 shadow-sm">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-white border-4 border-sky-100 flex items-center justify-center mb-5">
                  <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-sky-600" />
                </div>

                <h3 className="text-blue-950 font-bold text-lg mb-2">
                  Subject Specialists
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Teachers with subject-specific knowledge and qualifications.
                </p>
              </div>

              {/* Teacher Card 2 */}
              <div className="bg-blue-50 rounded-tr-[60px] rounded-bl-[60px] p-6 sm:p-8 text-center border border-blue-100 shadow-sm mt-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-white border-4 border-blue-100 flex items-center justify-center mb-5">
                  <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                </div>

                <h3 className="text-blue-950 font-bold text-lg mb-2">
                  Curriculum Experts
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Specialists in Pearson Edexcel and Indian/NIOS pathways.
                </p>
              </div>

              {/* Teacher Card 3 */}
              <div className="bg-amber-50 rounded-tr-[60px] rounded-bl-[60px] p-6 sm:p-8 text-center border border-amber-100 shadow-sm -mt-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-white border-4 border-amber-100 flex items-center justify-center mb-5">
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600" />
                </div>

                <h3 className="text-blue-950 font-bold text-lg mb-2">
                  Learner Support
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Teachers who understand individual learning needs.
                </p>
              </div>

              {/* Teacher Card 4 */}
              <div className="bg-emerald-50 rounded-tl-[60px] rounded-br-[60px] p-6 sm:p-8 text-center border border-emerald-100 shadow-sm">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-white border-4 border-emerald-100 flex items-center justify-center mb-5">
                  <Laptop className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600" />
                </div>

                <h3 className="text-blue-950 font-bold text-lg mb-2">
                  Online Educators
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Teachers trained to deliver engaging live online lessons.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* OUR TEACHERS */}
        <div className="mt-24">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sky-600 font-bold uppercase tracking-widest text-xs">
              Meet the Team
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mt-4 mb-5">
              Our Teachers
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Meet the educators behind our live online classes.
              Teacher profiles will introduce their subjects, grades,
              qualifications, experience and teaching approach.
            </p>
          </div>

          {/* REAL TEACHER PROFILE PLACEHOLDERS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[1, 2, 3, 4].map((teacher) => (
              <div
                key={teacher}
                className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full aspect-square rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                  <GraduationCap className="w-16 h-16 text-slate-400" />
                </div>

                <h3 className="text-lg font-bold text-blue-950 mb-3">
                  Teacher Profile
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  [PLACEHOLDER: real name, photo with consent,
                  subjects and grades, pathway, qualifications,
                  years of teaching experience and a 40–80 word bio.]
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* HOW WE RECRUIT */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">

          <div className="bg-blue-950 rounded-[2rem] p-8 sm:p-12 text-white">

            <span className="text-sky-300 font-bold tracking-widest uppercase text-xs">
              Quality & Standards
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-6">
              How We Recruit
            </h2>

            <p className="text-blue-100 leading-relaxed mb-8">
              We look for qualified educators who understand their
              subjects, know their curriculum and can deliver effective
              live online lessons.
            </p>

            <div className="space-y-5">

              {recruitmentPoints.map((point, index) => (
                <div key={index} className="flex gap-4 items-start">

                  <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>

                  <p className="text-blue-100 leading-relaxed">
                    {point}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* TRAINING */}
          <div>

            <span className="text-sky-600 font-bold tracking-widest uppercase text-xs">
              Professional Development
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mt-4 mb-6">
              Training & Support
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our teachers receive support to develop their online
              teaching skills and create effective learning
              experiences for students.
            </p>

            <div className="space-y-5">

              {trainingPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-5 rounded-2xl bg-sky-50 border border-sky-100"
                >

                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-sky-600" />
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    {point}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* TEACHING ONLINE WELL */}
        <div className="mt-24 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[2rem] p-8 sm:p-12">

          <div className="max-w-4xl mx-auto text-center">

            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Laptop className="w-8 h-8 text-sky-600" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-6">
              Teaching Online Well
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Good online teaching keeps every child active, checks
              understanding often and makes feedback personal. Our
              teachers use short learning segments, questioning,
              breakout groups and quick quizzes to make lessons
              interactive and effective.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {[
                "Active participation",
                "Regular questioning",
                "Breakout groups",
                "Quick quizzes",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 font-semibold text-blue-950 shadow-sm"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* PATHWAY TEACHERS */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">

          {/* BRITISH */}
          <div className="border border-slate-200 rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-shadow">

            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-sky-600" />
            </div>

            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              British Pathway Teachers
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Our British pathway teachers specialise in the Pearson
              Edexcel curriculum and examinations. In the senior years,
              students are taught by subject specialists who understand
              exactly what the exams expect.
            </p>

          </div>

          {/* INDIAN */}
          <div className="border border-slate-200 rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-shadow">

            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-amber-600" />
            </div>

            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Indian Pathway Teachers
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Our Indian pathway teachers understand the Indian
              curriculum and NIOS requirements, helping learners
              prepare for their subjects and examinations.
            </p>

          </div>

        </div>

        {/* HOW TEACHERS GET TO KNOW YOUR CHILD */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-sky-600 font-bold tracking-widest uppercase text-xs">
              Personalised Learning
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mt-4 mb-6">
              How Teachers Get to Know Your Child
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Teachers use early check-ins, short diagnostic tasks
              and regular conversations to understand each child's
              strengths and needs. They share what they learn with
              parents and adjust their teaching accordingly.
            </p>

          </div>

          <div className="bg-amber-50 rounded-3xl p-8 sm:p-10">

            <div className="space-y-6">

              {[
                "Early learner check-ins",
                "Short diagnostic tasks",
                "Regular teacher conversations",
                "Parent communication",
                "Teaching adjustments based on learner needs",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">
                    {index + 1}
                  </div>

                  <p className="text-blue-950 font-semibold">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* JOIN THE TEAM */}
        <div className="mt-24 bg-blue-950 rounded-[2rem] p-8 sm:p-12 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Join Our Teaching Team
          </h2>

          <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed mb-8">
            Interested in teaching with Edulectual K12 Online School?
            We welcome educators who are passionate about teaching
            online and helping learners succeed.
          </p>

          <a
            href="mailto:[PLACEHOLDER: careers email]"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500 text-white rounded-full font-bold hover:bg-sky-600 transition-all duration-300"
          >
            Send Your CV
            <ArrowRight className="w-5 h-5" />
          </a>

        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-5">
            Meet a Teacher Before You Join
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed mb-8">
            During our free 2-week trial class, your child learns
            with our teachers, and you can ask questions afterwards.
          </p>

          <a
            href="/book-trial"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-950 text-white rounded-full font-bold hover:bg-sky-600 transition-all duration-300"
          >
            Book a Free 2-Week Trial
            <ArrowRight className="w-5 h-5" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default AcademicCrew;