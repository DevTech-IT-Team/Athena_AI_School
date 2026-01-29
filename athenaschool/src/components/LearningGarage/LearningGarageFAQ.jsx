import React, { useState } from 'react';

const LearningGarageFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "Do I need prior experience?",
    "Is the first session really free?",
    "How many sessions can my child attend in a day?",
    "How do certifications work?",
    "Are passes refundable or transferable?",
    "Do Athena AI School learners and alumni get benefits?"
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            FAQs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-lg p-6 text-left border border-gray-200 hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{faq}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="bg-blue-50 border border-blue-200 rounded-b-lg p-6 mt-1">
                  <p className="text-gray-700">
                    This is placeholder content for the FAQ answer. The actual answer would provide detailed information about {faq.toLowerCase()}.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGarageFAQ;
