import React, { useState } from "react";
import "../../Academics.css";
import {
  Baby,
  BookOpen,
  Calculator,
  Globe,
  Heart,
  Palette,
  Users,
  Sparkles,
  Clock,
  CheckCircle,
  ArrowRight,
  Monitor,
  MessageCircle,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const EarlyYears = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const learningAreas = [
    {
      icon: MessageCircle,
      title: "Communication & Language",
      description:
        "Listening, speaking, stories, rhymes and early phonics.",
    },
    {
      icon: Calculator,
      title: "Early Maths",
      description:
        "Counting, comparing, shapes, patterns and simple measuring.",
    },
    {
      icon: Globe,
      title: "Understanding the World",
      description:
        "Nature, people, seasons and simple experiments.",
    },
    {
      icon: Baby,
      title: "Physical Development",
      description:
        "Fine motor skills for holding a pencil, along with movement breaks.",
    },
    {
      icon: Users,
      title: "Personal & Social Skills",
      description:
        "Taking turns, sharing ideas and growing confidence on camera.",
    },
    {
      icon: Palette,
      title: "Creativity",
      description:
        "Drawing, music, role play and making things.",
    },
  ];

  const faqs = [
    {
      question: "What age can my child start?",
      answer:
        "Our Early Years programme is designed for children aged around 3 to 5 years, covering Nursery through Kindergarten. The minimum admission age will be confirmed by our admissions team.",
    },
    {
      question: "Is online learning suitable for such young children?",
      answer:
        "Yes, when sessions are short, active and engaging, with a parent or carer nearby. Our Early Years timetable is designed around the developmental needs of young children, combining live learning with hands-on and off-screen activities.",
    },
    {
      question: "Do I need to sit with my child?",
      answer:
        "Yes, parents or carers are expected to stay with children during the first few weeks of online learning and remain nearby afterwards. Your involvement helps children feel supported and confident.",
    },
  ];

  const handleTrialClick = () => {
    window.location.href = "/contact";
  };

  const handleApplyClick = () => {
    window.location.href = "/admissions";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
              <Sparkles size={16} />
              Nursery to Kindergarten | Ages 3–5
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Online Early Years Programme
              <span className="block text-blue-300 mt-2">
                Nursery to Kindergarten
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-10">
              At this age, learning should feel like play. Our Early Years
              programme offers short, lively and hands-on online sessions that
              help children build the early skills they need to make starting
              Grade 1 feel easy. Parents and carers stay close by to support
              their little learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTrialClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Book a free 2-week trial
              </button>

              <button
                onClick={handleApplyClick}
                className="border border-white/40 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Apply for 2027-28
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-sm text-gray-500">
          <a href="/" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <span className="mx-2">&gt;</span>
          <span className="text-blue-600 font-medium">Early Years</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
                Little Learners, Big Beginnings
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Learning Through Play, Exploration & Discovery
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Our Early Years programme is designed for children roughly 3 to
                5 years old, in Nursery and Kindergarten. At this stage,
                children learn best when they explore, interact, create and
                discover things around them.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Sessions at Edulectual K12 are short, lively and hands-on.
                Children are encouraged to participate, express themselves,
                explore activities and develop the skills needed for their next
                stage of learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Learning Through Play",
                  },
                  {
                    icon: Users,
                    title: "Parent Supported",
                  },
                  {
                    icon: Lightbulb,
                    title: "Curiosity & Discovery",
                  },
                  {
                    icon: GraduationCap,
                    title: "Grade 1 Readiness",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 text-center shadow-sm"
                    >
                      <div className="bg-blue-100 text-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon size={28} />
                      </div>

                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Children Learn */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Learning Foundations
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What Children Learn
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our Early Years curriculum supports children's overall development
              through a variety of engaging and age-appropriate learning
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={index}
                  className="group border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Healthy Screen Time */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Monitor size={32} />
              </div>

              <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
                Balanced Learning
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Healthy Screen Time
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                We understand that young children need a balanced learning
                experience. Our live sessions are kept short and are combined
                with off-screen activities that parents can do together with
                their children.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Each session ends with a simple activity or idea to try at home,
                helping children continue learning beyond the screen.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-xl">
                  <Clock size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  A Balanced Routine
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  "Short and interactive live lessons",
                  "Hands-on learning activities",
                  "Movement and activity breaks",
                  "Off-screen learning with parents",
                  "Simple activities to try at home",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>Session schedule:</strong> Session length and the number
                  of sessions per day will be confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Parents Participate */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Learning Together
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              How Parents Take Part
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Parents are an important part of the Early Years learning
              experience. Your support helps your child feel comfortable,
              confident and ready to participate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Help Your Child Log In",
                description:
                  "Support your child with the device, login and classroom setup.",
              },
              {
                title: "Stay Close",
                description:
                  "Sit with your child during the first few weeks and remain nearby afterwards.",
              },
              {
                title: "Teacher Check-ins",
                description:
                  "Join short check-ins with teachers to discuss your child's learning.",
              },
              {
                title: "Activities & Progress",
                description:
                  "Receive activity ideas and progress notes to stay informed.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-white text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Users size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-300 uppercase tracking-wide text-sm font-semibold">
              Your Child's Learning Journey
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Which Pathway?
            </h2>

            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Early Years is the starting point for both of our educational
              pathways, helping children develop the foundations for their
              primary school journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Globe size={28} className="text-blue-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                British Pathway
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Children transition into British Primary as they progress to
                Grade 1 and continue through the British curriculum pathway.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-green-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={28} className="text-green-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Indian Curriculum Pathway
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Children transition into Indian curriculum Primary in Grade 1
                and continue towards the NIOS examination pathway.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
            <p className="text-blue-100 leading-relaxed">
              Families looking for an Indian-style Nursery, LKG and UKG
              programme can also explore our Pre-Primary page.
            </p>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Tuition & Planning
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Fees
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our indicative 2027-28 tuition fees vary by pathway and country.
              The ranges below are indicative for Nursery to Grade 5, and final
              fees are still to be confirmed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* India */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-blue-600" size={28} />

                <h3 className="text-xl font-bold text-gray-900">
                  India
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-gray-600 mb-2">
                    Indian Pathway
                  </p>
                  <p className="text-2xl font-bold text-blue-700">
                    ₹65,000–₹95,000
                  </p>
                </div>

                <div className="border-t border-blue-200 pt-5">
                  <p className="text-gray-600 mb-2">
                    Edexcel Pathway
                  </p>
                  <p className="text-2xl font-bold text-blue-700">
                    ₹95,000–₹1,30,000
                  </p>
                </div>
              </div>
            </div>

            {/* Gulf */}
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-indigo-600" size={28} />

                <h3 className="text-xl font-bold text-gray-900">
                  Gulf Countries
                </h3>
              </div>

              <p className="text-gray-600 mb-3">
                Indicative annual tuition
              </p>

              <p className="text-2xl font-bold text-indigo-700">
                AED 4,500–7,500
              </p>

              <p className="text-sm text-gray-500 mt-4">
                Indicative range for the programme fee structure.
              </p>
            </div>

            {/* International */}
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-green-600" size={28} />

                <h3 className="text-xl font-bold text-gray-900">
                  International
                </h3>
              </div>

              <p className="text-gray-600 mb-3">
                UK, US, Canada & Australia
              </p>

              <p className="text-2xl font-bold text-green-700">
                USD 2,200–3,000
              </p>

              <p className="text-sm text-gray-500 mt-4">
                Indicative annual tuition range.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <p className="text-yellow-800 leading-relaxed">
              <strong>Fee clarification:</strong> These are indicative Nursery
              to Grade 5 fee ranges. Whether Early Years tuition differs from
              the listed ranges will be confirmed. Final fees may vary by
              programme, pathway and country.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Session */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              A Peek Into the Classroom
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              A Typical Early Years Session
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Each session is designed to keep children engaged through
              interactive activities, storytelling, play and discovery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Greeting Song",
                description:
                  "Children begin with a cheerful greeting song to get comfortable and ready to learn.",
              },
              {
                title: "Story Time",
                description:
                  "A teacher shares a story and encourages children to listen, respond and ask questions.",
              },
              {
                title: "Counting Game",
                description:
                  "Children explore numbers through fun, interactive counting games.",
              },
              {
                title: "Hands-on Activity",
                description:
                  "A creative activity encourages children to make, draw, explore or experiment.",
              },
              {
                title: "At-home Activity",
                description:
                  "The session ends with a simple task to try later with a parent or carer.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start mb-6 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {index + 1}
                  </div>

                  {index !== 4 && (
                    <div className="w-1 h-16 bg-blue-200 mt-2" />
                  )}
                </div>

                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Frequently Asked Questions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Parents' Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left p-6 bg-white hover:bg-blue-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-blue-600 text-2xl ml-4">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6 bg-blue-50">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm mb-6">
            <Sparkles size={16} />
            Admissions Open
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Admissions for 2027-28 Are Open
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Try a free 2-week trial class with our teachers, then apply when
            you are ready. The ₹999 registration fee is waived during our
            launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleTrialClick}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Book a free 2-week trial
            </button>

            <button
              onClick={handleApplyClick}
              className="border border-white/40 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Apply for 2027-28
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyYears;