import React from 'react';

const ValuesAndEthos = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const missionElements = [
    {
      title: "Custom Learning Pathways",
      description: "Differentiated programs that are aligned with each learner's stage and goals, which ensures a cohesive, year-level progression informed by global standards."
    },
    {
      title: "Passionate, Skilled Facilitators",
      description: "Facilitators dedicated to growth, who engage in continuous learning, mentorship, and collaboration, all to support meaningful learner outcomes."
    },
    {
      title: "Inclusive Learning Environments",
      description: "Spaces where every learner's voice matters, fostering an inclusive, supportive, and adaptable educational experience."
    },
    {
      title: "Engaging, Enriching Resources",
      description: "Innovative, interactive resources that stimulate interest and participation."
    },
    {
      title: "Data-Driven Insights",
      description: "Adaptive learning through data-driven insights, helping to pivot the learning approach at the right time and in the right way."
    },
    {
      title: "Community Collaboration",
      description: "A culture that values community and parental involvement, creating a shared journey through participation in learning and school initiatives."
    }
  ];

  const stakeholders = [
    {
      title: "For Learners",
      icon: "👨‍🎓"
    },
    {
      title: "For Facilitators",
      icon: "👩‍🏫"
    },
    {
      title: "For Families",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "For Society",
      icon: "🌍"
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">About</span> &gt; <span className="text-gray-600">Values & Ethos</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Values & Ethos</h1>
      
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

        <p className="text-lg font-medium mb-8 text-center">Personalised education direct to your home.</p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Vision</h2>
          <p className="text-gray-700 mb-4">
            At Athena AI School, our vision is to create a world where every child embarks on a journey of self-discovery, and is empowered to shape their future and contribute meaningfully to society. We aspire to provide holistic, lifelong learning experiences that cultivate global citizens ready to meet the challenges of tomorrow.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to deliver inclusive flexible joyful education, that supports the needs of each individual learner, in an enabling community where learning is successful. We will create a "Happiest Classroom" that embodies:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {missionElements.map((element, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{element.title}</h3>
                <p className="text-gray-700 text-center text-sm">{element.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-700">
            We aim to reimagine school as a 16-year journey of meaningful, joyful experiences, fostering growth for learners, facilitators, and families alike.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Core Values & Ethos</h2>
          <p className="text-gray-700 mb-4">
            At the heart of Athena AI School lies a commitment to innovation, inclusivity, and learner-centered education. Our vision is to transform education through a unique blend of academic excellence, technology, and compassionate engagement.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{stakeholder.icon}</div>
                <h3 className="text-lg font-semibold">{stakeholder.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Demonstration of the new Athena AI Learning Portal (10 October 2020)</h4>
              <p className="text-sm text-gray-600">Showcasing our innovative learning platform and features</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Athena AI School - Nursery students enjoying the activity-based learning facilitated by Ms Subasri Barman</h4>
              <p className="text-sm text-gray-600">Engaging young learners through interactive activities</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Session on Mindfulness - Tapping into your superpower using mindfulness</h4>
              <p className="text-sm text-gray-600">Promoting mental wellness and focus through mindfulness practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesAndEthos;
