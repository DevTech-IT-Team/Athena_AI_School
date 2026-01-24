import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function WhoShouldRegister() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Who Should Register?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A Unique Learning Solution for Diverse Needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply-now"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Enquire Now
            </Link>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Download Prospectus
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At 21K School, we understand that traditional schooling methodologies may not suit every learner. 
              Our flexible, personalised model is ideal for families seeking a different approach to education. 
              Here's how 21K School meets the needs of various types of learners, organized into key categories:
            </p>
          </div>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Learners Seeking Academic Excellence and Depth
              </h2>
            </div>
            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Advanced Learners:</h3>
                  <p className="text-gray-600">Gifted children who wish to explore subjects more deeply and go beyond the standard curriculum.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Supplementary Support:</h3>
                  <p className="text-gray-600">Learners who attend traditional schools but require additional tuition or support to enhance their learning experience.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Families Looking for Flexible, Structured Learning Support
              </h2>
            </div>
            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Home Schoolers:</h3>
                  <p className="text-gray-600">Parents who homeschool their children and seek a structured curriculum to support their educational journey.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Professional Pursuits:</h3>
                  <p className="text-gray-600">Learners engaged in professional training (e.g., music, arts, sports) who need a flexible schedule that aligns with their extracurricular commitments.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Frequent Movers:</h3>
                  <p className="text-gray-600">Children of parents in transferable jobs who experience frequent school changes and benefit from a consistent, uninterrupted education.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Learners with Health, Safety, and Accessibility Needs
              </h2>
            </div>
            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Health Challenges:</h3>
                  <p className="text-gray-600">Children undergoing medical treatment that prevents regular attendance at traditional schools.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Safety Concerns:</h3>
                  <p className="text-gray-600">Families concerned about hygiene, sanitation, and health risks in physical school settings, especially in light of COVID-19.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Remote Accessibility:</h3>
                  <p className="text-gray-600">Learners living in areas without access to quality schools or facing long commutes, benefiting from a high-quality, accessible online education option.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Families Seeking Quality Education at an Affordable Cost
              </h2>
            </div>
            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Cost-Conscious Learners:</h3>
                  <p className="text-gray-600">Families dissatisfied with traditional schools due to high fees or low-quality teaching who are looking for a valuable, affordable educational experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Alternative to Boarding Schools:</h3>
                  <p className="text-gray-600">Parents seeking an alternative to boarding or hostel-based education, providing high-quality learning without the need for separation.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-900 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              "Digital Schools are the future and we are India's first."
            </h2>
            <p className="text-xl mb-6">Join the revolution in education today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply-now"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
              >
                Enquire Now
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoShouldRegister;
