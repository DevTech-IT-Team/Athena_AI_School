import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import skillImage from "../assets/skill.webp";
import parentImage from "../assets/optimized/relxro.webp";

const ProgramHighlight = () => {
  const learnersFeatures = [
    {
      title: "Live online classes",
      description:
        "Learn with teachers in live online lessons, with opportunities to ask questions, participate and interact.",
      color: "bg-[#EAF8F5]",
      icon: "01",
    },
    {
      title: "Personalised learning",
      description:
        "Learning is designed around your child's stage, progress and individual learning needs.",
      color: "bg-[#FFF8DD]",
      icon: "02",
    },
    {
      title: "Assessment",
      description:
        "Regular assessment helps teachers understand progress and identify where additional support is needed.",
      color: "bg-[#FFF0E8]",
      icon: "03",
    },
    {
      title: "Engaging lessons and activities",
      description:
        "Lessons include discussion, activities, interaction and opportunities to learn beyond textbooks.",
      color: "bg-[#F2EAFF]",
      icon: "04",
    },
    {
      title: "Learning resources",
      description:
        "Students have access to resources and materials that support their learning and revision.",
      color: "bg-[#FCEAF4]",
      icon: "05",
    },
  ];

  const parentsFeatures = [
    "Regular updates about your child's progress.",
    "Clear communication with teachers and the school.",
    "Access to learning information and resources.",
    "Support to help your child learn at home.",
  ];

  const supportFeatures = [
    "Help when students need assistance.",
    "Support for parents with questions.",
    "Guidance throughout the learning journey.",
  ];

  const enrichmentFeatures = [
    "Optional enrichment programmes.",
    "Learning opportunities beyond core lessons.",
  ];

  const infoCards = [
    {
      title: "Communication with parents",
      description:
        "Parents are kept informed about their child's learning, progress and areas where additional support may be helpful.",
      color: "border-blue-500",
    },
    {
      title: "Join us for flexibility",
      description:
        "Online learning allows families to organise their day around their location, routine and learning commitments.",
      color: "border-teal-600",
    },
    {
      title: "Try before you decide",
      description:
        "Explore the school through a trial and understand how online learning works before making a commitment.",
      color: "border-yellow-400",
    },
  ];

  const learningCards = [
    {
      title: "Assessment and feedback",
      description:
        "Students receive feedback to help them understand their progress and work towards their learning goals.",
      color: "border-blue-500",
    },
    {
      title: "Progressive learning",
      description:
        "Learning activities and lessons help students develop understanding, confidence and independent learning skills.",
      color: "border-teal-600",
    },
  ];

  const safetyFeatures = [
    "Students learn in a structured online learning environment.",
    "Communication and learning are supported through school systems.",
    "Parents are encouraged to stay involved in their child's learning.",
    "School support is available to help families navigate online learning.",
  ];

  const safetyCards = [
    {
      title: "Safe online learning environment",
      description:
        "Learning is structured to support a focused and supportive online experience.",
      color: "border-blue-500",
    },
    {
      title: "Support for every family",
      description:
        "Parents and students can reach out for assistance when they need guidance.",
      color: "border-teal-600",
    },
    {
      title: "Learning with confidence",
      description:
        "Students are encouraged to learn, participate and develop confidence in their abilities.",
      color: "border-yellow-400",
    },
  ];

  const renderList = (items) => (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-slate-100"
        >
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <p className="text-sm text-blue-950 font-medium">{item}</p>
        </div>
      ))}
    </div>
  );

  const renderCards = (cards) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-2xl border-t-4 ${card.color} shadow-sm hover:shadow-md transition-all duration-300`}
        >
          <h3 className="font-bold text-blue-950 mb-3">{card.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="overflow-hidden bg-white">

      {/* ================= FOR LEARNERS ================= */}
      <section className="bg-[#F1F6FF] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
              Online learning features
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              For learners
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learnersFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-950 font-bold text-sm mb-5 shadow-sm">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-blue-950 mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FOR PARENTS ================= */}
      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
            For parents
          </h2>

          {renderList(parentsFeatures)}

        </div>
      </section>

      {/* ================= SUPPORT ================= */}
      <section className="bg-[#FFF5ED] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
            Support
          </h2>

          {renderList(supportFeatures)}

        </div>
      </section>

      {/* ================= OPTIONAL ENRICHMENT ================= */}
      <section className="bg-[#F3F0FF] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
            Optional enrichment
          </h2>

          {renderList(enrichmentFeatures)}

        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="bg-[#EFFAF6] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {renderCards(infoCards)}
        </div>
      </section>

      {/* ================= LEARNING PLATFORM ================= */}
      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#DDF5ED] rounded-3xl -z-10"></div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={skillImage}
                alt="Student using an online learning platform"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
                width="1200"
                height="900"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
              Learning technology
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 mb-6">
              Our Online School Learning Platform and K12
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Our online school platform brings learning, resources,
              communication and student activities together in one learning
              environment. Students can access lessons and learning
              materials while families stay connected with the school.
            </p>

            <button className="flex items-center gap-2 text-blue-700 font-semibold group">
              Explore our learning platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= VIRTUAL CLASSROOM ================= */}
      <section className="bg-[#F5F0FF] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
              Online education
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 mb-6">
              The Virtual Classroom
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Our virtual classroom provides students with an opportunity
              to learn with their teachers and classmates in a structured
              online setting. Students can participate, ask questions and
              engage with their lessons.
            </p>

            <button className="flex items-center gap-2 text-blue-700 font-semibold group">
              Discover online learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-[#FFE7B8] rounded-3xl -z-10"></div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={parentImage}
                alt="Student participating in an online classroom"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
                width="1200"
                height="900"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= LEARNING CARDS ================= */}
      <section className="bg-[#FFFBE7] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {renderCards(learningCards)}
        </div>
      </section>

      {/* ================= SAFETY & PRIVACY ================= */}
      <section className="bg-[#F4EEFF] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-purple-600 w-7 h-7" />

            <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
              Safety and privacy
            </h2>
          </div>

          {renderList(safetyFeatures)}

        </div>
      </section>

      {/* ================= SAFETY CARDS ================= */}
      <section className="bg-[#EFFAF6] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {renderCards(safetyCards)}
        </div>
      </section>

      {/* ================= EXPLORE MORE ================= */}
      <section className="bg-[#FFF5ED] py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <h3 className="font-bold text-blue-950 mb-5">
            Explore more
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "How online school works",
              "Our learning platform",
              "Online learning",
              "Student support",
              "Parent and student resources",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="bg-white px-5 py-3 rounded-full text-xs font-semibold text-blue-950 shadow-sm hover:bg-blue-50 hover:text-blue-700 transition-all"
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </section>

    </section>
  );
};

export default ProgramHighlight;