export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">How does it work?</h1>
            <p className="text-xl mb-8">Changing the way children learn and grow</p>
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
            <span className="text-blue-600 font-medium">How does it work?</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              For starters over a thousand parents have registered their children at WisdomAI School including two of the founders! So, yes it works - but it is not for everyone. Before we get into whether WisdomAI School is right for your child let's walk you over how online school actually functions.
            </p>
          </div>

          {/* School Overview */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">WisdomAI School Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  <strong>WisdomAI School is your virtual school.</strong> Presently, we are registering learners for Nursery through Grade 12.
                </p>
                <p className="text-gray-700 mb-4">
                  The School follows an annual academic calendar and conducts live classes online for 1-4 hours, 5-6 days a week (depending on the Grade)
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Classes conducted by trained, experienced, and skilled facilitators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Special Classes by subject experts and real-life achievers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Conferences and Online Events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Wide range of capstone courses & electives</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              Moreover, many subject experts and real-life achievers will also take sessions throughout the year. Conferences and Online Events are also planned as part of the annual calendar. Summer School Programme is part of the academic programme and offered to all learners.
            </p>
          </div>

          {/* Grade Structure Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Grade Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Minimum Age</th>
                    <th className="px-6 py-4 text-left">Duration of online live classes</th>
                    <th className="px-6 py-4 text-left">Curriculum</th>
                    <th className="px-6 py-4 text-left">Subjects (Day-School)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Nursery</div>
                      <div className="text-sm text-gray-600">3 Years</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">1 Hour/5 Days a Week</td>
                    <td className="px-6 py-4 border-b text-sm">Mapped to National Curriculum Framework</td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Communication and Language</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Personal, Social and Emotional Development</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Literacy</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Mathematics/ Numeracy</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Understanding the World</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Expressive Arts and Design</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Music and Movement</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">KG 1</div>
                      <div className="text-sm text-gray-600">4 Years</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">2 Hours/5 Days a Week</td>
                    <td className="px-6 py-4 border-b text-sm">Mapped to National Curriculum Framework</td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Communication and Language</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Personal, Social and Emotional Development</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Literacy</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Mathematics/Numeracy</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Understanding the World</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Expressive Arts and Design</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Music and Movement</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">KG 2</div>
                      <div className="text-sm text-gray-600">5 Years</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">2 Hours/5 Days a Week</td>
                    <td className="px-6 py-4 border-b text-sm">Mapped to National Curriculum Framework</td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Communication and Language</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Personal, Social and Emotional Development</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Literacy</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Mathematics/Numeracy</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Understanding the World</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Expressive Arts and Design</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Music and Movement</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Grade 1-5</div>
                      <div className="text-sm text-gray-600">6-10 Years</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">3 Hours/6 Days a Week</td>
                    <td className="px-6 py-4 border-b text-sm">National Curriculum Framework 2005</td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>English</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Mathematics</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>EVS (Gr1-2) / Science (Gr 3-5)</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Social Studies (Gr 3-5)</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Computational Thinking & Coding</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Digital Media & Arts</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Music & Rhythm</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Second Language</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Third Language (Optional)</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <div className="font-semibold">Grade 6-8</div>
                      <div className="text-sm text-gray-600">11-13 Years</div>
                    </td>
                    <td className="px-6 py-4 border-b text-sm">4 Hours/6 Days a Week</td>
                    <td className="px-6 py-4 border-b text-sm">National Curriculum Framework 2005</td>
                    <td className="px-6 py-4 border-b">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>English</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Mathematics</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Science</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Social Studies</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Computational Thinking & Coding</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Digital Media & Arts</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Physical Fitness & Mindfulness</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Second Language</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>Third Language</span>
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
            <h3 className="text-2xl font-bold mb-4">Language Options</h3>
            <p className="text-gray-700 mb-4">
              We offer a wide range of options to study Second and Third Language. For more details, click here:
            </p>
            <a 
              href="https://www.Wisdomaischool.com/languages/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              https://www.Wisdomaischool.com/languages/
            </a>
          </div>

          {/* Senior School */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4">Senior School</h3>
            <p className="text-gray-700 mb-4">
              Interested learners for Grade 9 and above at WisdomAI School can register with NIOS as a Private Candidate. Presently, this option is available only for learners residing in India. For more details please visit:
            </p>
            <a 
              href="https://www.Wisdomaischool.com/senior-school/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              https://www.Wisdomaischool.com/senior-school/
            </a>
          </div>

          {/* Webinars Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">#BeingWisdomAI</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">#BeingWisdomAI</div>
                <h3 className="text-lg font-semibold mb-2">WisdomAI School Webinar on Homeschooling</h3>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">#BeingWisdomAI</div>
                <h3 className="text-lg font-semibold mb-2">WisdomAI School Introduction of Facilitators</h3>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-medium mb-2">#BeingWisdomAI</div>
                <h3 className="text-lg font-semibold mb-2">Demonstration of the new WisdomAI Learning Portal</h3>
                <p className="text-sm text-gray-600">10 October 2020</p>
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
