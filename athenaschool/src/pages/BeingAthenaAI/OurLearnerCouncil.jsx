import React from 'react';

const OurLearnerCouncil = () => {
  const categories = [
    "Meet Our Academic Crew",
    "Learner Work",
    "Press",
    "Awards",
    "Our Learner Council"
  ];

  const middleSchoolCouncil = [
    {
      name: "Rohith Nagarajan",
      position: "PRESIDENT"
    },
    {
      name: "Keya Hatkar",
      position: "VICE PRESIDENT"
    },
    {
      name: "Rijul Sohith Aadarsh S",
      position: "AMAZON CEO"
    },
    {
      name: "Aarna Chauhan",
      position: "APPLE CEO"
    },
    {
      name: "Aishwarya K Jingade",
      position: "GOOGLE CEO"
    },
    {
      name: "Zainab Sayed",
      position: "MICROSOFT CEO"
    }
  ];

  const seniorSchoolCouncil = [
    {
      name: "Shobhit Malekar",
      position: "PRESIDENT"
    },
    {
      name: "Diya Vaishnavi",
      position: "VICE PRESIDENT"
    },
    {
      name: "Kaitlin",
      position: "AMAZON CEO"
    },
    {
      name: "Agamjot",
      position: "APPLE CEO"
    },
    {
      name: "Revathy",
      position: "GOOGLE CEO"
    },
    {
      name: "Tanvi Mukka",
      position: "MICROSOFT CEO"
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Our Learner Council</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Our Learner Council</h1>
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{category}</span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">"The beauty of online schooling is that you can be anywhere and yet have access to quality education - our students come from all over the world."</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enquire Now</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Prospectus</button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Leadership is the capacity to translate vision into reality.</h2>
          <p className="text-gray-700 mb-4">— Warren Bennis</p>
          <p className="text-gray-700 mb-4">
            Leadership is the ability of an individual or a group of individuals to influence and guide followers or other members of an organisation.
          </p>
          <p className="text-gray-700 mb-4">
            Leadership involves making sound -- and sometimes difficult -- decisions, creating and articulating a clear vision, establishing achievable goals, and providing followers with the knowledge and tools necessary to achieve those goals.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Building Tomorrow's Leaders</h2>
          <p className="text-gray-700 mb-4">
            To instil the skills of leadership among the learners, the first-ever School Learner Board was created in Athena AI School in the month of August 2021 after a lot of hard work and planning put in by the election committee and the management.
          </p>
          <p className="text-gray-700 mb-4">
            Athena AI School learners are divided into four houses namely Apple house, Amazon house, Google house, and Microsoft House. The school learner board consisted of 6 members each from the morning and afternoon batch respectively. The designations that the Learner Council held were the President, The Vice President, and the CEOs of the four houses. Learners in grades 7 and 8 nominated themselves for the various positions that would help them become the leaders of tomorrow.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Council Achievements</h2>
          <p className="text-gray-700 mb-4">
            Throughout the year the members of the council made a lot of contributions to the various events and celebrations that were conducted in the school. Many successful events like the celebration of Independence Day and Republic Day were conducted under the guidance of the council members. One such event was facilitators' day which was entirely conducted by the learners and it was a huge success.
          </p>
          <p className="text-gray-700 mb-4">
            The most important and outstanding achievement of the members of the school learner board was the planning and execution of 'The Echo of Athena AI' i.e. the first learner-led podcast. Three successful episodes, under the series 'Behind The Scenes', have already been released and available to watch in which the first two episodes were with the Co-Founders of the school, and the third episode was released with the Principal Ms. Aruna Shetty.
          </p>
          <p className="text-gray-700 mb-4">
            In all these episodes the members of the management and the Principal talked about how Athena AI School came into existence and how in the last two years it has become the leading online school in the country with its span within India and abroad.
          </p>
          <p className="text-gray-700 mb-4">
            The members of the school learner board participated in various other events like Shark Tank Stand-Up Comedy, and Model United Nations and were among the star performers of these events. Not just co-curricular activities but the school council members are also doing exceptionally well in academics in their assessments, activities, and assignments.
          </p>
          <p className="text-gray-700 mb-4">
            A Learner Council plays an active role in the academic and administrative functions of the school, be it the school celebrations, events, any school project or activities, all throughout the year, the council members of the Athena AI Learner Board have taken up this role in an exceptional manner.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">The members of the School Learner Board for the Academic Year 2024-25 are:</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Indian Middle School</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {middleSchoolCouncil.map((member, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 font-medium text-center">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Indian Senior School</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seniorSchoolCouncil.map((member, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 font-medium text-center">{member.position}</p>
              </div>
            ))}
          </div>
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

export default OurLearnerCouncil;
