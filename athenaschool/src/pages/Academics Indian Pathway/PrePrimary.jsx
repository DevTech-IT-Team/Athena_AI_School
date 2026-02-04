import React from 'react';

const PrePrimary = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Pre Primary</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2">Pre Primary</h1>
      <p className="text-gray-600 mb-8">NCF India</p>

      <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-10">
        <span>Learning Culture</span>
        <span>Primary</span>
        <span>Pre Primary</span>
        <span>Middle</span>
        <span>Senior School</span>
        <span>Our Partners</span>
        <span>Music &amp; Arts Partner</span>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-10">
        <p className="text-gray-800 mb-4">
          &quot;The change I have seen in my children is phenomenal. They want to explore more about topics taught in school!&quot;
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium">Enquire Now</button>
          <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 font-medium">Download Prospectus</button>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-sm text-gray-600">Home Pre Primary</p>

        <h2>Pre Primary</h2>
        <h3>The moment you log in you know you are in good hands.</h3>

        <p>
          The Pre-Primary Program caters to learners aged 3 to 5 years. It includes the following Grades:
        </p>

        <ul>
          <li>Nursery</li>
          <li>KG1 / LKG</li>
          <li>KG2 / UKG</li>
        </ul>

        <p>
          The Pre-Primary Curriculum provides an age-appropriate, activity-based academic plan for every grade. The curriculum content is based on the National Curriculum Framework, alongside best educational practices with an emphasis on every child's unique learning styles. Values, morals, and ethics for the preschoolers are weaved into our programs with stories &amp; narratives to nurture &amp; build a strong character, independent mind and confident leaders of tomorrow.
        </p>

        <p>The main subject areas are:</p>

        <ul>
          <li>Communication and Language</li>
          <li>Personal, Social and Emotional Development</li>
          <li>Literacy</li>
          <li>Mathematics/ Numeracy</li>
          <li>Understanding the World</li>
          <li>Expressive Arts and Design</li>
          <li>Music and Movement</li>
        </ul>

        <p>
          Only English Language is taught in Pre-Primary. From Grade 1 onward, learners have the opportunity to explore additional languages as part of their primary education.
        </p>

        <p>Learning Material Kit delivered home for written work and home works:</p>

        <ul>
          <li>Engaging, Skill-based Set of Concept Books and Workbooks</li>
          <li>Learner Merchandise - ID card, Almanac and Annual Planner</li>
          <li>Based on National Curriculum Framework</li>
          <li>Collaborative Learning Coach</li>
          <li>Only 10 Learners per class</li>
          <li>Personal Attention and Care</li>
          <li>1-2 Hours of Live Engaging Classes, Monday to Friday</li>
          <li>Academic structure and support to parents for stress-free learning</li>
        </ul>

        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Understanding rainforests with yug</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>It is never too early to take up responsibility</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Actions Speak louder than words</p>
        </div>
      </div>
    </div>
  );
};

export default PrePrimary;
