import React from 'react';

const LearningGarageBenefits = () => {
  const benefits = [
    {
      title: "Learning by doing builds confidence",
      description: "Children can touch, build, and experiment.",
      icon: "👐"
    },
    {
      title: "Children learn at their own pace",
      description: "No pressure to \"keep up\". Every learner's journey is unique.",
      icon: "🚶"
    },
    {
      title: "Short programmes avoid pressure",
      description: "Flexible commitments that fit into busy schedules.",
      icon: "⏱️"
    },
    {
      title: "Skills go beyond textbooks",
      description: "Real-world skills in technology and problem-solving.",
      icon: "🛠️"
    },
    {
      title: "Projects build teamwork & communication",
      description: "Collaborating with peers on exciting challenges.",
      icon: "🤝"
    },
    {
      title: "Parents can wait or work",
      description: "Free Wi-Fi + comfortable workspaces available for parents.",
      icon: "💻"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Learning Garage Matters
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">In-person: All sessions are conducted in person and require physical attendance.</h3>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Inclusive & Safe Zone:</h3>
            <p className="text-gray-700">A thoughtfully designed, safe and inclusive space with ramp and lift access, strong security.</p>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Workspace for Parents:</h3>
          <p className="text-gray-700">Free Wi-Fi workspaces for parents to relax or work while their child learns, explores, and creates.</p>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningGarageBenefits;
