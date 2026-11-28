import React from "react";
import {
  Star,
  Search,
  Leaf,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
} from "lucide-react";

const FlowwEnrollmentUI = () => {
  const categories = [
    {
      title: "Gifted Learners",
      desc: "Accelerate beyond the classroom and explore learning opportunities that challenge their abilities.",
      icon: Star,
      bg: "bg-[#EAF5FF]",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Curious Minds",
      desc: "Explore new ideas, discover interests and develop a deeper understanding of concepts.",
      icon: Search,
      bg: "bg-[#FFF7DF]",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Need Extra Support",
      desc: "Build strong foundations through additional guidance, practice and personalised support.",
      icon: Leaf,
      bg: "bg-[#EAF8F2]",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      title: "Thriving Students",
      desc: "Add depth to their learning and develop skills beyond their regular school curriculum.",
      icon: Sparkles,
      bg: "bg-[#F4EDFF]",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const benefits = [
    "Suitable for students studying with different school boards.",
    "Complements your child's existing school education.",
    "Encourages curiosity, confidence and independent thinking.",
    "Supports the development of future-ready skills.",
  ];

  return (
    <section className="overflow-hidden bg-white font-sans">

      {/* ================= MAIN SECTION ================= */}
      <div className="bg-[#F1F6FF] px-6 py-16 md:px-10 lg:py-24">

        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="max-w-3xl mb-12">

            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm mb-5">
              <GraduationCap size={16} />
              Who should enrol
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight mb-5">
              Who Must{" "}
              <span className="text-blue-600">Enrol?</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              FLOWW is designed to support different types of learners,
              helping every child discover their potential, strengthen
              their understanding and develop skills for the future.
            </p>

          </div>

          {/* Learner Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`${item.bg} rounded-2xl p-6 md:p-7 border border-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >

                  <div className="flex items-center justify-between mb-6">

                    <span className="text-sm font-bold text-slate-400">
                      0{index + 1}
                    </span>

                    <div className={`${item.iconBg} ${item.iconColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <Icon size={23} />
                    </div>

                  </div>

                  <h3 className="text-lg font-bold text-blue-950 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </div>

      {/* ================= HIGHLIGHT SECTION ================= */}
      <div className="bg-[#EFFAF6] px-6 py-16 md:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>

              <span className="inline-flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-widest mb-5">
                <CheckCircle2 size={16} />
                Learning for every child
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 leading-tight mb-6">
                FLOWW is designed for{" "}
                <span className="text-teal-600">
                  any learner.
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Whether they study with k12onlineschool or any other
                school, FLOWW complements formal schooling irrespective
                of the curriculum or board. It helps children develop
                future-ready skills and a deeper understanding of
                foundational concepts.
              </p>

              {/* Benefits */}
              <div className="space-y-4">

                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2
                        size={15}
                        className="text-teal-700"
                      />
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}

              </div>

            </div>

            {/* Right Information Card */}
            <div className="relative">

              <div className="absolute -top-5 -right-5 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-70"></div>

              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <BookOpen
                      size={28}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-teal-600 font-bold uppercase tracking-wider">
                      Learning opportunities
                    </span>

                    <h3 className="text-xl font-bold text-blue-950">
                      For Grades 1–12
                    </h3>
                  </div>

                </div>

                <div className="space-y-5">

                  <div className="bg-[#EAF5FF] rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="text-blue-600" size={20} />
                      <h4 className="font-bold text-blue-950">
                        Explore potential
                      </h4>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Encourage children to explore their interests,
                      strengths and abilities.
                    </p>
                  </div>

                  <div className="bg-[#FFF7DF] rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="text-amber-600" size={20} />
                      <h4 className="font-bold text-blue-950">
                        Build future skills
                      </h4>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Develop confidence, creativity, curiosity and
                      deeper conceptual understanding.
                    </p>
                  </div>

                  <div className="bg-[#EAF8F2] rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="text-teal-600" size={20} />
                      <h4 className="font-bold text-blue-950">
                        Learn at their pace
                      </h4>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Support individual learning needs and help
                      students progress with confidence.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM CTA ================= */}
      <div className="bg-[#FFF5ED] px-6 py-12 md:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-r from-blue-700 to-teal-700 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">

            <div className="max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-widest text-yellow-300">
                Start your learning journey
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
                Give your child more opportunities to grow.
              </h3>

              <p className="text-sm md:text-base text-blue-50 leading-relaxed">
                Discover how FLOWW can complement your child's
                education and help them build skills for tomorrow.
              </p>

            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-7 py-4 rounded-full font-bold text-sm whitespace-nowrap transition-all"
            >
              Enquire Now
              <ArrowRight size={18} />
            </a>

          </div>

        </div>
      </div>

    </section>
  );
};

export default FlowwEnrollmentUI;