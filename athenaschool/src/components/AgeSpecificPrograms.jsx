import {
  Baby,
  BookOpen,
  GraduationCap,
  Users,
  ArrowRight,
} from "lucide-react";

function AgeSpecificPrograms() {
  const programs = [
    {
      icon: Baby,
      title: "Early Years",
      subtitle: "Nursery to Kindergarten",
      age: "Ages 3–5",
      description:
        "A nurturing early-years programme for children aged 3 to 5, helping them build confidence, communication, early maths and social skills through play and guided learning.",
      features: [
        "Communication and language",
        "Early maths",
        "Understanding the world",
        "Personal development",
        "Physical development",
        "Creativity",
      ],
      color: "blue",
      link: "/programmes/early-years",
    },
    {
      icon: BookOpen,
      title: "Primary",
      subtitle: "Grades 1–5",
      age: "Ages 5–11",
      description:
        "Primary learning builds strong foundations in English, Mathematics, Science and wider curriculum subjects through structured teaching and interactive learning.",
      features: [
        "English and literacy",
        "Mathematics",
        "Science",
        "Wider curriculum",
        "Creative learning",
        "Independent learning skills",
      ],
      color: "teal",
      link: "/programmes/primary",
    },
    {
      icon: GraduationCap,
      title: "Middle School",
      subtitle: "Grades 6–8",
      age: "Ages 11–14",
      description:
        "Students develop subject knowledge, critical thinking, independent learning and problem-solving skills as they prepare for senior school and future qualifications.",
      features: [
        "Mathematics",
        "Science",
        "Social Sciences",
        "English",
        "Computing",
        "Project-based learning",
      ],
      color: "orange",
      link: "/programmes/middle-school",
    },
    {
      icon: Users,
      title: "Senior School",
      subtitle: "Grades 9–12",
      age: "Ages 14–18",
      description:
        "Senior School offers pathways towards recognised qualifications, including International GCSE, A Levels and NIOS Senior Secondary.",
      features: [
        "International GCSE",
        "A-Level preparation",
        "NIOS Senior Secondary",
        "Subject choices",
        "University guidance",
        "Career preparation",
      ],
      color: "purple",
      link: "/programmes/senior-school",
    },
  ];

  const colorStyles = {
    blue: {
      icon: "bg-blue-100 text-blue-600",
      border: "border-t-blue-500",
      badge: "bg-blue-50 text-blue-700",
      button: "text-blue-600",
    },
    teal: {
      icon: "bg-teal-100 text-teal-600",
      border: "border-t-teal-500",
      badge: "bg-teal-50 text-teal-700",
      button: "text-teal-600",
    },
    orange: {
      icon: "bg-orange-100 text-orange-600",
      border: "border-t-orange-400",
      badge: "bg-orange-50 text-orange-700",
      button: "text-orange-600",
    },
    purple: {
      icon: "bg-purple-100 text-purple-600",
      border: "border-t-purple-500",
      badge: "bg-purple-50 text-purple-700",
      button: "text-purple-600",
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F4F7FF] py-16 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#FFF0D5] opacity-60 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#DDF5F0] opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            LEARNING BY STAGE
          </span>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#14244B] md:text-4xl">
            What Your Child Learns at Each Stage
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            From early learning to senior school, our programmes support
            your child at every stage of their educational journey.
          </p>
        </div>

        {/* Programme Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {programs.map((program, index) => {
            const styles = colorStyles[program.color];
            const Icon = program.icon;

            return (
              <div
                key={index}
                className={`group rounded-2xl border border-gray-100 border-t-4 ${styles.border} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8`}
              >
                {/* Card Header */}
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
                  >
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-[#14244B] md:text-2xl">
                        {program.title}
                      </h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
                      >
                        {program.age}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-gray-500">
                      {program.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-gray-600">
                  {program.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#14244B]">
                    What children learn
                  </h4>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {program.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-lg bg-[#F8FAFC] px-3 py-3 transition-colors hover:bg-[#F1F5F9]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>

                        <span className="text-sm text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={program.link}
                  className={`inline-flex items-center gap-2 font-semibold ${styles.button} transition-all duration-300 group-hover:gap-3`}
                >
                  Explore Programme
                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-5 text-gray-600">
            Explore our programmes and find the right learning pathway for your child.
          </p>

          <a
            href="/programmes"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5C542] px-7 py-3 font-semibold text-[#14244B] shadow-sm transition-all duration-300 hover:bg-[#EAB82E] hover:shadow-md"
          >
            View All Programmes
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AgeSpecificPrograms;