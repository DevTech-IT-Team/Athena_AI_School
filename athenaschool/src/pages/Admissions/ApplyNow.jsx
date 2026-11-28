
import React from "react";
import {
  FileText,
  Users,
  Clock,
  CheckCircle,
  Package,
  Download,
  ArrowRight,
  GraduationCap,
  Star,
  Menu,
  Globe,
  Phone,
  Mail,
  MapPin,
  Youtube,
  Linkedin,
  BookOpen,
  Laptop,
} from "lucide-react";

const programmeLinks = [
  "Early Years (Nursery–KG)",
  "Pre-Primary (Nursery, LKG, UKG)",
  "British Primary (Grades 1–5)",
  "Indian Primary (Grades 1–5)",
  "British Lower Secondary (Grades 6–8)",
  "Indian Middle School (Grades 6–8)",
  "IGCSE (Grades 9–10)",
  "A Levels (Grades 11–12)",
  "NIOS Senior School (Grades 9–12)",
];

const pathwayLinks = [
  "British vs Indian pathway",
  "Pearson Edexcel",
  "Edexcel International GCSE",
  "Edexcel International A Level",
  "NCF and the Indian pathway",
];

const admissionLinks = [
  "How to apply",
  "Who should register",
  "Class timings",
  "What you need at home",
  "Refer a family",
];

const aboutLinks = [
  "About us",
  "Our leaders",
  "Our teachers",
  "Mission, vision and values",
  "Why choose us",
  "How online school works",
  "Accreditation",
];

const resourceLinks = [
  "FAQs",
  "Help and support",
  "Prospectus and downloads",
  "Blog",
];

const dates = [
  {
    date: "31 March 2027",
    title: "Founding-Family Deadline",
    description:
      "Get 25% off year-one tuition, fees locked for 3 years and founding-family benefits. Available for the first 200 students.",
    color: "bg-[#1660D9]",
  },
  {
    date: "31 May 2027",
    title: "India and Gulf Early-Bird Deadline",
    description:
      "Families applying from India and the Gulf can receive 15% off tuition fees by applying before the early-bird deadline.",
    color: "bg-[#0D7F7A]",
  },
  {
    date: "31 July 2027",
    title: "International Early-Bird Deadline",
    description:
      "Families from the UK, US, Canada and Australia can receive 15% off tuition fees before the early-bird deadline.",
    color: "bg-[#7C5CE0]",
  },
  {
    date: "During Launch",
    title: "Free Trial and Registration",
    description:
      "Enjoy a free 2-week trial class and a waived ₹999 / USD 12 registration fee during our launch period.",
    color: "bg-[#E8590C]",
  },
];

const steps = [
  {
    number: 1,
    title: "Book a Free Trial or Call",
    description:
      "Book a free 2-week trial or demo class so your child can experience live lessons, or schedule a short call with our admissions team to discuss the pathways.",
    icon: Clock,
    color: "#1660D9",
  },
  {
    number: 2,
    title: "Complete the Application Form",
    description:
      "Fill in the online application form with your child's details, current grade and preferred pathway. There is no registration fee during our launch.",
    icon: FileText,
    color: "#0D7F7A",
  },
  {
    number: 3,
    title: "Placement Check",
    description:
      "We use a short online assessment to help place your child in the right class according to their learning level. Placement-test requirements are subject to confirmation.",
    icon: CheckCircle,
    color: "#F5B400",
  },
  {
    number: 4,
    title: "Offer and Payment",
    description:
      "We confirm your child's place by email. You can then pay the tuition fees, with any applicable discounts already applied.",
    icon: Package,
    color: "#E8590C",
  },
  {
    number: 5,
    title: "Get Set Up",
    description:
      "Receive your login details for the Edulectual K12 learning platform and your timetable according to your region.",
    icon: Laptop,
    color: "#7C5CE0",
  },
  {
    number: 6,
    title: "First Day of Class",
    description:
      "Your child joins their online class, meets their teacher and begins their learning journey with Edulectual K12 Online School.",
    icon: GraduationCap,
    color: "#B4237A",
  },
];

const documents = [
  "Child's birth certificate.",
  "Photo ID for the parent or guardian and the child (for example Aadhaar, Emirates ID or passport).",
  "The most recent school report, if your child has attended school.",
  "A transfer or leaving certificate, if your child is moving from another school.",
];

const faqs = [
  {
    question: "When do admissions for 2027-28 close?",
    answer:
      "Founding-family places close on 31 March 2027. Early-bird pricing ends on 31 May 2027 for India and the Gulf, and 31 July 2027 for the UK, US, Canada and Australia. The final admission closing date is subject to confirmation.",
  },
  {
    question: "Can we apply mid-year?",
    answer:
      "Mid-year admission availability and eligibility are subject to confirmation from the admissions team.",
  },
  {
    question: "Is there an application fee?",
    answer:
      "No. The ₹999 / USD 12 registration fee is waived during our launch period.",
  },
  {
    question: "Can we apply from outside India?",
    answer:
      "Yes. We accept families from India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US and Canada.",
  },
];

const QuickInfo = ({ icon: Icon, title, description }) => (
  <div className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
      <Icon size={28} />
    </div>
    <h3 className="mb-2 text-lg font-bold text-[#14215B]">{title}</h3>
    <p className="text-sm leading-7 text-slate-600">{description}</p>
  </div>
);

const TimelineItem = ({ item, index }) => (
  <div className="relative flex gap-5 md:gap-7">
    {index !== dates.length - 1 && (
      <div className="absolute left-[23px] top-12 h-[calc(100%+16px)] w-0.5 bg-blue-100" />
    )}

    <div
      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm ${item.color}`}
    >
      <Star size={20} />
    </div>

    <div className="pb-8">
      <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
        {item.date}
      </span>
      <h3 className="mb-2 text-xl font-bold text-[#14215B]">
        {item.title}
      </h3>
      <p className="leading-7 text-slate-600">{item.description}</p>
    </div>
  </div>
);

const StepCard = ({ step }) => {
  const Icon = step.icon;

  return (
    <div className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
        style={{ backgroundColor: step.color }}
      >
        <Icon size={26} />
      </div>

      <div
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 font-bold text-slate-500"
      >
        {step.number}
      </div>

      <h3 className="mb-3 text-xl font-bold text-[#14215B]">
        {step.title}
      </h3>

      <p className="text-sm leading-7 text-slate-600">
        {step.description}
      </p>
    </div>
  );
};

const ApplyNow = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-700">

      {/* Announcement Bar */}
      <div className="bg-[#14215B] px-4 py-3 text-center text-sm font-semibold text-white">
        Admissions for 2027-28 are open. Founding families save 25% when they
        enrol by 31 March 2027.
        <a
          href="/fees"
          className="ml-2 inline-block underline underline-offset-4 transition hover:text-blue-200"
        >
          See fees and offers →
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">

          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <GraduationCap size={26} />
            </div>
            <div>
              <span className="block text-lg font-bold text-[#14215B]">
                Edulectual K12
              </span>
              <span className="block text-[10px] font-bold tracking-[3px] text-blue-600">
                ONLINE SCHOOL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <div className="group relative">
              <a href="/programs" className="font-semibold text-slate-700 hover:text-blue-600">
                Programmes
              </a>
              <div className="invisible absolute left-0 top-full mt-4 w-80 rounded-2xl border border-blue-100 bg-white p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {programmeLinks.map((item) => (
                  <a
                    key={item}
                    href="/programs"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="group relative">
              <a href="/pathway" className="font-semibold text-slate-700 hover:text-blue-600">
                Pathways
              </a>
              <div className="invisible absolute left-0 top-full mt-4 w-72 rounded-2xl border border-blue-100 bg-white p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {pathwayLinks.map((item) => (
                  <a
                    key={item}
                    href="/pathway"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a href="/fees" className="font-semibold hover:text-blue-600">
              Fees
            </a>

            <div className="group relative">
              <a href="/apply-now" className="font-semibold text-blue-600">
                Admissions
              </a>
              <div className="invisible absolute left-0 top-full mt-4 w-64 rounded-2xl border border-blue-100 bg-white p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {admissionLinks.map((item) => (
                  <a
                    key={item}
                    href="/apply-now"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="group relative">
              <a href="/about" className="font-semibold hover:text-blue-600">
                About
              </a>
              <div className="invisible absolute left-0 top-full mt-4 w-64 rounded-2xl border border-blue-100 bg-white p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {aboutLinks.map((item) => (
                  <a
                    key={item}
                    href="/about"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="group relative">
              <a href="/resources" className="font-semibold hover:text-blue-600">
                Resources
              </a>
              <div className="invisible absolute left-0 top-full mt-4 w-60 rounded-2xl border border-blue-100 bg-white p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {resourceLinks.map((item) => (
                  <a
                    key={item}
                    href="/resources"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a href="/contact" className="font-semibold hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="#application"
              className="rounded-full border border-blue-200 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Apply 2027-28
            </a>
            <a
              href="#free-trial"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Book Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              document.getElementById("mobile-menu")?.classList.toggle("hidden");
            }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 lg:hidden"
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden border-t border-blue-100 bg-white px-4 pb-5 lg:hidden">
          <div className="flex flex-col gap-3 pt-4">
            <a href="/" className="rounded-lg px-3 py-2 hover:bg-blue-50">Home</a>
            <a href="/programs" className="rounded-lg px-3 py-2 hover:bg-blue-50">Programmes</a>
            <a href="/pathway" className="rounded-lg px-3 py-2 hover:bg-blue-50">Pathways</a>
            <a href="/fees" className="rounded-lg px-3 py-2 hover:bg-blue-50">Fees</a>
            <a href="/apply-now" className="rounded-lg px-3 py-2 font-bold text-blue-600 hover:bg-blue-50">Admissions</a>
            <a href="/about" className="rounded-lg px-3 py-2 hover:bg-blue-50">About</a>
            <a href="/resources" className="rounded-lg px-3 py-2 hover:bg-blue-50">Resources</a>
            <a href="/contact" className="rounded-lg px-3 py-2 hover:bg-blue-50">Contact</a>

            <a
              href="#free-trial"
              className="mt-2 rounded-full bg-blue-600 px-5 py-3 text-center font-bold text-white"
            >
              Book a Free 2-Week Trial
            </a>

            <a
              href="#application"
              className="rounded-full border border-blue-200 px-5 py-3 text-center font-bold text-blue-700"
            >
              Apply for 2027-28
            </a>
          </div>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-white to-[#E9F3FF] py-16 md:py-24">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 md:px-8">

            {/* Breadcrumb */}
            <div className="mb-8 text-sm text-slate-500">
              <a href="/" className="hover:text-blue-600">Home</a>
              <span className="mx-2">›</span>
              <span>Admissions & Fees</span>
              <span className="mx-2">›</span>
              <span className="font-semibold text-blue-600">How to Apply</span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Hero Content */}
              <div>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  <Star size={16} fill="currentColor" />
                  How to Apply
                </span>

                <h1 className="text-4xl font-bold leading-tight text-[#14215B] md:text-5xl lg:text-6xl">
                  Online School Admission{" "}
                  <span className="text-blue-600">2027-28</span>: How to Apply
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Admissions for the 2027-28 academic year at Edulectual K12
                  Online School are open now. You can apply from India, the UAE,
                  Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US or
                  Canada, and the process is the same everywhere. It takes a few
                  steps, and most of it happens online.
                </p>

                <p className="mt-3 text-sm font-semibold text-orange-600">
                  [PLACEHOLDER: Confirm which grades are open for 2027-28.]
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#application"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                  >
                    Start Your Application
                    <ArrowRight size={20} />
                  </a>

                  <a
                    href="#free-trial"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-200 bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
                  >
                    <Download size={20} />
                    Book a Free 2-Week Trial
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="text-sm font-bold text-slate-700">
                      Online admissions
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <Globe size={20} className="text-blue-600" />
                    <span className="text-sm font-bold text-slate-700">
                      Global families
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute inset-0 rotate-3 rounded-[3rem] bg-blue-200" />

                <div className="relative overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl">
                  <img
                    src="/assets/images/parent-help.jpg"
                    alt="Mother helping her daughter with homework"
                    className="h-[420px] w-full object-cover md:h-[520px]"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl md:-left-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
                    <span className="relative h-3 w-3 rounded-full bg-red-500">
                      <span className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-75" />
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[#14215B]">
                      Live Online Classes
                    </p>
                    <p className="text-sm text-slate-500">
                      Nursery to Grade 12
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl md:-right-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <Star size={25} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-bold text-[#14215B]">
                      Admissions Open
                    </p>
                    <p className="text-sm text-slate-500">2027-28</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* QUICK INFO */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">

            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                Admission Overview
              </span>

              <h2 className="text-3xl font-bold text-[#14215B] md:text-4xl">
                A Simple Process for Every Family
              </h2>

              <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
                Apply from wherever you are. Our online admissions process is
                designed to make your child's transition into online schooling
                straightforward.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <QuickInfo
                icon={Users}
                title="Global Admissions"
                description="Apply from India, the Gulf, the UK, Australia, the US or Canada."
              />

              <QuickInfo
                icon={Clock}
                title="Key Admission Dates"
                description="Early-bird and founding-family offers available for 2027-28."
              />

              <QuickInfo
                icon={CheckCircle}
                title="Free Trial"
                description="Experience live online classes with a free 2-week trial."
              />

              <QuickInfo
                icon={Package}
                title="Easy Application"
                description="A simple online process with guidance from our admissions team."
              />
            </div>

            {/* Tagline */}
            <div className="mt-12 text-center">
              <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-4 text-white shadow-lg md:px-10">
                <p className="text-lg font-bold md:text-xl">
                  Your Child's Learning Journey Starts Here!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY DATES */}
        <section className="bg-[#FFF9F2] py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">

            <div>
              <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                Key Dates
              </span>

              <h2 className="text-3xl font-bold text-[#14215B] md:text-4xl">
                Key Dates and Offers
              </h2>

              <p className="mb-10 mt-4 leading-7 text-slate-600">
                Take advantage of our special launch offers and early-bird
                admission benefits for the 2027-28 academic year.
              </p>

              <div>
                {dates.map((item, index) => (
                  <TimelineItem key={item.date} item={item} index={index} />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-yellow-200" />

              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
                <img
                  src="/assets/images/family-india.jpg"
                  alt="Family at home with a laptop and drawing activities"
                  loading="lazy"
                  className="h-[450px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-5 rounded-2xl bg-white p-5 shadow-xl md:left-10">
                <p className="text-sm font-bold text-slate-500">
                  Academic Year
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  2027-28
                </p>
                <p className="text-sm font-semibold text-green-600">
                  Admissions Open
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ADMISSION STEPS */}
        <section id="free-trial" className="bg-[#EFF6FF] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">

            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-600">
                6 Simple Steps
              </span>

              <h2 className="text-3xl font-bold text-[#14215B] md:text-4xl">
                Step-by-Step Admission Process
              </h2>

              <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
                Our admission process is designed to make joining Edulectual K12
                Online School simple, convenient and seamless for families
                everywhere.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => (
                <StepCard key={step.number} step={step} />
              ))}
            </div>

          </div>
        </section>

        {/* DOCUMENTS + APPLICATION FORM */}
        <section id="apply" className="bg-[#FFF9F2] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-8 lg:grid-cols-2">

              {/* Documents */}
              <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
                <span className="mb-3 inline-block rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-600">
                  Admission Checklist
                </span>

                <h2 className="mb-4 text-3xl font-bold text-[#14215B]">
                  Documents You Will Need
                </h2>

                <p className="mb-8 leading-7 text-slate-600">
                  Please prepare the following documents to complete your child's
                  admission process.
                </p>

                <ul className="space-y-5">
                  {documents.map((document, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                        <CheckCircle size={20} />
                      </div>

                      <span className="leading-7 text-slate-700">
                        {document}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-5">
                  <p className="font-bold text-orange-800">
                    Application Form
                  </p>
                  <p className="mt-2 text-sm leading-7 text-orange-700">
                    [PLACEHOLDER: Link the real online application form.]
                  </p>
                </div>
              </div>

              {/* Enquiry Form */}
              <div id="application" className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
                <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                  Enquiry Form
                </span>

                <h2 className="text-3xl font-bold text-[#14215B]">
                  Talk to Our Admissions Team
                </h2>

                <p className="mb-8 mt-3 leading-7 text-slate-600">
                  Tell us a little about your child and we will get back to you.
                  <span className="block mt-2 text-sm font-semibold text-orange-600">
                    [PLACEHOLDER: Confirm enquiry response time.]
                  </span>
                </p>

                <form
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Enquiry form UI is ready. Connect your backend or form service to submit enquiries."
                    );
                  }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Parent or Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Phone with Country Code *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Country *
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="" disabled>Select Country</option>
                      <option>India</option>
                      <option>UAE</option>
                      <option>Qatar</option>
                      <option>Oman</option>
                      <option>Kuwait</option>
                      <option>Bahrain</option>
                      <option>UK</option>
                      <option>Australia</option>
                      <option>US</option>
                      <option>Canada</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Child's Current Grade *
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="" disabled>Select Grade</option>
                      <option>Nursery</option>
                      <option>LKG / KG1</option>
                      <option>UKG / KG2</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1}>Grade {i + 1}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Preferred Pathway *
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="" disabled>Select Pathway</option>
                      <option>Pearson Edexcel British</option>
                      <option>Indian Curriculum (NIOS)</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us more about your child's educational needs..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 accent-blue-600"
                      />
                      <span>
                        I agree to be contacted about admissions.
                        <span className="block text-orange-600">
                          [PLACEHOLDER: Link privacy policy.]
                        </span>
                      </span>
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                    >
                      Send Enquiry
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2">

            {/* FAQ Intro */}
            <div>
              <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                FAQ
              </span>

              <h2 className="text-3xl font-bold text-[#14215B] md:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Still deciding? Explore more information about fees, timings
                and the requirements for online learning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  ["Online school fees for 2027-28", "/fees"],
                  ["Device and internet requirements", "/essential-requirements"],
                  ["Class timings by region", "/batch-timings"],
                  ["Who our school suits", "/who-should-register"],
                  ["Talk to admissions", "/contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-full border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    {label} →
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Accordions */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <summary className="cursor-pointer list-none pr-6 text-lg font-bold text-[#14215B]">
                    <span className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                      {index + 1}
                    </span>
                    {faq.question}
                  </summary>

                  <p className="mt-5 border-t border-blue-50 pt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="pb-20 pt-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#14215B] to-[#1E40AF] p-8 text-white md:p-14">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl" />

              <div className="relative grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                    <Star size={16} fill="currentColor" />
                    Admissions Open 2027-28
                  </span>

                  <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                    Admissions for 2027-28 Are Open
                  </h2>

                  <p className="mt-5 leading-8 text-blue-100">
                    Try a free 2-week trial class with our teachers, then apply
                    when you are ready. The ₹999 / USD 12 registration fee is
                    waived during our launch.
                  </p>

                  <p className="mt-4 font-semibold text-yellow-200">
                    Annual fees from ₹71,000 (India) / USD 2,200 (international
                    families).
                  </p>

                  <a
                    href="/fees"
                    className="mt-3 inline-block font-bold text-white underline underline-offset-4"
                  >
                    See full fees →
                  </a>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#free-trial"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-300 px-7 py-4 font-bold text-[#14215B] transition hover:bg-blue-200"
                    >
                      Book a Free 2-Week Trial
                      <ArrowRight size={20} />
                    </a>

                    <a
                      href="#application"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
                    >
                      Apply for 2027-28
                      <FileText size={20} />
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-2xl">
                  <img
                    src="/assets/images/girls-wave.jpg"
                    alt="Two girls waving to their class on a laptop"
                    loading="lazy"
                    className="h-[350px] w-full object-cover md:h-[420px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#14215B] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

            {/* School */}
            <div className="lg:col-span-1">
              <a href="/" className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400 text-white">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <span className="block font-bold">Edulectual K12</span>
                  <span className="text-[10px] tracking-[2px] text-blue-200">
                    ONLINE SCHOOL
                  </span>
                </div>
              </a>

              <p className="text-sm leading-7 text-blue-100">
                Edulectual K12 Online School is a fully online school for Nursery
                to Grade 12, teaching the Pearson Edexcel British pathway and
                the Indian curriculum with NIOS exams to families in India, the
                Gulf, the UK, North America and Australia.
              </p>
            </div>

            {/* Programmes */}
            <div>
              <h3 className="mb-5 text-lg font-bold">Programmes</h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li><a href="/early-years" className="hover:text-white">Early Years</a></li>
                <li><a href="/british-primary" className="hover:text-white">British Primary</a></li>
                <li><a href="/primary" className="hover:text-white">Indian Primary</a></li>
                <li><a href="/middle" className="hover:text-white">Middle School</a></li>
                <li><a href="/british-upper-secondary" className="hover:text-white">IGCSE</a></li>
                <li><a href="/british-advanced-levels" className="hover:text-white">A Levels</a></li>
                <li><a href="/senior-school" className="hover:text-white">NIOS Senior School</a></li>
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h3 className="mb-5 text-lg font-bold">Admissions</h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li><a href="/fees" className="hover:text-white">Fees 2027-28</a></li>
                <li><a href="/apply-now" className="hover:text-white">How to Apply</a></li>
                <li><a href="/batch-timings" className="hover:text-white">Class Timings</a></li>
                <li><a href="/refer-a-parent" className="hover:text-white">Refer a Family</a></li>
                <li><a href="/faq" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>

            {/* School */}
            <div>
              <h3 className="mb-5 text-lg font-bold">School</h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/our-leaders" className="hover:text-white">Our Leaders</a></li>
                <li><a href="/values-and-ethos" className="hover:text-white">Our Values</a></li>
                <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="/special-education" className="hover:text-white">Special Education</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-lg font-bold">Contact</h3>

              <ul className="space-y-4 text-sm text-blue-100">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="shrink-0" />
                  <span>India: +91 98117 73207</span>
                </li>

                <li className="flex items-start gap-3">
                  <Phone size={18} className="shrink-0" />
                  <span>USA: +1 (425) 400-9246</span>
                </li>

                <li className="flex items-start gap-3">
                  <Mail size={18} className="shrink-0" />
                  <a href="mailto:farah@lmsathena.com" className="break-all hover:text-white">
                    farah@lmsathena.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0" />
                  <span>
                    GF-20, Omaxe Square, Jasola District Centre, New Delhi –
                    110025
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0" />
                  <span>600 1st Ave, Seattle, WA 98104, USA</span>
                </li>
              </ul>

              <p className="mt-4 text-xs leading-6 text-blue-200">
                Edulectual K12 is a fully online school. Our offices handle
                administration only.
              </p>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="mb-3 font-bold">Follow Us</h4>

                <div className="flex gap-3">
                  <a
                    href="https://www.youtube.com/@edulectualk12"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
                  >
                    <Youtube size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/edulectual-k12/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-5 text-xs leading-6 text-blue-200 md:flex-row md:justify-between">
              <p>
                © 2026 Edulectual K12 Online School. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/privacy" className="hover:text-white">Privacy</a>
                <a href="/terms" className="hover:text-white">Terms</a>
                <a href="/refunds" className="hover:text-white">Refunds</a>
                <a href="/safeguarding" className="hover:text-white">Safeguarding</a>
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-blue-200">
              Pearson Edexcel and NIOS qualifications are awarded by those
              organisations. [PLACEHOLDER: Registered legal entity name.]
            </p>
          </div>

        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919811773207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600 md:bottom-6"
      >
        <Phone size={24} />
      </a>

      {/* MOBILE CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-blue-100 bg-white p-3 shadow-2xl md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a
            href="#application"
            className="flex-1 rounded-full border border-blue-200 px-4 py-3 text-center text-sm font-bold text-blue-700"
          >
            Apply 2027-28
          </a>

          <a
            href="#free-trial"
            className="flex-1 rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white"
          >
            Free 2-Week Trial
          </a>
        </div>
      </div>

    </div>
  );
};

export default ApplyNow;
