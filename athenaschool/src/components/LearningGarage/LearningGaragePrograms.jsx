import React from 'react';

const LearningGaragePrograms = () => {
  const programs = [
    {
      title: "Robotics Garage",
      description: "Build and code robots using LEGO and programmable kits.",
      outcomes: "Logical thinking, teamwork, confidence.",
      icon: "🤖"
    },
    {
      title: "Electronics Garage",
      description: "Learn circuits, sensors, and real electronics through hands-on projects.",
      outcomes: "Analytical thinking, applied science.",
      icon: "⚡"
    },
    {
      title: "Tinkering Garage",
      description: "Create and experiment using everyday materials and tools.",
      outcomes: "Creativity, resilience, learning by trying.",
      icon: "🔧"
    },
    {
      title: "Design Garage",
      description: "Turn ideas into models using design tools and 3D printing.",
      outcomes: "Design thinking, planning, tangible outputs.",
      icon: "🎨"
    },
    {
      title: "AI & IoT Garage",
      description: "Build smart, connected projects using sensors and logic.",
      outcomes: "Systems thinking, future-ready skills.",
      icon: "🧠"
    },
    {
      title: "Capstone Garage",
      description: "Showcase projects, present learning, and earn certificates.",
      outcomes: "Communication, confidence, portfolios.",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learners choose Garages based on their interests. Each Garage delivers clear skills, real outcomes, and visible progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">{program.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-900 mb-2">Outcomes</h4>
                <p className="text-gray-600">{program.outcomes}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Parent payoff</h3>
          <p className="text-lg">Every visit ends with something your child can build, explain, or proudly show you.</p>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            View All Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningGaragePrograms;
