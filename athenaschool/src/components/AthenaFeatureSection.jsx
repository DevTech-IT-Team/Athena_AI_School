import React from "react";
import {
  Monitor,
  Globe,
  Video,
  Clock,
  Users,
} from "lucide-react";

const K12OnlineSchoolFeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Learn from anywhere",
      description:
        "The flexibility of online learning allows your child to learn from anywhere in the world, making education accessible and convenient.",
      icon: <Monitor className="w-5 h-5" />,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      cardColor: "bg-white",
    },
    {
      id: 2,
      title: "Same curriculum in every market",
      description:
        "Whether you live in Dubai, Delhi or Toronto, your child follows the same programmes and curriculum.",
      icon: <Globe className="w-5 h-5" />,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-100",
      cardColor: "bg-white",
    },
    {
      id: 3,
      title: "Small online classes",
      description:
        "PLACEHOLDER: Confirm the maximum class size and teacher-to-student ratio.",
      icon: <Video className="w-5 h-5" />,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
      cardColor: "bg-yellow-50",
    },
    {
      id: 4,
      title: "A daily timetable that fits your time zone",
      description:
        "Classes are scheduled around key regions, so lessons fit your family's daily routine.",
      icon: <Clock className="w-5 h-5" />,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      cardColor: "bg-orange-50",
    },
    {
      id: 5,
      title: "Parents stay informed",
      description:
        "Regular updates, progress reports and communication help parents stay involved in their child's learning.",
      icon: <Users className="w-5 h-5" />,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      cardColor: "bg-purple-50",
    },
  ];

  return (
    <section className="w-full bg-[#F1F6FF] py-16 px-5 md:px-10 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[2px] text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3">
            Why online school
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-[#142B59]">
            Why families choose an online school
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.cardColor} rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                <span className={feature.iconColor}>
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-sm font-bold text-[#142B59] mb-2">
                {feature.title}
              </h3>

              <p className="text-xs leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default K12OnlineSchoolFeatureSection;