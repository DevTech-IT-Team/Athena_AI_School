import React from "react";
import {
  BookOpen,
  Globe,
  Users,
  Lightbulb,
  GraduationCap,
  Heart,
  ArrowRight,
  Monitor,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Learning That Inspires",
      description:
        "We believe every child can thrive when learning is engaging, purposeful and designed around how they learn.",
      color: "bg-[#FFF1D9]",
      iconColor: "text-[#D99A19]",
    },
    {
      icon: Users,
      title: "Teachers at the Heart",
      description:
        "Technology supports our teachers. Real interaction, guidance and meaningful relationships remain at the heart of education.",
      color: "bg-[#E6F2FF]",
      iconColor: "text-[#4776C5]",
    },
    {
      icon: Heart,
      title: "Families as Partners",
      description:
        "We value parents as partners in learning and believe communication, transparency and support make a difference.",
      color: "bg-[#FCE8EC]",
      iconColor: "text-[#D66B86]",
    },
    {
      icon: Globe,
      title: "Learning Without Borders",
      description:
        "Our online model gives families the flexibility to access structured education wherever life takes them.",
      color: "bg-[#E6F7EF]",
      iconColor: "text-[#32976B]",
    },
  ];

  const pathways = [
    {
      title: "British Curriculum",
      subtitle: "Pearson Edexcel",
      description:
        "Students follow the British pathway leading to International GCSE and International A Level qualifications.",
      tags: ["International GCSE", "International A Level"],
      color: "bg-[#EAF3FF]",
      accent: "text-[#315FAD]",
    },
    {
      title: "Indian Curriculum",
      subtitle: "NIOS Pathway",
      description:
        "Students follow the Indian pathway with Secondary and Senior Secondary examinations through NIOS.",
      tags: ["Secondary", "Senior Secondary"],
      color: "bg-[#E8F7EE]",
      accent: "text-[#31845C]",
    },
  ];

  const beliefs = [
    "Every child can do well when teaching fits how they learn.",
    "Technology should support teachers, not replace them.",
    "Parents are partners, so they should always know how their child is doing.",
    "A school's claims should be easy to check, so we publish our curriculum, fees and policies openly.",
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-[#14215B]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#FFF9F2] px-6 py-20 md:py-28">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Hero Content */}
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFEBC5] px-4 py-2 text-sm font-semibold text-[#73521A]">
              <Sparkles size={16} />
              About Edulectual K12
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              A School That
              <span className="text-[#E6A52E]"> Fits Your </span>
              Child's World
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Edulectual K12 Online School provides structured online education
              for children from Nursery to Grade 12, combining live teaching,
              thoughtful learning experiences and recognised examination
              pathways.
            </p>

            <p className="mb-8 text-base leading-relaxed text-gray-600">
              We bring together the structure of a school, the flexibility of
              online learning and the support of teachers who care about every
              learner's journey.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F0BD42] px-7 py-3.5 font-bold text-[#14215B] transition-all duration-300 hover:bg-[#E3A921]"
              >
                Book a free 2-week trial
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/apply-now"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#14215B] px-7 py-3.5 font-bold text-[#14215B] transition-all duration-300 hover:bg-[#14215B] hover:text-white"
              >
                Apply for 2027–28
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative rounded-[32px] bg-[#E6F2FF] p-6 md:p-10">
              <div className="rounded-3xl bg-white p-6 shadow-lg md:p-8">

                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1D9]">
                    <GraduationCap
                      size={30}
                      className="text-[#D99A19]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      Education for Every Journey
                    </h3>
                    <p className="text-sm text-gray-500">
                      Nursery to Grade 12
                    </p>
                  </div>
                </div>

                <div className="space-y-4">

                  <div className="flex items-center gap-4 rounded-2xl bg-[#EAF3FF] p-4">
                    <BookOpen
                      className="shrink-0 text-[#315FAD]"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold">Structured Curriculum</h4>
                      <p className="text-sm text-gray-600">
                        Clear learning pathways
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#E8F7EE] p-4">
                    <Users
                      className="shrink-0 text-[#31845C]"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold">Live Teachers</h4>
                      <p className="text-sm text-gray-600">
                        Guidance and interaction
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#FFF1D9] p-4">
                    <Globe
                      className="shrink-0 text-[#D99A19]"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold">Global Flexibility</h4>
                      <p className="text-sm text-gray-600">
                        Learning from anywhere
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="pointer-events-none absolute -right-5 -top-5 z-0 h-20 w-20 rounded-full bg-[#F0BD42]" />
            <div className="pointer-events-none absolute -bottom-5 -left-5 z-0 h-24 w-24 rounded-full bg-[#DCEFE4]" />
          </div>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E6F2FF] px-4 py-2 text-sm font-semibold text-[#315FAD]">
              Our Story
            </span>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Why We Started an Online School
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Many families need a school that does not depend on where they
              live. Parents relocate for work, children train seriously in
              sports or the arts, some live far from a good school, and others
              simply want more say in how and when their child learns.
            </p>

            <p>
              We built Edulectual K12 for them: a structured school day
              delivered online, with real teachers, a clear curriculum and
              recognised exams at the end of it.
            </p>

            <p>
              We are not a tuition service or a recorded-video course. We aim
              to give children everything a good school gives them, including a
              timetable, a class, teachers who know them and a path to
              qualifications, without the commute or the campus.
            </p>
          </div>

        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="bg-[#F1F6FF] px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#315FAD]">
              Our Approach
            </span>

            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              More Than Online Classes
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              We combine the essential elements of a school with the
              opportunities offered by technology to create a meaningful
              learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-blue-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`${value.color} mb-6 flex h-14 w-14 items-center justify-center rounded-2xl`}
                  >
                    <Icon size={28} className={value.iconColor} />
                  </div>

                  <h3 className="mb-4 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SCHOOL MODEL ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Content */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#E8F7EE] px-4 py-2 text-sm font-semibold text-[#31845C]">
                Our School Model
              </span>

              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                The Structure of a School.
                <span className="text-[#E6A52E]">
                  {" "}The Flexibility of Online.
                </span>
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Edulectual K12 is fully online. Every class, assessment and
                parent meeting takes place online, allowing learners to
                participate from home while following a structured academic
                routine.
              </p>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF]">
                    <Monitor
                      className="text-[#315FAD]"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-bold">
                      A Structured School Day
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Timetabled classes, live teaching and guided learning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF1D9]">
                    <Users
                      className="text-[#D99A19]"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-bold">
                      Real Teachers and Classes
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Children learn with teachers and classmates rather than
                      relying solely on recorded content.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F7EE]">
                    <Target
                      className="text-[#31845C]"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-bold">
                      Clear Learning Progress
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Curriculum, assessments and pathways designed to support
                      progression.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Visual Cards */}
            <div className="rounded-[32px] bg-[#FFF9F2] p-8 md:p-12">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3FF]">
                    <BookOpen className="text-[#315FAD]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    Curriculum
                  </h3>
                  <p className="text-sm text-gray-600">
                    Defined learning programmes and academic progression.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7EE]">
                    <Users className="text-[#31845C]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    Class Community
                  </h3>
                  <p className="text-sm text-gray-600">
                    Live lessons, interaction and collaborative learning.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1D9]">
                    <Globe className="text-[#D99A19]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    Flexibility
                  </h3>
                  <p className="text-sm text-gray-600">
                    An online model designed for families across locations.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FCE8EC]">
                    <Heart className="text-[#D66B86]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    Parent Partnership
                  </h3>
                  <p className="text-sm text-gray-600">
                    Families remain informed and connected to learning.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CURRICULUM PATHWAYS ================= */}
      <section className="bg-[#FFF9F2] px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#FFEBC5] px-4 py-2 text-sm font-semibold text-[#73521A]">
              Academic Pathways
            </span>

            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Two Pathways.
              <span className="text-[#E6A52E]">
                {" "}One Learning Experience.
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              We offer British and Indian academic pathways to help families
              choose the route that best suits their child's academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className={`${pathway.color} rounded-[32px] border border-white p-8 md:p-10`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                  <GraduationCap
                    size={28}
                    className={pathway.accent}
                  />
                </div>

                <span className={`font-semibold ${pathway.accent}`}>
                  {pathway.title}
                </span>

                <h3 className="mb-5 mt-2 text-3xl font-bold">
                  {pathway.subtitle}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600">
                  {pathway.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {pathway.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= OUR BELIEFS ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#FCE8EC] px-4 py-2 text-sm font-semibold text-[#B74E6B]">
              What We Believe
            </span>

            <h2 className="text-3xl font-bold md:text-5xl">
              Our Beliefs Shape
              <span className="text-[#E6A52E]"> Our School</span>
            </h2>
          </div>

          <div className="rounded-[32px] bg-[#FFF9F2] p-8 md:p-12">
            <div className="space-y-6">
              {beliefs.map((belief, index) => (
                <div
                  key={belief}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0BD42]">
                    <span className="font-bold text-[#14215B]">
                      {index + 1}
                    </span>
                  </div>

                  <p className="pt-1 text-base leading-relaxed text-gray-700 md:text-lg">
                    {belief}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#14215B] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0BD42]">
            <GraduationCap
              size={32}
              className="text-[#14215B]"
            />
          </div>

          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Discover a Different
            <span className="text-[#F0BD42]"> Way to Learn</span>
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-blue-100">
            Explore Edulectual K12 and see how a structured online school,
            thoughtful teaching and flexible learning can support your child's
            education.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F0BD42] px-8 py-4 font-bold text-[#14215B] transition-all duration-300 hover:bg-[#E3A921]"
            >
              Book a free 2-week trial
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/apply-now"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#14215B]"
            >
              Apply for 2027–28
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;