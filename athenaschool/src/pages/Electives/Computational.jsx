import React from 'react';

const Computational = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Computational Thinking</span>
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Computational Thinking</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          While learners must have flexibility in choosing their individual learning pathways, certain subjects and skills are essential for all learners to become successful, innovative, adaptable, and productive individuals in today's rapidly-changing world. One such vital skill is Computational Thinking. At Athena AI School, we have introduced Computational Thinking and Coding as integral parts of our academic program for learners from Grade 1 to Grade 8. This initiative reflects the importance of computational thinking, problem-solving, and critical reasoning skills in our digital era. It is a versatile skill that can be applied across various areas of the curriculum, from kindergarten to university level.
        </p>
        
        <p className="text-lg mb-6">
          Athena AI School is dedicated to teaching computing, which enhances problem-solving abilities, computational thinking, and critical reasoning skills. The primary goal of teaching computational thinking is to develop the ability to solve problems and express solutions as algorithms that are precise and understandable by both humans and machines. With this objective in mind, the principles of computational thinking are taught through the following themes:
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Computational Thinking Themes</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Decomposition</h3>
              <p>Breaking down complex problems into smaller, manageable parts.</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
              <p>Identifying similarities and differences in data to make sense of complex information.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Abstraction</h3>
              <p>Focusing on the important information only, and ignoring irrelevant details.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Algorithm Design</h3>
              <p>Creating step-by-step instructions to solve problems or perform tasks.</p>
            </div>
          </div>
        </div>
        
        <p className="text-lg mb-8">
          By embedding these themes into our curriculum, Athena AI School ensures that learners are equipped with the skills necessary to navigate and succeed in the digital world. Our approach not only prepares learners for future academic endeavours but also fosters a mindset of innovation and adaptability.
        </p>
        
        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Learning a new skill is always exciting</p>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Understanding rainforests with yug</p>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>It is never too early to take up responsibility</p>
        </div>
      </div>
    </div>
  );
};

export default Computational;
