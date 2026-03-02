import React from 'react';

const LearningGarageAbout = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What is WisdomAI Learning Garage?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            WisdomAI Learning Garage is a hands-on learning space where children learn by doing. 
            Learners build real projects, explore new ideas, and gain confidence through guided, practical experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Short, flexible programmes</h3>
            <p className="text-gray-600">Book sessions when it suits your family's schedule, any day of the week. No rigid semester commitments.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Skill-based certificates</h3>
            <p className="text-gray-600">Earn recognized certificates for every skill mastered. Build a portfolio that stands out.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Fun, practical, meaningful</h3>
            <p className="text-gray-600">Learning that is fun, practical, and meaningful. Work with real tools to solve actual problems.</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Flexible, modular learning experiences</h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Open to all learners</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Trusted by families from the WisdomAI School community and beyond</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningGarageAbout;
