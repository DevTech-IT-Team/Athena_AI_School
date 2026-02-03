import React from 'react';

const OurLeaders = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const leaders = [
    {
      name: "Yeshwanth Raj Parasmal",
      title: "Founder & Chief Executive Officer",
      description: "Yeshwanth is a value-driven entrepreneur with over 20 years of experience in the education sector. He is passionate about transforming the way we see education in India. He has facilitated the establishment and management of over 75 educational institutions in India, including tribal and naxal affected areas. Yeshwanth has completed MBA in Education Management from the University of Southampton, UK and is recognised widely as a leader in the sector. He was honoured with the UK Global Alumni Awards (finalist) in 2022."
    },
    {
      name: "Dr Senthil Kumaran",
      title: "Non-Executive Director",
      description: "With over 30 years of educational experience, Dr. Senthil launched the groundbreaking Learners Confluence in India, a program aimed at fostering peer learning and knowledge sharing among teachers. Formerly the Principal Counsellor at CII Institute of Quality, he facilitated educational excellence initiatives nationally and internationally. He is an authority in various excellence frameworks i.e. EFQM, MBNQA, DSIB-KHDA, QCI-NABET, QMS, NBA, NAAC & CII Education Excellence Framework."
    },
    {
      name: "Dinesh Kumar",
      title: "Non-Executive Director",
      description: "Education For All. This is the mission that drives Dinesh Kumar. As a Silicon Valley professional and USC alumni with over ten years of experience working for companies like NVIDIA, HP, and various other startups. He possesses the expertise necessary to build a competitive yet enriching learning platform. He is passionate about technology and is particularly invested in using it to solve the genuine issues we face in the world today."
    },
    {
      name: "Aruna Shetty",
      title: "Head of Schools",
      description: "Ms. Aruna Shetty, currently serving as the Head of School, boasts over 18 years of diverse experience across international educational boards, including International Baccalaureate, Cambridge Assessment International Education (CAIE), American curriculum, and Indian Boards such as NIOS. Ms. Shetty advocates for an inclusive educational environment and her overarching vision is to facilitate a transformative learning experience for her students, equipping them to make a positive impact on the world around them."
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">About</span> &gt; <span className="text-gray-600">Our Leaders</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Our Leaders</h1>
      
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

        <h2 className="text-2xl font-semibold mb-6">Trailblazing Paths to Excellence</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Chief Executive Officer</h3>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {leaders.map((leader, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
              <h3 className="text-xl font-semibold mb-2 text-center">{leader.name}</h3>
              <p className="text-blue-600 font-medium mb-3 text-center">{leader.title}</p>
              <p className="text-gray-700 text-sm">{leader.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Scholastic Report - Guide Video</h4>
              <p className="text-sm text-gray-600">Comprehensive guidance for scholastic reporting and assessment</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Learning a new language always fun</h4>
              <p className="text-sm text-gray-600">Making language learning engaging and enjoyable for all learners</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Our orators brought out their a game</h4>
              <p className="text-sm text-gray-600">Showcasing exceptional public speaking and communication skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeaders;
