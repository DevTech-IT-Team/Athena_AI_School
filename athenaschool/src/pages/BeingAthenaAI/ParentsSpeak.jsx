import React from 'react';

const ParentsSpeak = () => {
  const categories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council"
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Parents Speak</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Parents Speak</h1>
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{category}</span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">"How do your classes prepare you for the future? Athena AI School + Stride student answers."</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enquire Now</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Prospectus</button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Hear what parents think about Athena AI School</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
              <h3 className="text-xl font-semibold mb-2 text-center">Parent {item}</h3>
              <p className="text-gray-600 text-sm mb-3 text-center">Parent of Grade {item + 1}</p>
              <p className="text-gray-700 text-center">Hear what parents think about Athena AI School</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">A Little art and a little maths</h4>
              <p className="text-sm text-gray-600">Combining creativity with analytical thinking for holistic development</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Tiya Grade-2A Shows us there is more than one way to learn the tables.</h4>
              <p className="text-sm text-gray-600">Innovative approaches to learning fundamental concepts</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Understanding rainforests with yug</h4>
              <p className="text-sm text-gray-600">Interactive learning experiences that make education engaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentsSpeak;
