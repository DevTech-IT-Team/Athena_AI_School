import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Globe,
  GraduationCap,
} from 'lucide-react';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: 'General',
      icon: HelpCircle,
      items: [
        {
          question: 'Is Edulectual K12 a fully online school?',
          answer:
            'Yes. Edulectual K12 is a fully online school. All teaching happens online, so your child learns from home. There is no campus to attend.',
        },
        {
          question: 'Which grades can join Edulectual K12?',
          answer:
            'Our programmes cover Nursery to Grade 12. [PLACEHOLDER: confirm which grades are open for 2027-28 admission.]',
        },
        {
          question: 'Which countries do you serve?',
          answer:
            'We welcome families from India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US and Canada. The curriculum is the same in every country.',
        },
        {
          question: 'How does online schooling work?',
          answer:
            'Children learn from home through live online classes with teachers, follow a structured timetable and work towards recognised qualifications. Online schooling provides a structured school experience without the need to travel to a physical campus.',
        },
      ],
    },
    {
      category: 'Curriculum & Pathways',
      icon: BookOpen,
      items: [
        {
          question: 'Which curricula do you offer?',
          answer:
            'We offer two pathways: the Pearson Edexcel British pathway, covering Primary, Lower Secondary, International GCSE and International A Level, and the Indian curriculum pathway with NIOS examinations.',
        },
        {
          question: 'What is the Pearson Edexcel British pathway?',
          answer:
            'The Pearson Edexcel British pathway includes Primary, Lower Secondary, International GCSE and International A Level programmes. It provides a structured learning progression towards internationally recognised qualifications.',
        },
        {
          question: 'What is the Indian curriculum pathway?',
          answer:
            'Our Indian curriculum pathway follows an Indian curriculum with NIOS examinations. Students work towards NIOS Secondary and Senior Secondary qualifications.',
        },
        {
          question: 'Is the curriculum the same in every country?',
          answer:
            'Yes. Families in every country follow the same curriculum. Whether you live in India, the Gulf, the UK, Australia, the US or Canada, your child follows the same academic pathway.',
        },
      ],
    },
    {
      category: 'Learning & Classes',
      icon: GraduationCap,
      items: [
        {
          question: 'Are classes live or recorded?',
          answer:
            'Classes are taught live by teachers. [PLACEHOLDER: confirm whether recordings are available for revision.]',
        },
        {
          question: 'Can my child try a class before enrolling?',
          answer:
            'Yes. Families can book a free 2-week trial or demo class to meet the teachers and experience a real lesson before making an enrolment decision.',
        },
        {
          question: 'How many hours a day will my child study online?',
          answer:
            '[PLACEHOLDER: hours per day by stage.]',
        },
        {
          question: 'Does a parent need to be present during classes?',
          answer:
            'For Early Years and early Primary, a parent or carer should be nearby for part of the day. Older students work more independently.',
        },
      ],
    },
    {
      category: 'Admissions & Fees',
      icon: Globe,
      items: [
        {
          question: 'How do I apply?',
          answer:
            'Book a free trial or call the admissions team, complete the online application form, take a placement check where required, and confirm your child’s place and payment. Visit our admissions page for the full process.',
        },
        {
          question: 'Can families outside India apply?',
          answer:
            'Yes. We accept families from India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US and Canada.',
        },
        {
          question: 'Is there a registration fee?',
          answer:
            'The ₹999 (USD 12) registration fee is waived during our launch.',
        },
        {
          question: 'Can we try online school before committing?',
          answer:
            'Yes. You can book a free 2-week trial class or demo class to experience our online teaching before enrolling.',
        },
        {
          question: 'When does the 2027-28 academic year begin?',
          answer:
            'Admissions are currently open for the 2027-28 academic year. [PLACEHOLDER: confirm academic year start date.]',
        },
      ],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Help & Information
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Edulectual K12 Online School,
            our programmes, learning pathways and admissions for 2027-28.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {faqData.map((category, catIndex) => {
            const IconComponent = category.icon;

            return (
              <div
                key={catIndex}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                {/* Category Header */}
                <div className="bg-blue-50 px-6 py-4 border-b border-gray-200 flex items-center">
                  <IconComponent
                    size={20}
                    className="text-blue-600 mr-3"
                  />

                  <h3 className="text-lg font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                {/* Accordion Items */}
                <div className="divide-y divide-gray-100">
                  {category.items.map((item, itemIndex) => {
                    const accordionKey = `${catIndex}-${itemIndex}`;

                    return (
                      <div key={itemIndex}>
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

                        {/* Answer */}
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

        {/* Admissions CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Admissions for 2027-28 are open
            </h3>

            <p className="text-blue-100 mb-6 leading-relaxed">
              Try a free 2-week trial class with our teachers, then apply when
              you are ready. The ₹999 registration fee is waived during our
              launch.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/apply-now#free-trial"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Book a Free 2-Week Trial
              </Link>

              <Link
                to="/apply-now#apply"
                className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-block"
              >
                Apply for 2027-28
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Still Have Questions?
          </h3>

          <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
            Our admissions team is happy to help with questions about
            programmes, pathways, fees or enrolment.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Admissions
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Accordion;