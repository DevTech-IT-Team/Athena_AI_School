import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Users,
  Globe,
  MessageCircle,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Menu,
  X,
  ChevronDown,
  Youtube,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ================= NAVIGATION =================
  const navigation = [
    {
      name: "Programmes",
      link: "/programs",
      children: [
        ["Early Years (Nursery–KG)", "/early-years"],
        ["Pre-Primary (Nursery, LKG, UKG)", "/pre-primary"],
        ["British Primary (Grades 1–5)", "/british-primary"],
        ["Indian Primary (Grades 1–5)", "/primary"],
        ["British Lower Secondary (Grades 6–8)", "/british-lower-secondary"],
        ["Indian Middle School (Grades 6–8)", "/middle"],
        ["IGCSE (Grades 9–10)", "/british-upper-secondary"],
        ["A Levels (Grades 11–12)", "/british-advanced-levels"],
        ["NIOS Senior School (Grades 9–12)", "/senior-school"],
      ],
    },
    {
      name: "Pathways",
      link: "/pathway",
      children: [
        ["British vs Indian pathway", "/pathway"],
        ["Pearson Edexcel", "/edexcel-uk"],
        ["Edexcel International GCSE", "/edexcel-international-gcse"],
        ["Edexcel International A Level", "/edexcel-international-advanced-level"],
        ["NCF and the Indian pathway", "/ncf-india"],
      ],
    },
    { name: "Fees", link: "/fees" },
    {
      name: "Admissions",
      link: "/apply-now",
      children: [
        ["How to apply", "/apply-now"],
        ["Who should register", "/who-should-register"],
        ["Class timings", "/batch-timings"],
        ["What you need at home", "/essential-requirements"],
        ["Refer a family", "/refer-a-parent"],
      ],
    },
    {
      name: "About",
      link: "/about",
      children: [
        ["About us", "/about"],
        ["Our leaders", "/our-leaders"],
        ["Our teachers", "/meet-our-academic-crew"],
        ["Mission, vision and values", "/values-and-ethos"],
        ["Why choose us", "/what-sets-us-apart"],
        ["How online school works", "/how-it-works"],
        ["Accreditation", "/affiliations-accreditation"],
      ],
    },
    {
      name: "Resources",
      link: "/resources",
      children: [
        ["FAQs", "/faq"],
        ["Help and support", "/resources"],
        ["Prospectus and downloads", "/resources-downloads"],
        ["Blog", "/resources"],
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  // ================= DATA =================
  const beliefs = [
    "Every child can do well when teaching fits how they learn.",
    "Technology should support teachers, not replace them.",
    "Parents are partners, so they should always know how their child is doing.",
    "A school's claims should be easy to check, so we publish our curriculum, fees and policies openly.",
  ];

  const facts = [
    {
      icon: GraduationCap,
      title: "Grades",
      text: "Nursery to Grade 12.",
      color: "bg-[#E5F0FF]",
      iconColor: "text-[#3778D6]",
    },
    {
      icon: ShieldCheck,
      title: "Pathways",
      text: "Pearson Edexcel British; Indian curriculum (NIOS).",
      color: "bg-[#E7F8ED]",
      iconColor: "text-[#26965C]",
    },
    {
      icon: BookOpen,
      title: "Academic Year Now Enrolling",
      text: "2027-28.",
      color: "bg-[#FFF4D6]",
      iconColor: "text-[#D79B20]",
    },
    {
      icon: TrendingUp,
      title: "Founded",
      text: "[Founding year to be confirmed].",
      color: "bg-[#F0E7FF]",
      iconColor: "text-[#8854D0]",
    },
    {
      icon: Users,
      title: "Registered Legal Name",
      text: "[Legal entity name to be confirmed].",
      color: "bg-[#FFE7F0]",
      iconColor: "text-[#C74F83]",
    },
  ];

  const quickLinks = [
    { text: "Meet our leadership team", link: "/our-leaders" },
    { text: "Our mission, vision and values", link: "/values-and-ethos" },
    { text: "British and Indian pathways explained", link: "/pathway" },
    { text: "Contact our admissions team", link: "/contact" },
    { text: "Apply for 2027-28", link: "/apply-now" },
  ];

  // ================= REUSABLE COMPONENTS =================
  const Button = ({ href, children, variant = "primary" }) => {
    const styles =
      variant === "primary"
        ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-md"
        : variant === "light"
        ? "bg-white text-[#14215B] hover:bg-blue-50"
        : "border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50";

    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles}`}
      >
        {children}
      </a>
    );
  };

  const SectionHeading = ({ eyebrow, title, description }) => (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <span className="text-[#2563EB] uppercase tracking-wider font-bold text-sm">
          {eyebrow}
        </span>
      )}

      <h2 className="font-[Fredoka] text-3xl md:text-4xl lg:text-5xl font-bold text-[#14215B] mt-4 mb-5">
        {title}
      </h2>

      {description && (
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );

  // ================= PAGE =================
  return (
    <div className="font-[Nunito] text-[#14215B] overflow-x-hidden">

      {/* ================= ANNOUNCEMENT BAR ================= */}
      <div className="bg-[#14215B] text-white px-4 py-3 text-center text-sm md:text-base">
        <span className="font-bold">
          Admissions for 2027-28 are open.
        </span>{" "}
        Founding families save 25% when they enrol by 31 March 2027.{" "}
        <a
          href="/fees"
          className="text-[#FFE082] font-bold underline underline-offset-4 ml-1"
        >
          See fees and offers →
        </a>
      </div>

      {/* ================= HEADER ================= */}
      <header className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between py-4">

            {/* LOGO */}
            <a href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 bg-[#2563EB] rounded-2xl flex items-center justify-center">
                <GraduationCap size={28} className="text-white" />
              </div>

              <div>
                <span className="font-[Fredoka] text-xl md:text-2xl font-bold text-[#14215B]">
                  Edulectual K12
                </span>
                <span className="block text-[10px] tracking-[3px] font-bold text-[#2563EB]">
                  ONLINE SCHOOL
                </span>
              </div>
            </a>

            {/* DESKTOP MENU */}
            <nav className="hidden xl:flex items-center gap-5">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.link}
                    className={`flex items-center gap-1 py-3 text-sm font-bold transition-colors ${
                      item.name === "About"
                        ? "text-[#2563EB]"
                        : "text-[#14215B] hover:text-[#2563EB]"
                    }`}
                  >
                    {item.name}
                    {item.children && <ChevronDown size={14} />}
                  </a>

                  {item.children && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-xl border border-blue-100 rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <ul className="max-h-[70vh] overflow-y-auto">
                        {item.children.map(([text, link]) => (
                          <li key={text}>
                            <a
                              href={link}
                              className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition"
                            >
                              {text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <Button href="/apply-now#apply" variant="secondary">
                Apply for 2027-28
              </Button>
              <Button href="/apply-now#free-trial">
                Book a free trial
              </Button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-3 rounded-xl bg-blue-50 text-blue-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-blue-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <nav className="px-5 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <details className="group">
                      <summary className="cursor-pointer list-none flex items-center justify-between py-3 font-bold text-[#14215B]">
                        {item.name}
                        <ChevronDown
                          size={18}
                          className="group-open:rotate-180 transition-transform"
                        />
                      </summary>

                      <div className="pl-4 pb-3 space-y-1">
                        <a
                          href={item.link}
                          className="block py-2 text-blue-600 font-semibold"
                        >
                          View {item.name}
                        </a>

                        {item.children.map(([text, link]) => (
                          <a
                            key={text}
                            href={link}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                          >
                            {text}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a
                      href={item.link}
                      className="block py-3 font-bold text-[#14215B]"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-3 pt-4">
                <Button href="/apply-now#free-trial">
                  Book a free 2-week trial
                </Button>
                <Button href="/apply-now#apply" variant="secondary">
                  Apply for 2027-28
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#FFF9F2] py-16 md:py-24">

        {/* DECORATIONS */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* BREADCRUMB */}
          <nav className="text-sm text-gray-500 mb-10">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span className="mx-2">›</span>
            <span>About</span>
            <span className="mx-2">›</span>
            <span className="text-[#14215B] font-semibold">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* HERO CONTENT */}
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                <Star size={15} className="fill-yellow-400 text-yellow-400" />
                About Us
              </span>

              <h1 className="font-[Fredoka] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 text-[#14215B]">
                About Edulectual K12{" "}
                <span className="text-[#2563EB]">Online School</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                Edulectual K12 Online School is an online school for children
                from Nursery to Grade 12. We teach two pathways, the Pearson
                Edexcel British curriculum and the Indian curriculum with NIOS
                examinations, and each one follows the same curriculum in every
                country where we have families. We are opening admissions for
                the 2027-28 academic year.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/apply-now#free-trial">
                  Book a free 2-week trial <ArrowRight size={18} />
                </Button>

                <Button href="/apply-now#apply" variant="secondary">
                  Apply for 2027-28
                </Button>
              </div>

              {/* HERO HIGHLIGHTS */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#14215B]">
                      Nursery to Grade 12
                    </p>
                    <p className="text-sm text-gray-500">
                      Full-time online education
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Star className="text-yellow-500 fill-yellow-500" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#14215B]">
                      Admissions Open
                    </p>
                    <p className="text-sm text-gray-500">
                      Academic year 2027-28
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative lg:pl-6">
              <div className="absolute inset-4 bg-[#FFD66B] rounded-[45%_45%_35%_35%] rotate-3" />

              <div className="relative bg-blue-100 p-3 rounded-[45%_45%_35%_35%] overflow-hidden">
                <img
                  src="/assets/images/family-india.jpg"
                  alt="Family at home with a laptop and drawing activities"
                  className="w-full h-[420px] md:h-[520px] object-cover rounded-[45%_45%_35%_35%]"
                />
              </div>

              {/* FLOATING CARD 1 */}
              <div className="absolute bottom-8 -left-2 md:-left-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs">
                <div className="bg-[#FFE4E9] p-3 rounded-xl">
                  <GraduationCap className="text-pink-600" size={26} />
                </div>
                <div>
                  <p className="font-bold text-[#14215B]">
                    Live online classes
                  </p>
                  <p className="text-sm text-gray-500">
                    Nursery to Grade 12
                  </p>
                </div>
              </div>

              {/* FLOATING CARD 2 */}
              <div className="absolute top-8 -right-2 md:-right-5 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <span className="font-bold text-[#14215B]">
                    Admissions open
                  </span>
                </div>
                <p className="text-sm text-gray-500 ml-7">2027-28</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 md:py-24 px-6 bg-[#EAF6FF]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow-200 rounded-3xl" />

            <div className="relative z-10 overflow-hidden rounded-3xl">
              <img
                src="/assets/images/parent-help.jpg"
                alt="Mother helping her daughter with homework"
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="absolute top-5 right-5 z-20 bg-white rounded-2xl p-4 shadow-lg">
              <Lightbulb className="text-yellow-500" size={28} />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Our Story
            </span>

            <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#14215B] mt-4 mb-6">
              Why we started an online school
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Many families need a school that does not depend on where they
              live. Parents relocate for work, children train seriously in a
              sport or the arts, some live far from a good school, and others
              simply want more say in how and when their child learns.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              We built Edulectual K12 for them: a structured school day
              delivered online, with real teachers, a clear curriculum and
              recognised exams at the end of it.
            </p>

            <p className="text-gray-600 leading-8">
              We are not a tuition service or a recorded-video course. We aim
              to give children everything a good school gives them, including a
              timetable, a class, teachers who know them and a path to
              qualifications, without the commute or the campus.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOUNDERS ================= */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <SectionHeading
            eyebrow="The People Behind Edulectual"
            title="Our Founders"
            description="Edulectual K12 Online School is led by the co-founders of Athena LMS, the learning platform company behind our technology."
          />

          <div className="grid md:grid-cols-2 gap-8">

            {/* FOUNDER 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[#EDE4FF] p-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/assets/images/founder-paulmichael.jpg"
                    alt="PaulMichael Rowland, Co-Founder of Edulectual K12 Online School"
                    loading="lazy"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-[Fredoka] text-2xl font-bold text-[#14215B]">
                  PaulMichael Rowland
                </h3>

                <p className="text-purple-600 font-bold mt-2 mb-5">
                  Co-Founder
                </p>

                <p className="text-gray-600 leading-relaxed">
                  A leader with over 15 years of experience in educational
                  technology, PaulMichael is passionate about building learning
                  solutions that transform lives and bridge the gap between
                  traditional and digital education.
                </p>
              </div>
            </div>

            {/* FOUNDER 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[#DCEEFF] p-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/assets/images/founder-javed.jpg"
                    alt="Javed Irshad, Co-Founder of Edulectual K12 Online School"
                    loading="lazy"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-[Fredoka] text-2xl font-bold text-[#14215B]">
                  Javed Irshad
                </h3>

                <p className="text-blue-600 font-bold mt-2 mb-5">
                  Co-Founder
                </p>

                <p className="text-gray-600 leading-relaxed">
                  An education specialist with 25 years of experience, including
                  8 years in e-learning and content writing, and an expert in
                  designing learning experiences that captivate and educate.
                </p>

                <p className="text-gray-600 mt-5">
                  Read more about the people who run the school on our
                  leadership page.
                </p>

                <a
                  href="/our-leaders"
                  className="inline-flex items-center gap-2 mt-5 text-blue-600 font-bold hover:text-blue-800 transition"
                >
                  Meet our leadership team <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BELIEFS ================= */}
      <section className="py-20 md:py-24 px-6 bg-[#FFF7EE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
              Our Principles
            </span>

            <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#14215B] mt-4">
              What we believe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-white p-6 md:p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition"
              >
                <div className="bg-green-100 p-3 rounded-full shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>

                <p className="text-gray-700 leading-relaxed pt-2">
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHERE WE ARE ================= */}
      <section className="py-16 md:py-20 px-6 bg-[#EAF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-green-600 text-white p-5 rounded-2xl shrink-0">
                <Globe size={32} />
              </div>

              <div>
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                  Our Reach
                </span>

                <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#14215B] mt-3 mb-6">
                  Where we are
                </h2>

                <p className="text-gray-600 leading-8">
                  Edulectual K12 is fully online, and we do not run a physical
                  campus. Our team is reachable through our India and USA
                  offices{" "}
                  <span className="text-orange-600 font-semibold">
                    [PLACEHOLDER: Farah to confirm the addresses shown on the contact page]
                  </span>
                  . Families join us from India, the UAE, Qatar, Oman, Kuwait,
                  Bahrain, the UK, Australia, the US and Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FACTS ================= */}
      <section className="py-20 md:py-24 px-6 bg-[#F1F8F4]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Edulectual K12"
            title="Facts at a glance"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => {
              const Icon = fact.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${fact.color}`}
                  >
                    <Icon size={30} className={fact.iconColor} />
                  </div>

                  <h3 className="font-[Fredoka] text-xl font-bold text-[#14215B] mb-3">
                    {fact.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{fact.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* FAQ INTRO */}
          <div>
            <span className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm">
              <span className="w-8 h-[2px] bg-blue-600" />
              FAQs
            </span>

            <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#14215B] mt-5 mb-6">
              Frequently asked questions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Still deciding? Explore more about Edulectual K12 and find
              answers to common questions.
            </p>

            <div className="flex flex-wrap gap-3">
              {quickLinks.map((chip, index) => (
                <a
                  key={index}
                  href={chip.link}
                  className="px-4 py-3 rounded-full border border-blue-200 text-blue-600 text-sm font-bold hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
                >
                  {chip.text}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ ITEMS */}
          <div className="space-y-4">
            <details
              open
              className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-200 transition"
            >
              <summary className="font-bold text-[#14215B] cursor-pointer list-none flex items-center justify-between gap-4">
                Does Edulectual K12 have a campus?
                <span className="text-blue-600 text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <p className="text-gray-600 mt-4 leading-relaxed">
                No. We are a fully online school. All classes, assessments
                and parent meetings take place online.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-200 transition">
              <summary className="font-bold text-[#14215B] cursor-pointer list-none flex items-center justify-between gap-4">
                Who founded Edulectual K12 Online School?
                <span className="text-blue-600 text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <p className="text-gray-600 mt-4 leading-relaxed">
                The school is led by co-founders PaulMichael Rowland and
                Javed Irshad, who also co-founded Athena LMS.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-200 transition">
              <summary className="font-bold text-[#14215B] cursor-pointer list-none flex items-center justify-between gap-4">
                Which curricula do you teach?
                <span className="text-blue-600 text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <p className="text-gray-600 mt-4 leading-relaxed">
                The Pearson Edexcel British pathway and the Indian curriculum
                pathway with NIOS examinations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= ADMISSIONS CTA ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#14215B] rounded-[32px] overflow-hidden">

            {/* DECORATIONS */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

            <div className="grid lg:grid-cols-2 items-center relative z-10">

              {/* CTA CONTENT */}
              <div className="p-8 md:p-12 lg:p-16">
                <span className="inline-block bg-white/10 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  Admissions Open 2027-28
                </span>

                <h2 className="font-[Fredoka] text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Give your child a school that moves with them.
                </h2>

                <p className="text-blue-100 leading-relaxed mb-6">
                  Try a free 2-week trial class with our teachers, then apply
                  when you are ready. The ₹999 / USD 12 registration fee is
                  waived during our launch.
                </p>

                <p className="text-blue-100 mb-6">
                  Annual fees from{" "}
                  <span className="font-bold text-white">₹71,000</span>{" "}
                  (India) /{" "}
                  <span className="font-bold text-white">USD 2,200</span>{" "}
                  (international families).
                </p>

                <a
                  href="/fees"
                  className="inline-flex items-center text-yellow-300 font-bold underline underline-offset-4 mb-8 hover:text-yellow-200"
                >
                  See full fees <ArrowRight size={16} className="ml-2" />
                </a>

                <div className="flex flex-wrap gap-4">
                  <Button href="/apply-now#free-trial">
                    Book a free 2-week trial
                  </Button>

                  <Button href="/apply-now#apply" variant="light">
                    Apply for 2027-28
                  </Button>
                </div>
              </div>

              {/* CTA IMAGE */}
              <div className="h-full min-h-[350px] lg:min-h-[550px]">
                <img
                  src="/assets/images/family-gulf.jpg"
                  alt="Father and son looking at a laptop together at home"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#14215B] text-white pt-16 pb-28 md:pb-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* ABOUT */}
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>

                <span className="font-[Fredoka] text-xl font-bold">
                  Edulectual K12
                </span>
              </a>

              <p className="text-blue-100 text-sm leading-7">
                Edulectual K12 Online School is a fully online school for
                Nursery to Grade 12, teaching the Pearson Edexcel British
                pathway and the Indian curriculum with NIOS exams to families
                in India, the Gulf, the UK, North America and Australia.
              </p>
            </div>

            {/* PROGRAMMES */}
            <div>
              <h4 className="font-[Fredoka] text-lg font-bold mb-5">
                Programmes
              </h4>

              <ul className="space-y-3 text-sm text-blue-100">
                {[
                  ["Early Years", "/early-years"],
                  ["British Primary", "/british-primary"],
                  ["Indian Primary", "/primary"],
                  ["Middle School", "/middle"],
                  ["IGCSE", "/british-upper-secondary"],
                  ["A Levels", "/british-advanced-levels"],
                  ["NIOS Senior School", "/senior-school"],
                ].map(([text, link]) => (
                  <li key={text}>
                    <a href={link} className="hover:text-yellow-300 transition">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ADMISSIONS */}
            <div>
              <h4 className="font-[Fredoka] text-lg font-bold mb-5">
                Admissions
              </h4>

              <ul className="space-y-3 text-sm text-blue-100">
                {[
                  ["Fees 2027-28", "/fees"],
                  ["How to apply", "/apply-now"],
                  ["Class timings", "/batch-timings"],
                  ["Refer a family", "/refer-a-parent"],
                  ["FAQs", "/faq"],
                ].map(([text, link]) => (
                  <li key={text}>
                    <a href={link} className="hover:text-yellow-300 transition">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SCHOOL */}
            <div>
              <h4 className="font-[Fredoka] text-lg font-bold mb-5">
                School
              </h4>

              <ul className="space-y-3 text-sm text-blue-100">
                {[
                  ["About us", "/about"],
                  ["Our leaders", "/our-leaders"],
                  ["Our values", "/values-and-ethos"],
                  ["How it works", "/how-it-works"],
                  ["Special education", "/special-education"],
                  ["Contact", "/contact"],
                ].map(([text, link]) => (
                  <li key={text}>
                    <a href={link} className="hover:text-yellow-300 transition">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-[Fredoka] text-lg font-bold mb-5">
                Contact
              </h4>

              <ul className="space-y-3 text-sm text-blue-100">
                <li>Phone (India): +91 98117 73207</li>
                <li>Phone (USA): +1 (425) 400-9246</li>

                <li>
                  Email:{" "}
                  <a
                    href="mailto:farah@lmsathena.com"
                    className="underline hover:text-yellow-300"
                  >
                    farah@lmsathena.com
                  </a>
                </li>

                <li>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/919811773207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-300"
                  >
                    +91 98117 73207
                  </a>
                </li>

                <li>
                  India Office: GF-20, Omaxe Square, Jasola District Centre,
                  New Delhi – 110025
                </li>

                <li>USA Office: 600 1st Ave, Seattle, WA 98104</li>
              </ul>

              <p className="text-xs text-blue-200 mt-4">
                Edulectual K12 is a fully online school. Our offices handle
                administration only.
              </p>

              {/* SOCIAL LINKS */}
              <div className="mt-6">
                <h4 className="font-bold mb-3">Follow us</h4>

                <div className="flex gap-3">
                  <a
                    href="https://www.youtube.com/@edulectualk12"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Edulectual K12 on YouTube"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition"
                  >
                    <Youtube size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/edulectual-k12/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Edulectual K12 on LinkedIn"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition"
                  >
                    <Linkedin size={18} />
                  </a>

                  <span
                    title="Instagram link coming soon"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-50"
                  >
                    <Instagram size={18} />
                  </span>

                  <span
                    title="Facebook link coming soon"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-50"
                  >
                    <Facebook size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-white/20 mt-12 pt-8 space-y-4 text-sm text-blue-100">
            <p>
              © 2026 Edulectual K12 Online School. All rights reserved. ·
              Privacy · Terms · Refunds · Safeguarding
            </p>

            <p className="text-xs leading-relaxed">
              Pearson Edexcel and NIOS qualifications are awarded by those
              organisations. [Registered legal entity name to be confirmed].
            </p>
          </div>
        </div>
      </footer>

      {/* ================= MOBILE STICKY CTA ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-3 flex gap-3">
        <a
          href="/apply-now#apply"
          className="flex-1 text-center border-2 border-blue-600 text-blue-600 rounded-full py-3 font-bold text-sm"
        >
          Apply 2027-28
        </a>

        <a
          href="/apply-now#free-trial"
          className="flex-1 text-center bg-blue-600 text-white rounded-full py-3 font-bold text-sm"
        >
          Free 2-week trial
        </a>
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/919811773207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Edulectual K12 on WhatsApp"
        className="fixed bottom-24 md:bottom-6 right-5 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default About;