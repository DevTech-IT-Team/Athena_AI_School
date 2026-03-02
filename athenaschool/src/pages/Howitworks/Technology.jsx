export default function Technology() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Technology</h1>
            <p className="text-xl mb-8">Discover Personalised Learning at WisdomAI School</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Enquire Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>›</span>
            <span className="text-blue-600 font-medium">Technology</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              WisdomAI School Program is delivered in a secured way with end-to-end encryption of all live sessions and chat. Each Learner / Parent has a unique ID and Password. Learners can connect from anywhere, any device at a time and place convenient to them.
            </p>
          </div>

          {/* Security Features */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Secured platform</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">End-to-end encryption</h3>
                <p className="text-gray-600 text-sm">All live sessions and chat are fully encrypted</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Unique ID and Password</h3>
                <p className="text-gray-600 text-sm">Secure credentials for every learner and parent</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Access Anywhere, Anytime</h3>
                <p className="text-gray-600 text-sm">Connect from any device at your convenience</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Privacy</h3>
                <p className="text-gray-600 text-sm">Industry-standard security and privacy tools</p>
              </div>
            </div>
          </div>

          {/* AI and Analytics */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Advanced Technology Features</h2>
            <p className="text-gray-700 mb-8">
              Our platform uses artificial intelligence (AI), data analytics, industry-standard data privacy and security tools powered by AWS Cloud Servers.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Artificial Intelligence (AI) driven</h3>
                </div>
                <p className="text-gray-600">Smart algorithms enhance the learning experience with personalized recommendations and adaptive learning paths.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Data analytics</h3>
                </div>
                <p className="text-gray-600">Comprehensive analytics track progress and provide insights for continuous improvement.</p>
              </div>
            </div>
          </div>

          {/* Virtual Classrooms Features */}
          <div className="bg-purple-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">Virtual Classrooms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Virtual Classrooms</h3>
                <p className="text-gray-600 text-sm">Interactive online learning spaces</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Learner interaction</h3>
                <p className="text-gray-600 text-sm">Engaging peer-to-peer collaboration</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment and Tests</h3>
                <p className="text-gray-600 text-sm">Comprehensive evaluation tools</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tracing and Improvement</h3>
                <p className="text-gray-600 text-sm">Progress tracking and enhancement</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gray-100 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">#BeingAWisdomAI</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">WisdomAI Video - Virtual Classes</h3>
                <p className="text-gray-600 text-sm mb-2">#BeingAWisdomAI</p>
                <p className="text-gray-500 text-sm">Experience our virtual classroom environment</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">WisdomAI Learning Portal Homework Module</h3>
                <p className="text-gray-600 text-sm mb-2">#BeingAWisdomAI</p>
                <p className="text-gray-500 text-sm">Manage and track homework assignments</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">WisdomAI Learning Portal - Schedule</h3>
                <p className="text-gray-600 text-sm mb-2">#BeingAWisdomAI</p>
                <p className="text-gray-500 text-sm">How to see the Schedule of Classes</p>
              </div>
            </div>
          </div>

          {/* AWS Cloud Infrastructure */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">Powered by AWS Cloud Servers</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Reliable Infrastructure</h3>
                <p className="text-gray-700 mb-4">
                  Our platform is built on Amazon Web Services (AWS) cloud infrastructure, ensuring:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>99.9% uptime availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Scalable resources for growing needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Global content delivery network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Automated backups and disaster recovery</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-yellow-100 rounded-lg p-8 text-center">
                  <svg className="w-16 h-16 text-yellow-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-800">Cloud-Based Learning</h4>
                  <p className="text-gray-600 mt-2">Seamless access from anywhere in the world</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Unlock limitless learning possibilities, join us online!</h2>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Enquire Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
