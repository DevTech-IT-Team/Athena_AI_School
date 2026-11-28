import React from "react";
import {
  Users,
  Clock,
  Globe,
  ArrowRight,
  Sun,
  Coffee,
  Sunset,
  CheckCircle2,
} from "lucide-react";

const ClassSelection = () => {
  const batches = [
    {
      label: "Standard",
      size: "24–26",
      desc: "Collaborative learning",
      color: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Premium",
      size: "20–22",
      desc: "Balanced learning approach",
      active: true,
      color: "bg-sky-50",
      border: "border-sky-200",
    },
    {
      label: "Elite",
      size: "16–18",
      desc: "Focused attention",
      color: "bg-teal-50",
      border: "border-teal-100",
    },
  ];

  const timings = [
    { time: "9:30 AM", label: "Morning Batch", icon: Sun },
    { time: "11:00 AM", label: "Late Morning", icon: Coffee },
    { time: "1:30 PM", label: "Afternoon Batch", icon: Sun },
    { time: "3:20 PM", label: "Evening Batch", icon: Sunset },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F9FF] py-20 md:py-24 px-5 sm:px-8 lg:px-12">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5">
            <Users className="w-4 h-4" />
            Flexible Learning
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
            Class Options &
            <span className="text-blue-600"> Schedules</span>
          </h2>

          <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed">
            Choose a learning environment, batch size and schedule
            that works best for your child.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Batch Size */}
          <div className="group bg-white rounded-3xl border border-blue-100 p-7 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Users className="w-7 h-7 text-blue-700" />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                  Batch Size
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Choose your learning group
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {batches.map((batch) => (
                <div
                  key={batch.label}
                  className={`rounded-2xl border p-5 transition-all duration-300 ${
                    batch.active
                      ? "border-blue-300 bg-blue-50 shadow-sm"
                      : "border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-blue-950">
                          {batch.label}
                        </h4>

                        {batch.active && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-slate-500 mt-2">
                        {batch.desc}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-2xl md:text-3xl font-bold text-blue-600">
                        {batch.size}
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        Students
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
              <span>Interactive and engaging classroom sessions</span>
            </div>
          </div>

          {/* Timings */}
          <div className="group bg-white rounded-3xl border border-sky-100 p-7 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">
                <Clock className="w-7 h-7 text-sky-700" />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                  Class Timings
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Indian Standard Time (IST)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {timings.map((slot, index) => {
                const Icon = slot.icon;

                return (
                  <div
                    key={slot.time}
                    className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-sky-50 hover:border-sky-200 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-sky-600" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-950">
                          {slot.time}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {slot.label}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-medium text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
              <span>Flexible schedules for different time zones</span>
            </div>
          </div>

          {/* Student Zones */}
          <div className="group bg-white rounded-3xl border border-teal-100 p-7 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center">
                <Globe className="w-7 h-7 text-teal-700" />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                  Student Zones
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Learning across locations
                </p>
              </div>
            </div>

            {/* Indian Zone */}
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 mb-4 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">🇮🇳</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-orange-600">
                  India
                </span>
              </div>

              <h4 className="text-lg font-bold text-blue-950 mb-2">
                Indian Zone
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed">
                Learning schedules and curriculum designed for
                students in the Indian learning environment.
              </p>
            </div>

            {/* Global Zone */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">🌍</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-blue-600">
                  International
                </span>
              </div>

              <h4 className="text-lg font-bold text-blue-950 mb-2">
                Global Zone
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed">
                Flexible learning options for students from
                international locations and time zones.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 p-8 md:p-12 text-white shadow-xl">
            {/* Decorative circle */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute right-20 -bottom-24 w-48 h-48 bg-white/10 rounded-full" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Find the Right Class for Your Child
                </h3>

                <p className="text-blue-100 leading-relaxed">
                  Explore our available batches and schedules to
                  discover the right learning environment.
                </p>
              </div>

              <a
                href="/apply-now"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Check Availability
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClassSelection;