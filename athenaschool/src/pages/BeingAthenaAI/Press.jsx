import React from 'react';

const Press = () => {
  const categories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council"
  ];

  const coverage = [
    "Athena AI Forbes India",
    "Athena AI Meta Facebook",
    "Athena AI ANI News",
    "Athena AI Times of India",
    "Athena AI The Hindu",
    "Athena AI Hindustan Times",
    "Athena AI ANI News",
    "Athena AI Silicon India",
    "Athena AI APN News",
    "Athena AI BW Education",
    "Athena AI Financial Express",
    "Athena AI Hans India",
    "Relocate Magazine",
    "Athena AI Republic World",
    "Athena AI The Print",
    "Athena AI Live Mint",
    "Athena AI Indian Express",
    "Athena AI School",
    "Athena AI BW Education",
    "Athena AI Brainfeed",
    "Athena AI Times of India",
    "Athena AI Education World",
    "Athena AI Times of India",
    "Athena AI BW Education",
    "Athena AI Times of India",
    "Stride + Athena AI",
    "Athena AI BW Education",
    "Athena AI Daily Hunt",
    "Athena AI Edu Times",
    "Athena AI Gadgets Innovations",
    "Athena AI Social Nama",
    "Athena AI India Education Diary",
    "Athena AI Audience Reports"
  ];

  const awards = [
    "Athena AI India Education Diary",
    "Galvanize",
    "Athena AI ANI",
    "Athena AI Business Standard",
    "Athena AI Business World",
    "Athena AI Yahoo Finance",
    "Athena AI Nyooz",
    "Athena AI Magzter",
    "Athena AI Mangalore Mirror",
    "Athena AI The Truth One"
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Press</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Press</h1>
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{category}</span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">"When you see your child looking forward to his classes, you know the school is doing something really right."</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enquire Now</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Prospectus</button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Coverage</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {coverage.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded mb-3 mx-auto"></div>
              <h3 className="text-sm font-medium text-center">{item}</h3>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6">Awards</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {awards.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded mb-3 mx-auto"></div>
              <h3 className="text-sm font-medium text-center">{item}</h3>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">Media Recognition</h3>
          <p className="text-gray-700 mb-4">
            Athena AI School has been recognized and featured by leading media outlets across India and internationally. 
            Our innovative approach to online education and commitment to excellence has earned us coverage in prestigious 
            publications and news channels.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">National Recognition</h4>
              <p className="text-sm text-gray-600">Featured in Times of India, The Hindu, Indian Express, and other leading national publications</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Industry Awards</h4>
              <p className="text-sm text-gray-600">Recognized by education industry leaders for innovation and excellence in online learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
