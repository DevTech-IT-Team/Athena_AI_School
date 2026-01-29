import { useState } from 'react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('about');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = {
    about: {
      title: 'About 21K School',
      questions: [
        'Is 21K School recognised/affiliated?',
        'Will 21K provide the marksheet and Transfer Certificate?',
        'What does 21K stand for?',
        'How does 21K School compare with physical schools?',
        'Is 21K School only for Homeschooling?',
        'My physical School also conducts online classes. How is 21K different?',
        'Is 21K School a Minority School?',
        'Is 21K School open for everyone irrespective of religion, caste, creed or ethnicity?',
        'Is this an Indian Organization?',
        'Who leads 21K School?',
        'What is the purpose of 21K School',
        'who is the founder of 21K School',
        'What is the "New Dawn", 21K\'s new brand identity?',
        'What is the intent behind the new tagline, "21K School - Where Every Learner Finds Their Path,"'
      ]
    },
    academics: {
      title: 'About Academics',
      questions: [
        'Is there a basis for promoting learners to the next grade at the end of the academic year?',
        'What about inter-class or inter-school competitions?',
        'How will I know my child is learning?',
        'How will my child read books, as there is no library?',
        'How will Sports / Games be conducted?',
        'What will my child learn additionally compared to physical School?',
        'What are Remedial Sessions?',
        'What are enrichment classes?',
        'What is activity-based and experiential learning? How will it be delivered online?',
        'How much homework will the learners have in a day?',
        'In school, my child develops several values and life skills. Will 21K be able to do the same?',
        'What about discipline?',
        'What happens if my child is unable to do his homework?',
        'How will examinations be conducted?',
        'Who will supervise the learners during exams at home? What if the learners copy the answers from the internet?',
        'Will there be writing work?',
        'What about picnics and excursions?',
        'What is a digital portfolio?',
        'What curriculum do you follow in Pre-Primary (Nursery to KG2)?',
        'What are the prime and specific areas of development?',
        'What curriculum do you follow in Primary (Grades 1 to 5) and Middle (Grades 6 to 8) under the Indian Programme',
        'What is the medium of instruction?',
        'Do you offer a Third Language?',
        'Do you offer a Foreign Language?'
      ]
    },
    howItWorks: {
      title: 'How it Works',
      questions: [
        'What is the learner\'s Learning Kit?',
        'When will the parents get the learning kit?',
        'I am worried about loneliness or lack of socialisation',
        'Is 21K school\'s learning environment secure and safe?',
        'Will my data be protected?',
        'Are your facilitators part-time or full-time?',
        'How do you recruit your facilitators? Are all facilitators well-qualified and trained?',
        'I am worried about screen time and its effect on a child\'s health',
        'Are three to four hours of live classes sufficient for Grade 1-8?',
        'How will I keep my child engaged the whole day if the classes are only for three hours?',
        'How can my child attend live classes when I am not at home?',
        'Is the requirement of an adult attending the live classes with a child essential?',
        'The Batches have fixed timing. But, you claim anytime, anywhere learning. How is that possible?',
        'How many learners will be there in my child\'s classroom session?',
        'I don\'t want too much of the digital world around my child. Isn\'t it advised that learners must get minimum exposure to technology and screen time?',
        'How many hours of live classes will the learners be required to attend?',
        'What is the purpose of the live classes?',
        'What if my child missed any of the live classes?',
        'How do I report leave of absence?',
        'How can I speak to the Principal / Facilitators?',
        'How do I give feedback about facilitators?',
        'Will there be a PTM?',
        'What kind of computer system or device will I need at home?',
        'Do I need a printer at home?',
        'Who will correct worksheets or check the homework?',
        'Will I get a Progress Report Card?',
        'Will the 21K School celebrate festivals and other important days?',
        'Will the School conduct assembly or daily prayers?',
        'Is there a uniform or dress code for live sessions?',
        'Would learners have access to each other\'s contact details or personal information?',
        'What if I share my user ID and password with someone else?',
        'Can I change the Batch?',
        'Is Saturday a working day for School?',
        'Will the facilitators give personal attention to my child?'
      ]
    },
    registration: {
      title: 'Registration',
      questions: [
        'Is 21K open for learners residing outside India?',
        'Is the fee refundable?',
        'Is 21K School for me? How do I decide?',
        'Who Should register?',
        'I prefer to send my child to a physical school? How can 21K help?',
        'How can I pay the fees?',
        'How can I register my child?',
        'I have twins. Do I need to register each child separately?',
        'My child and her cousin are in the same class. Can they attend live classes together?',
        'In case I am not satisfied with the Program, how can I discontinue?',
        'Can I register my child in the middle of the academic year?',
        'Can I register only for some subjects?',
        'What are the positive benefits of schooling through 21K?',
        'Will I be able to seek admission into a traditional school after one year of home-schooling?'
      ]
    },
    miscellaneous: {
      title: 'Miscellaneous',
      questions: [
        'Does 21K School have a mobile App?',
        'What is home-schooling?',
        'Are Online Schools the future?',
        'What is Blended Learning?',
        'What is Flipped Learning?'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">FAQ</h1>
            <p className="text-xl mb-8">Frequently Asked Questions about 21K School</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Enquire Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>›</span>
            <span className="text-blue-600 font-medium">FAQ</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {categories[activeCategory].title}
              </h2>
              <div className="space-y-4">
                {categories[activeCategory].questions.map((question, index) => {
                  const itemKey = `${activeCategory}-${index}`;
                  const isExpanded = expandedItems[itemKey];
                  
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(activeCategory, index)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium text-gray-800">{question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-600 transition-transform ${
                            isExpanded ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isExpanded && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-600">
                            This is a placeholder answer for the question: "{question}". 
                            Our team is working on providing detailed answers to all frequently asked questions. 
                            For immediate assistance, please contact our support team.
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Admissions Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Complete guide to the admission process</p>
              <a href="/apply-now" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Learn More →
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">How It Works</h3>
              <p className="text-gray-600 text-sm mb-4">Understanding our online learning platform</p>
              <a href="/how-it-works" className="text-green-600 hover:text-green-700 font-medium text-sm">
                Learn More →
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Parent Portal</h3>
              <p className="text-gray-600 text-sm mb-4">Access resources and track progress</p>
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
