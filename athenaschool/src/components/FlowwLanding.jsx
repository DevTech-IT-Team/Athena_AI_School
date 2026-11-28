import React from "react";
import {
  BookOpen,
  Brain,
  Users,
  Target,
  Heart,
  Lightbulb,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const FlowwLanding = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Pedagogy-Led Mastery",
      desc: "Proven teaching methods that ensure deep understanding and retention.",
      color: "bg-[#E5F5F1]",
      iconColor: "text-teal-700",
    },
    {
      icon: Brain,
      title: "AI-Driven Personalisation",
      desc: "Technology that adapts to each learner's unique needs and pace.",
      color: "bg-[#FFF7DF]",
      iconColor: "text-amber-600",
    },
    {
      icon: Users,
      title: "Strong Human Connections",
      desc: "Exceptional facilitators who mentor and inspire every learner.",
      color: "bg-[#FFF0E8]",
      iconColor: "text-orange-600",
    },
    {
      icon: Target,
      title: "Flexible Pathways",
      desc: "Accelerated learning options that match your child's potential.",
      color: "bg-[#F1EAFF]",
      iconColor: "text-purple-600",
    },
  ];

  const values = [
    {
      title: "Learner-first decisions",
      icon: Heart,
    },
    {
      title: "Integrity in personalisation",
      icon: CheckCircle2,
    },
    {
      title: "Excellence with ownership",
      icon: Target,
    },
    {
      title: "Innovation with empathy",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white font-sans">

      {/* ================= HEADER ================= */}
      <section className="bg-[#F1F6FF] px-6 py-16 md:px-10 lg:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl">

            {/* Label */}
            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm mb-5">
              <Sparkles size={16} />
              Our approach to learning
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight mb-5">
              The k12onlineschool{" "}
              <span className="text-blue-600">
                Difference
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-teal-700 mb-6">
              Powered by the Learning Pyramid for Success
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              FLOWW is not a collection of courses. It is a coherent
              learning system designed to deliver multi-dimensional
              success at scale.
            </p>

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="mb-10">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">
              What makes us different
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mt-3">
              The foundations of meaningful learning
            </h2>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >

                  {/* Top Accent */}
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>

                  <div className="p-6">

                    {/* Icon */}
                    <div
                      className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                    >
                      <Icon
                        size={25}
                        className={item.iconColor}
                      />
                    </div>

                    {/* Number */}
                    <span className="text-xs font-bold text-slate-300 tracking-widest mb-3 block">
                      0{index + 1}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-blue-950 mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= LEARNING PYRAMID ================= */}
      <section className="bg-[#EAF8F2] px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>

              <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">
                Our learning philosophy
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 mb-6 leading-tight">
                Learning built on strong foundations
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                Our approach brings together teaching, technology
                and meaningful human connections to create a
                structured and engaging learning experience.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Every element of FLOWW works together to support
                learners, encourage curiosity and help children
                develop a deeper understanding of what they learn.
              </p>

            </div>

            {/* Right Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-white">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-[#E5F5F1] flex items-center justify-center">
                  <BookOpen
                    size={28}
                    className="text-teal-700"
                  />
                </div>

                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-teal-600">
                    FLOWW
                  </span>

                  <h3 className="text-xl font-bold text-blue-950">
                    A connected learning system
                  </h3>
                </div>

              </div>

              <div className="space-y-4">

                {[
                  "Teaching designed for understanding",
                  "Technology that supports personalisation",
                  "Mentors who inspire and guide",
                  "Learning pathways built around potential",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-slate-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <CheckCircle2
                        size={17}
                        className="text-teal-700"
                      />
                    </div>

                    <p className="text-sm font-medium text-blue-950">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-[#FFF8E8] px-6 py-16 md:px-10">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
              Our core values
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 mb-5">
              What guides everything we do
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Our values shape the way we teach, support learners,
              innovate and create meaningful learning experiences.
            </p>

          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-white hover:shadow-md transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-[#FFF4D9] flex items-center justify-center mx-auto mb-5">
                    <Icon
                      size={24}
                      className="text-amber-600"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-blue-950 leading-relaxed">
                    {value.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>
      </section>

    </section>
  );
};

export default FlowwLanding;