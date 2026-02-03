import React from 'react';

const HabitsOfMind = () => {
  const categories = [
    "What sets us apart?",
    "Values & Ethos",
    "Our Leaders",
    "Habits of Mind"
  ];

  const habits = [
    "Persisting",
    "Managing Impulsivity",
    "Listening with Understanding and Empathy",
    "Thinking Flexibly",
    "Thinking About Thinking (Metacognition)",
    "Striving for Accuracy",
    "Questioning and Posing Problems",
    "Applying Past Knowledge to New Situations",
    "Thinking and Communicating with Clarity and Precision",
    "Gathering Data Through All Senses",
    "Creating, Imagining, and Innovating",
    "Responding with Wonderment and Awe",
    "Taking Responsible Risks",
    "Finding Humor",
    "Thinking Interdependently",
    "Remaining Open to Continuous Learning"
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">About</span> &gt; <span className="text-gray-600">Habits of Mind</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Habits of Mind</h1>
      
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

        <p className="text-lg font-medium mb-8 text-center">Find your path.</p>

        <div className="mb-12">
          <p className="text-gray-700 mb-4">
            Athena AI School infuses the world-renowned 16 Habits of Mind into its academic practices as exemplary learner attributes. Learners will learn to become critical thinkers and develop a sense of inquiry, persistence, and flexible thinking, as well as strength-based cognitive skills of success that can be taught, coached and practised.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">IHOM Certified</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-green-100 rounded-full mb-4 mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723 3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723 3.066 3.066 0 00-1.745.723A3.066 3.066 0 006.267 3.455zM16.367 12c.658 0 1.123-.354 1.123-.833 0-.48-.445-.833-1.123-.833-.48 0-.833.353-1.123.833-.48.445-.833 1.123-.833.48 0 .833-.353 1.123-.833.48.445.833 1.123.833z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">International Habits of Mind Learning Community of Excellence</h3>
              <p className="text-gray-700 text-center">
                Athena AI School has recently been certified as an "International Habits of Mind Learning Community of Excellence". We are the first School in Asia to receive this prestigious certification of excellence.
              </p>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-blue-100 rounded-full mb-4 mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">The Institute for Habits of Mind</h3>
              <p className="text-gray-700 text-center">
                The Institute for Habits of Mind, founded by pioneering researchers and authors Dr Arthur Costa and Dr Bena Kallick, is an international organisation which helps educators, parents, and all who care for children to learn, practice, and infuse the Habits of Mind into their work and lives.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The powerful 16 Habits of Mind</h2>
          <p className="text-gray-700 mb-4">
            The 16 Habits of Mind is cutting-edge research for Thinking-Based Learning programmes, along with extensive instructor training and curriculum development. The Habits of Mind programmes have been provided to a selected less than 150 schools worldwide, including Athena AI School.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What are Habits Of Mind?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {habits.map((habit, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-center">{habit}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">International Habits of Mind Learning Community of Excellence</h2>
          <p className="text-gray-700 mb-4">
            The process of certification involves rigorous evaluation and implementation of the Habits of Mind framework across all aspects of school operations, ensuring that learners develop these essential thinking skills.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Introducing the Habits of Mind</h4>
              <p className="text-sm text-gray-600">Our comprehensive approach to developing critical thinking skills</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">16 Habits Of Mind</h4>
              <p className="text-sm text-gray-600">The complete framework for cognitive development</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Why schools should teach habits of mind</h4>
              <p className="text-sm text-gray-600">The importance of thinking skills in modern education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitsOfMind;
