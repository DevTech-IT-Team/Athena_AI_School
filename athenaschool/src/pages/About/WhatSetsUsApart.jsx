import React from 'react';

const WhatSetsUsApart = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const features = [
    {
      title: "Deep, Transformative Learning",
      description: "Immersive educational experiences that go beyond surface-level knowledge"
    },
    {
      title: "A World of Flexibility",
      description: "Learn anytime, anywhere with schedules that adapt to your lifestyle"
    },
    {
      title: "Facilitators Who Inspire",
      description: "Dedicated educators who nurture curiosity and drive excellence"
    },
    {
      title: "A Dynamic, Research-Driven Curriculum",
      description: "Cutting-edge educational approaches backed by research and innovation"
    },
    {
      title: "Personalised Learning, Tailored for You",
      description: "Customized educational paths that match individual learning styles and goals"
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">About</span> &gt; <span className="text-gray-600">What sets us apart?</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">What sets us apart?</h1>
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{category}</span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">"The future is online, where are you?"</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enquire Now</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Prospectus</button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">What Makes Athena AI School Different?</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Empowering Tomorrow's Global Learners</h3>
          <p className="text-gray-700 mb-4">
            At Athena AI School, we go beyond the boundaries of traditional education. As an accredited online K-12 school, we offer curricula from India and Britain to learners aged 3 to 18 years, reaching over 7,500 learners across 500 cities in 78+ countries. Our learners come from diverse backgrounds and cultures, united in our innovative, inclusive, and dynamic learning spaces.
          </p>
          <p className="text-gray-700 mb-4">
            Our journey began in June 2020 with a mission to make high-quality, personalized, and transparent education accessible to all—anytime, anywhere. Today, we're a global community that empowers learners to explore and thrive through immersive, real-world learning experiences designed to help them succeed in an ever-evolving world.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Our Key Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-700 text-center text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Make Some Rain While The Sun Shines Outside</h4>
              <p className="text-sm text-gray-600">Making the most of every learning opportunity, regardless of circumstances</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">A Little Play in Between Classes</h4>
              <p className="text-sm text-gray-600">Balancing structured learning with creative play and exploration</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Why did you choose Athena AI online school for your children?</h4>
              <p className="text-sm text-gray-600">Hearing from parents about their experience with our online education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
