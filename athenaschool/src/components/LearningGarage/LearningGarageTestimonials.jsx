import React from 'react';

const LearningGarageTestimonials = () => {
  const testimonials = [
    {
      quote: "My daughter built her first robot and showed it off at Garage Expo. She's more confident than ever!",
      author: "Nivetha Joseph",
      role: "Parent"
    },
    {
      quote: "I love making real things, not just watching videos. This is my favourite place!",
      author: "Pradeep RV",
      role: "Learner"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Parents & Learners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-bold text-blue-900">— {testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGarageTestimonials;
