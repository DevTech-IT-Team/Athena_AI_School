import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function WhoShouldRegister() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-6xl font-bold text-blue-900 mb-4">
            Who Is Online School For?
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Edulectual K12 Online School works well for many families, but not
            for everyone. Here are the situations where online school tends to
            help most, followed by what your child will need to do well.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply-now"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Book a Free 2-Week Trial
            </Link>

            <Link
              to="/apply-now"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Apply for 2027-28
            </Link>
          </div>
        </div>

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Edulectual K12 Online School is designed for families seeking a
              flexible, structured and quality education that fits their
              circumstances. Whether your family moves frequently, your child
              pursues specialist activities or you simply want a different
              learning environment, online schooling may be the right choice.
              Explore the situations where our approach can help.
            </p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-12 max-w-6xl mx-auto">

          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                Families Who Move or Live Abroad
              </h2>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Consistent Education Across Countries:
                  </h3>

                  <p className="text-gray-600">
                    If you are posted to Dubai, Doha or Muscat, moving between
                    India and the UK, or living in Canada, the US or Australia,
                    your child can keep the same school, teachers and curriculum
                    through every move.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                Young Athletes, Performers and Specialists
              </h2>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Flexible Learning for Dedicated Talents:
                  </h3>

                  <p className="text-gray-600">
                    Children who train seriously in sport, music, dance or chess
                    need a timetable that leaves room for practice and
                    competitions. Online school can make that balance possible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                Children Who Learn Better at Home
              </h2>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Advanced Learners:
                  </h3>

                  <p className="text-gray-600">
                    Students who are ready to work faster than their class and
                    benefit from learning at their own pace.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Learners Seeking a Calm Environment:
                  </h3>

                  <p className="text-gray-600">
                    Children who find busy classrooms overwhelming and prefer
                    a more comfortable learning environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Learners Managing Health Challenges:
                  </h3>

                  <p className="text-gray-600">
                    Learners recovering from illness or managing a health
                    condition that makes regular school attendance difficult.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Children Seeking a Fresh Start:
                  </h3>

                  <p className="text-gray-600">
                    Children who have had difficult experiences at school and
                    are looking for a supportive alternative learning
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                Families Wanting a Strong Curriculum Locally Unavailable
              </h2>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Access to Quality Education:
                  </h3>

                  <p className="text-gray-600">
                    Families in India's tier 2 and tier 3 cities can access a
                    Pearson Edexcel British education or a well-taught Indian
                    curriculum without moving to another city.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                Homeschooling Families Who Want Structure
              </h2>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Structured Learning at Home:
                  </h3>

                  <p className="text-gray-600">
                    If you have been homeschooling and want recognised
                    qualifications, live teachers and a proper curriculum,
                    online school gives you that while keeping learning at home.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* What Your Child Will Need */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              What Your Child Will Need
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <p className="text-gray-600">
                  A device, headset and reliable internet connection.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <p className="text-gray-600">
                  A quiet place to learn.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <p className="text-gray-600">
                  An adult nearby to support younger children.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                <p className="text-gray-600">
                  Willingness to take part on camera and in discussions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-12">
            {/* FAQ 1 */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-blue-900">
                  Can My Child Do Online School Alongside Sports Training?
                </h2>
              </div>

              <div className="space-y-4 ml-16">
                <div className="flex items-start">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                  <div>
                    <p className="text-gray-600">
                      Yes. Many families choose online school for this reason.
                      Choose the batch that fits around your child's training
                      schedule.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ 2 */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-blue-900">
                  Is Online School Suitable for Children with Additional Needs?
                </h2>
              </div>

              <div className="space-y-4 ml-16">
                <div className="flex items-start">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                  <div>
                    <p className="text-gray-600">
                      Often, yes. Our inclusion team can discuss your child's
                      needs before you enrol.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ 3 */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-blue-900">
                  Can We Switch Back to a Regular School Later?
                </h2>
              </div>

              <div className="space-y-4 ml-16">
                <div className="flex items-start">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>

                  <div>
                    <p className="text-gray-600">
                      Yes. Students earn recognised qualifications and receive
                      reports and transfer documents.
                      [PLACEHOLDER: Confirm transfer certificate process.]
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-900 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-xl mb-6">
              Try a free 2-week trial class with our teachers, then apply when
              you are ready. The ₹999 registration fee is waived during our
              launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply-now"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
              >
                Book a Free 2-Week Trial
              </Link>

              <Link
                to="/apply-now"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                Apply for 2027-28
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoShouldRegister;