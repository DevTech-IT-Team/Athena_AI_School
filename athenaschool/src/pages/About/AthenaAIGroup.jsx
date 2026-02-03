import React from 'react';

const AthenaAIGroup = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const institutions = [
    {
      name: "Athena AI School",
      description: "Asia's leading online-only school, Athena AI School offers both structured and flexible learning paths customized to each learner's unique journey. With a digital-first foundation, we focus on academic excellence and the holistic development of every learner's potential. Ranked India's #1 Leading Online School in the Education World India School Grand Jury Awards 2021-22, we emphasize an education that is seamless, relevant, and accessible to all."
    },
    {
      name: "Athena AI Skills",
      description: "In a rapidly changing world, upskilling and reskilling are essential. Athena AI Skills provides leading courses that prepare individuals, professionals, and even retired military personnel for the demands of tomorrow. With global partnerships in fields like software engineering and data science, Athena AI Skills empowers learners to stay ahead in their careers, equipped with the skills that matter most."
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">About</span> &gt; <span className="text-gray-600">Athena AI Group</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Athena AI Group</h1>
      
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

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Empowering Future-Ready Learners for a Transformative World</h2>
          <p className="text-gray-700 mb-4">
            In a world that's evolving faster than ever, education must keep pace. Imagine an environment where every learner can progress at their own speed, free from the constraints of a one-size-fits-all approach. Athena AI School is redefining what education can be—an adaptive, forward-thinking journey designed to prepare young minds for a future where technology and creativity converge.
          </p>
          <p className="text-gray-700 mb-4">
            Backed by UpGrad's visionary, Ronnie Screwvala, with a $5 million investment in November 2021, Athena AI School is pioneering the future of learning as the world's first Web 3.0 school. With emerging technologies like Blockchain, the Metaverse, and NFTs, we're not just teaching; we're building a foundation for learners to understand, innovate, and lead in a digital-first world.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Institutions</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {institutions.map((institution, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{institution.name}</h3>
                <p className="text-gray-700 text-sm">{institution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Leading the Education Evolution</h2>
          <p className="text-gray-700">
            At Athena AI Group, we believe in change for the better. We lead the vanguard of educational transformation to empower today's learners for tomorrow's world through the innovative integration of digital learning and real-world applications.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Athena AI Video - Virtual Classes</h4>
              <p className="text-sm text-gray-600">Experience our innovative virtual classroom environment</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Athena AI Learning Portal Homework Module</h4>
              <p className="text-sm text-gray-600">Streamlined homework management through our advanced portal</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Athena AI Learning Portal - How to see the Schedule of Classes</h4>
              <p className="text-sm text-gray-600">Easy navigation and scheduling for optimal learning experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthenaAIGroup;
