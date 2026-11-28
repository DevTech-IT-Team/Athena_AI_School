import React from "react";
import { GraduationCap, Globe2, BookOpen } from "lucide-react";

const stats = [
  {
    value: "Nursery–12",
    title: "Learning stages",
    description: "A complete online learning journey from early years to senior school.",
    icon: GraduationCap,
    color: "#2876CE",
    bg: "#EAF2FF",
  },
  {
    value: "2",
    title: "Learning pathways",
    description: "British pathway and Indian NIOS pathway options.",
    icon: Globe2,
    color: "#218F83",
    bg: "#E6F6F1",
  },
  {
    value: "Live",
    title: "Teacher-led classes",
    description: "Structured online learning with real teachers and student support.",
    icon: BookOpen,
    color: "#D99A22",
    bg: "#FFF5DC",
  },
];

function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F6FF] via-[#F7FBFA] to-[#FFF5EF] px-6 py-16 md:px-12 md:py-20">

      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#D8E9FF]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#F9DED2]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#218F83]">
            Edulectual K12
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#172554] md:text-4xl">
            Learning without boundaries
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Explore flexible online education with structured learning
            pathways designed to support children from Nursery to Grade 12.
          </p>
        </div>

        {/* Stats / highlights cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white bg-white/90 p-7 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-9"
              >

                {/* Icon */}
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: item.bg,
                    color: item.color,
                  }}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Value */}
                <div
                  className="mb-3 text-3xl font-extrabold md:text-4xl"
                  style={{ color: item.color }}
                >
                  {item.value}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-[#172554]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mx-auto max-w-xs text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Stats;