import React from "react";
import {
  Target,
  Eye,
  BookOpen,
  Users,
  Heart,
  ShieldCheck,
  Handshake,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import alesiaImage from "../assets/optimized/alesia-kazantceva-VWcPlbHglYc-unsplash.webp";

const PhilosophySection = () => {

  // Mission and Vision
  const principles = [
    {
      icon: Target,
      title: "Our mission",
      description:
        "To give every child, wherever they live, a complete and well-taught education, with a recognised British or Indian qualification at the end of it.",
      color: "bg-[#1768C5]",
      border: "border-t-[#1768C5]",
    },
    {
      icon: Eye,
      title: "Our vision",
      description:
        "A world where a family's location, job or circumstances never decide the quality of education.",
      color: "bg-[#138779]",
      border: "border-t-[#138779]",
    },
  ];

  // Our Values
  const values = [
    {
      icon: BookOpen,
      title: "Learning first",
      description:
        "Every decision starts with what helps children learn. Technology, timetables and policies all serve that aim.",
      color: "bg-[#FFF0E8]",
      iconColor: "bg-[#E86B32]",
    },
    {
      icon: Users,
      title: "Real teachers, real relationships",
      description:
        "Children learn best from adults who know them. Our classes are live, and teachers follow each learner's progress.",
      color: "bg-[#F2EDFF]",
      iconColor: "bg-[#7652D5]",
    },
    {
      icon: Heart,
      title: "Honesty",
      description:
        "We publish our curriculum, our fees and our policies clearly, and we only make claims we can back up.",
      color: "bg-[#FCECF5]",
      iconColor: "bg-[#D94B91]",
    },
    {
      icon: Users,
      title: "Inclusion",
      description:
        "Different learners, different ways and different needs. We adapt support for children who need it and stretch for those who are ready.",
      color: "bg-[#EDF3FF]",
      iconColor: "bg-[#2765C5]",
    },
    {
      icon: Handshake,
      title: "Partnership with parents",
      description:
        "Parents should always know how their child is doing. We share progress, listen to concerns and answer questions quickly.",
      color: "bg-[#EAF9F5]",
      iconColor: "bg-[#168B7B]",
    },
    {
      icon: ShieldCheck,
      title: "Safety and wellbeing",
      description:
        "A safe, positive learning environment comes first, and children should feel supported before anything else.",
      color: "bg-[#FFF9DF]",
      iconColor: "bg-[#E4AC16]",
    },
  ];

  // How we live our values
  const commitments = [
    "Same curriculum and standards in every country we serve.",
    "Fees set out openly on our fees page.",
    "A free 2-week trial, so families can judge our teaching for themselves.",
    "Regular parent feedback, reviewed every term.",
  ];

  // Explore more links
  const exploreLinks = [
    "About Edulectual K12",
    "Our leadership team",
    "Learning culture in our classes",
    "Inclusive and special education",
  ];

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}

      <div className="relative overflow-hidden bg-gradient-to-r from-[#F0F7FF] via-[#FFF7F5] to-[#FCECF2] py-16 md:py-20">

        {/* Decorative Background Elements */}
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#BDECE5]/50 blur-2xl" />

        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FFE5B9]/60 blur-3xl" />

        <div className="absolute right-[35%] top-10 h-24 w-24 rounded-full border border-dashed border-blue-200 opacity-50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">

          {/* LEFT CONTENT */}

          <div className="relative z-10">

            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#168B7B] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#168B7B]" />
              Our mission, vision and values
            </span>

            <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#10234F] sm:text-4xl md:text-5xl">
              Our Mission, Vision and Online School Values
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              A school's values only matter if you can see them in its
              choices. This page sets out what Edulectual K12 Online
              School is trying to do and the principles we use when we
              make decisions about teaching, timetables, fees and support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C842] px-6 py-3 text-sm font-bold text-[#10234F] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#EFBF25]"
              >
                Book a free 2-week trial
                <ArrowRight size={17} />
              </a>

              <a
                href="/admissions"
                className="rounded-full border-2 border-[#1768C5] bg-white px-6 py-3 text-sm font-bold text-[#1768C5] transition-all duration-300 hover:bg-[#1768C5] hover:text-white"
              >
                Apply for 2027-28
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative mx-auto w-full max-w-[530px]">

            <div className="absolute -inset-3 rounded-[45%] bg-gradient-to-r from-[#1768C5] via-[#7652D5] to-[#E6A5D5] opacity-90" />

            <div className="relative h-[280px] overflow-hidden rounded-[45%] border-[8px] border-white shadow-2xl sm:h-[350px]">

              <img
                src={alesiaImage}
                alt="Children learning together in an online school environment"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />

            </div>

            {/* Floating Badge */}

            <div className="absolute -left-5 top-10 rounded-xl bg-white px-4 py-3 shadow-lg md:-left-10">

              <p className="text-xs font-bold text-[#10234F]">
                Live online classes
              </p>

              <p className="mt-1 text-[10px] text-slate-500">
                Nursery to Grade 12
              </p>

            </div>

            <div className="absolute -bottom-5 right-0 rounded-xl bg-white px-5 py-3 shadow-lg">

              <p className="text-xs font-bold text-[#10234F]">
                ★ Admissions open
              </p>

              <p className="text-[10px] text-slate-500">
                Academic Year 2027-28
              </p>

            </div>

          </div>

        </div>
      </div>


      {/* ================= MISSION & VISION ================= */}

      <div className="bg-[#EFFAF7] px-6 py-16 md:px-10 md:py-20">

        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">

          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl border-t-4 ${item.border} bg-white p-7 shadow-[0_8px_30px_rgba(16,35,79,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9`}
              >

                <div className="flex items-start gap-5">

                  <div className={`${item.color} flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm`}>
                    <Icon size={23} />
                  </div>

                  <div>

                    <h2 className="text-xl font-extrabold text-[#10234F] md:text-2xl">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* ================= OUR VALUES ================= */}

      <div className="bg-[#FFF5EF] px-6 py-16 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <span className="text-xs font-bold uppercase tracking-widest text-[#168B7B]">
              What guides us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#10234F] md:text-4xl">
              Our Values
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              The principles behind every learning experience,
              relationship and decision at Edulectual K12 Online School.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className={`${value.color} group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                >

                  <div className={`${value.iconColor} mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#10234F]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>


      {/* ================= HOW WE LIVE OUR VALUES ================= */}

      <div className="bg-white px-6 py-16 md:px-10">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-8 text-2xl font-extrabold text-[#10234F] md:text-3xl">
            How we live our values
          </h2>

          <div className="space-y-3">

            {commitments.map((commitment, index) => (

              <div
                key={index}
                className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_3px_15px_rgba(16,35,79,0.08)] transition-all duration-300 hover:translate-x-1 hover:shadow-md"
              >

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1768C5] text-white">

                  <CheckCircle2 size={17} />

                </div>

                <p className="text-sm font-medium leading-6 text-slate-700 md:text-base">
                  {commitment}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= WHEN WE GET IT WRONG ================= */}

      <div className="bg-[#FFFBEA] px-6 py-14 md:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="flex flex-col items-start gap-5 rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(16,35,79,0.07)] md:flex-row md:items-center md:px-10 md:py-8">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1768C5] text-white">

              <MessageCircle size={26} />

            </div>

            <div>

              <h2 className="text-xl font-extrabold text-[#10234F] md:text-2xl">
                When we get it wrong
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                No school is perfect. If we fall short of these values,
                we want to hear about it. Tell your child's teacher or
                contact school leadership, and we will respond honestly
                and explain what we will change.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= EXPLORE MORE ================= */}

      <div className="bg-[#FFF5EF] px-6 py-12 md:px-10">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-6 text-xl font-extrabold text-[#10234F] md:text-2xl">
            Explore more
          </h2>

          <div className="flex flex-wrap gap-3">

            {exploreLinks.map((link, index) => (

              <a
                key={index}
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#10234F] shadow-sm transition-all duration-300 hover:bg-[#1768C5] hover:text-white hover:shadow-md md:text-sm"
              >

                {link}

                <ArrowRight size={14} />

              </a>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default React.memo(PhilosophySection);
