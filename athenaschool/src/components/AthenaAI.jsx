import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe2,
  Users,
  Monitor,
  Clock,
  Award,
  HeartHandshake,
  CheckCircle2,
  Baby,
  BookMarked,
  School,
  Laptop,
  MapPin,
  CalendarDays,
  Star,
  ShieldCheck,
} from "lucide-react";

const K12OnlineSchoolPage = () => {

  const benefits = [
    {
      icon: Globe2,
      title: "Learn From Anywhere",
      description:
        "The school moves with your family, so relocating or travelling does not mean changing schools.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BookOpen,
      title: "Same Curriculum",
      description:
        "Students follow the same curriculum and teaching standards wherever they live.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Monitor,
      title: "Live Teaching",
      description:
        "Real teachers, interactive lessons, discussions, group work and regular feedback.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Time-Zone Friendly",
      description:
        "Class batches are arranged by region to fit your family's daily schedule.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "Parents Stay Informed",
      description:
        "Regular progress updates and parent-teacher meetings keep families connected.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Award,
      title: "Recognised Qualifications",
      description:
        "Students work towards Pearson Edexcel qualifications or NIOS examinations.",
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  const programs = [
    {
      icon: Baby,
      stage: "Stage 01",
      title: "Early Years",
      grades: "Nursery & Kindergarten",
      description:
        "Language, number sense and confidence through short, playful sessions.",
      color: "bg-orange-50",
      iconColor: "text-orange-500",
      border: "border-orange-200",
    },
    {
      icon: BookOpen,
      stage: "Stage 02",
      title: "Primary",
      grades: "Grades 1–5",
      description:
        "Strong foundations in reading, writing, mathematics and the wider world.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      border: "border-blue-200",
    },
    {
      icon: BookMarked,
      stage: "Stage 03",
      title: "Middle School",
      grades: "Grades 6–8",
      description:
        "Science, humanities, languages, computing and independent study.",
      color: "bg-teal-50",
      iconColor: "text-teal-600",
      border: "border-teal-200",
    },
    {
      icon: GraduationCap,
      stage: "Stage 04",
      title: "Senior School",
      grades: "Grades 9–12",
      description:
        "Preparation for International GCSE, A Level or NIOS examinations.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      border: "border-purple-200",
    },
  ];

  const countries = [
    "India",
    "UAE",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
    "United Kingdom",
    "Australia",
    "United States",
    "Canada",
  ];

  const pathways = [
    {
      number: "01",
      title: "Pearson Edexcel British Pathway",
      description:
        "A British-style education that leads to Pearson Edexcel International GCSEs in Grades 9–10 and International A Levels in Grades 11–12.",
      stages: [
        "Primary",
        "Lower Secondary",
        "International GCSE",
        "International A Level",
      ],
      suitable:
        "Suitable for families who move between countries, plan for universities abroad or prefer a British curriculum.",
      color: "border-blue-500",
      badge: "bg-blue-100 text-blue-700",
      icon: "bg-blue-100 text-blue-600",
    },
    {
      number: "02",
      title: "Indian Curriculum Pathway",
      description:
        "An Indian curriculum taught online, with Secondary and Senior Secondary examinations through NIOS, the national open schooling board.",
      stages: [
        "Primary",
        "Middle School",
        "Secondary (Class 10)",
        "Senior Secondary (Class 12)",
      ],
      suitable:
        "Suitable for families who want an Indian qualification with the flexibility of learning from home, in India or overseas.",
      color: "border-teal-500",
      badge: "bg-teal-100 text-teal-700",
      icon: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <main className="overflow-hidden bg-white font-sans text-slate-800">

      {/* ================= HERO SECTION ================= */}

      <section className="relative bg-[#F1F6FF]">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12">

          {/* Hero Content */}

          <div className="order-2 lg:order-1">

            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Admissions Open · 2027-28
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#142B59] sm:text-5xl md:text-6xl lg:text-7xl">

              Edulectual

              <span className="block text-blue-600">
                K12 Online School
              </span>

            </h1>

            <h2 className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-slate-700 md:text-2xl">
              Online School for Nursery to Grade 12, Wherever You Live.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Edulectual K12 Online School is a fully online school for
              children from Nursery to Grade 12. Your child learns from
              home with qualified teachers in live online classes,
              follows one clear curriculum and works towards recognised
              qualifications.
            </p>

            {/* Hero Buttons */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/apply-now#free-trial"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Book a Free 2-Week Trial
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/apply-now#apply"
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Apply for 2027-28
              </Link>

            </div>

            {/* Trust Points */}

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Live Online Classes
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Qualified Teachers
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Flexible Learning
              </div>

            </div>

          </div>

          {/* Hero Image */}

          <div className="relative order-1 lg:order-2">

            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-yellow-200 opacity-60 blur-2xl"></div>

            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-teal-200 opacity-60 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=85&w=1200"
                alt="Students learning together"
                className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#142B59]/70 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-9">

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                  Learning Without Borders
                </span>

                <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                  A Better Way to Learn
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-blue-50 md:text-base">
                  Real teachers, interactive classes and a structured
                  school experience from anywhere in the world.
                </p>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-7 left-4 hidden rounded-2xl bg-white p-5 shadow-xl sm:block md:left-[-30px]">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                  <GraduationCap size={28} />
                </div>

                <div>
                  <p className="font-bold text-[#142B59]">
                    Nursery to Grade 12
                  </p>

                  <p className="text-sm text-slate-500">
                    One complete learning journey
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">

          {/* About Image */}

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-3xl bg-yellow-100"></div>

            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=85&w=1000"
              alt="Child learning at home"
              className="relative z-10 h-[400px] w-full rounded-[28px] object-cover shadow-xl md:h-[500px]"
            />

            <div className="absolute -bottom-7 -right-5 z-20 max-w-xs rounded-2xl border-l-4 border-blue-500 bg-white p-6 shadow-xl">

              <div className="mb-3 flex items-center gap-2 text-blue-600">
                <HeartHandshake size={22} />
                <span className="text-sm font-bold uppercase tracking-wide">
                  Our Approach
                </span>
              </div>

              <p className="text-lg font-semibold leading-relaxed text-[#142B59]">
                One school, two pathways, learning without borders.
              </p>

            </div>

          </div>

          {/* About Content */}

          <div>

            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-600">
              About Edulectual
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#142B59] md:text-5xl">

              A School That
              <span className="block text-blue-600">
                Moves With You
              </span>

            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Edulectual K12 is a fully online school for children from
              Nursery to Grade 12. We offer two pathways, the Pearson
              Edexcel British curriculum and the Indian curriculum
              with NIOS examinations.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Families can learn from anywhere while following the
              same curriculum and teaching standards across the
              countries we serve.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-blue-50 p-5">
                <BookOpen className="mb-3 text-blue-600" size={30} />

                <h4 className="font-bold text-[#142B59]">
                  Two Pathways
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  British and Indian curriculum.
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50 p-5">
                <Globe2 className="mb-3 text-teal-600" size={30} />

                <h4 className="font-bold text-[#142B59]">
                  Global Learning
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  Learn from anywhere.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CURRICULUM PATHWAYS ================= */}

      <section className="bg-[#F1F6FF] py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Academic Pathways
            </span>

            <h2 className="mt-6 text-3xl font-extrabold text-[#142B59] md:text-5xl">
              Two Pathways.
              <span className="block text-blue-600">
                One Standard of Teaching.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Choose the educational pathway that best supports
              your child's academic journey and future goals.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {pathways.map((pathway, index) => (

              <div
                key={index}
                className={`rounded-3xl border-t-[6px] ${pathway.color} bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10`}
              >

                <div className="mb-6 flex items-center justify-between">

                  <span className={`rounded-full px-4 py-2 text-sm font-bold ${pathway.badge}`}>
                    Pathway {pathway.number}
                  </span>

                  <div className={`rounded-2xl p-4 ${pathway.icon}`}>
                    {index === 0 ? (
                      <GraduationCap size={30} />
                    ) : (
                      <School size={30} />
                    )}
                  </div>

                </div>

                <h3 className="text-2xl font-extrabold leading-tight text-[#142B59] md:text-3xl">
                  {pathway.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {pathway.description}
                </p>

                <h4 className="mb-5 mt-8 font-bold text-[#142B59]">
                  Learning Stages
                </h4>

                <div className="space-y-3">

                  {pathway.stages.map((stage, stageIndex) => (

                    <div
                      key={stageIndex}
                      className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition hover:bg-blue-50"
                    >

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                        0{stageIndex + 1}
                      </span>

                      <span className="font-semibold text-slate-700">
                        {stage}
                      </span>

                      <CheckCircle2
                        size={19}
                        className="ml-auto shrink-0 text-green-500"
                      />

                    </div>

                  ))}

                </div>

                <div className="mt-8 rounded-xl bg-blue-50 p-5">

                  <p className="text-sm leading-relaxed text-slate-600">
                    {pathway.suitable}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-14 text-center">

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-bold uppercase tracking-wider text-yellow-700">
              Why Edulectual
            </span>

            <h2 className="mt-6 text-3xl font-extrabold text-[#142B59] md:text-5xl">
              Why Families Choose Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              We combine quality education, flexibility and personal
              support to create a meaningful online school experience.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} transition-transform group-hover:scale-110`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#142B59]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* ================= LEARNING JOURNEY ================= */}

      <section className="bg-[#F1F6FF] py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-14 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Learning Journey
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#142B59] md:text-5xl">
              From Nursery to Grade 12
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              A complete educational journey designed to support
              children at every stage of their development.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {programs.map((program, index) => {

              const Icon = program.icon;

              return (

                <div
                  key={index}
                  className={`rounded-2xl border ${program.border} ${program.color} p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
                >

                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {program.stage}
                  </span>

                  <div className="mb-6 mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon size={32} className={program.iconColor} />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#142B59]">
                    {program.title}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-blue-600">
                    {program.grades}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <Link
                    to="/programmes"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-all hover:gap-3"
                  >
                    Explore Programme
                    <ArrowRight size={17} />
                  </Link>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* ================= COUNTRIES WE SERVE ================= */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">

          <div>

            <span className="rounded-full bg-teal-100 px-5 py-2 text-sm font-bold uppercase tracking-wider text-teal-700">
              A Global School
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#142B59] md:text-5xl">
              Wherever You Live,
              <span className="block text-blue-600">
                School Continues.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Families can join from multiple countries. Our curriculum
              remains consistent, and classes are arranged by time zone
              to make online learning fit your day.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-blue-50 p-5">

              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <Globe2 size={28} />
              </div>

              <div>
                <h4 className="font-bold text-[#142B59]">
                  Learning Without Borders
                </h4>

                <p className="mt-1 text-sm text-slate-600">
                  One school experience across multiple countries.
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-[#142B59] p-8 text-white shadow-xl md:p-10">

            <div className="mb-8 flex items-center gap-4">

              <div className="rounded-xl bg-white/10 p-3">
                <MapPin size={30} className="text-yellow-400" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Countries We Serve
                </h3>

                <p className="mt-1 text-sm text-blue-200">
                  Join our global learning community.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {countries.map((country, index) => (

                <div
                  key={index}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >

                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-teal-400"
                  />

                  <span className="text-sm font-medium text-blue-50">
                    {country}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEES AND OFFERS ================= */}

      <section className="bg-[#FFF9E9] py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-12 text-center">

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-bold uppercase tracking-wider text-yellow-700">
              Admissions 2027-28
            </span>

            <h2 className="mt-6 text-3xl font-extrabold text-[#142B59] md:text-5xl">
              Fees & Special Offers
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Explore our fee structure and special offers for
              families joining Edulectual K12.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* Fees Card */}

            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <BookMarked size={30} />
              </div>

              <h3 className="text-3xl font-extrabold text-[#142B59]">
                Tuition & Fees
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Annual tuition depends on your child's grade, pathway
                and country. Indicative fee ranges are published on
                our fees page. Final fees are still to be confirmed.
              </p>

              <Link
                to="/fees"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                View Fees
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Offer Card */}

            <div className="relative overflow-hidden rounded-3xl bg-[#142B59] p-8 text-white shadow-xl md:p-10">

              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500 opacity-20 blur-2xl"></div>

              <div className="relative">

                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-bold text-yellow-300">
                  <Star size={16} />
                  Founding Family Offer
                </span>

                <h3 className="mt-8 text-6xl font-extrabold text-yellow-400 md:text-7xl">
                  25% OFF
                </h3>

                <p className="mt-5 text-lg leading-8 text-blue-100">
                  Founding families who enrol by 31 March 2027 receive
                  25% off year-one tuition with fees locked for three years.
                </p>

                <div className="mt-8 border-t border-white/20 pt-7">

                  <p className="font-semibold">
                    Discounts can be combined up to a maximum of 35%.
                  </p>

                  <p className="mt-4 text-sm text-blue-200">
                    Every family can start with a free 2-week trial class.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="relative overflow-hidden bg-[#142B59] py-24 md:py-32">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-400 opacity-20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-yellow-300">
            <CalendarDays size={17} />
            Admissions Open · 2027-28
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">

            Start Your Child's
            <span className="block text-yellow-400">
              Learning Journey.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
            The best way to know whether online school suits your child
            is to try it. Meet our teachers and experience a real lesson.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/apply-now#free-trial"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-5 font-bold text-[#142B59] shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Book a Free 2-Week Trial
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/apply-now#apply"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white/70 px-8 py-5 font-bold text-white transition hover:bg-white hover:text-[#142B59]"
            >
              Apply for 2027-28
            </Link>

          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm text-blue-200">

            <ShieldCheck size={19} className="text-teal-400" />

            During our launch, the ₹999 registration fee is waived.

          </div>

        </div>

      </section>

    </main>
  );
};

export default K12OnlineSchoolPage;