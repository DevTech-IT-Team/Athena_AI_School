import React, { useState, useRef, useEffect } from "react";
import {
  Globe,
  BookOpen,
  BrainCircuit,
  Wrench,
  ChevronRight,
  Star,
  Clock,
  Video,
  Tag,
  Users,
  Lightbulb,
  Music,
  Shield,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import robotImage from "/assets/images/cartoon-ai-robot-scene (3).webp";

const LazyImage = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "100px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}

      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse" />
      )}
    </div>
  );
};

const StageCard = ({ image, title, description, links, accent }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          className="h-full w-full"
        />

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${accent}`}
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-[#14245B] mb-3">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-600 mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <a
              href="#"
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-medium hover:bg-blue-100 transition-colors"
            >
              {link}
              <ArrowRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const EnrichmentCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className={`h-2 ${color}`} />

      <div className="p-5">
        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
          <Icon size={22} />
        </div>

        <h3 className="font-bold text-[#14245B] mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon size={22} />
      </div>

      <h3 className="text-lg font-bold text-[#14245B] mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const OurPrograms = () => {
  const stages = [
    {
      title: "Early Years (Nursery to Kindergarten)",
      description:
        "Short, interactive sessions for young learners, guided by stories, movement, play and confidence-building. Early Years and Pre-Primary.",
      image: "/assets/images/early-years.webp",
      links: ["Early Years", "Pre-Primary"],
      accent: "bg-blue-500",
    },
    {
      title: "Primary (Grades 1–5)",
      description:
        "Reading, writing, maths, science and the wider world, with steady practice and teacher feedback. British Primary and Indian Primary.",
      image: "/assets/images/primary.webp",
      links: ["British Primary", "Indian Primary"],
      accent: "bg-teal-500",
    },
    {
      title: "Middle School / Lower Secondary (Grades 6–8)",
      description:
        "A broader timetable with separate sciences, humanities, languages and computing, plus more independent study.",
      image: "/assets/images/middle-school.webp",
      links: ["British Lower Secondary", "Indian Middle School"],
      accent: "bg-blue-500",
    },
    {
      title: "Senior School (Grades 9–12)",
      description:
        "Qualifications-first preparation: International GCSE in Grades 9–10 and International A Level in Grades 11–12, or NIOS.",
      image: "/assets/images/senior-school.webp",
      links: ["IGCSE", "A Levels", "NIOS Senior School"],
      accent: "bg-purple-500",
    },
  ];

  const enrichment = [
    {
      icon: BrainCircuit,
      title: "Computational Thinking",
      description: "Problem-solving and coding concepts.",
      color: "bg-blue-500",
    },
    {
      icon: Globe,
      title: "Languages",
      description: "Additional language choices alongside English.",
      color: "bg-orange-500",
    },
    {
      icon: Music,
      title: "Music and Arts",
      description: "Creative classes with partner academies.",
      color: "bg-purple-500",
    },
    {
      icon: Wrench,
      title: "Learning Garage",
      description: "Hands-on robotics and design workshops.",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="bg-white font-sans text-slate-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-[#F2F5FF] overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFE7C8] rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9F0E9] rounded-full opacity-50 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative z-10">

          {/* Breadcrumb */}
          <div className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <span>Home</span>
            <ChevronRight size={12} />
            <span>Programmes</span>
            <ChevronRight size={12} />
            <span className="text-blue-700 font-medium">Programmes</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-teal-700 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
                <Star size={14} />
                Programmes
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#14245B] leading-tight mb-6">
                Online School
                <br />
                Programmes from
                <br />
                Nursery to Grade 12
              </h1>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                This page brings together every programme at Edulectual K12
                Online School. Start with your child's age or grade, then
                choose the pathway that fits your plans: the Pearson Edexcel
                British pathway or the Indian curriculum pathway with NIOS.
                Both are taught live online and follow the same curriculum
                in every country.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FFC928] hover:bg-yellow-400 text-[#14245B] px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2">
                  Book a free 2-week trial
                  <ArrowRight size={16} />
                </button>

                <button className="bg-white border border-blue-300 text-[#14245B] px-7 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-all">
                  Apply for 2027-28
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center items-center">

              {/* Rings */}
              <div className="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-full border-[14px] border-orange-400" />

              <div className="absolute w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-full border-[10px] border-blue-500/60" />

              <div className="relative w-[280px] h-[280px] md:w-[390px] md:h-[390px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                <LazyImage
                  src={robotImage}
                  alt="Children learning online"
                  className="w-full h-full"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-8 left-0 md:left-8 z-20 bg-white rounded-full px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <Video size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#14245B]">
                    Live online classes
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Nursery to Grade 12
                  </p>
                </div>
              </div>

              <div className="absolute bottom-8 right-0 md:right-8 z-20 bg-white rounded-full px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <Star size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#14245B]">
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
      </section>

      {/* PROGRAMMES BY STAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-teal-600">
              Nursery to Grade 12
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#14245B] mt-3">
              Programmes by stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((stage, index) => (
              <StageCard key={index} {...stage} />
            ))}
          </div>
        </div>
      </section>

      {/* ENRICHMENT PROGRAMMES */}
      <section className="py-20 bg-[#FFFBE8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-teal-600">
              Beyond the timetable
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#14245B] mt-3">
              Enrichment programmes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrichment.map((item, index) => (
              <EnrichmentCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* INFORMATION CARDS */}
      <section className="py-20 bg-[#ECFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <InfoCard
              icon={Globe}
              color="bg-blue-100 text-blue-700"
              title="How to choose"
              description="If you expect to move countries or are aiming for universities abroad, the British pathway may be a simpler choice. Your child is likely to continue in the Indian system, the NIOS pathway keeps tracks open. Our admissions team can help you decide on a short call."
            />

            <InfoCard
              icon={Users}
              color="bg-teal-100 text-teal-700"
              title="Same curriculum in every country"
              description="Each programme follows the same curriculum whether your family lives in India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK, US, Canada or Australia. Classes are arranged in batches by time zone, so lessons fit your day and a more abroad does not mean a change of school."
            />

          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <h2 className="text-3xl md:text-4xl font-bold text-[#14245B] mb-8">
            Fees by programme
          </h2>

          <div className="bg-[#FFF6D8] border border-yellow-200 rounded-2xl p-6 md:p-8 flex gap-5 items-start">

            <div className="flex gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                <Tag size={20} />
              </div>

              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                <BookOpen size={20} />
              </div>
            </div>

            <div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Annual tuition depends on grade band, pathway and country.
                2027-28 fees for each band (Nursery to Grade 5,
                Grades 6–8, Grades 9–10 and Grades 11–12) are listed
                on our fees page. The starting point for Indian
                families is shown in INR and international families
                in USD. Founding-family early bird savings,
                sibling referral and scholarship offers may apply
                to every programme, and scholarships of up to 50%
                are available.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-4 font-bold text-blue-700 hover:text-blue-900"
              >
                See all fees
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* TRY ANY PROGRAMME */}
      <section className="py-20 bg-[#FFFBE8]">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">

            <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#14245B] mb-3">
                Try any programme first
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Every programme offers a free 2-week trial or demo
                class, so your child can meet the teachers and try
                a real lesson before you apply.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-16 bg-[#FFF4EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <h3 className="text-xl font-bold text-[#14245B] mb-6">
            Explore more
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Early Years programme",
              "British Primary",
              "Online Middle School",
              "International GCSE online",
              "NIOS Senior School",
              "British vs Indian pathway",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-5 py-3 bg-white rounded-full text-sm font-medium text-[#14245B] shadow-sm hover:shadow-md hover:bg-blue-50 transition-all"
              >
                {item}
              </a>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default OurPrograms;