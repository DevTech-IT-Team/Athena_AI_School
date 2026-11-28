import React from "react";
import {
  Shield,
  BookOpen,
  Users,
  GraduationCap,
  Monitor,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function TrustElements() {
  const trustCards = [
    {
      icon: BookOpen,
      title: "Recognised Learning Pathways",
      description:
        "Explore structured learning pathways designed around British and Indian curricula.",
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: GraduationCap,
      title: "Teacher-Led Classes",
      description:
        "Learn through live online classes with teachers guiding students throughout their learning journey.",
      bg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Users,
      title: "Individual Attention",
      description:
        "An online learning experience designed to encourage participation, engagement and interaction.",
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Monitor,
      title: "Structured Online Learning",
      description:
        "A structured online school experience with live classes and a learning routine.",
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: HeartHandshake,
      title: "Parent Support",
      description:
        "Parents are part of the learning journey, with communication and support throughout.",
      bg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Shield,
      title: "Learning with Purpose",
      description:
        "A school experience focused on helping students develop knowledge, confidence and independence.",
      bg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const learningFeatures = [
    "Live teacher-led online classes",
    "Structured learning schedules",
    "British and Indian learning pathways",
    "Support for students and parents",
    "Interactive online learning",
    "School experience from Nursery to Grade 12",
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F2] py-20 md:py-28">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-5">
            <Shield className="w-4 h-4" />
            The Edulectual Experience
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#172554] mb-6 leading-tight">
            A School Experience
            <span className="block text-blue-600">
              You Can Feel Confident About
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Discover an online school designed around structured learning,
            teacher interaction, student engagement and support for families.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {trustCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`${card.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-8 h-8 ${card.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-[#172554] mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Learning Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4" />
              What Makes Our School Different
            </span>

            <h3 className="text-3xl font-bold text-[#172554] mb-5">
              More Than Just Online Classes
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Edulectual K12 brings together teachers, structured learning
              and student support to create an online school experience
              that goes beyond individual lessons.
            </p>

            <div className="space-y-4">
              {learningFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>

                  <p className="text-gray-700 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-[#EAF4FF] to-purple-100 rounded-[2rem] p-8 md:p-12">
              {/* Decorative Element */}
              <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-yellow-200/70" />

              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                    <GraduationCap className="w-7 h-7 text-blue-600" />
                  </div>

                  <h4 className="text-2xl font-bold text-[#172554] mb-3">
                    Learning from Home
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    Experience the flexibility of online education while
                    being part of a structured school environment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#DFF5E8] rounded-2xl p-5">
                    <BookOpen className="w-7 h-7 text-green-700 mb-3" />

                    <h5 className="font-bold text-green-900 mb-2">
                      Academic Learning
                    </h5>

                    <p className="text-sm text-green-800">
                      Structured curriculum and classroom learning.
                    </p>
                  </div>

                  <div className="bg-[#FFF1D6] rounded-2xl p-5">
                    <Users className="w-7 h-7 text-orange-700 mb-3" />

                    <h5 className="font-bold text-orange-900 mb-2">
                      Student Engagement
                    </h5>

                    <p className="text-sm text-orange-800">
                      Participation and interaction in online classes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#172554] mb-5">
            Discover the Edulectual K12 Experience
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our programmes, meet our teachers and see how
            online school can work for your family.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            Explore Our School
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrustElements;