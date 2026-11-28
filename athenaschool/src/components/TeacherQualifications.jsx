import React from "react";
import {
  ShieldCheck,
  BookOpen,
  Users,
  GraduationCap,
  HeartHandshake,
  Laptop,
  UserCheck,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Star,
  Briefcase,
} from "lucide-react";

const recruitmentSteps = [
  "Recognised teaching qualifications and degrees in their subject.",
  "Experience of the curriculum they teach, including British curriculum or Indian NIOS.",
  "A live demonstration lesson as part of the selection process.",
  "Background and reference checks before joining the school.",
];

const teacherCards = [
  {
    icon: GraduationCap,
    title: "Training and support",
    description:
      "Our teachers receive ongoing training and support to improve their online teaching, classroom management and student engagement. We encourage professional development and help teachers build confidence in delivering online lessons.",
    color: "#3679D8",
    bg: "#EAF2FF",
  },
  {
    icon: Laptop,
    title: "Teaching online well",
    description:
      "Good online teaching keeps every child involved. Teachers use interactive lessons, activities, questions and feedback to make learning engaging and meaningful.",
    color: "#218F83",
    bg: "#E6F6F1",
  },
  {
    icon: Users,
    title: "Join the team",
    description:
      "Interested in teaching with us? Send your CV and relevant information to our recruitment team to explore opportunities.",
    color: "#D99A22",
    bg: "#FFF5DC",
  },
  {
    icon: BookOpen,
    title: "Teachers for each pathway",
    description:
      "Our teachers support learners across different educational pathways. They understand the requirements of their curriculum and help students prepare for their academic goals.",
    color: "#D7653B",
    bg: "#FFF0E9",
  },
  {
    icon: HeartHandshake,
    title: "How teachers get to know your child",
    description:
      "Teachers build relationships with students through regular interaction, feedback, observation and encouragement. Understanding a learner's strengths helps teachers support their progress.",
    color: "#8055CC",
    bg: "#F1ECFF",
  },
  {
    icon: UserCheck,
    title: "Meet a teacher before you join",
    description:
      "Families can get to know our school and teaching approach. Book a free trial to experience an online class and see how learning works.",
    color: "#218F83",
    bg: "#E6F6F1",
  },
];

const TeacherQualifications = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#EFF6FF] via-[#FFF8F2] to-[#FCEEF3] px-6 py-16 md:px-12 md:py-20">

        {/* Background decorations */}
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#D8EAE5]/50 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#F5D8CE]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Hero content */}
          <div>

            <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
              <span>Home</span>
              <span>/</span>
              <span>About</span>
              <span>/</span>
              <span>Our Teachers</span>
            </div>

            <span className="inline-block rounded-full bg-[#DDF4EF] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#168477]">
              Our teachers
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#172554] md:text-5xl">
              Meet Our
              <span className="text-[#218F83]"> Online School </span>
              Teachers
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Teachers make a school. At Edulectual K12 Online School,
              every class starts with a teacher who knows the curriculum
              and knows how to teach well online. This page introduces
              our teaching team and explains how we recruit, train and
              support them.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F9C842] px-7 py-3.5 text-sm font-bold text-[#172554] shadow-md transition hover:-translate-y-1 hover:bg-[#F0B92D]"
              >
                Book a free trial
                <ArrowRight size={17} />
              </a>

              <a
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#1D477E] px-7 py-3.5 text-sm font-bold text-[#1D477E] transition hover:bg-[#1D477E] hover:text-white"
              >
                Apply for 2027-28
              </a>

            </div>

          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-4 rounded-[48%] border-[10px] border-[#8061CE]/50" />

            <div className="relative h-[300px] overflow-hidden rounded-[48%] border-[8px] border-white shadow-2xl md:h-[390px]">
              <img
                src="/assets/images/teacher.webp"
                alt="Online school teacher"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute left-0 top-8 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F6F1] text-[#218F83]">
                <BookOpen size={21} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#172554]">
                  Live online classes
                </p>
                <p className="text-[10px] text-gray-500">
                  Learning with teachers
                </p>
              </div>

            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 right-0 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF5DC] text-[#D99A22]">
                <Star size={21} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#172554]">
                  Admissions open
                </p>
                <p className="text-[10px] text-gray-500">
                  2027-28
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= OUR TEACHERS NOTE ================= */}
      <div className="bg-[#EAF8F3] px-6 py-10 md:px-12">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col items-start gap-5 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center md:p-8">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1769AA] text-white">
              <ShieldCheck size={28} />
            </div>

            <div>

              <h3 className="text-lg font-extrabold text-[#172554]">
                Our teachers
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                We look for teachers with recognised qualifications,
                real teaching experience, subject knowledge and the
                ability to create engaging online learning experiences.
                Recruitment and selection are designed to help us
                identify teachers who can support learners effectively.
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* ================= HOW WE RECRUIT ================= */}
      <div className="bg-[#FFFBEA] px-6 py-14 md:px-12 md:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#218F83]">
              Our selection process
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#172554]">
              How we recruit
            </h2>

          </div>

          <div className="space-y-3">

            {recruitmentSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
              >

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1769AA] text-white">
                  <CheckCircle2 size={16} />
                </div>

                <p className="text-sm font-medium leading-6 text-gray-700">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ================= TEACHER CARDS ================= */}
      <div className="bg-[#FFFBEA] px-6 pb-16 md:px-12 md:pb-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {teacherCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7"
                  style={{
                    borderTop: `4px solid ${card.color}`,
                  }}
                >

                  {/* Icon */}
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: card.bg,
                      color: card.color,
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-extrabold text-[#172554]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {card.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </div>

      {/* ================= EXPLORE MORE ================= */}
      <div className="bg-[#FFF4EF] px-6 py-12 md:px-12">

        <div className="mx-auto max-w-7xl">

          <h3 className="text-lg font-extrabold text-[#172554]">
            Explore more
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">

            {[
              "Our leadership team",
              "How online school works",
              "Our learning culture",
              "Book a trial class",
            ].map((item, index) => (
              <a
                href="#"
                key={index}
                className="rounded-full border border-gray-100 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-[#1769AA] hover:text-white"
              >
                {item}
              </a>
            ))}

          </div>

        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-white px-6 py-14 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#1769AA] to-[#218F83] p-8 text-white shadow-xl md:p-12">

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

              <div className="max-w-2xl">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7F5ED]">
                  Admissions 2027-28
                </span>

                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Find the right learning journey for your child
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
                  Try a free 2-week class with our teachers, then apply
                  when you're ready. The trial gives families a chance
                  to experience online learning before making a decision.
                </p>

              </div>

              <div className="flex shrink-0 flex-wrap gap-4">

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F9C842] px-7 py-3.5 text-sm font-bold text-[#172554] transition hover:-translate-y-1 hover:bg-white"
                >
                  Book a free trial
                  <ArrowRight size={17} />
                </a>

                <a
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#1769AA]"
                >
                  Apply for 2027-28
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default TeacherQualifications;