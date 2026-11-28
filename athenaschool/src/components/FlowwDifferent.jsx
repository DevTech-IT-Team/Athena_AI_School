import React from "react";
import {
  ArrowRight,
  Video,
  Brain,
  Sparkles,
  Users,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";

const FlowwDifferent = () => {
  const data = [
    {
      title: "Live, Engaging Classes",
      desc: "Interactive sessions with exceptional facilitators who bring learning to life.",
      icon: Video,
      color: "bg-[#E5F5F1]",
      iconColor: "text-teal-700",
    },
    {
      title: "k12onlineschool's Unique Pedagogy",
      desc: "Proven teaching methods designed for deep understanding and application.",
      icon: BookOpen,
      color: "bg-[#FFF4D9]",
      iconColor: "text-amber-600",
    },
    {
      title: "AI-Powered Personalisation",
      desc: "Technology that adapts to each learner's pace and learning style.",
      icon: Brain,
      color: "bg-[#FCE9E4]",
      iconColor: "text-orange-600",
    },
    {
      title: "Small Batches of 24-26",
      desc: "Age-appropriate groups for active participation and meaningful feedback.",
      icon: Users,
      color: "bg-[#F1EAFE]",
      iconColor: "text-purple-600",
    },
    {
      title: "Flexible Timings",
      desc: "Multiple batches and session timings to suit your family's schedule.",
      icon: Clock,
      color: "bg-[#E9F2FF]",
      iconColor: "text-blue-600",
    },
    {
      title: "Complements Any School",
      desc: "Works alongside any curriculum — CBSE, ICSE, IGCSE and State boards.",
      icon: BookOpen,
      color: "bg-[#E8F8E8]",
      iconColor: "text-green-600",
    },
    {
      title: "Future-Ready Skills",
      desc: "Prepares children for skills that matter for lifelong success.",
      icon: Sparkles,
      color: "bg-[#FFF0F6]",
      iconColor: "text-pink-600",
    },
    {
      title: "Progress Tracking",
      desc: "Regular assessments and parent updates on learner development.",
      icon: TrendingUp,
      color: "bg-[#FFF5E9]",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F8FF] py-20 px-6 sm:px-8 lg:px-12">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-5 shadow-sm">
            <Sparkles size={16} />
            WHY FLOWW
          </span>

          <h2 className="text-blue-950 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            What Makes{" "}
            <span className="text-blue-600">FLOWW</span>{" "}
            Different?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            FLOWW leverages k12onlineschool's unique pedagogy,
            technology and human connections to nurture deep
            understanding and meaningful learning experiences.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Number */}
                <div className="flex items-center justify-between mb-6">

                  <span className="text-sm font-bold text-slate-300 tracking-widest">
                    0{index + 1}
                  </span>

                  <div
                    className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center`}
                  >
                    <Icon
                      className={`${item.iconColor} w-6 h-6`}
                    />
                  </div>

                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-blue-950 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold">
                    Learn more
                  </span>

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-5 bg-blue-950 text-white rounded-3xl px-8 py-8 sm:px-12 max-w-4xl w-full shadow-xl">

            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Learning designed for tomorrow
              </h3>

              <p className="text-blue-100/80 text-sm leading-relaxed">
                Discover a learning experience that helps your child
                grow with confidence, curiosity and skills.
              </p>
            </div>

            <a
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-blue-950 font-bold text-sm hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              Explore FLOWW
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FlowwDifferent;