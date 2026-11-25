import React, { useState } from "react";
import "../../Academics.css";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Monitor,
  ClipboardCheck,
  ArrowRight,
  Clock,
  Users,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Star,
  MessageCircle,
  Lightbulb,
  Heart,
} from "lucide-react";

const BritishPrimary = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleTrialClick = () => {
    window.location.href = "/contact";
  };

  const handleApplyClick = () => {
    window.location.href = "/admissions";
  };

  const subjects = [
    {
      icon: BookOpen,
      title: "English",
      color: "from-blue-500 to-indigo-600",
      description:
        "Phonics and early reading in the first years, then fluent reading, comprehension, grammar, spelling and confident writing for different purposes. Children read whole books as well as extracts and learn to talk about what they read.",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      color: "from-violet-500 to-purple-600",
      description:
        "Number and place value, the four operations, fractions and decimals, measurement, shape and data. Children practise mental maths and learn to explain their reasoning, not just find answers.",
    },
    {
      icon: FlaskConical,
      title: "Science",
      color: "from-cyan-500 to-blue-600",
      description:
        "Living things, materials, forces, light, sound and the Earth, taught through simple investigations children can do at home with everyday items.",
    },
    {
      icon: Globe,
      title: "Wider Curriculum",
      color: "from-emerald-500 to-teal-600",
      description:
        "Computing, global perspectives and humanities, art and music, and wellbeing sessions. The full subject list and additional languages will be confirmed.",
    },
  ];

  const features = [
    {
      icon: Monitor,
      title: "Live Interactive Classes",
      description:
        "Live online lessons designed to encourage participation, interaction and active learning.",
    },
    {
      icon: Clock,
      title: "Short Learning Sessions",
      description:
        "Age-appropriate sessions with screen breaks and offline activities to keep children engaged.",
    },
    {
      icon: Lightbulb,
      title: "Learning Through Activities",
      description:
        "Games, quizzes, investigations and practical tasks help children explore and understand concepts.",
    },
    {
      icon: Users,
      title: "Small Group Learning",
      description:
        "Teachers encourage questions, discussions and participation. Class size details will be confirmed.",
    },
    {
      icon: ClipboardCheck,
      title: "Continuous Assessment",
      description:
        "Regular classroom activities, end-of-unit checks and feedback help monitor progress.",
    },
    {
      icon: Heart,
      title: "Parent Partnership",
      description:
        "Regular reports and online parent-teacher meetings help parents stay connected with learning.",
    },
  ];

  const faqs = [
    {
      question: "What ages is British Primary for?",
      answer:
        "British Primary is designed for Grades 1–5, which is roughly ages 5 to 11.",
    },
    {
      question: "Is it the same curriculum as in the UAE or UK?",
      answer:
        "Our British pathway follows the same Pearson Edexcel-based curriculum in every country we serve.",
    },
    {
      question: "Does my child need to sit exams in primary?",
      answer:
        "There are no public examinations in primary. Teachers assess progress throughout the year through classroom activities and end-of-unit checks. The use of Pearson Edexcel iPrimary achievement tests will be confirmed.",
    },
    {
      question: "How does a typical online primary school day work?",
      answer:
        "Children participate in short, interactive online sessions with screen breaks and off-screen tasks such as reading, handwriting and practical activities. Teachers use games, quizzes and discussions to make learning engaging.",
    },
    {
      question: "Will parents need to assist their children?",
      answer:
        "For Grades 1–2, a parent or carer should be nearby for part of the day to help younger learners with transitions, activities and technical support.",
    },
    {
      question: "What happens after Grade 5?",
      answer:
        "After completing Grade 5, children progress to our British Lower Secondary programme for Grades 6–8, continuing their learning journey with the same school.",
    },
  ];

  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <section className="relative min-h-[520px] md:min-h-[600px] bg-gradient-to-br from-blue-100 via-blue-500 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-950/20"></div>

          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 px-6 md:px-10 max-w-5xl text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-sm md:text-base font-medium mb-6">
              Pearson Edexcel British Pathway
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              British Primary
              <span className="block text-blue-100 mt-2">
                Grades 1–5
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Building strong foundations for curious minds, confident learners
              and a brighter future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTrialClick}
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Book a Free 2-Week Trial
              </button>

              <button
                onClick={handleApplyClick}
                className="px-8 py-4 bg-blue-900/30 border border-white/40 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                Apply for 2027-28
              </button>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt;{" "}
            <a href="/programs">Programmes</a> &gt; British Primary
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                Grades 1–5 | Ages 5–11
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                A Strong Foundation for Lifelong Learning
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our British Primary programme gives children in Grades 1–5,
                roughly ages 5 to 11, a strong start on the Pearson Edexcel
                British pathway. Lessons are taught live online by our teachers,
                and the curriculum is the same whether you live in Abu Dhabi,
                Bengaluru, Manchester or Sydney. It prepares children for Lower
                Secondary and, later, International GCSE.
              </p>
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Curriculum
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-5">
                What Children Learn
              </h2>

              <p className="text-gray-600 text-lg">
                A balanced curriculum that builds academic knowledge,
                creativity, curiosity and essential skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subjects.map((subject, index) => {
                const Icon = subject.icon;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:-translate-y-1"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {subject.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {subject.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Online Learning */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                  The Online Experience
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  How a Primary Day Works Online
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Learning online doesn't mean sitting in front of a screen all
                  day. Our sessions are short, interactive and balanced with
                  screen breaks and offline activities.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Teachers use games, quizzes, group discussions and practical
                  tasks to keep children active and engaged. For Grades 1–2, a
                  parent or carer should be close by for part of the day.
                </p>

                <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Flexible and Interactive Learning
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Daily hours, session schedule and class size will be
                        confirmed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                  A Balanced Learning Experience
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "Live Teacher-Led Sessions",
                      description:
                        "Learn directly from teachers through interactive online classes.",
                    },
                    {
                      title: "Screen Breaks",
                      description:
                        "Regular breaks help children stay refreshed and focused.",
                    },
                    {
                      title: "Offline Activities",
                      description:
                        "Reading, handwriting, experiments and creative activities away from the screen.",
                    },
                    {
                      title: "Games and Discussions",
                      description:
                        "Participate in quizzes, group discussions and interactive activities.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Star className="w-5 h-5 text-white" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Progress and Growth
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-5">
                Assessment
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We believe assessment is an essential part of understanding
                every child's learning journey. Our teachers continuously
                monitor progress and provide feedback to support improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Continuous Assessment",
                  description:
                    "Teachers check understanding during lessons and through classroom activities.",
                },
                {
                  icon: BookOpen,
                  title: "End-of-Unit Checks",
                  description:
                    "Children complete checks at the end of learning units to assess understanding.",
                },
                {
                  icon: MessageCircle,
                  title: "Parent Feedback",
                  description:
                    "Regular reports and online parent-teacher meetings keep families informed.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 max-w-3xl mx-auto text-center bg-white rounded-xl border border-blue-200 p-5">
              <p className="text-gray-600 text-sm">
                Pearson Edexcel iPrimary achievement tests, if applicable, will
                be confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* Progression */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-950 rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Moving On to Lower Secondary
                </h2>

                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  At the end of Grade 5, children move up to our British Lower
                  Secondary programme for Grades 6–8 without changing school.
                  This transition helps learners continue building academic
                  confidence and prepare for the next stage of their education.
                </p>

                <a
                  href="/british-lower-secondary"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all"
                >
                  Explore Lower Secondary
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Fees */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Fee Information
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-5">
                Indicative Tuition Fees for 2027-28
              </h2>

              <p className="text-gray-600 text-lg">
                Tuition fees vary by region. The following figures are
                indicative and final fees are yet to be confirmed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  region: "India",
                  currency: "₹",
                  amount: "95,000 – 1,30,000",
                  detail: "Indicative annual tuition",
                },
                {
                  region: "Gulf",
                  currency: "AED",
                  amount: "4,500 – 7,500",
                  detail: "Indicative annual tuition",
                },
                {
                  region: "International",
                  currency: "USD",
                  amount: "2,200 – 3,000",
                  detail: "UK, US, Canada and Australia",
                },
              ].map((fee, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {fee.region}
                  </h3>

                  <div className="text-blue-700 text-2xl md:text-3xl font-bold mb-3">
                    {fee.currency} {fee.amount}
                  </div>

                  <p className="text-gray-500 text-sm">{fee.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              Final tuition fees for the 2027-28 academic year are subject to
              confirmation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                FAQs
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-blue-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex justify-between items-center gap-4 p-6 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-lg">
                      {faq.question}
                    </span>

                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600 shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-950">
          <div className="max-w-5xl mx-auto px-6 md:px-10 text-center text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-medium mb-6">
              Admissions Open
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Try a free 2-week trial class with our teachers, then apply when
              you are ready. The ₹999 registration fee is waived during our
              launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTrialClick}
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Book a Free 2-Week Trial
              </button>

              <button
                onClick={handleApplyClick}
                className="px-8 py-4 bg-white/10 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                Apply for 2027-28
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BritishPrimary;