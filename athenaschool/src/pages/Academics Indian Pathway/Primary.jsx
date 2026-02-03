import React from 'react';

const Primary = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Primary</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2">Primary</h1>
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
          &quot;Express through literary Storytelling - LIT Fest&quot;
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium">Enquire Now</button>
          <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 font-medium">Download Prospectus</button>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-sm text-gray-600">Home Primary</p>

        <h2>Primary</h2>
        <h3>The Primary Program at Athena AI School is designed for learners aged 6 to 10 years (Grade 1 to 5), a crucial stage in their personal, social, and academic growth. At this age, learners benefit from a curriculum that is both challenging and creative, providing them with clear goals that inspire focus and motivation to reach their full potential.</h3>

        <p>The Primary Program covers the following subjects:</p>

        <h4>Grade 1 &amp; 2:</h4>
        <ul>
          <li>English (First Language)</li>
          <li>Second Language - Compulsory</li>
          <li>Third Language - Optional</li>
          <li>Mathematics</li>
          <li>EVS</li>
          <li>Digital Media &amp; Arts</li>
          <li>Music &amp; Movement</li>
          <li>Physical Fitness &amp; Mindfulness</li>
          <li>Athena AI Skills Program</li>
          <li>Computational Thinking &amp; Coding</li>
        </ul>

        <h4>Grade 3 &amp; 5:</h4>
        <ul>
          <li>English (First Language)</li>
          <li>Second Language - Compulsory</li>
          <li>Third Language - Optional</li>
          <li>Mathematics</li>
          <li>Science</li>
          <li>Social Studies</li>
          <li>Selective Activity (Digital Media &amp; Arts/ Music &amp; Movement/ Physical Fitness &amp; Mindfulness)</li>
          <li>Athena AI Skills Program</li>
          <li>Computational Thinking &amp; Coding</li>
        </ul>

        <h4>Language Choices</h4>
        <p>Learners can select their second and third language from the below-mentioned list.</p>
        <p>The third language classes will be conducted in the afternoon for Morning Batches and in the morning for the Afternoon Batches.</p>
        <p>Learners can opt for Third Language at an additional fee.</p>

        <h4>Foreign Language Choices</h4>
        <h4>Regional Languages Choices</h4>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Arabic</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Hindi</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Sanskrit</th>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">French</td>
              <td className="border border-gray-300 px-4 py-2">Kannada</td>
              <td className="border border-gray-300 px-4 py-2">Tamil</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Japanese</td>
              <td className="border border-gray-300 px-4 py-2">Malayalam</td>
              <td className="border border-gray-300 px-4 py-2">Telugu</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Spanish</td>
              <td className="border border-gray-300 px-4 py-2">Marathi</td>
              <td className="border border-gray-300 px-4 py-2">Urdu</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">ESOL (English)</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
          </thead>
        </table>

        <h4>Learning Material Kit delivered home for written work and home work:</h4>
        <ul>
          <li>Skill-based, engaging Textbooks/Workbooks for English, 2nd Language, Social Studies / EVS, Science and Mathematics.</li>
          <li>Subscription to eWorkBooks and e-CourseBooks</li>
          <li>Access to AI-driven personalised learning platform (Grade 2 onwards)</li>
          <li>Access to vast collection of books, videos and more from our Digital Library</li>
          <li>Learner Merchandise- ID card, Almanac, T-Shirt and Annual Planner</li>
          <li>3rd Language Book (If opted)</li>
        </ul>

        <h4>Special Education Needs (SEN)</h4>
        <p>
          We provide limited academic support to learners with special education needs through our qualified, trained, experienced team of child psychologists, Special Educators and Counsellors. Talk to our Admissions Advisor in complete confidence to discuss how we can help you and your child.
        </p>

        <ul>
          <li>Based on Indian National Curriculum Framework 2005</li>
          <li>Textbooks &amp; Workbooks delivered at home</li>
          <li>Small interactive class size of 25 learners for personal attention</li>
          <li>3 hours of Live Classes, Monday to Friday &amp; alternate Saturday</li>
          <li>Academic structure and support to parents for stress-free learning</li>
          <li>Access instant progress report of your child</li>
        </ul>

        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Learning a new skill is always exciting</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>A Little art and a little maths</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Tiya Grade-2A Shows us there is more than one way to learn the tables</p>
        </div>
      </div>
    </div>
  );
};

export default Primary;
