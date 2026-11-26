import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Users,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Heart,
  Laptop,
  Wifi,
  FileText,
  GraduationCap,
  Headphones,
  Settings,
  Globe,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  Monitor,
  Calendar,
} from 'lucide-react';

function Resources() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = {
    hero: {
      title: 'Help and Support',
      subtitle: 'Help and Support for Online School Families',
      description:
        "This page is the starting point for current Edulectual K12 families who need help. It covers your child's learning, the platform and everyday life as an online school family. Prospective parents will find most answers on our FAQ page.",
    },

    quickActions: [
      {
        title: 'Academic Support',
        description:
          'Get help with subjects, learning difficulties, practice and additional academic support.',
        icon: BookOpen,
        color: 'bg-blue-600',
        link: '/#contact',
      },
      {
        title: 'Technical Help',
        description:
          'Troubleshoot login, audio, video, browser and internet connection issues.',
        icon: Shield,
        color: 'bg-sky-500',
        link: '/#contact',
      },
      {
        title: 'Parent Resources',
        description:
          'Explore practical guides for routines, study spaces and supporting learning at home.',
        icon: Users,
        color: 'bg-indigo-600',
        link: '/faq',
      },
    ],

    technicalHelp: [
      {
        question: 'Cannot log in',
        answer:
          'Use the "Forgot password" option to reset your password. If you are still unable to access your account, contact learner support.',
        icon: Settings,
      },
      {
        question: 'No sound or video',
        answer:
          'Check your browser permissions for microphone and camera access. Try another browser or headset if the issue continues.',
        icon: Headphones,
      },
      {
        question: 'Slow connection',
        answer:
          'Close other applications that may be using your internet connection. Switch to a wired connection if possible, or try a hotspot.',
        icon: Wifi,
      },
      {
        question: 'Still stuck?',
        answer:
          'Contact support with a screenshot of the issue so the team can help you troubleshoot. [PLACEHOLDER: support email, phone and hours.]',
        icon: MessageCircle,
      },
    ],

    parentGuides: [
      {
        question: 'Setting up a home study space',
        answer:
          'Create a quiet, comfortable and well-lit study area with a desk, chair and the devices your child needs for online lessons.',
      },
      {
        question: 'Building a daily routine for online school',
        answer:
          'Use a consistent timetable for live lessons, independent work, breaks, reading and activities to help children build healthy learning habits.',
      },
      {
        question: 'Supporting young children with logins and breaks',
        answer:
          'Younger learners may need an adult nearby to help them log in, navigate the platform, organise materials and take regular breaks.',
      },
      {
        question: 'Preparing for exams at home',
        answer:
          'Plan revision in manageable sessions, organise notes and resources, practise past papers and maintain a calm, distraction-free study space.',
      },
    ],

    policies: [
      {
        title: 'Privacy Policy',
        description: 'How personal information is collected and handled.',
      },
      {
        title: 'Safeguarding Policy',
        description: 'Our approach to protecting learners.',
      },
      {
        title: 'Fee and Refund Policy',
        description: 'Information about fees, payments and refunds.',
      },
      {
        title: 'Code of Conduct',
        description: 'Expectations for learners, parents and school staff.',
      },
    ],
  };

  return (
    <div className="font-sans text-blue-950 bg-white">

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-200/20 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full text-sky-700 font-semibold text-sm mb-6">
            <HelpCircle className="w-4 h-4" />
            Learner & Parent Support
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            {content.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            {content.hero.subtitle}
          </p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            {content.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>

            <Link
              to="/#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Book a free 2-week trial
            </Link>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <span className="text-blue-600 font-medium">
              Help and Support
            </span>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
              Quick Access
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              How Can We Help?
            </h2>

            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.quickActions.map((action, index) => {
              const IconComponent = action.icon;

              return (
                <Link
                  key={index}
                  to={action.link}
                  className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
                >
                  <div className="absolute inset-0 border-2 border-blue-200 translate-x-2 translate-y-2 rounded-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                  <div className="relative z-10">
                    <div
                      className={`${action.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-blue-950 mb-3">
                      {action.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {action.description}
                    </p>

                    <div className="flex items-center text-sky-600 font-semibold group-hover:text-blue-950 transition-colors">
                      Get Help
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMIC SUPPORT */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
                Learning Assistance
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                Academic Support
              </h2>

              <div className="w-24 h-1 bg-sky-400 mb-8"></div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                If your child is finding a subject hard, start with the class
                teacher. They can suggest practice, arrange a check-in or refer
                your child to learner support.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                For additional needs, our inclusion team can help.
              </p>

              <Link
                to="/#contact"
                className="inline-flex items-center mt-8 text-blue-600 font-semibold hover:text-blue-950 transition-colors"
              >
                Contact the school
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">
                  Teacher Guidance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get guidance, practice suggestions and academic check-ins.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <Heart className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">
                  Learner Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Additional help for learners who need extra assistance.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <Users className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">
                  Inclusion Team
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Support for children with additional learning needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <Lightbulb className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">
                  Practice & Guidance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suggestions to help children build confidence and improve.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL HELP */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
              Troubleshooting
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Technical Help
            </h2>

            <div className="w-24 h-1 bg-sky-400 mx-auto mb-8"></div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Having trouble with the platform? Find quick solutions to common
              technical problems below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.technicalHelp.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(`tech-${index}`)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-sky-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-sky-600" />
                      </div>

                      <h3 className="text-xl font-bold text-blue-950">
                        {item.question}
                      </h3>
                    </div>

                    {openIndex === `tech-${index}` ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {openIndex === `tech-${index}` && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      <div className="border-l-2 border-sky-300 pl-4">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARENT GUIDES */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
              Family Resources
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Guides for Parents
            </h2>

            <div className="w-24 h-1 bg-sky-400 mx-auto mb-8"></div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical guidance to help your family make online learning
              comfortable, organised and effective.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {content.parentGuides.map((guide, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                <button
                  onClick={() => toggleAccordion(`guide-${index}`)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-sky-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>

                    <span className="text-lg font-semibold text-blue-950">
                      {guide.question}
                    </span>
                  </div>

                  {openIndex === `guide-${index}` ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openIndex === `guide-${index}` && (
                  <div className="px-6 md:px-8 pb-8 text-gray-600">
                    <div className="ml-4 md:ml-16 border-l-2 border-sky-200 pl-6 leading-relaxed">
                      {guide.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            [PLACEHOLDER: link each guide once written – these can be blog posts.]
          </p>
        </div>
      </section>

      {/* POLICIES */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
              School Information
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Policies
            </h2>

            <div className="w-24 h-1 bg-sky-400 mx-auto mb-8"></div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the policies that help families understand our practices,
              responsibilities and expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.policies.map((policy, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-sky-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-sky-600" />
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  {policy.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-sky-50 border border-sky-100 rounded-2xl p-8 text-center">
            <p className="text-gray-700">
              [PLACEHOLDER: links to the privacy policy, safeguarding policy,
              fee and refund policy, and code of conduct.]
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SUPPORT */}
      <section className="py-24 px-6 md:px-12 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 p-8">
            {[...Array(48)].map((_, i) => (
              <MessageCircle key={i} className="w-6 h-6 text-white" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-sky-400 font-bold tracking-widest text-sm uppercase block mb-4">
              Get in Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Support
            </h2>

            <div className="w-24 h-1 bg-sky-400 mx-auto mb-8"></div>

            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Need help with your child's learning or the platform? Reach out to
              our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Email Support
              </h3>

              <p className="text-sky-100 leading-relaxed mb-6">
                Email [PLACEHOLDER: support email] or call our India or USA
                team. See the contact page for full details.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-950 px-6 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Feedback and Complaints
              </h3>

              <p className="text-sky-100 leading-relaxed mb-6">
                If something is not working, tell us. Start with the class
                teacher. If the issue is not resolved, contact the pathway head
                or school leadership through the contact page.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-950 px-6 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors"
              >
                Contact School Leadership
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-sky-100 text-center leading-relaxed">
              We acknowledge every concern and explain what we will do.
              [PLACEHOLDER: link to the complaints policy.]
            </p>
          </div>
        </div>
      </section>

      {/* PROSPECTIVE FAMILIES */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
                Future Families
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                For Prospective Families
              </h2>

              <div className="w-24 h-1 bg-sky-400 mb-8"></div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                If you are still deciding, our FAQ, fees and admissions pages
                answer most questions, and you can book a free 2-week trial
                class.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/faq"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  FAQs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <Link
                  to="/fees"
                  className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Fees
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-sky-100 p-8 md:p-12">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-sky-600" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Experience Online School
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Explore our school, experience a live class and see how our
                teachers support learners before you make a decision.
              </p>

              <Link
                to="/#contact"
                className="inline-flex items-center text-sky-600 font-semibold hover:text-blue-950 transition-colors"
              >
                Book a free 2-week trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* TIME ZONE SUPPORT */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Globe className="w-10 h-10 text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Help in Your Time Zone
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Support hours are arranged to cover our main regions.
                [PLACEHOLDER: confirm support hours by region.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="w-12 h-12 text-white mr-4" />
            <Heart className="w-8 h-8 text-pink-200" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Admissions for 2027-28 Are Open
          </h2>

          <p className="text-xl text-sky-100 mb-6 max-w-2xl mx-auto">
            Try a free 2-week trial class with our teachers, then apply when
            you are ready.
          </p>

          <div className="inline-block bg-white/20 border border-white/30 rounded-xl px-6 py-4 mb-8">
            <p className="text-white font-semibold">
              ₹999 registration fee waived during our launch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Book a free 2-week trial
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/apply-now"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Apply for 2027-28
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Resources;