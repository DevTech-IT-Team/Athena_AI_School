import React from "react";
import {
  PlayCircle,
  ArrowRight,
  Trophy,
  Star,
  Award,
} from "lucide-react";

import personalizedImage from "/assets/images/ariel-HkN64BISuQA-unsplash.webp";
import chessImage from "../assets/optimized/2.webp";
import watercolorImage from "/assets/images/watercolor-painting-artist-his-studio.webp";

const students = [
  {
    id: 1,
    name: "Divith Reddy",
    age: "8 years old",
    mainBadge: "Chess Champion",
    description:
      "A young prodigy, Divith recently won the U-8 World Chess Championship in Italy. With his love for chess, he is determined to become the world's youngest Grandmaster.",
    tags: ["World Champion", "Chess Prodigy", "Math Genius"],
    image: chessImage,
    hasVideo: true,
    accent: "#E7A928",
    bg: "#FFF7E5",
  },
  {
    id: 2,
    name: "Keya Hatkar",
    age: "13 years old",
    mainBadge: "Award Winner",
    description:
      "Keya, recipient of the prestigious Pradhan Mantri Rashtriya Bal Puraskar, is an award-winning author, artist, and social impact entrepreneur.",
    tags: ["Award Winner", "Author", "Artist"],
    image: watercolorImage,
    hasVideo: false,
    accent: "#269B91",
    bg: "#E9F7F3",
  },
];

const StudentSpotlight = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#F0F5FF] via-[#FFF8F1] to-[#FCEEF2] px-6 py-16 md:px-12 md:py-20">

        {/* Background decorations */}
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#C8EDE7]/50 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#F9D8C7]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left content */}
          <div>

            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-500">
              <span>Home</span>
              <span>/</span>
              <span>Student Stories</span>
            </div>

            <span className="inline-block rounded-full bg-[#DDF4EF] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#168477]">
              Success Stories
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight text-[#172554] md:text-5xl lg:text-6xl">
              Celebrating Our
              <span className="text-[#218F83]"> Outstanding </span>
              Students
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Every learner has a unique journey. Discover inspiring stories
              of young achievers who are exploring their passions, developing
              their talents and creating their own paths to success.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F9C842] px-7 py-3.5 text-sm font-bold text-[#172554] shadow-md transition hover:-translate-y-1 hover:bg-[#F0B92D]"
              >
                Book a free 2-week trial
                <ArrowRight size={17} />
              </a>

              <a
                href="/programmes"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#1D477E] px-7 py-3.5 text-sm font-bold text-[#1D477E] transition hover:bg-[#1D477E] hover:text-white"
              >
                Explore programmes
              </a>

            </div>
          </div>

          {/* Right hero image */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-4 rounded-[48%] border-[10px] border-[#F4B83F]/70" />

            <div className="relative h-[300px] overflow-hidden rounded-[48%] border-[8px] border-white shadow-2xl md:h-[390px]">
              <img
                src={personalizedImage}
                alt="Student celebrating an achievement"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating achievement badge */}
            <div className="absolute left-0 top-8 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2D5] text-[#D99A22]">
                <Trophy size={21} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#172554]">
                  Young Achievers
                </p>
                <p className="text-[10px] text-gray-500">
                  Inspiring journeys
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 right-0 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5F7F2] text-[#218F83]">
                <Award size={21} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#172554]">
                  Student Excellence
                </p>
                <p className="text-[10px] text-gray-500">
                  Beyond academics
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= STUDENT SPOTLIGHT ================= */}
      <div className="bg-[#F7FAFF] px-6 py-16 md:px-12 md:py-20">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-10">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#218F83]">
              Celebrating success
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#172554] md:text-4xl">
              Student Spotlight
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Meet our talented learners whose dedication, creativity and
              achievements inspire us every day.
            </p>

          </div>

          {/* Student cards */}
          <div className="space-y-8">

            {students.map((student) => (
              <article
                key={student.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="grid grid-cols-1 md:grid-cols-5">

                  {/* Student image */}
                  <div className="relative h-64 overflow-hidden md:col-span-2 md:h-auto">

                    <img
                      src={student.image}
                      alt={student.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full min-h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/30 to-transparent" />

                    <div
                      className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold shadow-md"
                      style={{ color: student.accent }}
                    >
                      <Trophy size={15} />
                      {student.mainBadge}
                    </div>

                  </div>

                  {/* Student information */}
                  <div className="relative flex flex-col justify-center p-6 md:col-span-3 md:p-9 lg:p-12">

                    {/* Decorative circle */}
                    <div
                      className="absolute right-0 top-0 h-36 w-36 rounded-full opacity-40 blur-3xl"
                      style={{ backgroundColor: student.accent }}
                    />

                    <div className="relative z-10">

                      {/* Student name */}
                      <div className="mb-4 flex flex-wrap items-center gap-3">

                        <h3 className="text-2xl font-extrabold text-[#172554] md:text-3xl">
                          {student.name}
                        </h3>

                        <span className="rounded-full bg-[#F0F5FF] px-3 py-1.5 text-xs font-semibold text-[#3679D8]">
                          {student.age}
                        </span>

                      </div>

                      {/* Achievement badge */}
                      <div
                        className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
                        style={{
                          backgroundColor: student.bg,
                          color: student.accent,
                        }}
                      >
                        <Star size={14} fill="currentColor" />
                        {student.mainBadge}
                      </div>

                      {/* Description */}
                      <p className="max-w-2xl text-sm leading-8 text-gray-600 md:text-base">
                        {student.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-6 flex flex-wrap gap-2">

                        {student.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-gray-100 bg-[#F7FAFF] px-4 py-2 text-xs font-semibold text-[#475569]"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                      {/* Action buttons */}
                      <div className="mt-8 flex flex-wrap items-center gap-5">

                        <button
                          type="button"
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#1769AA] transition hover:gap-3"
                        >
                          Read Full Story
                          <ArrowRight size={17} />
                        </button>

                        {student.hasVideo && (
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full bg-[#EAF4FF] px-5 py-2.5 text-sm font-bold text-[#1769AA] transition hover:bg-[#1769AA] hover:text-white"
                          >
                            <PlayCircle size={18} />
                            Watch Story
                          </button>
                        )}

                      </div>

                    </div>
                  </div>

                </div>
              </article>
            ))}

          </div>

          {/* View all button */}
          <div className="mt-12 text-center">

            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#1D477E] px-8 py-3.5 text-sm font-bold text-[#1D477E] transition hover:bg-[#1D477E] hover:text-white"
            >
              View All Achievers
              <ArrowRight size={17} />
            </button>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#FFF4EF] px-6 py-14 md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-3xl bg-gradient-to-r from-[#1769AA] to-[#218F83] p-8 text-white md:flex-row md:p-12">

          <div className="max-w-2xl">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7F5ED]">
              Your child's journey starts here
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Every child has the potential to shine.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
              Give your child the opportunity to learn, explore and discover
              their strengths through flexible online education.
            </p>

          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F9C842] px-7 py-4 text-sm font-bold text-[#172554] transition hover:-translate-y-1 hover:bg-white"
          >
            Start a free trial
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </section>
  );
};

export default StudentSpotlight;