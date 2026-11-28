import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Laptop,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { pathwayContent } from "../data/pathwayContent";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    {
      title: "About the school",
      icon: HelpCircle,
      color: "bg-blue-600",
      faqs: [
        "What is Edulectual K12 Online School?",
        "Who leads the school?",
        "Is this a full-time school?",
        "Is there a campus?",
        "Who teaches the classes?",
        "What qualifications do teachers have?",
        "Is there a free trial?",
        "How is this different from an online class or regular school?",
      ],
    },
    {
      title: "Curriculum and learning",
      icon: BookOpen,
      color: "bg-teal-600",
      faqs: [
        "Which curriculum does my child follow?",
        "What is the benefit of this curriculum?",
        "Do you offer second or foreign languages?",
        "How are classes structured?",
        "How will my child be learning?",
        "How is progress monitored?",
        "Is there homework?",
        "Will my child be able to study abroad?",
        "What about sports, arts and activities?",
        "What if my child needs extra help?",
      ],
    },
    {
      title: "Classes and daily life",
      icon: GraduationCap,
      color: "bg-amber-500",
      faqs: [
        "Are classes live?",
        "How many hours a day are involved?",
        "How many students are in a class?",
        "What are the class timings?",
        "Can my child change batches?",
        "Does my child need to be present?",
        "What if my child misses a class?",
        "How do I report an absence?",
        "Can my child interact with other students?",
        "Will my child make friends?",
        "Is there a uniform?",
        "Do you celebrate festivals and events?",
        "Is attendance compulsory?",
        "Will there be parent-teacher meetings?",
      ],
    },
    {
      title: "Technology and safety",
      icon: Laptop,
      color: "bg-orange-500",
      faqs: [
        "What devices do I need?",
        "Do I need a printer?",
        "Is the platform safe?",
        "Will my child's data be protected?",
        "Can students access classes on different devices?",
        "Is there a mobile app?",
      ],
    },
    {
      title: "Admissions and fees",
      icon: CreditCard,
      color: "bg-purple-600",
      faqs: [
        "How do I apply?",
        "Can families outside India apply?",
        "Can my child join mid-year?",
        "Do you offer scholarships or discounts?",
        "Do students need to complete an assessment?",
        "What are the fees?",
        "How can I pay?",
        "Is the fee refundable?",
        "Can my child move to another school?",
      ],
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Match existing FAQ data by question where possible
  const getFaqContent = (question) => {
    const existingFaq = pathwayContent?.faqs?.find(
      (faq) => faq.question.toLowerCase() === question.toLowerCase()
    );

    return (
      existingFaq?.answer ||
      "Please contact the Edulectual K12 admissions team for more information about this question."
    );
  };

  let faqIndex = 0;

  return (
    <section className="bg-[#FFF7F0] py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* FAQ Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <div key={categoryIndex}>

                {/* Category Heading */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-lg ${category.color} flex items-center justify-center text-white`}
                  >
                    <Icon size={18} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                    {category.title}
                  </h3>
                </div>

                {/* FAQ List */}
                <div className="space-y-3">
                  {category.faqs.map((question, questionIndex) => {
                    const currentIndex = faqIndex++;
                    const isOpen = openFaq === currentIndex;

                    return (
                      <div
                        key={questionIndex}
                        className={`bg-white rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? "border-yellow-300 shadow-md"
                            : "border-slate-100 shadow-sm"
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(currentIndex)}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span className="font-semibold text-blue-950 text-sm md:text-base">
                            {question}
                          </span>

                          <div
                            className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${
                              isOpen
                                ? "bg-yellow-400 text-blue-950"
                                : "bg-sky-50 text-blue-600"
                            }`}
                          >
                            {isOpen ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-gray-600 animate-fadeIn">
                            {getFaqContent(question)}
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

        {/* Explore More */}
        <div className="mt-16">
          <h4 className="text-sm font-bold text-blue-950 mb-4">
            Explore more
          </h4>

          <div className="flex flex-wrap gap-3">
            {[
              "About Edulectual K12",
              "Our programmes",
              "Fees and admissions",
              "Online learning",
              "Contact admissions",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-5 py-2 bg-white rounded-full text-xs font-semibold text-blue-950 shadow-sm hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Still Have a Question CTA */}
        <div className="mt-16 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 to-teal-700 text-white p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still have a question?
              </h2>

              <p className="text-white/90 max-w-xl leading-relaxed">
                If you haven't found the answer you're looking for,
                our admissions team is happy to help you.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-yellow-400 text-blue-950 font-bold text-sm hover:bg-yellow-300 transition"
                >
                  Contact admissions
                </a>

                <a
                  href="/admissions"
                  className="px-6 py-3 rounded-full border border-white/60 text-white font-bold text-sm hover:bg-white/10 transition"
                >
                  Apply for 2027-28
                </a>
              </div>
            </div>

            <div className="w-full md:w-64 text-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <HelpCircle size={48} className="mx-auto text-yellow-400 mb-3" />

                <p className="font-semibold">
                  We're here to help your family.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;