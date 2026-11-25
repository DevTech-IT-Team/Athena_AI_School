import React from "react";
import CourseFinder from "../components/CourseFinder";
import FeeCalculator from "../pages/Admissions/FeeCalculator";
import AdmissionTracker from "../components/AdmissionTracker";
import {
  BookOpen,
  GraduationCap,
  Baby,
  School,
  Globe,
  Code,
  Languages,
  Palette,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";

function Programs() {
  const handleTrialClick = () => {
    window.location.href = "/contact";
  };

  const handleApplyClick = () => {
    window.location.href = "/admissions";
  };

  const programmeStages = [
    {
      title: "Early Years",
      subtitle: "Nursery to Kindergarten | Ages 3–5",
      icon: Baby,
      description:
        "Short, interactive sessions that build early language, number sense, fine motor skills and confidence on screen, with parents close by.",
      links: ["Early Years", "Pre-Primary"],
    },
    {
      title: "Primary",
      subtitle: "Grades 1–5",
      icon: BookOpen,
      description:
        "Reading, writing, maths, science and the wider world, with steady practice and regular feedback.",
      links: ["British Primary", "Indian Primary"],
    },
    {
      title: "Middle School / Lower Secondary",
      subtitle: "Grades 6–8",
      icon: School,
      description:
        "A broader timetable with separate sciences, humanities, languages and computing, plus more independent study.",
      links: ["British Lower Secondary", "Indian Middle School"],
    },
    {
      title: "Senior School",
      subtitle: "Grades 9–12",
      icon: GraduationCap,
      description:
        "Qualification years with focused preparation for international or Indian board examinations.",
      links: [
        "International GCSE (Grades 9–10)",
        "International A Level (Grades 11–12)",
        "NIOS Secondary & Senior Secondary",
      ],
    },
  ];

  const enrichmentPrograms = [
    {
      title: "Computational Thinking",
      icon: Code,
      description: "Problem solving and coding concepts.",
    },
    {
      title: "Languages",
      icon: Languages,
      description: "Additional language choices alongside English.",
    },
    {
      title: "Music & Arts",
      icon: Palette,
      description: "Creative classes with partner academies.",
    },
    {
      title: "Learning Garage",
      icon: Lightbulb,
      description: "Hands-on robotics and design workshops.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
              <Sparkles size={16} />
              Nursery to Grade 12
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Online School Programmes
              <span className="block text-blue-300 mt-2">
                from Nursery to Grade 12
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-10">
              Explore every programme at Edulectual K12 Online School. Start with
              your child's age or grade, then choose the pathway that fits your
              plans: the Pearson Edexcel British pathway or the Indian curriculum
              pathway with NIOS exams. Both are taught live online and follow the
              same curriculum in every country.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTrialClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Book a free 2-week trial
              </button>

              <button
                onClick={handleApplyClick}
                className="border border-white/40 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Apply for 2027-28
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Finder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find the Right Programme
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find the right learning programme for your child's age, grade and
              educational pathway.
            </p>
          </div>

          <CourseFinder />
        </div>
      </section>

      {/* Programmes by Stage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Learning Journey
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Programmes by Stage
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From early learning to qualification years, our programmes support
              students at every stage of their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmeStages.map((programme, index) => {
              const Icon = programme.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="bg-blue-100 text-blue-700 p-4 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon size={28} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {programme.title}
                      </h3>

                      <p className="text-blue-600 font-medium mb-4">
                        {programme.subtitle}
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-5">
                        {programme.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {programme.links.map((link, linkIndex) => (
                          <span
                            key={linkIndex}
                            className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
                          >
                            <CheckCircle size={15} />
                            {link}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrichment Programmes */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Beyond Academics
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Enrichment Programmes
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Learning extends beyond academic subjects. Our enrichment
              programmes encourage creativity, curiosity, innovation and
              practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrichmentPrograms.map((programme, index) => {
              const Icon = programme.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100"
                >
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {programme.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {programme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Choose Your Pathway
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose a programme that aligns with your child's future academic
              plans, educational goals and possible relocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* British Pathway */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 text-white p-4 rounded-xl">
                  <Globe size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  British Pathway
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                If you expect to move countries or are aiming for universities
                abroad, the British pathway is usually the simpler choice.
                Pearson Edexcel International GCSE and International A Level
                qualifications offer an internationally oriented route.
              </p>

              <div className="mt-6 flex items-start gap-3">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  International GCSE and International A Level qualifications.
                </p>
              </div>
            </div>

            {/* Indian Pathway */}
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600 text-white p-4 rounded-xl">
                  <BookOpen size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  Indian Pathway
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                If your child is likely to continue in the Indian education
                system, the NIOS pathway keeps that route open through Secondary
                and Senior Secondary examinations.
              </p>

              <div className="mt-6 flex items-start gap-3">
                <CheckCircle
                  className="text-green-600 shrink-0 mt-1"
                  size={20}
                />
                <p className="text-gray-700">
                  Indian curriculum pathway with NIOS examinations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              Not sure which pathway to choose? Our admissions team can help you
              decide on a short call.
            </p>

            <button
              onClick={handleTrialClick}
              className="mt-5 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Talk to our admissions team
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Same Curriculum Everywhere */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-300 uppercase tracking-wide font-semibold text-sm">
                Global Learning
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Same Curriculum in Every Country
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Each programme follows the same curriculum whether your family
                lives in India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK,
                Australia, the US or Canada.
              </p>

              <p className="text-blue-100 leading-relaxed">
                Classes are arranged in batches by time zone, so lessons fit
                your day, and a move abroad does not mean a change of school.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "India",
                "UAE",
                "Qatar",
                "Oman",
                "Kuwait",
                "Bahrain",
                "United Kingdom",
                "Australia",
                "United States",
                "Canada",
              ].map((country, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-xl p-5 text-center backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <Globe
                    size={22}
                    className="mx-auto mb-3 text-blue-300"
                  />

                  <span className="font-medium text-white">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Tuition & Planning
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Fees by Programme
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Annual tuition depends on grade band, pathway and country.
              Indicative 2027-28 ranges for each band are listed on our fees
              page. Final fees are still to be confirmed.
            </p>
          </div>

          <FeeCalculator />

          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Discounts & Scholarships
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Founding-family, early-bird, sibling, referral and switch-over
              discounts apply to every programme, and scholarships of up to 50%
              are available. Final fees and eligibility are subject to
              confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Trial Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock size={32} className="text-blue-600" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Try Any Programme First
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Every programme offers a free 2-week trial or demo class, so your
              child can meet the teachers and try a real lesson before you
              apply.
            </p>

            <button
              onClick={handleTrialClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              Book a free 2-week trial
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Admission Tracker */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdmissionTracker />
        </div>
      </section>

      {/* Final Admissions CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm mb-6">
            <Sparkles size={16} />
            Admissions Open
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Admissions for 2027-28 Are Open
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Try a free 2-week trial class with our teachers, then apply when you
            are ready. The ₹999 registration fee is waived during our launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleTrialClick}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Book a free 2-week trial
            </button>

            <button
              onClick={handleApplyClick}
              className="border border-white/40 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Apply for 2027-28
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;