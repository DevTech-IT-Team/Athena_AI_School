import React from 'react';
import { Globe, Award, BookOpen, TrendingUp } from 'lucide-react';

const InternationalBenchmarkTest = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Globe className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">International Benchmark Test</h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              "Our vision is to make 15 years of schooling meaningful and joyful for all."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Enquire Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Prospectus
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
            <span className="text-blue-600 font-medium">International Benchmark Test</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              WisdomAI School has adopted the International Benchmark Test (IBT) conducted by one of the world's leading educational research centres, Australian Council for Educational Research (ACER), to diagnose, analyse and compare learner learning against global bench-marks.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The International Benchmark Tests is an internationally administered program of assessments to compare learner performance globally, between grades and over time. The tests cover English, Mathematics, Science for our learners in Grade 3 through 8.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              IBT is skill-based and does not follow any single national curriculum, allowing learners from all countries to be compared fairly. It helps in tracking learner performance against international standards. The assessments are reliable and help to support schools, facilitators and parents to measure learning progress.
            </p>
          </div>

          {/* Why IBT Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Award className="w-12 h-12 text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Why did we choose IBT assessment over any other assessment?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">The IBT solution compares your child's performance to an international cohort.</p>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">The diagnostic testing is designed to challenge learners across a broad range of ability levels.</p>
              </div>
              <div className="flex items-start">
                <Globe className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">It assesses deep conceptual understanding rather than simple recall of facts.</p>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">The test recognises learning achievement, and monitors progress over time.</p>
              </div>
            </div>
          </div>

          {/* How IBT is Conducted */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How is IBT conducted?</h2>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-gray-800 mb-4">
                The IBT is an online test, conducted in January every year, the duration of which will be 60 minutes per test for Mathematics, English and Science only. The paper will predominantly be a multiple-choice questionnaire (MCQ) with 40 – 45 questions per test.
              </p>

              <p className="text-gray-800">
                The IBT is not tied to a specific curriculum, allowing for fair comparisons between learners across schools and around the world, and content is updated every year.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">English</h3>
                <p className="text-gray-700">The skills assessed are locating information, inferring, predicting, drawing conclusions and reasoning. Learners are not asked merely to retrieve information from a passage; they are asked to make inferences, form judgements, and reflect on the texts.</p>
              </div>

              <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Mathematics</h3>
                <p className="text-gray-700">The skills assessed include interpreting data, inferring, predicting, drawing conclusions, reasoning and problem solving. IBT Mathematics requires learners to use higher-order thinking skills to apply their mathematical skills.</p>
              </div>

              <div className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Science</h3>
                <p className="text-gray-700">The skills assessed include observing and measuring, interpreting data, inferring, predicting, drawing conclusions, reasoning and problem solving. Many of the questions are based on scientific enquiry.</p>
              </div>
            </div>
          </div>

          {/* ACER Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How does ACER report results?</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-800 mb-4">
                  The IBT provides many different reports on learner performance to help facilitators and schools better understand where their learners are positioned on the learning continuum. The Individual learner report provides comprehensive details of the learners' performance across strands.
                </p>

                <p className="text-gray-800 mb-4">
                  This experience of IBT is better than any Olympiad exam, as the curriculum of Olympiads is limited in the Indian context only and does not necessarily evaluate skills. IBT on the other hand is of an international standard and helps you compare the abilities of your child to global standards and work on them.
                </p>

                <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
                  <p className="font-semibold text-blue-900">
                    There is no additional cost for attempting the IBT assessment. We encourage every learner to mandatorily attempt the IBT and benefit from the outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* #WisdomAISchool Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">#WisdomAISchool</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-orange-900 mb-2">#WisdomAISchool</h3>
                <p className="text-gray-700">Times are changing...</p>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-pink-900 mb-2">#WisdomAISchool</h3>
                <p className="text-gray-700">Why did you choose an online school? (Mrs Seemple Sunela)</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">#WisdomAISchool</h3>
                <p className="text-gray-700">Dhanush has something to say and we all should listen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalBenchmarkTest;
