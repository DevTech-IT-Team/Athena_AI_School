import React from 'react';

const Awards = () => {
  const categories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council"
  ];

  const awards = [
    {
      title: "Best Curriculum School Award",
      description: "Athena AI School has won Star Education Award 2024 in the Best Curriculum School Award category."
    },
    {
      title: "HolonIQ South Asia EdTech 100",
      description: "Named one of the most promising EdTech startups in South Asia by HolonIQ, a leading global intelligence platform in education."
    },
    {
      title: "ETHR World Award",
      description: "Won The Economic Times-Future Ready Organisations Awards under the \"Startup Category\"."
    },
    {
      title: "Grand Jury Summit Award",
      description: "Awarded India's #1 Leading Online School of India in the Education World India School Grand Jury Award."
    },
    {
      title: "Indian Education Award",
      description: "Awarded for Excellence and Innovation in Online Teaching (K12) at Entrepreneur's Indian Education Awards."
    },
    {
      title: "Most Innovative School",
      description: "Athena AI School Awarded as the Most Innovative school in India."
    },
    {
      title: "Future Ready Organization",
      description: "Listed as one of India's Most Prestigious companies in The Economic Times Future Ready Organization."
    },
    {
      title: "Bribooks Literary Leadership Award",
      description: "Athena AI School awarded Bribooks Literary leadership award."
    },
    {
      title: "STEM Research & Innovation Award",
      description: "Won the STEM Research & Innovation Award for Excellence in the National Astronomy Challenge."
    },
    {
      title: "Mental Health Innovation Award",
      description: "Athena AI School Wins Gold Award for Mental Health Innovation."
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Awards</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Awards</h1>
      
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

        <h2 className="text-2xl font-semibold mb-6">Our Achievements</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {awards.map((award, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-200 rounded-full mb-4 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{award.title}</h3>
              <p className="text-gray-700 text-sm text-center">{award.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">Recognition & Excellence</h3>
          <p className="text-gray-700 mb-4">
            Athena AI School has been consistently recognized for excellence in education innovation, 
            curriculum development, and student wellness. Our awards reflect our commitment to providing 
            world-class online education that prepares students for the future.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Industry Leadership</h4>
              <p className="text-sm text-gray-600">Recognized by leading organizations for innovation and excellence in K-12 online education</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Student Wellbeing</h4>
              <p className="text-sm text-gray-600">Awarded for our commitment to mental health and holistic student development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
