import React from 'react';

const LearningGarageHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-sky-100 text-blue-900 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl font-bold text-blue-900">LG</span>
          </div>
          <h1 className="text-sm font-medium mb-2 text-sky-600">By Athena AI School</h1>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Imagine. Build. Belong.
        </h2>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
          A hands-on, inclusive physical learning space where learners aged 5–18 explore, build, and learn through robotics, electronics, Design, AI & IoT. Welcoming all learners from the Athena AI School family and beyond to explore this exciting world of innovation.
        </p>

        <div className="bg-yellow-400 text-blue-900 rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-bold mb-2">Early Bird Advantage</h3>
          <p className="font-medium mb-4">Register now to unlock 12 complimentary sessions until 31st January.</p>
          <p className="text-sm">Available for a limited time.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Book Free Trial
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors">
            View Programmes
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningGarageHero;
