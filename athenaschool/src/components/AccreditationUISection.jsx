import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Globe,
  GraduationCap,
  Monitor,
  ShieldCheck,
} from 'lucide-react';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    // ABOUT THE SCHOOL
    {
      category: 'About the School',
      icon: HelpCircle,
      items: [
        {
          question: 'What is Edulectual K12 Online School?',
          answer:
            'Edulectual K12 is a fully online school for children from Nursery to Grade 12. We teach two pathways, the Pearson Edexcel British curriculum and the Indian curriculum with NIOS examinations, and each follows the same curriculum in every country we serve.',
        },
        {
          question: 'Who leads the school?',
          answer:
            'Edulectual K12 is led by co-founders PaulMichael Rowland and [PLACEHOLDER: second co-founder’s full name], who also co-founded Athena LMS. See our leadership page for more information.',
        },
        {
          question: 'Is the school recognised?',
          answer:
            'Our students take qualifications issued by Pearson Edexcel (International GCSE and International A Level) and by NIOS (Secondary and Senior Secondary). [PLACEHOLDER: the school’s own accreditation status.]',
        },
        {
          question: 'Is there a campus?',
          answer:
            'No. Edulectual K12 is fully online. Our India and USA offices handle administration only.',
        },
        {
          question: 'Which countries do you serve?',
          answer:
            'We serve families in India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US and Canada.',
        },
        {
          question: 'Is admission open to all families?',
          answer:
            'Yes. We welcome children of every religion, caste, community and background.',
        },
        {
          question: 'Is it only for homeschooling families?',
          answer:
            'No. Edulectual K12 is a full-time school. It suits relocating families, young athletes and artists, children who learn better at home, and homeschoolers who want structure and recognised exams.',
        },
        {
          question:
            'How is this different from the online classes my child’s regular school runs?',
          answer:
            'Our whole school is designed for online learning: the timetable, teaching methods, platform and support. Online is our main way of teaching, not a temporary substitute.',
        },
      ],
    },

    // CURRICULUM AND LEARNING
    {
      category: 'Curriculum & Learning',
      icon: BookOpen,
      items: [
        {
          question: 'Which curricula do you follow?',
          answer:
            'We offer the Pearson Edexcel British pathway (Primary, Lower Secondary, International GCSE and International A Level) and the Indian curriculum pathway leading to NIOS examinations.',
        },
        {
          question: 'What is the medium of instruction?',
          answer:
            'English is the medium of instruction on both pathways.',
        },
        {
          question: 'Do you offer second or foreign languages?',
          answer:
            'Yes. [PLACEHOLDER: list of languages by stage.]',
        },
        {
          question: 'How are exams conducted?',
          answer:
            'Class assessments happen online. Board exams for Pearson Edexcel or NIOS are sat in person at approved exam centres.',
        },
        {
          question: 'How will I know my child is learning?',
          answer:
            'You can track your child’s progress through regular assessments, teacher feedback on the platform, progress reports and parent–teacher meetings.',
        },
        {
          question: 'How is promotion to the next grade decided?',
          answer:
            '[PLACEHOLDER: promotion criteria.]',
        },
        {
          question: 'Is there homework?',
          answer:
            'Yes. Students receive short practice tasks after lessons and longer projects each term. The amount of homework grows with age. [PLACEHOLDER: typical daily homework time per stage.]',
        },
        {
          question: 'Will my child still write by hand?',
          answer:
            'Yes. Children write in notebooks, especially in the younger grades, and upload photos of their work for feedback.',
        },
        {
          question: 'What about sports, arts and activities?',
          answer:
            'We set movement breaks and activity tasks, offer music and arts through partner academies and run Learning Garage workshops. Families are encouraged to keep up local sport and clubs.',
        },
        {
          question: 'What if my child needs extra help?',
          answer:
            'Teachers offer support in class, and our inclusion team provides learning support plans and small-group sessions. [PLACEHOLDER: remedial session details.]',
        },
      ],
    },

    // CLASSES AND DAILY LIFE
    {
      category: 'Classes & Daily Life',
      icon: GraduationCap,
      items: [
        {
          question: 'Are classes live?',
          answer:
            'Yes. Lessons are taught live by teachers. [PLACEHOLDER: whether recordings are available.]',
        },
        {
          question: 'How many hours a day are live classes?',
          answer:
            '[PLACEHOLDER: hours per day by stage.]',
        },
        {
          question: 'How many students are in a class?',
          answer:
            '[PLACEHOLDER: maximum class size.]',
        },
        {
          question: 'What are the class timings?',
          answer:
            'Classes run in batches by time zone. Please see our Batch Timings page for more details.',
        },
        {
          question: 'Can my child change batch?',
          answer:
            'Yes. Batch changes can be requested if seats are available in the new batch.',
        },
        {
          question: 'Does an adult need to be present?',
          answer:
            'For Nursery to Grade 2, an adult should be nearby for part of the day. Older students usually manage on their own after the first few weeks.',
        },
        {
          question: 'What if my child misses a class?',
          answer:
            'Let the teacher know through the platform. Your child can catch up using the lesson materials and the teacher’s guidance. [PLACEHOLDER: recording policy.]',
        },
        {
          question: 'How do I report an absence?',
          answer:
            'Absences can be reported through the parent dashboard or by messaging the class teacher.',
        },
        {
          question: 'I am worried about screen time. What do you do?',
          answer:
            'We keep live sessions age-appropriate, build in breaks and set off-screen activities such as reading, writing, experiments and making.',
        },
        {
          question: 'Will my child make friends?',
          answer:
            'Group work, clubs, the learner council and the student podcast help children connect, including with classmates in other countries.',
        },
        {
          question: 'Is there a uniform?',
          answer:
            '[PLACEHOLDER: dress code for live sessions.]',
        },
        {
          question: 'Do you celebrate festivals and events?',
          answer:
            '[PLACEHOLDER: confirm online assemblies and celebrations.]',
        },
        {
          question: 'Are teachers full-time?',
          answer:
            '[PLACEHOLDER: confirm employment model.]',
        },
        {
          question: 'Will there be parent–teacher meetings?',
          answer:
            'Yes. Parent–teacher meetings take place online. [PLACEHOLDER: frequency.]',
        },
      ],
    },

    // TECHNOLOGY AND SAFETY
    {
      category: 'Technology & Safety',
      icon: ShieldCheck,
      items: [
        {
          question: 'What device do I need?',
          answer:
            'A laptop or desktop with a webcam and a headset is best. A tablet is fine for the youngest children. See our requirements page for details.',
        },
        {
          question: 'Do I need a printer?',
          answer:
            'Not necessarily. Most work is done in notebooks or online. [PLACEHOLDER: confirm.]',
        },
        {
          question: 'Is the platform safe?',
          answer:
            'Each learner has a unique login, classes are open only to enrolled students and staff, and teachers control audio, video and chat.',
        },
        {
          question: 'Will my child’s data be protected?',
          answer:
            'We handle personal data according to our privacy policy. [PLACEHOLDER: link and summary.]',
        },
        {
          question: 'Can students see each other’s contact details?',
          answer:
            'No. Personal contact details are not shared between students.',
        },
        {
          question: 'Is there a mobile app?',
          answer:
            '[PLACEHOLDER: confirm.] The platform works in a modern browser on a laptop, desktop or tablet.',
        },
      ],
    },

    // ADMISSIONS AND FEES
    {
      category: 'Admissions & Fees',
      icon: Globe,
      items: [
        {
          question: 'How do I apply?',
          answer:
            'Book a free trial or call, complete the online form, take a placement check, then confirm your enrolment and payment. See the Apply page for details.',
        },
        {
          question: 'Can families outside India apply?',
          answer:
            'Yes. Families from any of the countries we serve can apply.',
        },
        {
          question: 'Can my child join mid-year?',
          answer:
            '[PLACEHOLDER: mid-year admission policy.]',
        },
        {
          question: 'Can I enrol for only some subjects?',
          answer:
            '[PLACEHOLDER: confirm.]',
        },
        {
          question: 'Do twins or siblings need separate registrations?',
          answer:
            'Yes. Each child is registered separately. Siblings receive 10% off for the second child and 15% off for the third.',
        },
        {
          question: 'What are the fees?',
          answer:
            'Indicative 2027-28 fee ranges are available on the Fees page. Final fees are still to be confirmed.',
        },
        {
          question: 'How can I pay?',
          answer:
            '[PLACEHOLDER: payment methods and instalments.]',
        },
        {
          question: 'Is the fee refundable?',
          answer:
            '[PLACEHOLDER: refund policy.]',
        },
        {
          question: 'Can my child move to a regular school later?',
          answer:
            'Yes. We provide reports and a transfer certificate. [PLACEHOLDER: confirm the process.]',
        },
      ],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* PAGE HEADING */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Help & Information
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-2">
            Online School FAQs
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are clear answers to the questions parents ask us most often.
            They are grouped by topic, and anything we are still confirming is
            marked. If your question is not here, contact our admissions team.
          </p>

          {/* TOP BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/apply-now#free-trial"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Free 2-Week Trial
            </Link>

            <Link
              to="/apply-now#apply"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply for 2027-28
            </Link>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-6">
          {faqData.map((category, catIndex) => {
            const IconComponent = category.icon;

            return (
              <div
                key={catIndex}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                {/* CATEGORY HEADER */}
                <div className="bg-blue-50 px-6 py-4 border-b border-gray-200 flex items-center">
                  <IconComponent
                    size={20}
                    className="text-blue-600 mr-3 flex-shrink-0"
                  />

                  <h3 className="text-lg font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                {/* QUESTIONS */}
                <div className="divide-y divide-gray-100">
                  {category.items.map((item, itemIndex) => {
                    const accordionKey = `${catIndex}-${itemIndex}`;

                    return (
                      <div key={accordionKey}>
                        <button
                          onClick={() => toggleAccordion(accordionKey)}
                          aria-expanded={openIndex === accordionKey}
                          className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors gap-4"
                        >
                          <span className="font-medium text-gray-900">
                            {item.question}
                          </span>

                          {openIndex === accordionKey ? (
                            <ChevronUp
                              size={20}
                              className="text-blue-600 flex-shrink-0"
                            />
                          ) : (
                            <ChevronDown
                              size={20}
                              className="text-gray-500 flex-shrink-0"
                            />
                          )}
                        </button>

                        {/* ANSWER */}
                        {openIndex === accordionKey && (
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-200">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Admissions for 2027-28 are open
            </h3>

            <p className="text-blue-100 mb-6 leading-relaxed">
              Our admissions team is happy to help. Book a free 2-week trial
              class or send us your question. The ₹999 registration fee is
              waived during our launch.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/apply-now#free-trial"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Book a Free 2-Week Trial
              </Link>

              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-block"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Accordion;