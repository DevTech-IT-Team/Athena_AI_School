import React from 'react';

const LearningCulture = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Learning Culture</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2">Learning Culture</h1>
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
        <p className="text-sm text-gray-600">Home Learning Culture</p>

        <h2>Learning Culture</h2>
        <h3>Developing intellectually curious, independent-minded individuals</h3>

        <p>
          Grounded in a tradition of teaching excellence, Athena AI School puts the learners first at all times. At Athena AI School, we intend to build a culture of openness and genuine caring that enables children to discover and celebrate the joy of learning.
        </p>

        <p>Some of the components of the Program are:</p>

        <ul>
          <li>Connect learning with real-world applications</li>
          <li>Interdisciplinary approach</li>
          <li>Data-driven performance assessment</li>
          <li>Formative and Summative Assessment</li>
          <li>Learning driven by essential questions or problems</li>
          <li>A strong focus on creativity, critical thinking, collaboration, communication, and character</li>
          <li>Personalised learning</li>
          <li>Respecting learners' curiosity, leadership, and ownership</li>
          <li>Facilitators as mentors</li>
          <li>Connection and involvement with families</li>
          <li>Local and global outreach and partnership</li>
          <li>Developing learners with an entrepreneurial mindset</li>
          <li>Academic excellence and global perspectives</li>
          <li>Providing the right foundation for a lifetime of opportunity and success</li>
        </ul>

        <p>
          At Athena AI School, the emphasis is on trusting learners and valuing their lived experiences. We encourage honesty in learning and offer personalised learning pathways that allow learners the freedom to progress at their own pace. The facilitator–learner relationship is built on transparency, mutual respect, and trust.
        </p>

        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Times are changing...</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Why did you choose an online school? (Mrs Seemple Sunela)</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">#Being Athena AI</h3>
          <p>Starting the weekend with love we get from our learners</p>
        </div>
      </div>
    </div>
  );
};

export default LearningCulture;
