import React from "react";
import {
  Monitor,
  Globe,
  Video,
  Clock,
  Users,
  ArrowUpRight,
} from "lucide-react";

const K12OnlineSchoolFeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Learn from anywhere",
      description:
        "The flexibility of online learning allows your child to learn from anywhere in the world, making education accessible and convenient.",
      icon: Monitor,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      title: "Same curriculum in every market",
      description:
        "Whether you live in Dubai, Delhi or Toronto, your child follows the same programmes and curriculum.",
      icon: Globe,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-100",
    },
    {
      id: 3,
      title: "Small online classes",
      description:
        "Learn in an interactive online environment where students can engage with teachers, ask questions and participate in lessons.",
      icon: Video,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      id: 4,
      title: "A daily timetable that fits your time zone",
      description:
        "Classes are scheduled around key regions, helping lessons fit your family's daily routine.",
      icon: Clock,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: 5,
      title: "Parents stay informed",
      description:
        "Regular updates, progress reports and communication help parents stay involved in their child's learning journey.",
      icon: Users,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F8FF] py-16 md:py-20 px-5 md:px-10 lg:px-16 font-sans">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-teal-700 bg-teal-50 border border-teal-100 px-4 py-2 rounded-full mb-4">
            Why online school
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#142B59] leading-tight mb-5">
            Why families choose an{" "}
            <span className="text-blue-600">online school</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A flexible, structured and engaging learning environment designed
            to support students and families wherever they are in the world.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative bg-white border border-blue-100/70 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 hover:-translate-y-1.5"
              >

                {/* Icon */}
                <div
                  className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon
                    className={`w-6 h-6 ${feature.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#142B59] mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-7">
                  {feature.description}
                </p>

                {/* Decorative Arrow */}
                <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-500 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 bg-white border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">

          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-[#142B59] mb-2">
              Education without geographical boundaries
            </h3>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
              Your child can access quality education, structured classes
              and a supportive school community from the comfort of home.
            </p>
          </div>

          <a
            href="/apply-now"
            className="inline-flex items-center gap-2 shrink-0 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-200"
          >
            Explore Admissions
            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default K12OnlineSchoolFeatureSection;