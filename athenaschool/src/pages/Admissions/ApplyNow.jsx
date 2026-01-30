import { FileText, Users, Clock, CheckCircle, Package, Play, Download, ArrowRight } from 'lucide-react';

export default function ApplyNow() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Register?</h1>
            <p className="text-xl mb-8">Start Your Learning Journey with Us!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-300 text-blue-950 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
                <FileText size={20} />
                Enquire Now
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Download size={20} />
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12">
            <p className="text-lg text-blue-900">
              Registration is open for <strong>Nursery through Grade 9</strong> for the 2024-25 academic year. 
              Admissions are granted on a first-come, first-served basis, subject to seat availability. 
              We look forward to welcoming your child into our global learning community!
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <Users className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Who Should Register?</h3>
              <p className="text-blue-700">Students from Nursery to Grade 9 seeking quality digital education</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <Clock className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Batch Timings</h3>
              <p className="text-blue-700">Flexible scheduling options available to suit your needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <CheckCircle className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Essential Requirements</h3>
              <p className="text-blue-700">Basic documents and internet connectivity for online learning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <Package className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Process Requirements</h3>
              <p className="text-blue-700">Simple 7-step registration process with guided support</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full">
              <p className="text-xl font-semibold">"Digital Schools are the future and we are India's first."</p>
            </div>
          </div>

          {/* Registration Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-950">Step-by-Step Registration Process</h2>
            <p className="text-center text-blue-700 mb-12 max-w-3xl mx-auto">
              Our registration process is designed to make joining Athena AI School seamless and exciting for both learners and parents.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Fill Out the Registration Form</h3>
                  <p className="text-blue-700">
                    Begin by completing the online registration form and paying the application fee. 
                    This initiates your child's journey toward personalised, flexible education.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Placement Test (Grades 6-8)</h3>
                  <p className="text-blue-700">
                    If your child is applying for Grades 6 through 8, they will take an online placement test 
                    to assess their learning needs and help us create a supportive learning path.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Video Interaction (If Needed)</h3>
                  <p className="text-blue-700">
                    For some applicants, a video interaction may be scheduled to get to know your child better 
                    and understand their educational aspirations.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Confirmation and Payment</h3>
                  <p className="text-blue-700">
                    Once the application is confirmed, you'll proceed with the payment of school fees 
                    and select your preferred learning plan. We offer flexible payment options to suit different needs.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Setting Up the Athena AI Learning Platform</h3>
                  <p className="text-blue-700">
                    After payment, set up your personalised Athena AI Learning Platform, designed to make learning 
                    engaging, interactive, and easily accessible.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Learning Kit Delivery</h3>
                  <p className="text-blue-700">
                    Receive your custom Learning Kit at your doorstep, filled with resources designed to 
                    enrich your child's educational experience.
                  </p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  7
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Get Started!</h3>
                  <p className="text-blue-700">
                    Your child is now ready to embark on their educational journey with Athena AI School. Happy learning!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-950">Required Documents</h2>
            <p className="text-blue-700 mb-6">
              Before classes begin, please ensure the following documents are submitted:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-700">Valid Birth Certificate of the Child</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-700">National Identity Card of Parent/Guardian and Child (e.g., Aadhar Card or Passport)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-700">Recent Passport-Size Photos of Parent/Guardian and Child</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-700">Previous Year's Progress Report or Marks Card (for Grade 2 and above)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-700">Transfer Certificate/Migration Certificate (if applicable)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-700">Additional documents as required in special cases</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
              <p className="mb-6">Join India's first digital school and give your child the education they deserve.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-300 text-blue-950 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
                  <ArrowRight size={20} />
                  Start Registration
                </button>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
