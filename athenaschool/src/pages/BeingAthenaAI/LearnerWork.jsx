import React from 'react';

const LearnerWork = () => {
  const learners = [
    {
      name: "Aarav Saini",
      grade: "Grade 1B",
      description: "He is always enthusiastic and has many laurels under his belt already.\n\nHe was selected in nationals in Primary Section for Worli Art Competition, and won second position in skipping race on sports day."
    },
    {
      name: "Chebrolu Nuthana Adithi",
      grade: "",
      description: "Nuthana has her YouTube channel where she showcases her talents.\n\nShe started young and is now in Grade 1."
    },
    {
      name: "Dhuruvan K",
      grade: "Grade 5A",
      description: "He is training in Kalaripayattu and Silambam, a few lesser known Indian Martial Arts forms. He is also learning Bharatanatyam."
    },
    {
      name: "Delissa Mehra",
      grade: "Grade 5A",
      description: "A budding actress and an enthusiastic artist.\n\nAt present she is also shooting for a Yash Raj film."
    },
    {
      name: "Peehu Gandhi",
      grade: "Grade 2A",
      description: "She always pushes her limits. So when we found out she is certifying in Game Development we were not surprised."
    },
    {
      name: "Deekshita Bhattamishra",
      grade: "Grade 2A",
      description: "She always pushes her limits. So when we found out she is certifying in Game Development we were not surprised.\n\nDeekshita is already a trained bharatnatyam dancer at her age."
    },
    {
      name: "Aarav Saini",
      grade: "Grade 1B",
      description: "Selected for nationals in primary section for Worli Art Competition.\n\nHe is an artist and an achiever."
    },
    {
      name: "Jerome Joe",
      grade: "Grade 3A",
      description: "Published a story on story weaver.\n\nHe has feathers on his cap including the Silver Oaks award for a creative mind."
    }
  ];

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
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Learner Work</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Learner Work</h1>
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{category}</span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">"A day in the life of Athena AI School+ Stride - British Curriculum student"</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enquire Now</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Prospectus</button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Featured Learners</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {learners.map((learner, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
              <h3 className="text-xl font-semibold mb-2 text-center">{learner.name}</h3>
              {learner.grade && <p className="text-gray-600 text-sm mb-3 text-center">{learner.grade}</p>}
              <div className="text-sm text-gray-700 whitespace-pre-line">{learner.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">It is never too early to take up responsibility</h4>
              <p className="text-sm text-gray-600">Students learning responsibility and leadership skills from an early age</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Actions Speak louder than words.</h4>
              <p className="text-sm text-gray-600">Our students demonstrate their learning through practical actions</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Starting the weekend with love we get from our students</h4>
              <p className="text-sm text-gray-600">The affection and appreciation we receive from our learners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerWork;
