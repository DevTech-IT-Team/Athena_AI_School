import React from 'react';
import { Brain, Cpu, Lightbulb, Target } from 'lucide-react';

const Computational = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Brain className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Computational Thinking</h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              "Developing problem-solving skills for the digital era"
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Enquire Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">Computational Thinking</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              While learners must have flexibility in choosing their individual learning pathways, certain subjects and skills are essential for all learners to become successful, innovative, adaptable, and productive individuals in today's rapidly-changing world. One such vital skill is Computational Thinking. At Athena AI School, we have introduced Computational Thinking and Coding as integral parts of our academic program for learners from Grade 1 to Grade 8. This initiative reflects the importance of computational thinking, problem-solving, and critical reasoning skills in our digital era. It is a versatile skill that can be applied across various areas of the curriculum, from kindergarten to university level.
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Athena AI School is dedicated to teaching computing, which enhances problem-solving abilities, computational thinking, and critical reasoning skills. The primary goal of teaching computational thinking is to develop the ability to solve problems and express solutions as algorithms that are precise and understandable by both humans and machines. With this objective in mind, the principles of computational thinking are taught through the following themes:
            </p>
          </div>

          {/* Computational Thinking Themes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Computational Thinking Themes</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Decomposition</h3>
                </div>
                <p className="text-gray-700">Breaking down complex problems into smaller, manageable parts.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Cpu className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Pattern Recognition</h3>
                </div>
                <p className="text-gray-700">Identifying similarities and differences in data to make sense of complex information.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Abstraction</h3>
                </div>
                <p className="text-gray-700">Focusing on the important information only, and ignoring irrelevant details.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Algorithm Design</h3>
                </div>
                <p className="text-gray-700">Creating step-by-step instructions to solve problems or perform tasks.</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <p className="text-lg text-gray-800 leading-relaxed text-center">
              By embedding these themes into our curriculum, Athena AI School ensures that learners are equipped with the skills necessary to navigate and succeed in the digital world. Our approach not only prepares learners for future academic endeavours but also fosters a mindset of innovation and adaptability.
            </p>
          </div>

          {/* #AthenaAISchool Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">#AthenaAISchool</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">#AthenaAISchool</h3>
                <p className="text-gray-700">Learning a new skill is always exciting</p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-900 mb-2">#AthenaAISchool</h3>
                <p className="text-gray-700">Understanding rainforests with yug</p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">#AthenaAISchool</h3>
                <p className="text-gray-700">It is never too early to take up responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computational;
