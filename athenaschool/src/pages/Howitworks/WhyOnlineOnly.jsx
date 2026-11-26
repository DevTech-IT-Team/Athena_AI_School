export default function WhyOnlineOnly() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Benefits of Online School vs Traditional School
            </h1>
            <p className="text-xl mb-8">
              Online school has moved from emergency measure to a deliberate
              choice for many families. But is it right for your child? This
              guide sets out the real benefits, the trade-offs and the questions
              to ask, so you can decide on your own terms.
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
            <span className="text-blue-600 font-medium">
              Why Online School
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Online school has become a deliberate choice for families looking
              for flexibility, continuity and access to quality education.
              Edulectual K12 Online School brings learning to children wherever
              they live, with live lessons, structured learning and opportunities
              to grow academically and socially.
            </p>
          </div>

          {/* Not Suitable For Everyone */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">
              The trade-offs to think about
            </h2>
            <p className="text-gray-700 mb-4">
              Online schooling offers flexibility and convenience, but it also
              requires the right home environment and support. Families should
              consider the practical requirements before making a decision.
            </p>
            <p className="text-gray-700">
              Children need a quiet space, reliable internet, regular physical
              activity and opportunities to interact with others. Younger
              learners may also need an adult nearby during parts of the school
              day.
            </p>
          </div>

          {/* Ideal For Section */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              The main benefits of online school
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Learn from anywhere
                    </h3>
                    <p className="text-gray-600">
                      School continues through relocations, long visits to family
                      and travel. For expat families in the Gulf or families who
                      move often for work, that continuity can matter a great
                      deal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      A pace that fits
                    </h3>
                    <p className="text-gray-600">
                      Smaller online groups and digital tools let teachers notice
                      quickly when a child is struggling or ready to move on.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Time back in the day
                    </h3>
                    <p className="text-gray-600">
                      No commute means more time for sleep, sport, music, family
                      and rest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      A calmer environment
                    </h3>
                    <p className="text-gray-600">
                      Some children concentrate better and feel safer learning at
                      home, away from crowded classrooms or bullying.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Access to strong curricula
                    </h3>
                    <p className="text-gray-600">
                      Families in smaller towns can reach British or Indian
                      curricula that may not be available locally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Flexibility for families
                    </h3>
                    <p className="text-gray-600">
                      Online learning helps families manage travel, changing
                      routines, relocations and individual commitments while
                      maintaining a structured education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Online vs Traditional School at a Glance
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Location Independent
                </h3>
                <p className="text-gray-600">
                  Learn from home anywhere in the world. Traditional schools
                  usually require children to attend a fixed campus.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
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
                <h3 className="text-xl font-semibold mb-2">
                  Flexible Timetables
                </h3>
                <p className="text-gray-600">
                  Online batches accommodate different time zones, while
                  traditional schools generally follow fixed local hours.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
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
                <h3 className="text-xl font-semibold mb-2">
                  Social Opportunities
                </h3>
                <p className="text-gray-600">
                  Online groups, clubs and local activities help build
                  friendships. Traditional schools offer daily in-person
                  interactions.
                </p>
              </div>
            </div>
          </div>

          {/* #Beingk12onlineschool Section */}
          <div className="bg-gray-100 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why We Are a Fully Online School With No Campus
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Edulectual K12 Online School has no campus, and that is by design.
              Every class, assessment and parent meeting happens online. We
              chose to be fully online rather than adding online classes to a
              physical school, so our teachers, timetable and resources are
              designed around learning from home.
            </p>

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
                  Online is Our Main Model, Not a Backup
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Designed around learning from home
                </p>
                <p className="text-gray-500 text-sm">
                  Because we are fully online, every teacher, timetable and
                  resource is designed for online learning first.
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
                  One School, Many Countries
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Consistent learning wherever you live
                </p>
                <p className="text-gray-500 text-sm">
                  We serve families in India, the Gulf, the UK, North America
                  and Australia with the same curriculum and learning
                  opportunities.
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
                      d="M19 11a7 7 0 00-7 7m0 0a7 7 0 00-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Spending on Teaching, Not Buildings
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Prioritising learning and support
                </p>
                <p className="text-gray-500 text-sm">
                  Not running a campus lets us put resources into teachers,
                  the learning platform and support, and offer scholarships
                  of up to 50%.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Admissions for 2027-28 are open
            </h2>
            <p className="text-lg mb-8">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
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