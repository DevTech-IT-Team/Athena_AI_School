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

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Computational Thinking and Coding for Kids
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Building problem-solving skills, creativity and logical thinking
              for the future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Book a free 2-week trial
              </button>

              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Apply for 2027-28
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">
              Computational Thinking and Coding
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Computational Thinking and Coding for Kids
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Computational thinking is a way of solving problems that computer
              scientists use, but it is useful everywhere: in maths, science,
              writing and everyday life. At Edulectual K12 Online School,
              children learn it step by step, first through puzzles and games
              and later through real programming.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book a free 2-week trial
              </button>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Apply for 2027-28
              </button>
            </div>
          </div>

          {/* Four Core Ideas */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Four Core Ideas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Decomposition */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Breaking Problems Down
                  </h3>
                </div>

                <p className="text-gray-700">
                  Splitting a big problem into smaller parts that are easier
                  to solve, like planning a project one step at a time.
                </p>
              </div>

              {/* Pattern Recognition */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Cpu className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Spotting Patterns
                  </h3>
                </div>

                <p className="text-gray-700">
                  Noticing what is similar between problems so earlier
                  solutions and ideas can be reused.
                </p>
              </div>

              {/* Abstraction */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Focusing on What Matters
                  </h3>
                </div>

                <p className="text-gray-700">
                  Ignoring unnecessary details to see the heart of a problem,
                  which is called abstraction.
                </p>
              </div>

              {/* Algorithm Design */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Writing Clear Steps
                  </h3>
                </div>

                <p className="text-gray-700">
                  Designing a precise sequence of instructions, an algorithm,
                  that a person or computer can follow.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Stages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Children Do at Each Stage
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Early Years and Primary
                </h3>

                <p className="text-gray-700">
                  Unplugged puzzles, sequencing games and block-based coding
                  introduce children to computational thinking through fun
                  and interactive activities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Grades 6–8
                </h3>

                <p className="text-gray-700">
                  Block and text-based programming, simple apps and games,
                  and data projects help learners develop coding and
                  problem-solving skills.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  Grades 9–12
                </h3>

                <p className="text-gray-700">
                  Students explore programming in a text language and,
                  on the British pathway, Computer Science as an
                  International GCSE or A Level option.
                </p>
              </div>
            </div>
          </div>

          {/* Why it Matters */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Computational Thinking Matters
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed text-center">
              Children who can break down a problem and test their ideas
              become more confident in every subject. They also gain a
              head start in the digital skills that many future careers need.
              Computational thinking encourages curiosity, creativity,
              logical reasoning and the confidence to approach challenges
              with a solution-oriented mindset.
            </p>
          </div>

          {/* Hands-on Extension */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Hands-on Extension
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Children who love building can take their learning further
              through our Learning Garage robotics and electronics workshops.
              These hands-on experiences encourage learners to experiment,
              design, build and explore how technology works in the real world.
            </p>
          </div>

          {/* Cross Subject Connections */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How It Connects to Other Subjects
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed">
              Computational thinking turns up everywhere once children know
              to look for it. In maths, they break word problems into steps.
              In science, they spot patterns in results. In writing, they
              plan the structure of a story before drafting.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mt-4">
              Teachers point out these links so that children use the same
              problem-solving habits across the curriculum, not just in
              computing lessons.
            </p>
          </div>

          {/* Admissions CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Book a free 2-week trial
              </button>

              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Apply for 2027-28
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Computational;