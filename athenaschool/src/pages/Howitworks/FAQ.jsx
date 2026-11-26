import { useState } from 'react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('about');
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const categories = {
    about: {
      title: 'About the School',
      questions: [
        {
          question: 'What is Edulectual K12 Online School?',
          answer:
            'Edulectual K12 is a fully online school for children from Nursery to Grade 12. We teach two pathways, the Pearson Edexcel British curriculum and the Indian curriculum with NIOS examinations, and each follows the same curriculum in every country we serve.',
        },
        {
          question: 'Who leads the school?',
          answer:
            'Edulectual K12 is led by co-founders PaulMichael Rowland and [PLACEHOLDER: second co-founder’s full name], who also co-founded Athena LMS. See our leadership page.',
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
            "How is this different from the online classes my child's regular school runs?",
          answer:
            'Our whole school is designed for online learning: the timetable, the teaching methods, the platform and the support. Online is our main way of teaching, not a temporary substitute.',
        },
      ],
    },

    academics: {
      title: 'Curriculum and Learning',
      questions: [
        {
          question: 'Which curricula do you follow?',
          answer:
            'We follow the Pearson Edexcel British pathway (Primary, Lower Secondary, International GCSE, International A Level) and the Indian curriculum pathway leading to NIOS exams.',
        },
        {
          question: 'What is the medium of instruction?',
          answer: 'English, on both pathways.',
        },
        {
          question: 'Do you offer second or foreign languages?',
          answer: 'Yes. [PLACEHOLDER: list of languages by stage.]',
        },
        {
          question: 'How are exams conducted?',
          answer:
            'Class assessments happen online. Board exams, Pearson Edexcel or NIOS, are sat in person at approved exam centres.',
        },
        {
          question: 'How will I know my child is learning?',
          answer:
            'Through regular assessments, teacher feedback on the platform, progress reports and parent–teacher meetings.',
        },
        {
          question: 'How is promotion to the next grade decided?',
          answer: '[PLACEHOLDER: promotion criteria.]',
        },
        {
          question: 'Is there homework?',
          answer:
            'Yes, short practice tasks after lessons and longer projects each term. The amount grows with age. [PLACEHOLDER: typical daily homework time per stage.]',
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

    classes: {
      title: 'Classes and Daily Life',
      questions: [
        {
          question: 'Are classes live?',
          answer:
            'Yes. Lessons are taught live by teachers. [PLACEHOLDER: whether recordings are available.]',
        },
        {
          question: 'How many hours a day are live classes?',
          answer: '[PLACEHOLDER: hours per day by stage.]',
        },
        {
          question: 'How many students are in a class?',
          answer: '[PLACEHOLDER: maximum class size.]',
        },
        {
          question: 'What are the class timings?',
          answer:
            'Classes run in batches by time zone. See the batch timings page.',
        },
        {
          question: 'Can my child change batch?',
          answer:
            'Yes, on request, if seats are available in the new batch.',
        },
        {
          question: 'Does an adult need to be present?',
          answer:
            'For Nursery to Grade 2, an adult should be nearby for part of the day. Older students usually manage on their own after the first few weeks.',
        },
        {
          question: 'What if my child misses a class?',
          answer:
            "Let the teacher know through the platform. Your child can catch up using the lesson materials and the teacher's guidance. [PLACEHOLDER: recording policy.]",
        },
        {
          question: 'How do I report an absence?',
          answer:
            'Through the parent dashboard or by messaging the class teacher.',
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
          answer: '[PLACEHOLDER: dress code for live sessions.]',
        },
        {
          question: 'Do you celebrate festivals and events?',
          answer:
            '[PLACEHOLDER: confirm online assemblies and celebrations.]',
        },
        {
          question: 'Are teachers full-time?',
          answer: '[PLACEHOLDER: confirm employment model.]',
        },
        {
          question: 'Will there be parent–teacher meetings?',
          answer: 'Yes, online. [PLACEHOLDER: frequency.]',
        },
      ],
    },

    technology: {
      title: 'Technology and Safety',
      questions: [
        {
          question: 'What device do I need?',
          answer:
            'A laptop or desktop with a webcam and a headset is best. A tablet is fine for the youngest children. See the requirements page.',
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
          question: "Will my child's data be protected?",
          answer:
            'We handle personal data according to our privacy policy. [PLACEHOLDER: link and summary.]',
        },
        {
          question: "Can students see each other's contact details?",
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

    admissions: {
      title: 'Admissions and Fees',
      questions: [
        {
          question: 'How do I apply?',
          answer:
            'Book a free trial or call, complete the online form, take a placement check, then confirm and pay. See the apply page.',
        },
        {
          question: 'Can families outside India apply?',
          answer: 'Yes, from any of the countries we serve.',
        },
        {
          question: 'Can my child join mid-year?',
          answer: '[PLACEHOLDER: mid-year admission policy.]',
        },
        {
          question: 'Can I enrol for only some subjects?',
          answer: '[PLACEHOLDER: confirm.]',
        },
        {
          question: 'Do twins or siblings need separate registrations?',
          answer:
            'Yes, each child is registered separately. Siblings receive 10% off for the second child and 15% off for the third.',
        },
        {
          question: 'What are the fees?',
          answer:
            'Indicative 2027-28 ranges are on the fees page. Final fees are still to be confirmed.',
        },
        {
          question: 'How can I pay?',
          answer: '[PLACEHOLDER: payment methods and instalments.]',
        },
        {
          question: 'Is the fee refundable?',
          answer: '[PLACEHOLDER: refund policy.]',
        },
        {
          question: 'Can my child move to a regular school later?',
          answer:
            'Yes. We provide reports and a transfer certificate. [PLACEHOLDER: confirm the process.]',
        },
      ],
    },
  };

  const filteredQuestions = categories[activeCategory].questions.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const expandAll = () => {
    const updated = {};
    filteredQuestions.forEach((item, index) => {
      updated[`${activeCategory}-${index}`] = true;
    });
    setExpandedItems((prev) => ({ ...prev, ...updated }));
  };

  const collapseAll = () => {
    const updated = {};
    filteredQuestions.forEach((item, index) => {
      updated[`${activeCategory}-${index}`] = false;
    });
    setExpandedItems((prev) => ({ ...prev, ...updated }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              FAQs
            </h1>

            <p className="text-xl mb-8">
              Online School FAQs
            </p>

            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Here are clear answers to the questions parents ask us most often.
              They are grouped by topic, and anything we are still confirming is
              marked. If your question is not here, contact our admissions team.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/trial"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a free 2-week trial
              </a>

              <a
                href="/admissions"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Apply for 2027-28
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span>›</span>
            <span className="text-blue-600 font-medium">FAQs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Search */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-12 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  setSearchTerm('');
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* FAQ Container */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6">

              {/* Heading + Controls */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {categories[activeCategory].title}
                </h2>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={expandAll}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Expand all
                  </button>

                  <span className="text-gray-300">|</span>

                  <button
                    onClick={collapseAll}
                    className="text-sm text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Collapse all
                  </button>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((item, index) => {
                    const itemKey = `${activeCategory}-${index}`;
                    const isExpanded = expandedItems[itemKey];

                    return (
                      <div
                        key={itemKey}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(activeCategory, index)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                        >
                          <span className="font-medium text-gray-800">
                            {item.question}
                          </span>

                          <svg
                            className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {isExpanded && (
                          <div className="px-6 py-5 bg-white border-t border-gray-200 animate-fade-in">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      No questions found matching "{searchTerm}".
                    </p>

                    <button
                      onClick={() => setSearchTerm('')}
                      className="mt-4 text-blue-600 font-medium hover:text-blue-800"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>

              {/* Result Count */}
              {filteredQuestions.length > 0 && (
                <p className="text-sm text-gray-500 mt-6">
                  Showing {filteredQuestions.length} question
                  {filteredQuestions.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Still Have a Question?
            </h2>

            <p className="text-gray-700 mb-6">
              Our admissions team is happy to help. Book a free 2-week trial
              class or send us your question.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/trial"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a free 2-week trial
              </a>

              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact admissions
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">

            {/* Admissions */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Admissions Guide
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Complete guide to the admission process.
              </p>

              <a
                href="/apply"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Learn More →
              </a>
            </div>

            {/* How it Works */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                How It Works
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Understand how our online learning platform works.
              </p>

              <a
                href="/how-it-works"
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Learn More →
              </a>
            </div>

            {/* Parent Portal */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Parent Portal
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Access learning resources and track your child's progress.
              </p>

              <a
                href="/parent-portal"
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                Learn More →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}