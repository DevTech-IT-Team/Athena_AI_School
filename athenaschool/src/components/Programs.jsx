import React from "react";
import {
  Baby,
  BookOpen,
  Users,
  GraduationCap,
  Brain,
  Languages,
  Music,
  Lightbulb,
  Globe,
  CircleHelp,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  BookMarked,
} from "lucide-react";

const programs = [
  {
    title: "Early Years",
    subtitle: "Nursery to Kindergarten",
    grades: "Around ages 3–5",
    description:
      "A nurturing start for young learners through play-based activities, early communication, creativity and foundational learning.",
    features: ["Play-based learning", "Early literacy", "Early numeracy"],
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    accent: "#F4B83F",
    bg: "#FFF8E8",
  },
  {
    title: "Primary",
    subtitle: "Grades 1–5",
    grades: "Primary education",
    description:
      "Build strong foundations in core subjects while developing curiosity, communication, critical thinking and confidence.",
    features: ["British Primary", "Indian Primary", "Core subjects"],
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    accent: "#269B91",
    bg: "#EAF8F5",
  },
  {
    title: "Middle School",
    subtitle: "Lower Secondary",
    grades: "Grades 6–8",
    description:
      "Learners develop independence, subject knowledge and problem-solving skills through structured learning and guided support.",
    features: ["British Lower Secondary", "Indian Middle School", "Independent learning"],
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85",
    accent: "#3679D8",
    bg: "#EEF4FF",
  },
  {
    title: "Senior School",
    subtitle: "Grades 9–12",
    grades: "Senior education",
    description:
      "A focused academic pathway that prepares learners for recognised qualifications, higher education and future opportunities.",
    features: ["IGCSE", "A Levels", "NIOS Senior School"],
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
    accent: "#E77C52",
    bg: "#FFF0E9",
  },
];

const enrichmentPrograms = [
  {
    title: "Computational Thinking",
    description:
      "Develop logical thinking, problem-solving and creative approaches to technology.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Languages",
    description:
      "Build communication skills and explore languages through engaging activities.",
    icon: Languages,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Music and Arts",
    description:
      "Encourage creativity, self-expression and confidence through artistic learning.",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Learning Garage",
    description:
      "Explore ideas, creative projects and practical approaches to learning.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=700&q=85",
  },
];

const exploreLinks = [
  "Early Years programme",
  "British Primary",
  "Online Middle School",
  "International GCSE options",
  "NIOS Senior School",
  "Fees and admissions",
];

const Programs = () => {
  return (
    <main className="w-full overflow-hidden bg-white font-sans text-[#172554]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F0F5FF] via-[#FFF8F1] to-[#FCEEF2] px-6 py-16 md:px-12 md:py-20">

        {/* Decorative shapes */}
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#C8EDE7]/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F9D8C7]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Hero content */}
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-500">
              <span>Home</span>
              <span>/</span>
              <span>Programmes</span>
            </div>

            <span className="mb-4 inline-block rounded-full bg-[#DDF4EF] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#168477]">
              Learning pathways
            </span>

            <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-tight text-[#142451] md:text-5xl lg:text-6xl">
              Online School Programmes from Nursery to Grade 12
            </h1>

            <p className="mb-8 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              The right learning journey starts with the right programme.
              Explore our Early Years, Primary, Middle School and Senior School
              pathways, with options designed to support learners at every
              stage of their education.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F9C842] px-7 py-3.5 text-sm font-bold text-[#172554] shadow-md transition hover:-translate-y-1 hover:bg-[#F4B82F]"
              >
                Book a free 2-week trial
                <ArrowRight size={17} />
              </a>

              <a
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#1D477E] px-7 py-3.5 text-sm font-bold text-[#1D477E] transition hover:bg-[#1D477E] hover:text-white"
              >
                Apply for 2027–28
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-5 rounded-[48%] border-[12px] border-[#F4B83F]/70" />

            <div className="relative h-[300px] overflow-hidden rounded-[48%] border-[8px] border-white shadow-2xl md:h-[390px]">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=90"
                alt="Student learning online"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-0 top-8 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E2F5EF] text-[#168477]">
                <BookOpen size={19} />
              </span>
              <div>
                <p className="text-xs font-bold text-[#172554]">
                  Live online classes
                </p>
                <p className="text-[10px] text-gray-500">
                  Learn with real teachers
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 right-0 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF1D2] text-[#D99A12]">
                <GraduationCap size={20} />
              </span>
              <div>
                <p className="text-xs font-bold text-[#172554]">
                  Academic pathways
                </p>
                <p className="text-[10px] text-gray-500">
                  Nursery to Grade 12
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROGRAMMES BY STAGE ================= */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#168477]">
              Learning pathways
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#172554] md:text-4xl">
              Programmes by stage
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Choose the learning stage that matches your child's age,
              academic level and educational goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Programme image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#10234B]/50 to-transparent" />

                    <div
                      className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg"
                      style={{ color: program.accent }}
                    >
                      <Icon size={25} />
                    </div>

                    <span className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#172554]">
                      {program.grades}
                    </span>
                  </div>

                  {/* Programme details */}
                  <div className="p-6 md:p-7">

                    <h3 className="text-2xl font-bold text-[#172554]">
                      {program.title}
                    </h3>

                    <p
                      className="mt-1 text-sm font-semibold"
                      style={{ color: program.accent }}
                    >
                      {program.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {program.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {program.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full px-3 py-2 text-xs font-semibold"
                          style={{
                            backgroundColor: program.bg,
                            color: "#334155",
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href="/programmes"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1769AA] transition hover:gap-3"
                    >
                      Explore programme
                      <ArrowRight size={17} />
                    </a>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= ENRICHMENT PROGRAMMES ================= */}
      <section className="bg-[#FFF9E9] px-6 py-16 md:px-12 md:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#168477]">
              Beyond the curriculum
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#172554] md:text-4xl">
              Enrichment programmes
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Opportunities that help children explore their interests,
              discover new skills and develop beyond academics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {enrichmentPrograms.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">

                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F5F1] text-[#168477]">
                      <Icon size={21} />
                    </div>

                    <h3 className="text-lg font-bold text-[#172554]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= INFORMATION CARDS ================= */}
      <section className="bg-[#EFFAF7] px-6 py-16 md:px-12">

        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">

          {/* How to choose */}
          <div className="rounded-2xl border-t-4 border-[#3679D8] bg-white p-7 shadow-md md:p-9">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3679D8]">
              <CircleHelp size={25} />
            </div>

            <h3 className="text-xl font-bold text-[#172554]">
              How to choose
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              The right programme depends on your child's age, previous
              education, learning needs and future goals. Our admissions team
              can help you understand the available pathways and decide which
              option is suitable.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1769AA]"
            >
              Talk to our team <ArrowRight size={16} />
            </a>

          </div>

          {/* Same curriculum */}
          <div className="rounded-2xl border-t-4 border-[#269B91] bg-white p-7 shadow-md md:p-9">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F7F2] text-[#269B91]">
              <Globe size={25} />
            </div>

            <h3 className="text-xl font-bold text-[#172554]">
              Same curriculum in every country
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Wherever your family is based, our online learning approach is
              designed to provide a consistent educational experience.
              Programme options and qualification pathways can be explored
              with our admissions team.
            </p>

            <a
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#168477]"
            >
              Learn about our school <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-white px-6 py-16 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#168477]">
              Programme information
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#172554] md:text-4xl">
              Fees by programme
            </h2>
          </div>

          <div className="rounded-2xl border border-[#F5DDA0] bg-[#FFF8E8] p-6 md:p-8">

            <div className="flex flex-col gap-5 md:flex-row md:items-center">

              <div className="flex shrink-0 gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E77C52] text-white">
                  <BookMarked size={22} />
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#269B91] text-white">
                  <GraduationCap size={22} />
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#172554]">
                  Transparent programme fees
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Programme fees may vary depending on the academic stage,
                  qualification pathway and location. Please visit our fees
                  page or contact the admissions team for the latest fee
                  information.
                </p>
              </div>

              <a
                href="/fees"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F9C842] px-6 py-3 text-sm font-bold text-[#172554] transition hover:bg-[#F0B92D]"
              >
                See full fees <ArrowRight size={16} />
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* ================= TRY A PROGRAMME ================= */}
      <section className="bg-[#FFFBEA] px-6 py-12 md:px-12">

        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-7 shadow-md md:p-9">

          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#1769AA]">
              <CalendarDays size={28} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#172554]">
                Try any programme first
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Every programme starts with a free 2-week trial. It gives
                families time to experience our online classes and see whether
                the learning approach is right for their child.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1769AA] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#12548B]"
            >
              Book your trial <ArrowRight size={16} />
            </a>

          </div>
        </div>
      </section>

      {/* ================= EXPLORE MORE ================= */}
      <section className="bg-[#FFF4EF] px-6 py-14 md:px-12">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-6 text-2xl font-extrabold text-[#172554]">
            Explore more
          </h2>

          <div className="flex flex-wrap gap-3">

            {exploreLinks.map((link) => (
              <a
                key={link}
                href="/programmes"
                className="rounded-full border border-[#E8DCD5] bg-white px-5 py-3 text-sm font-semibold text-[#334155] shadow-sm transition hover:border-[#1769AA] hover:bg-[#1769AA] hover:text-white"
              >
                {link}
              </a>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
};

export default Programs;