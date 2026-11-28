import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  BookOpen,
  GraduationCap,
  Monitor,
  Users,
  Clock,
} from "lucide-react";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Is Edulectual K12 a fully online school?",
      answer:
        "Yes. All teaching happens online, so your child learns from home with qualified teachers in live online classes. There is no campus to attend.",
    },
    {
      question: "Which curricula do you offer?",
      answer:
        "We offer two pathways: the Pearson Edexcel British pathway, covering Primary, Lower Secondary, International GCSE and International A Level, and the Indian curriculum pathway with NIOS examinations.",
    },
    {
      question: "Which grades can join?",
      answer:
        "Our programmes cover Nursery to Grade 12. Admission availability depends on the programme and academic year.",
    },
    {
      question: "Which countries do you serve?",
      answer:
        "Families can join from India, UAE, Qatar, Oman, Kuwait, Bahrain, UK, Australia, US and Canada. Students follow their chosen curriculum regardless of location.",
    },
    {
      question: "Can we try a class before enrolling?",
      answer:
        "Yes. Families can book a free 2-week trial or demo class to experience our online teaching. The registration fee is waived during our launch offer.",
    },
    {
      question: "How do online classes work?",
      answer:
        "Students attend live online classes with teachers, follow a structured timetable and complete guided learning activities. Parents can stay connected with their child's progress.",
    },
  ];

  const countries = [
    "India",
    "UAE",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
    "UK",
    "Australia",
    "USA",
    "Canada",
  ];

  return (
    <main className="g-home overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="hero page relative overflow-hidden">
        <span className="blob b1" />
        <span className="blob b2" />

        <span
          className="dots"
          style={{ left: "46%", top: 60 }}
        />

        <div className="container relative z-10">

          <div className="hero-grid">

            {/* HERO CONTENT */}

            <div className="hero-content">

              <span className="eyebrow">
                ★ Admissions Open 2027–28
              </span>

              <h1>
                Online School for Nursery to Grade 12,
                <span className="text-blue-600">
                  {" "}Wherever You Live
                </span>
              </h1>

              <p className="lead mt-5">
                Edulectual K12 Online School is a fully online school
                for children from Nursery to Grade 12. Your child
                learns from home with qualified teachers in live
                online classes, follows one clear curriculum and
                works towards recognised qualifications.
              </p>

              <p className="mt-4">
                Admissions are now open for the 2027–28 academic year.
                Choose between the Pearson Edexcel British pathway
                or the Indian curriculum pathway with NIOS
                examinations.
              </p>

              {/* CTA */}

              <div className="cta-row mt-8 flex flex-wrap gap-4">

                <Link
                  to="/apply-now#free-trial"
                  className="btn btn-primary"
                >
                  Book a free 2-week trial
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/apply-now#apply"
                  className="btn btn-secondary"
                >
                  Apply for 2027–28
                </Link>

              </div>

              {/* COUNTRY LIST */}

              <div className="mt-7">

                <p className="text-sm font-semibold mb-3">
                  Learn from anywhere
                </p>

                <div className="flex flex-wrap gap-2">

                  {countries.map((country) => (
                    <span
                      key={country}
                      className="country-pill"
                    >
                      {country}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* HERO IMAGE */}

            <div className="hero-art">

              <div className="ring" />

              <div className="photo">
                <img
                  src="/images/family-india.jpg"
                  alt="Family learning together at home with a laptop"
                />
              </div>

              {/* FLOATING CARD */}

              <div className="float f1">

                <span
                  className="ic"
                  style={{ background: "#FFE4E9" }}
                >
                  <span className="live-dot" />
                </span>

                <span>
                  Live online classes
                  <small>With qualified teachers</small>
                </span>

              </div>

              {/* SECOND FLOATING CARD */}

              <div className="float f2">

                <span
                  className="ic"
                  style={{ background: "var(--sun-50)" }}
                >
                  ★
                </span>

                <span>
                  Nursery – Grade 12
                  <small>Two curriculum pathways</small>
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* WAVE */}

        <svg
          className="wave"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 50 C240 90,480 10,720 40 S1200 80,1440 30 V80 H0Z"
            fill="#fff"
          />
        </svg>

      </section>


      {/* ================= PATHWAYS ================= */}

      <section className="sec bg-sky">

        <div className="container">

          <div className="sec-intro text-center">

            <span className="eyebrow">
              OUR CURRICULUM
            </span>

            <h2>
              Two pathways, one standard of teaching
            </h2>

            <p className="max-w-3xl mx-auto mt-4">
              Choose the curriculum that best fits your child's
              academic goals, future plans and learning needs.
            </p>

          </div>

          <div className="grid g2 mt-10">

            {/* BRITISH PATHWAY */}

            <article className="card pastel c2">

              <div className="mb-5">

                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4">
                  <BookOpen size={28} />
                </div>

                <h3>
                  Pearson Edexcel British pathway
                </h3>

              </div>

              <p>
                A British-style education that leads to Pearson
                Edexcel International GCSEs in Grades 9–10 and
                International A Levels in Grades 11–12.
                It suits families seeking an internationally
                oriented curriculum and planning for universities
                in the UK or abroad.
              </p>

              <ul className="mt-5 space-y-2">

                <li>✓ British curriculum structure</li>
                <li>✓ International GCSE</li>
                <li>✓ International A Levels</li>
                <li>✓ Online live teaching</li>

              </ul>

              <Link
                to="/pathway"
                className="btn btn-secondary mt-6 inline-flex"
              >
                Explore British pathway
                <ArrowRight size={18} />
              </Link>

            </article>


            {/* INDIAN PATHWAY */}

            <article className="card pastel c3">

              <div className="mb-5">

                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4">
                  <GraduationCap size={28} />
                </div>

                <h3>
                  Indian curriculum pathway (NIOS)
                </h3>

              </div>

              <p>
                An Indian curriculum pathway with Secondary
                (Class 10) and Senior Secondary (Class 12)
                examinations through NIOS, the National Institute
                of Open Schooling. Students learn online with
                structured teaching and flexible learning.
              </p>

              <ul className="mt-5 space-y-2">

                <li>✓ Indian curriculum learning</li>
                <li>✓ NIOS Secondary</li>
                <li>✓ NIOS Senior Secondary</li>
                <li>✓ Online live teaching</li>

              </ul>

              <Link
                to="/ncf-india"
                className="btn btn-secondary mt-6 inline-flex"
              >
                Explore Indian pathway
                <ArrowRight size={18} />
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* ================= WHY ONLINE SCHOOL ================= */}

      <section className="sec">

        <div className="container">

          <div className="sec-intro">

            <span className="eyebrow">
              WHY EDULECTUAL
            </span>

            <h2>
              Why families choose an online school
            </h2>

            <p>
              Flexible learning, structured teaching and a
              connected learning environment designed around
              your child's educational journey.
            </p>

          </div>

          <div className="grid g2 lg:grid-cols-3 mt-10">

            {/* CARD 1 */}

            <article className="card">

              <div className="feature-icon">
                <Globe size={28} />
              </div>

              <h3>
                Learn from anywhere
              </h3>

              <p>
                Your child's school moves with your family.
                Relocation or travel doesn't have to mean
                changing schools.
              </p>

            </article>


            {/* CARD 2 */}

            <article className="card">

              <div className="feature-icon">
                <BookOpen size={28} />
              </div>

              <h3>
                Two curriculum pathways
              </h3>

              <p>
                Choose the British or Indian pathway based
                on your child's educational preferences
                and future goals.
              </p>

            </article>


            {/* CARD 3 */}

            <article className="card">

              <div className="feature-icon">
                <Monitor size={28} />
              </div>

              <h3>
                Live online teaching
              </h3>

              <p>
                Learn directly from teachers through
                structured online lessons and guided
                academic activities.
              </p>

            </article>


            {/* CARD 4 */}

            <article className="card">

              <div className="feature-icon">
                <Users size={28} />
              </div>

              <h3>
                Learning community
              </h3>

              <p>
                Students participate in an online learning
                environment with teachers and fellow learners.
              </p>

            </article>


            {/* CARD 5 */}

            <article className="card">

              <div className="feature-icon">
                <Clock size={28} />
              </div>

              <h3>
                Flexible class timings
              </h3>

              <p>
                Explore available class timings designed
                for families in different regions.
              </p>

              <Link
                to="/batch-timings"
                className="text-blue-600 font-semibold mt-3 inline-flex"
              >
                View class timings →
              </Link>

            </article>


            {/* CARD 6 */}

            <article className="card">

              <div className="feature-icon">
                <GraduationCap size={28} />
              </div>

              <h3>
                Structured academic journey
              </h3>

              <p>
                Follow a learning journey from Early Years
                through Primary, Middle School and Senior School.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ================= LEARNING STAGES ================= */}

      <section className="sec bg-peach">

        <div className="container">

          <div className="sec-intro">

            <span className="eyebrow">
              ACADEMIC JOURNEY
            </span>

            <h2>
              What your child learns at each stage
            </h2>

            <p>
              Learning evolves as children grow, helping them
              develop the skills, knowledge and confidence
              needed at every stage.
            </p>

          </div>

          <div className="grid g2 lg:grid-cols-4 mt-10">

            <article className="card">

              <span className="stage-number">
                01
              </span>

              <h3>
                Early Years
              </h3>

              <p className="font-semibold">
                Nursery & Kindergarten
              </p>

              <p>
                Builds language, number sense, curiosity
                and confidence through playful learning
                experiences.
              </p>

            </article>


            <article className="card">

              <span className="stage-number">
                02
              </span>

              <h3>
                Primary
              </h3>

              <p className="font-semibold">
                Grades 1–5
              </p>

              <p>
                Develops strong foundations in reading,
                writing, mathematics and essential
                learning skills.
              </p>

            </article>


            <article className="card">

              <span className="stage-number">
                03
              </span>

              <h3>
                Middle School
              </h3>

              <p className="font-semibold">
                Grades 6–8
              </p>

              <p>
                Expands learning into sciences, humanities,
                languages, computing and independent thinking.
              </p>

            </article>


            <article className="card">

              <span className="stage-number">
                04
              </span>

              <h3>
                Senior School
              </h3>

              <p className="font-semibold">
                Grades 9–12
              </p>

              <p>
                Prepares students for International GCSE,
                International A Levels or NIOS Secondary
                and Senior Secondary examinations.
              </p>

            </article>

          </div>

          <div className="text-center mt-8">

            <Link
              to="/programmes"
              className="btn btn-secondary"
            >
              Explore all programmes
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FEES ================= */}

      <section className="sec bg-mint">

        <div className="container">

          <div className="sec-intro">

            <span className="eyebrow">
              ADMISSIONS 2027–28
            </span>

            <h2>
              Fees and offers for 2027–28
            </h2>

          </div>

          <div className="prose">

            <p>
              Annual tuition depends on your child's grade,
              pathway and country. Fees start from ₹71,000
              a year in India and USD 2,200 a year for
              international families.
            </p>

            <p>
              Founding families who enrol by 31 March 2027
              receive 25% off year-one tuition, subject to
              applicable offer conditions. Families can
              also begin with a free 2-week trial.
            </p>

            <Link
              to="/fees"
              className="btn btn-secondary mt-5"
            >
              See full fees and offers
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FREE TRIAL ================= */}

      <section className="sec">

        <div className="container">

          <div className="split">

            {/* IMAGE */}

            <div className="split-img">

              <span className="dots" />

              <div className="frame">

                <img
                  src="/images/parent-help.jpg"
                  alt="Parent helping a child with learning at home"
                  loading="lazy"
                />

              </div>

            </div>


            {/* CONTENT */}

            <div className="prose">

              <span className="eyebrow">
                EXPERIENCE OUR CLASSES
              </span>

              <h2>
                Start with a free trial
              </h2>

              <p>
                The best way to know whether online school
                suits your child is to experience it.
                Book a free 2-week trial or demo class,
                meet the teachers and see a real lesson.
              </p>

              <p>
                During our launch, the ₹999 / USD 12
                registration fee is waived.
              </p>

              <div className="cta-row mt-6">

                <Link
                  to="/apply-now#free-trial"
                  className="btn btn-primary"
                >
                  Book a free 2-week trial
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/apply-now#apply"
                  className="btn btn-secondary"
                >
                  Apply for 2027–28
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="faq-sec py-20">

        <div className="container">

          <div className="faq-grid">

            {/* FAQ INTRO */}

            <div>

              <span className="eyebrow">
                FAQ
              </span>

              <h2>
                Frequently asked questions
              </h2>

              <p className="mt-4">
                Find answers to common questions about
                our online school, curriculum, admissions
                and learning experience.
              </p>

              <Link
                to="/faq"
                className="btn btn-secondary mt-5"
              >
                View all FAQs
                <ArrowRight size={18} />
              </Link>

            </div>


            {/* FAQ ACCORDION */}

            <div className="faq-list">

              {faqs.map((faq, index) => (

                <div
                  key={faq.question}
                  className={`faq-item ${
                    openFaq === index ? "faq-active" : ""
                  }`}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index ? -1 : index
                      )
                    }
                    aria-expanded={openFaq === index}
                  >

                    <span>
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        openFaq === index
                          ? "rotate-180"
                          : ""
                      }`}
                    />

                  </button>

                  {openFaq === index && (

                    <div className="faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="py-20 pb-10">

        <div className="container">

          <div className="band relative overflow-hidden">

            <span className="blob b5" />

            <div className="band-c relative z-10">

              <span className="eyebrow">
                ADMISSIONS OPEN 2027–28
              </span>

              <h2>
                Give your child a learning journey
                that moves with them
              </h2>

              <p>
                Try a free 2-week trial class with our teachers,
                experience online learning and apply when you are ready.
              </p>

              <p className="band-fees">

                Annual fees from{" "}
                <span className="money">
                  ₹71,000
                </span>{" "}
                in India /{" "}
                <span className="money">
                  USD 2,200
                </span>{" "}
                for international families.

                <Link
                  to="/fees"
                  className="band-link"
                >
                  {" "}See full fees →
                </Link>

              </p>

              <div className="cta-row mt-6">

                <Link
                  to="/apply-now#free-trial"
                  className="btn btn-primary"
                >
                  Book a free 2-week trial
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/apply-now#apply"
                  className="btn btn-light"
                >
                  Apply for 2027–28
                </Link>

              </div>

            </div>

            <div className="band-img">

              <img
                src="/images/family-gulf.jpg"
                alt="Parent and child learning together online"
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;