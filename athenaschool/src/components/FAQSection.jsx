import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Tag } from 'lucide-react';
import { pathwayContent } from '../data/pathwayContent';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-950 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {pathwayContent.faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-sm border-l-4 border-transparent hover:border-sky-400 transition-all">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-sky-500" />
                  </div>
                  <span className="text-lg font-semibold text-blue-950">{faq.question}</span>
                </div>
                {openFaq === index ? <ChevronUp className="text-sky-400" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openFaq === index && (
                <div className="px-8 pb-8 text-gray-600 leading-relaxed animate-fadeIn">
                  <div className="mb-2 text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                    <Tag className="w-3 h-3" /> {faq.category}
                  </div>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
