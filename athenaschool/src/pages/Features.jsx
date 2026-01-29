export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Features</h1>
            <p className="text-xl mb-8">A day in the life of 21K School+ Stride - American Curriculum student</p>
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
            <span className="text-blue-600 font-medium">Features</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              21K School will conduct the classes online along with the following elements of the online program. All these activities / features will be online on our learning platform.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">For the best experience</h2>
            <p className="text-gray-700 mb-6">
              It is advisable to have a study table, chair, and desktop / laptop / Tab / iPad for students. Some lessons may require downloading certain apps, which could be done on the mobile phone of parents if the tab is not available.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Study Table</h3>
                <p className="text-gray-600 text-sm">Comfortable learning space</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Chair</h3>
                <p className="text-gray-600 text-sm">Ergonomic seating</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Desktop/Laptop</h3>
                <p className="text-gray-600 text-sm">Primary learning device</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tablet/iPad</h3>
                <p className="text-gray-600 text-sm">Alternative device option</p>
              </div>
            </div>
          </div>

          {/* Program Elements */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">Online Program Elements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic</h3>
                <p className="text-gray-600">Comprehensive online academic programs with interactive learning modules and real-time instruction.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Parents</h3>
                <p className="text-gray-600">Parent portal for monitoring progress, communication with teachers, and active participation in child's education.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Learning Materials</h3>
                <p className="text-gray-600">Digital textbooks, interactive resources, and supplementary materials accessible anytime, anywhere.</p>
              </div>
            </div>
          </div>

          {/* Learning Activities */}
          <div className="bg-purple-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">Learning Activities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Live Classes</h3>
                <p className="text-gray-600 text-sm">Interactive real-time sessions</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assignments</h3>
                <p className="text-gray-600 text-sm">Regular practice and evaluation</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Projects</h3>
                <p className="text-gray-600 text-sm">Hands-on learning experiences</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Group Work</h3>
                <p className="text-gray-600 text-sm">Collaborative learning activities</p>
              </div>
            </div>
          </div>

          {/* #Being21K Section */}
          <div className="bg-gray-100 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">#Being21K</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">We enjoy learning even after classes</h3>
                <p className="text-gray-600 text-sm mb-2">#Being21K</p>
                <p className="text-gray-500 text-sm">Extended learning opportunities beyond regular class hours</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Learning a new language always fun</h3>
                <p className="text-gray-600 text-sm mb-2">#Being21K</p>
                    <p className="text-gray-500 text-sm">Interactive language learning sessions</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Our orators brought out their A game</h3>
                <p className="text-gray-600 text-sm mb-2">#Being21K</p>
                <p className="text-gray-500 text-sm">Public speaking and debate activities</p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">Additional Platform Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interactive Whiteboard</h3>
                    <p className="text-gray-600 text-sm">Digital canvas for collaborative learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Recorded Sessions</h3>
                    <p className="text-gray-600 text-sm">Access class recordings for review</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Discussion Forums</h3>
                    <p className="text-gray-600 text-sm">Peer interaction and knowledge sharing</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Progress Tracking</h3>
                    <p className="text-gray-600 text-sm">Monitor academic performance and growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Resource Library</h3>
                    <p className="text-gray-600 text-sm">Extensive collection of learning materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Mobile App Support</h3>
                    <p className="text-gray-600 text-sm">Learn on-the-go with our mobile application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the future of online education</h2>
            <p className="text-lg mb-8">Join 21K School and discover a world of interactive learning possibilities</p>
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
    </div>
  );
}
