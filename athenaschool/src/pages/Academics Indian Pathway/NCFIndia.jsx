import React from 'react';

const NCFIndia = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">NCF India</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2">NCF India</h1>
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
        <p className="text-sm text-gray-600">Home NCF India</p>

        <h2>NCF India</h2>
        <h3>Developing intellectually curious, independent-minded young adults</h3>

        <p>
          Athena AI School follows the National Curriculum Framework (NCF) of India. The NCF is designed by National Council of Educational Research and Training (NCERT) and approved by the Ministry of Education, Government of India.
        </p>

        <p>
          National Curriculum Framework including research-based recommendations on curriculum, pedagogy, assessment and examination serve as broad guidelines for the entire school education in the country.
        </p>

        <p>
          The NCF 2005 has recommended five guiding principles for curricular development:
        </p>

        <ul>
          <li>Connecting knowledge to life outside school,</li>
          <li>Ensuring that learning shifts from rote methods</li>
          <li>Enriching curriculum so that it goes beyond textbooks,</li>
          <li>Making examinations more flexible and integrating them with classroom life.</li>
          <li>Nurturing an overriding identity informed by caring concerns within the democratic polity of the country.</li>
        </ul>

        <p>
          Apart from these five guiding principles, NCF also emphasises learning without burden.
        </p>

        <p>
          Under the new National Education Policy (NEP) announced in 2020, the Government of India has announced that a new National Curriculum Framework will be introduced soon. Athena AI School is committed to adopt and follow the new NCF when it comes into force.
        </p>

        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Dhanush has something to say and we all should listen</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Diy Session With Grade - II</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Early to bed, Early to rise</p>
        </div>
      </div>
    </div>
  );
};

export default NCFIndia;
