import React from 'react';
import '../../Academics.css';

const CambridgeInternationalUK = () => {
  const categories = [
    "Cambridge International, UK",
    "Edexcel, UK",
    "Early Years",
    "British Primary",
    "British Lower Secondary",
    "British Upper Secondary",
    "Cambridge IGCSE",
    "Edexcel International GCSE",
    "British Advanced Levels",
    "Cambridge Advanced Level",
    "Edexcel International Advanced Level"
  ];

  const cambridgeStats = [
    {
      title: "Cambridge Primary",
      description: "Taught in more than 2000 schools in over 120 countries. There are over 96,000 entries for Cambridge Primary Checkpoint each year."
    },
    {
      title: "Cambridge IGCSE",
      description: "The world's most popular international qualification for 14 to 16-year-olds. It is taken in over 140 countries and in more than 4500 schools across the globe."
    },
    {
      title: "Cambridge O Level",
      description: "Cambridge International is the world's biggest provider of O Level qualifications. Cambridge O Level is taught in over 50 countries."
    },
    {
      title: "Cambridge AS & A Levels",
      description: "Cambridge International AS and A Levels are taken in over 130 countries, with more than 530,000 subject entries each year."
    }
  ];

  const learnerAttributes = [
    "Confident", "Collaborators", "Engaged", "Entrepreneurs", "Responsible", 
    "Flexible & Adaptable", "Innovative", "Receptive & Reflective to feedback", 
    "Reflective", "Open-Minded", "Creative & Critical Thinkers", "Academic Risk Takers",
    "Effective Communicator", "Leaders", "Self Directed learners"
  ];

  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Cambridge International, UK</h1>
            <p className="text-lg md:text-xl font-light opacity-90">From here to the world's leading universities</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Cambridge International, UK
          </div>

          <div className="academics-section">
            <h2>Cambridge International, UK</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{category}</span>
              ))}
            </div>
          </div>

          <div className="academics-section">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-lg italic">"When you see your child looking forward to his classes, you know the school is doing something really right."</p>
              <div className="flex gap-4 mt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enquire Now</button>
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Prospectus</button>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Athena AI School offers two different curriculum for learners aged 3 to 18. The curriculum offered have distinct pathways to provide greater choice and voice to the learners.
            </p>
          </div>

          <div className="academics-section">
            <h2>About Cambridge International</h2>
            <p className="text-gray-700 mb-4">
              Used in over 10,000 schools in 160 countries, the curriculum is international in philosophy and approach. The University of Cambridge formed the 'Local Examinations Syndicate' over 160 years ago. Its aim was to raise standards in education by administering exams for people not members of the University and inspecting schools. Today, the Syndicate operates as "Cambridge Assessment International Education" and is part of the International Education group, along with Cambridge University Press Education and Cambridge Partnership for Education.
            </p>
          </div>

          <div className="academics-section">
            <h2>The Cambridge Pathway</h2>
            <p className="text-gray-700 mb-4">
              Cambridge programmes and qualifications set the global standard for international education. They are created by subject experts, rooted in academic rigour and reflect the latest educational research.
            </p>
            <p className="text-gray-700 mb-4">
              The four stages of the Cambridge Pathway lead seamlessly from primary through secondary and pre-university years. Schools can shape the curriculum around how they want learners to learn.
            </p>
            <p className="text-gray-700 mb-4">
              The Cambridge Pathway is for learners aged 5 to 19. Its wide range of subjects and flexibility gives schools a chance to shape the curriculum to be exciting and relevant for their learners.
            </p>
            <p className="text-gray-700 mb-4">
              Cambridge Pathway learners have the chance to acquire the knowledge and skills they need to achieve at school, university and beyond.
            </p>
            <p className="text-gray-700 mb-4">
              The four stages lead seamlessly from primary to secondary and pre-university years. Each stage – Cambridge Primary, Cambridge Lower Secondary, Cambridge Upper Secondary and Cambridge Advanced – builds on the learners' development from the previous one but can also be offered separately.
            </p>
          </div>

          <div className="academics-section">
            <h2>Cambridge Global Impact</h2>
            <p className="text-gray-700 mb-6">
              Every year, nearly a million Cambridge learners prepare for their future with an education from Cambridge International.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {cambridgeStats.map((stat, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
                  <p className="text-gray-700 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700">
                2018 marked the 30th anniversary of the first Cambridge IGCSE exam. There are over 700,000 subject entries for Cambridge IGCSE exams each year. Over 1900 institutions across 81 countries accept Cambridge qualifications.
              </p>
            </div>
          </div>

          <div className="academics-section">
            <h2>Cambridge Learner Attributes</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {learnerAttributes.map((attribute, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
                  <h3 className="font-medium">{attribute}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="academics-section">
            <h2>Athena AI School's Commitment</h2>
            <p className="text-gray-700 mb-4">
              Athena AI School is committed to preparing learners for success in an increasingly interconnected world.
            </p>
            <p className="text-gray-700 mb-4">
              Athena AI takes pride in its diverse learner body and strives to create an inclusive environment where all learners feel valued and respected. Athena AI School provides an academically rigorous curriculum that prepares learners worldwide for top colleges and universities. In addition, Athena AI offers a wide range of extracurricular activities that allow learners to explore their passions and develop as well-rounded individuals.
            </p>
            <p className="text-gray-700">
              Our facilitators will guide each child in finding answers to those questions inside and outside the classroom. They will also develop techniques in collaborative working and independent study. By fostering a love of learning in each child, Athena AI is committed to developing 21st-century citizens who will be prepared to impact the world positively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CambridgeInternationalUK;
