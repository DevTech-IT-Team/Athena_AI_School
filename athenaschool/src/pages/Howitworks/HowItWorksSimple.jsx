export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              How Online School Works
            </h1>
            <p className="text-xl mb-8">
              A structured school day, taught live from wherever your child is.
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
              How Online School Works
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              How Online School Works at Edulectual K12
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Online school at Edulectual K12 works much like a good school day,
              only your child logs in from home instead of travelling to a
              campus. There is a fixed timetable, a class, a teacher who knows
              your child and a clear plan for each term. This page explains what
              happens day to day.
            </p>
          </div>

          {/* School Overview */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Live Classes with a Timetable
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Classes are taught live by our teachers on the Edulectual K12
                  learning platform. Your child joins at set times, takes part
                  in discussions, answers questions and works with classmates in
                  small groups.
                </p>

                <p className="text-gray-700 mb-4">
                  Timetables are arranged by region so lessons fall at sensible
                  times in India, the Gulf, the UK, North America and Australia.
                </p>
              </div>

              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Live online lessons with teachers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Structured timetables and learning schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Interactive discussions and class participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Small-group learning and collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              Children follow a planned school timetable with regular lessons and
              activities, providing consistency and structure while learning
              from home.
            </p>
          </div>

          {/* Grade Structure Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Happens During the School Day?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Learning Stage</th>
                    <th className="px-6 py-4 text-left">School Activity</th>
                    <th className="px-6 py-4 text-left">How It Works</th>
                    <th className="px-6 py-4 text-left">Learning Support</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Live Lessons</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Timetabled Classes
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Students join live lessons, interact with teachers and
                      participate in classroom discussions.
                    </td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Teacher-led lessons</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Questions and discussions</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Small-group interaction</span>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Between Lessons</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Practice and Activities
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Students complete short practice tasks, reading activities
                      and projects between live classes.
                    </td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Practice assignments</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Reading and projects</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Independent learning activities</span>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Assignments</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Submission and Feedback
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Work is submitted through the learning platform and
                      teachers provide feedback to help students improve.
                    </td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Teacher feedback</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Areas for improvement</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Guided progress</span>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Assessment</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Progress Checks
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Teachers assess understanding through quizzes, written
                      assignments and end-of-unit tests.
                    </td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Quick quizzes</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Written work</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>End-of-unit tests</span>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Progress Reporting</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Reports and Meetings
                    </td>
                    <td className="px-6 py-4 border-b text-sm">
                      Parents receive progress reports and can connect with
                      teachers through online parent–teacher meetings.
                    </td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Progress reports</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Parent–teacher meetings</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Academic guidance</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Language Options */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Assessment and Reports
            </h3>

            <p className="text-gray-700 mb-4">
              Teachers check understanding through quick quizzes, written work
              and end-of-unit tests. Parents receive progress reports and can
              meet teachers online through parent–teacher meetings.
            </p>

            <p className="text-gray-700">
              In Grades 9–12, students also prepare for Pearson Edexcel or NIOS
              examinations, depending on their chosen curriculum pathway.
            </p>
          </div>

          {/* Senior School */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Exams and Qualifications
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  British Pathway
                </h4>
                <p className="text-gray-700 mb-4">
                  British pathway students sit International GCSE and
                  International A Level exams at Pearson-approved examination
                  centres. Examination entry fees are paid separately to the
                  examination centre.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Indian Pathway
                </h4>
                <p className="text-gray-700 mb-4">
                  Indian pathway students sit NIOS Secondary and Senior
                  Secondary examinations at designated NIOS examination centres.
                </p>
              </div>
            </div>
          </div>

          {/* Webinars Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Support for Families
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">
                  Getting Started
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Onboarding Session
                </h3>
                <p className="text-gray-600 text-sm">
                  An onboarding session before the first day helps you and your
                  child understand the learning platform and get ready for
                  classes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">
                  Learning Support
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Teacher and Learner Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Learners receive academic guidance and support, while
                  technical assistance is available for platform-related
                  difficulties.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">
                  Inclusive Learning
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Additional Needs Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Our inclusion team provides additional support for learners
                  with additional educational needs.
                </p>
              </div>
            </div>
          </div>

          {/* What You Need at Home */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4">
              What You Need at Home
            </h3>

            <p className="text-gray-700 mb-4">
              Your child needs a few basic things to participate comfortably in
              live online classes and complete schoolwork.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>A laptop or desktop computer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>A working webcam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>A headset or headphones with a microphone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>A reliable internet connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>A quiet place to study</span>
              </li>
            </ul>

            <p className="text-gray-700 mt-6">
              See the full checklist on our requirements page to prepare your
              home learning environment.
            </p>
          </div>

          {/* FAQs Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">
                  Classes
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Are classes live or recorded?
                </h3>
                <p className="text-gray-700 text-sm">
                  Lessons are taught live by our teachers, allowing learners to
                  participate in discussions, ask questions and interact with
                  classmates.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">
                  School Hours
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  How many hours a day is my child online?
                </h3>
                <p className="text-gray-700 text-sm">
                  School hours vary depending on the learner's stage and grade.
                  Timetables are structured around the programme and learning
                  requirements.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">
                  Parent Involvement
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Does a parent need to be present?
                </h3>
                <p className="text-gray-700 text-sm">
                  For Early Years and early Primary, a parent or carer should
                  be nearby for part of the day. Older students work more
                  independently.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Try a free 2-week trial class with our teachers, then apply when
              you are ready. The ₹999 registration fee is waived during our
              launch.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
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