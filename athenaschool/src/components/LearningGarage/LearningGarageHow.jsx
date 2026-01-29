import React from 'react';

const LearningGarageHow = () => {
  const steps = [
    {
      number: "1",
      title: "Explore",
      description: "Browse modules and age fit."
    },
    {
      number: "2",
      title: "Register",
      description: "Choose your date & slot."
    },
    {
      number: "3",
      title: "Build",
      description: "Hands-on sessions with facilitators."
    },
    {
      number: "4",
      title: "Showcase",
      description: "Projects + badges / certificates."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">Safety first:</h3>
          <p className="text-gray-700">Sessions are fully supervised with controlled access, age-appropriate tools, and clear safety protocols.</p>
        </div>
      </div>
    </section>
  );
};

export default LearningGarageHow;
