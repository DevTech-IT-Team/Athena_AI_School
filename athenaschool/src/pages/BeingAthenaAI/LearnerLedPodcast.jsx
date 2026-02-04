import React from 'react';

const LearnerLedPodcast = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Learner-Led Podcast</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Learner-Led Podcast</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">The Echo of Athena AI</h2>
        <p className="text-lg mb-6">
          It's a learner-led podcast, conceptualized, coordinated, and conducted by the Students of Athena AI School.
        </p>

        <h3 className="text-xl font-semibold mb-4">Tune in to the latest episodes here:</h3>
        
        <div className="bg-gray-100 p-8 rounded-lg mb-8 text-center">
          <p className="text-gray-500">Podcast episodes will be displayed here</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Learn more about Athena AI School</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Indian curriculum</h4>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Discover more
            </button>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">British curriculum</h4>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerLedPodcast;
