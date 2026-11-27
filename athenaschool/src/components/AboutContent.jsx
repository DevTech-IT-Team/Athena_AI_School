import React from "react";
import {
  GraduationCap,
  Lightbulb,
  BookOpen,
  Shield,
  Code,
  Users,
  Globe,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const AboutContent = () => {
  return (
    <div className="font-sans bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-2">›</span>
            <span>About</span>
            <span className="mx-2">›</span>
            <span className="text-gray-800">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Hero Content */}
            <div>
              <span className="inline-block text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
                ★ About Us
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                About Edulectual K12 Online School
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Edulectual K12 Online School is an online school for children
                from Nursery to Grade 12. We teach two pathways, the Pearson
                Edexcel British curriculum and the Indian curriculum with NIOS
                examinations, and each one follows the same curriculum in every
                country where we have families. We are opening admissions for
                the 2027-28 academic year.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/apply-now#free-trial"
                  className="px-7 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Book a free 2-week trial →
                </a>

                <a
                  href="/apply-now#apply"
                  className="px-7 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
                >
                  Apply for 2027-28
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-blue-100 rounded-3xl p-4 relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/family-india.jpg"
                    alt="Family at home with a laptop and drawing activities"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 bottom-8 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-full">
                  <GraduationCap className="text-blue-600" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Live online classes
                  </p>
                  <p className="text-sm text-gray-500">
                    Nursery to Grade 12
                  </p>
                </div>
              </div>

              <div className="absolute -right-4 top-8 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Star className="text-yellow-500" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Admissions open
                  </p>
                  <p className="text-sm text-gray-500">2027-28</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/assets/images/parent-help.jpg"
                  alt="Mother helping her daughter with homework"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why we started an online school
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many families need a school that does not depend on where they
                live. Parents relocate for work, children train seriously in a
                sport or the arts, some live far from a good school, and others
                simply want more say in how and when their child learns.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We built Edulectual K12 for them: a structured school day
                delivered online, with real teachers, a clear curriculum and
                recognised exams at the end of it.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We are not a tuition service or a recorded-video course. We aim
                to give children everything a good school gives them, including
                a timetable, a class, teachers who know them and a path to
                qualifications, without the commute or the campus.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Founders
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Edulectual K12 Online School is led by the co-founders of
              Athena LMS, the learning platform company behind our technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Founder 1 */}
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="/assets/images/founder-paulmichael.jpg"
                  alt="PaulMichael Rowland, Co-Founder of Edulectual K12 Online School"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                PaulMichael Rowland
              </h3>

              <p className="text-blue-600 font-medium mb-4">
                Co-Founder
              </p>

              <p className="text-gray-700 leading-relaxed">
                A leader with over 15 years of experience in educational
                technology, PaulMichael is passionate about building learning
                solutions that transform lives and bridge the gap between
                traditional and digital education.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="/assets/images/founder-javed.jpg"
                  alt="Javed Irshad, Co-Founder of Edulectual K12 Online School"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Javed Irshad
              </h3>

              <p className="text-purple-600 font-medium mb-4">
                Co-Founder
              </p>

              <p className="text-gray-700 leading-relaxed">
                An education specialist with 25 years of experience, including
                8 years in e-learning and content writing, and an expert in
                designing learning experiences that captivate and educate.
              </p>

              <p className="text-gray-700 mt-4">
                Read more about the people who run the school on our leadership
                page.
              </p>

              <a
                href="/our-leaders"
                className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-800"
              >
                Meet our leadership team <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What we believe
            </h2>
          </div>

          <div className="space-y-6">

            {[
              "Every child can do well when teaching fits how they learn.",
              "Technology should support teachers, not replace them.",
              "Parents are partners, so they should always know how their child is doing.",
              "A school's claims should be easy to check, so we publish our curriculum, fees and policies openly."
            ].map((belief, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm"
              >
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />

                <p className="text-gray-700 leading-relaxed">
                  {belief}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-green-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">

              <div className="bg-green-500 p-4 rounded-2xl text-white">
                <Globe size={30} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Where we are
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Edulectual K12 is fully online, and we do not run a physical
                  campus. Our team is reachable through our India and USA
                  offices{" "}
                  <span className="text-orange-600 font-medium">
                    [PLACEHOLDER: Farah to confirm the addresses shown on the contact page]
                  </span>.
                  Families join us from India, the UAE, Qatar, Oman, Kuwait,
                  Bahrain, the UK, Australia, the US and Canada.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Facts At A Glance */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Facts at a glance
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: GraduationCap,
                title: "Grades",
                text: "Nursery to Grade 12.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Shield,
                title: "Pathways",
                text: "Pearson Edexcel British; Indian curriculum (NIOS).",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: BookOpen,
                title: "Academic year now enrolling",
                text: "2027-28.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: TrendingUp,
                title: "Founded",
                text: "[PLACEHOLDER: founding year].",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Users,
                title: "Registered legal name",
                text: "[PLACEHOLDER: legal entity name].",
                color: "bg-pink-100 text-pink-600"
              }
            ].map((fact, index) => {
              const Icon = fact.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${fact.color}`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {fact.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {fact.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            {/* FAQ Intro */}
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide">
                FAQ
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                Frequently asked questions
              </h2>

              <p className="text-gray-600 mb-6">
                Still deciding? Explore more about Edulectual K12.
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  {
                    text: "Meet our leadership team",
                    link: "/our-leaders"
                  },
                  {
                    text: "Our mission, vision and values",
                    link: "/values-and-ethos"
                  },
                  {
                    text: "British and Indian pathways explained",
                    link: "/pathway"
                  },
                  {
                    text: "Contact our admissions team",
                    link: "/contact"
                  },
                  {
                    text: "Apply for 2027-28",
                    link: "/apply-now"
                  }
                ].map((chip, index) => (
                  <a
                    key={index}
                    href={chip.link}
                    className="px-4 py-2 rounded-full border border-blue-200 text-blue-600 text-sm hover:bg-blue-50 transition"
                  >
                    {chip.text}
                  </a>
                ))}

              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">

              <details open className="border border-gray-200 rounded-2xl p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Does Edulectual K12 have a campus?
                </summary>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  No. We are a fully online school. All classes, assessments
                  and parent meetings take place online.
                </p>
              </details>

              <details className="border border-gray-200 rounded-2xl p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Who founded Edulectual K12 Online School?
                </summary>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  The school is led by co-founders PaulMichael Rowland and
                  Javed Irshad, who also co-founded Athena LMS.
                </p>
              </details>

              <details className="border border-gray-200 rounded-2xl p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Which curricula do you teach?
                </summary>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  The Pearson Edexcel British pathway and the Indian curriculum
                  pathway with NIOS examinations.
                </p>
              </details>

            </div>

          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="relative bg-blue-950 rounded-3xl overflow-hidden">

            {/* Decorative */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="grid lg:grid-cols-2 items-center">

              {/* CTA Content */}
              <div className="p-8 md:p-14 relative z-10">

                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6">
                  Admissions Open 2027-28
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Admissions for 2027-28 are open
                </h2>

                <p className="text-blue-100 leading-relaxed mb-6">
                  Try a free 2-week trial class with our teachers, then apply
                  when you are ready. The ₹999 / USD 12 registration fee is
                  waived during our launch.
                </p>

                <p className="text-blue-100 mb-8">
                  Annual fees from{" "}
                  <span className="font-bold">₹71,000</span> (India) /{" "}
                  <span className="font-bold">USD 2,200</span> (international
                  families).
                </p>

                <div className="flex flex-wrap gap-4">

                  <a
                    href="/fees"
                    className="text-yellow-300 font-semibold underline underline-offset-4"
                  >
                    See full fees →
                  </a>

                </div>

                <div className="flex flex-wrap gap-4 mt-8">

                  <a
                    href="/apply-now#free-trial"
                    className="px-7 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                  >
                    Book a free 2-week trial →
                  </a>

                  <a
                    href="/apply-now#apply"
                    className="px-7 py-3 rounded-full bg-white text-blue-950 font-semibold hover:bg-blue-50 transition"
                  >
                    Apply for 2027-28
                  </a>

                </div>
              </div>

              {/* CTA Image */}
              <div className="h-full min-h-[350px]">
                <img
                  src="/assets/images/family-gulf.jpg"
                  alt="Father and son looking at a laptop together at home"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919811773207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Edulectual K12 on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <MessageCircle size={28} />
      </a>

    </div>
  );
};

export default AboutContent;