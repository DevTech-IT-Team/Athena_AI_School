export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Online School Features
            </h1>
            <p className="text-xl mb-8">
              What's Included at Edulectual K12
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book a free 2-week trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Apply for 2027-28
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
              When you enrol with Edulectual K12 Online School, your child gets
              a complete school experience delivered online. This page lists
              what is included so you can compare like with like.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Recommended Setup at Home
            </h2>
            <p className="text-gray-700 mb-6">
              To get the most out of online learning, students should have a
              dedicated study space, a comfortable chair, a laptop or desktop
              computer, and a headset with a microphone. A tablet may be
              suitable for younger learners. Check our full requirements page
              for more details.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Study Table</h3>
                <p className="text-gray-600 text-sm">
                  A dedicated and organised learning space
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comfortable Chair</h3>
                <p className="text-gray-600 text-sm">
                  Comfortable seating for focused learning
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Laptop/Desktop</h3>
                <p className="text-gray-600 text-sm">
                  Recommended primary learning device
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tablet</h3>
                <p className="text-gray-600 text-sm">
                  An alternative device for younger learners
                </p>
              </div>
            </div>
          </div>

          {/* Program Elements */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              Features for Learners
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Classes</h3>
                <p className="text-gray-600">
                  Teacher-led lessons on a fixed timetable for your region,
                  with discussion, questions and group work.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Assignments and Projects
                </h3>
                <p className="text-gray-600">
                  Practice tasks after lessons, longer projects each term,
                  and written feedback from teachers on the platform.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Assessments</h3>
                <p className="text-gray-600">
                  Quizzes, end-of-unit checks and term assessments, plus mock
                  exams and exam preparation in Grades 9–12.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Activities */}
          <div className="bg-purple-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">
              Group Work, Clubs and Learning
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Group Activities</h3>
                <p className="text-gray-600 text-sm">
                  Breakout rooms, collaborative discussions and presentations
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Learner Council</h3>
                <p className="text-gray-600 text-sm">
                  Student participation, leadership and shared ideas
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Student Podcast</h3>
                <p className="text-gray-600 text-sm">
                  Opportunities to communicate, share ideas and express creativity
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Online Clubs</h3>
                <p className="text-gray-600 text-sm">
                  Shared interests, activities and social learning opportunities
                </p>
              </div>
            </div>
          </div>

          {/* #Beingk12onlineschool Section */}
          <div className="bg-gray-100 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Learning Materials and Enrichment
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Digital Learning Materials
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Resources for every lesson
                </p>
                <p className="text-gray-500 text-sm">
                  Digital resources are available on the learning platform to
                  support classroom learning and independent practice.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Optional Enrichment
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Explore interests beyond academics
                </p>
                <p className="text-gray-500 text-sm">
                  Languages, computational thinking, music, arts and additional
                  enrichment activities help learners explore their interests.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Learning Garage
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Hands-on workshops and making
                </p>
                <p className="text-gray-500 text-sm">
                  Learning Garage workshops, including making and robotics,
                  offer opportunities for practical exploration and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">
              Support, Technology and Parent Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Parent Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm">
                      View timetables, attendance, assignments and grades
                      through the parent view.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Progress Reports
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Regular progress reporting to help parents understand
                      their child's learning and development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Parent–Teacher Meetings
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Online meetings to discuss learning progress, strengths
                      and areas for development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Learner Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Assistance with technical issues and platform-related
                      challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Inclusion Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      An inclusion team to support children with additional
                      learning needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      University and Career Guidance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Guidance and support for learners navigating university
                      and career choices in the senior years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform and Safety Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Our Online School Learning Platform and How We Keep It Safe
            </h2>

            <p className="text-gray-700 mb-8">
              Every Edulectual K12 class, assignment and report lives on one
              learning platform. Our online learning environment brings
              learners, teachers and parents together, helping everyone access
              the information and tools they need in one place.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  The Virtual Classroom
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Interactive online lessons
                </p>
                <p className="text-gray-500 text-sm">
                  Live lessons use video, audio, shared whiteboards, screen
                  sharing, polls and breakout rooms to support interactive
                  teaching and collaboration.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Assignments and Feedback
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Learning beyond the classroom
                </p>
                <p className="text-gray-500 text-sm">
                  Teachers post tasks, students upload their work and teachers
                  provide feedback, keeping learning activity organised on the
                  platform.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Progress Tracking
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  A clearer picture of learning
                </p>
                <p className="text-gray-500 text-sm">
                  Attendance, assignment completion and assessment results
                  help teachers identify learners who may need additional
                  support.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Platform Features */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">
              Safety, Accessibility and AI
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Learner Login and Access
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Each learner has an individual login, with classes
                      designed for enrolled students and staff.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Classroom Controls
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Teachers manage speaking, screen sharing and chat
                      permissions during lessons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Safety and Privacy
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Personal data is handled according to our privacy
                      policy and applicable law.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Everyday Device Compatibility
                    </h3>
                    <p className="text-gray-600 text-sm">
                      The learning platform is designed to work through a
                      modern browser on a laptop, desktop or tablet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      AI Tools Used Carefully
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Where AI tools are used to support learning, teachers
                      remain responsible for decisions and what reaches
                      learners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Help When You Need It
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Learner support can help with platform-related issues,
                      and common fixes can be accessed through the help
                      resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What is Not Included */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              What Is Not Included
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Exam Entry Fees
                </h3>
                <p className="text-gray-600">
                  Pearson Edexcel exam entry fees are paid directly to the
                  exam centre and are not included in tuition.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Optional Enrichment
                </h3>
                <p className="text-gray-600">
                  Optional enrichment activities, including certain workshops
                  and partner music classes, may involve additional costs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Home Equipment
                </h3>
                <p className="text-gray-600">
                  Devices, internet connection and the learning setup at home
                  are provided by the family.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Admissions for 2027-28 are open
            </h2>
            <p className="text-lg mb-8">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived during
              our launch.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book a free 2-week trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Apply for 2027-28
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}