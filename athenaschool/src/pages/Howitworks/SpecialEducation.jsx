export default function SpecialEducation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Special Education
            </h1>

            <p className="text-xl mb-8">
              Special Needs and Inclusive Education at Our Online School
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book a free 2-week trial
              </button>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Talk to our inclusion team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span>›</span>
            <span className="text-blue-600 font-medium">
              Special Education
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Special Needs and Inclusive Education at Our Online School
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Every child deserves to be taught in a way that works for them.
              At Edulectual K12 Online School, our inclusion team works with
              families, teachers and, where needed, outside specialists to
              support children with special educational needs (SEN) and other
              learning differences. For some children, learning online at home
              is itself a real help: fewer distractions, a familiar space and
              lessons they can revisit.
            </p>
          </div>

          {/* Who We Support */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Who We Support
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We welcome enquiries about children with, for example, dyslexia
              and other specific learning difficulties, attention difficulties,
              autism, speech and language needs, anxiety, or physical and
              medical conditions. Before enrolment, we talk with you to
              understand your child's needs and whether we can meet them well.
            </p>

            <p className="text-gray-700">
              <strong>Support Eligibility:</strong> [PLACEHOLDER: Confirm the
              range of needs the team can currently support.]
            </p>
          </div>

          {/* How Support Works */}
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              How Support Works
            </h2>

            <div className="space-y-8">

              {/* Step 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Understanding Your Child
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  We review any existing reports and talk with parents and,
                  if useful, your child. Where needed, we may suggest an
                  assessment by a qualified professional.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  2. A Learning Support Plan
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Together we agree a plan with clear goals and the
                  adjustments your child will receive in class.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3. In the Online Classroom
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Instructions given in short steps and repeated in writing.
                  </li>
                  <li>
                    Extra time for tasks and flexible ways to show learning.
                  </li>
                  <li>
                    Seating in smaller breakout groups when helpful.
                  </li>
                  <li>
                    Captions, adjustable text size and use of assistive tools.
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  4. Remedial and Small-Group Sessions
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Short, focused sessions to strengthen reading, writing or
                  maths skills.
                </p>

                <p className="text-gray-700 mt-3">
                  [PLACEHOLDER: Confirm availability and any extra cost.]
                </p>
              </div>

              {/* Step 5 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  5. Review
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  We review the plan each term with parents and adjust it
                  as your child grows.
                </p>
              </div>

            </div>
          </div>

          {/* Exams and Access Arrangements */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">
              Exams and Access Arrangements
            </h2>

            <p className="text-gray-700 leading-relaxed">
              For Pearson Edexcel and NIOS exams, eligible students may be
              able to receive access arrangements such as extra time or a
              reader. These are approved by the exam board under its own
              rules, and we help families gather the evidence needed.
            </p>
          </div>

          {/* Working with Parents */}
          <div className="bg-purple-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Working With Parents
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Parents know their child best. We share progress often and
              agree strategies you can use at home.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-indigo-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Can my child with dyslexia join?
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Usually, yes. We will discuss your child's needs and agree
                  a support plan before they start.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Do you offer one-to-one support?
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  [PLACEHOLDER: Confirm one-to-one options and costs.]
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Can my child get extra time in board exams?
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Access arrangements are approved by Pearson or NIOS under
                  their rules. We help you apply.
                </p>
              </div>

            </div>
          </div>

          {/* Admissions */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
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