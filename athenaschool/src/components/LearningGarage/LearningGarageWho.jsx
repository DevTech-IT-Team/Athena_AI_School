import React from 'react';

const LearningGarageWho = () => {
  const whoCanJoin = [
    {
      icon: "🎒",
      title: "Learners aged 5–18",
      description: "K-12 Learners from Athena AI School & beyond."
    },
    {
      icon: "🎓",
      title: "Athena AI School Learners",
      description: "Special benefits for Athena AI School Learners."
    },
    {
      icon: "🚀",
      title: "Non-Athena AI School Learners",
      description: "Everyone is welcome to join our garages."
    },
    {
      icon: "📜",
      title: "Athena AI School Alumni",
      description: "Our Alumni are welcome to join."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Who Can Join?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoCanJoin.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGarageWho;
