import React, { useState } from "react";
import "../../Academics.css";
import {
  Baby,
  BookOpen,
  Calculator,
  Palette,
  Music,
  Heart,
  Users,
  Sparkles,
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  GraduationCap,
  MessageCircle,
  Shapes,
  Star,
} from "lucide-react";

const PrePrimary = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const stages = [
    {
      title: "Nursery",
      subtitle: "Early Exploration & Discovery",
      icon: Baby,
      description:
        "Listening, speaking, recognising colours, shapes and sounds, simple counting and lots of rhymes and movement.",
      activities: [
        "Listening and speaking",
        "Colours, shapes and sounds",
        "Simple counting",
        "Rhymes and movement",
      ],
    },
    {
      title: "LKG",
      subtitle: "Building Early Skills",
      icon: BookOpen,
      description:
        "Letter sounds and early writing, numbers to 20, simple patterns, and stories about family, home and nature.",
      activities: [
        "Letter sounds and early writing",
        "Numbers up to 20",
        "Simple patterns",
        "Stories about family, home and nature",
      ],
    },
    {
      title: "UKG",
      subtitle: "Preparing for Grade 1",
      icon: GraduationCap,
      description:
        "Blending sounds to read simple words, writing short words, numbers to 100, early addition and subtraction, and confident speaking in front of the class.",
      activities: [
        "Reading simple words",
        "Writing short words",
        "Numbers up to 100",
        "Early addition and subtraction",
        "Confident speaking",
      ],
    },
  ];

  const engagementFeatures = [
    {
      icon: Clock,
      title: "Short & Varied Sessions",
      description:
        "Short live sessions with plenty of variety to keep young learners engaged.",
    },
    {
      icon: Music,
      title: "Songs, Puppets & Props",
      description:
        "Teachers use songs, puppets and props on camera to make lessons fun and interactive.",
    },
    {
      icon: Baby,
      title: "Movement Breaks",
      description:
        "Children enjoy movement breaks every few minutes to stay active and attentive.",
    },
    {
      icon: Heart,
      title: "Personal Encouragement",
      description:
        "Teachers call children by name and encourage them by praising their effort and participation.",
    },
  ];

  const parentSupport = [
    {
      title: "Stay Close in the First Weeks",
      description:
        "Sit with your child during the first few weeks to help them adjust to the online classroom.",
    },
    {
      title: "Prepare Learning Materials",
      description:
        "Keep crayons, paper and a few toys or household objects ready for counting and activities.",
    },
    {
      title: "Continue Learning at Home",
      description:
        "Talk about the day's story, song or activity to reinforce what your child has learned.",
    },
    {
      title: "Join the Welcome Session",
      description:
        "Attend a short welcome session before the first day to set up the learning platform together.",
    },
  ];

  const faqs = [
    {
      question: "What is the difference between LKG and UKG?",
      answer:
        "LKG is generally the first year of kindergarten, around age 4, while UKG is the second year, around age 5, before children move to Grade 1. The learning progression moves from foundational skills in LKG towards greater reading, writing, number skills and classroom confidence in UKG.",
    },
    {
      question: "How long are Pre-Primary sessions?",
      answer:
        "Pre-Primary sessions are kept short and are separated by breaks to support young children's attention spans. The exact session length will be confirmed.",
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
              Nursery | LKG | UKG
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Online Pre-Primary Classes
              <span className="block text-blue-300 mt-2">
                Nursery, LKG and UKG
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-10">
              Pre-Primary at Edulectual K12 is the Indian curriculum start to
              school. Children learn through play, songs, stories and activities
              in short live online sessions designed for little attention spans.
              Our programme prepares children for Grade 1 on the Indian
              curriculum pathway.
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
          <span className="text-blue-600 font-medium">Pre-Primary</span>
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
                A Playful Start to School
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Pre-Primary at Edulectual K12 is the Indian curriculum starting
                point for young learners. It includes Nursery, LKG (Lower
                Kindergarten) and UKG (Upper Kindergarten).
              </p>

              <p className="text-gray-600 leading-relaxed">
                Through songs, stories, play and hands-on activities, children
                begin developing language, literacy, numeracy, creativity and
                social skills. Our short live online classes are designed around
                little attention spans and help prepare children for Grade 1.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Play-Based Learning",
                  },
                  {
                    icon: Music,
                    title: "Songs & Stories",
                  },
                  {
                    icon: Shapes,
                    title: "Hands-on Activities",
                  },
                  {
                    icon: Star,
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

      {/* The Three Years */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Learning Progression
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              The Three Years of Pre-Primary
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Each year builds on the previous one, helping children develop
              confidence, independence and foundational academic skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon size={30} />
                  </div>

                  <span className="text-sm font-semibold text-blue-600">
                    Year {index + 1}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-blue-600 font-medium mb-4">
                    {stage.subtitle}
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  <div className="space-y-3">
                    {stage.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle
                          size={18}
                          className="text-blue-600 shrink-0 mt-1"
                        />
                        <p className="text-gray-600 text-sm">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle size={32} />
            </div>

            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Language Development
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Languages
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              English is the main language of teaching in our Pre-Primary
              programme. Additional language offerings, such as Hindi or a
              regional language, are to be confirmed.
            </p>

            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Language options:</strong> Hindi or regional language
                availability in Pre-Primary will be confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Play-based learning at home */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
                Learning Beyond the Classroom
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Play-Based Learning at Home
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Learning doesn't stop when the live class ends. Teachers plan
                hands-on activities using everyday household items, allowing
                children to continue exploring and practising away from the
                screen.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Parents receive a short weekly note with activity ideas to
                support their child's learning and development at home.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Everyday Learning Materials
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Crayons",
                  "Paper",
                  "Toys",
                  "Counting Objects",
                  "Household Items",
                  "Creative Materials",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 text-center shadow-sm"
                  >
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Palette size={20} />
                    </div>

                    <p className="font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white/80 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>Activity kit:</strong> Whether a physical activity kit
                  is posted to families will be confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving to Grade 1 */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-300 uppercase tracking-wide text-sm font-semibold">
              The Next Step
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Moving to Grade 1
            </h2>

            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              After UKG, children are ready to transition into primary
              education, building on the skills, confidence and curiosity
              developed during Pre-Primary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={28} className="text-blue-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Indian Curriculum Primary
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Children move into our Indian curriculum Primary programme
                after UKG and continue their academic journey towards the NIOS
                examination pathway in the senior years.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-green-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-green-300" size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                British Primary
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Families who later prefer the British pathway can transition
                their children to British Primary at the start of Grade 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Day in Pre-Primary */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Daily Learning Routine
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              A Day in Pre-Primary
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A typical Pre-Primary day includes a few short live sessions
              separated by breaks, combining stories, songs, games and
              creative activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {[
              {
                title: "Rhyme & Welcome",
                description:
                  "The day begins with a cheerful rhyme, song or greeting to help children settle in.",
              },
              {
                title: "Picture Story",
                description:
                  "Teachers introduce a picture story to develop listening, language and imagination.",
              },
              {
                title: "Counting or Sorting Game",
                description:
                  "Children practise numbers, patterns, sorting or comparing through an interactive game.",
              },
              {
                title: "Drawing or Craft",
                description:
                  "A short creative activity helps children express their ideas through drawing or making.",
              },
              {
                title: "Breaks & Movement",
                description:
                  "Sessions are separated by breaks, movement and opportunities to refresh.",
              },
              {
                title: "Family Activity",
                description:
                  "Teachers end with something simple for families to try together at home.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                  {index + 1}
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

      {/* How We Keep Little Ones Engaged */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Interactive Online Learning
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              How We Keep Little Ones Engaged Online
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our teachers use a variety of interactive strategies to make
              online learning lively, engaging and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Parents Can Help */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Parent Partnership
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              How Parents Can Help
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Your involvement helps your child feel comfortable, supported
              and confident in their online learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentSupport.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                  <Users size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-gray-600 leading-relaxed">
              Pre-Primary families can also join a short welcome session
              before the first day to set up the learning platform together.
            </p>
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

export default PrePrimary;