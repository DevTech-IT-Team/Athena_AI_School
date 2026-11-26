import {
  FileText,
  Users,
  Clock,
  CheckCircle,
  Package,
  Download,
  ArrowRight,
} from 'lucide-react';

export default function ApplyNow() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Online School Admission 2027-28: How to Apply
            </h1>

            <p className="text-xl mb-8">
              Admissions for the 2027-28 academic year at Edulectual K12 Online
              School are open now. Apply from India, the UAE, Qatar, Oman,
              Kuwait, Bahrain, the UK, Australia, the US or Canada. The process
              is simple, online and the same for families everywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-300 text-blue-950 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
                <FileText size={20} />
                Start Your Application
              </button>

              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Download size={20} />
                Book a Free 2-Week Trial
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
              Admissions are open for the <strong>2027-28 academic year</strong>.
              Families can apply from India and international locations.
              <span className="block mt-2">
                [PLACEHOLDER: Confirm which grades are open for 2027-28.]
              </span>
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <Users className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">
                Global Admissions
              </h3>
              <p className="text-blue-700">
                Apply from India, the Gulf, the UK, Australia, the US or Canada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <Clock className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">
                Key Admission Dates
              </h3>
              <p className="text-blue-700">
                Early-bird and founding-family offers available for 2027-28.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <CheckCircle className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">
                Free Trial
              </h3>
              <p className="text-blue-700">
                Experience live online classes with a free 2-week trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <Package className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-blue-900">
                Easy Application
              </h3>
              <p className="text-blue-700">
                A simple online process with guidance from our admissions team.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full">
              <p className="text-xl font-semibold">
                Your Child's Learning Journey Starts Here!
              </p>
            </div>
          </div>

          {/* Key Dates and Offers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-950">
              Key Dates and Offers
            </h2>

            <p className="text-center text-blue-700 mb-12 max-w-3xl mx-auto">
              Take advantage of our special launch offers and early-bird
              admission benefits for the 2027-28 academic year.
            </p>

            <div className="space-y-8">
              {/* Offer 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    31 March 2027 – Founding-Family Offer
                  </h3>
                  <p className="text-blue-700">
                    Get 25% off year-one tuition, fees locked for 3 years and
                    access to our founding-family benefits.
                    [PLACEHOLDER: Confirm whether the offer applies to the first
                    100 or 200 students.]
                  </p>
                </div>
              </div>

              {/* Offer 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    31 May 2027 – India and Gulf Early-Bird Deadline
                  </h3>
                  <p className="text-blue-700">
                    Families applying from India and the Gulf can receive 15%
                    off tuition fees by applying before the early-bird
                    deadline.
                  </p>
                </div>
              </div>

              {/* Offer 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    31 July 2027 – International Early-Bird Deadline
                  </h3>
                  <p className="text-blue-700">
                    Families from the UK, US, Canada and Australia can receive
                    15% off tuition fees before the early-bird deadline.
                  </p>
                </div>
              </div>

              {/* Offer 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Launch Offer – Free Trial and Registration
                  </h3>
                  <p className="text-blue-700">
                    Enjoy a free 2-week trial class and a waived ₹999
                    registration fee during our launch period.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-950">
              Step-by-Step Admission Process
            </h2>

            <p className="text-center text-blue-700 mb-12 max-w-3xl mx-auto">
              Our admission process is designed to make joining Edulectual K12
              Online School simple, convenient and seamless for families
              everywhere.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Book a Free Trial or Call
                  </h3>
                  <p className="text-blue-700">
                    Book a free 2-week trial or demo class so your child can
                    experience live lessons. Alternatively, schedule a short
                    call with our admissions team to discuss the available
                    pathways.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Complete the Application Form
                  </h3>
                  <p className="text-blue-700">
                    Fill in the online application form with your child's
                    details, current grade and preferred pathway. There is no
                    registration fee during our launch.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Placement Check
                  </h3>
                  <p className="text-blue-700">
                    We use a short online assessment to help place your child
                    in the right class according to their learning level.
                    [PLACEHOLDER: Confirm which grades require a placement
                    test.]
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Offer and Payment
                  </h3>
                  <p className="text-blue-700">
                    We confirm your child's place by email. You can then pay
                    the tuition fees, with any applicable discounts already
                    applied.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Get Set Up
                  </h3>
                  <p className="text-blue-700">
                    Receive your login details for the Edulectual K12 learning
                    platform and your timetable according to your region.
                    [PLACEHOLDER: Confirm learning kit delivery.]
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  6
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    First Day of Class
                  </h3>
                  <p className="text-blue-700">
                    Your child joins their online class, meets their teacher
                    and begins their learning journey with Edulectual K12
                    Online School.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-950">
              Documents You Will Need
            </h2>

            <p className="text-blue-700 mb-6">
              Please prepare the following documents to complete your child's
              admission process:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-blue-700">
                  Child's birth certificate.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-blue-700">
                  Photo ID for the parent or guardian and the child (for
                  example Aadhaar, Emirates ID or passport).
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-blue-700">
                  The most recent school report, if your child has attended
                  school.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-blue-700">
                  A transfer or leaving certificate, if your child is moving
                  from another school.
                </span>
              </li>
            </ul>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-950">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {/* FAQ 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    When Do Admissions for 2027-28 Close?
                  </h3>
                  <p className="text-blue-700">
                    [PLACEHOLDER: Confirm the admission closing date.]
                    Founding-family places close on 31 March 2027. Early-bird
                    pricing ends on 31 May 2027 for India and the Gulf, and
                    31 July 2027 for the UK, US, Canada and Australia.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Can We Apply Mid-Year?
                  </h3>
                  <p className="text-blue-700">
                    [PLACEHOLDER: Confirm the mid-year admission policy.]
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Is There an Application Fee?
                  </h3>
                  <p className="text-blue-700">
                    No. The ₹999 registration fee is waived during our launch.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Can We Apply from Outside India?
                  </h3>
                  <p className="text-blue-700">
                    Yes. We accept families from India, the UAE, Qatar, Oman,
                    Kuwait, Bahrain, the UK, Australia, the US and Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Admissions for 2027-28 Are Open
              </h2>

              <p className="mb-6">
                Try a free 2-week trial class with our teachers, then apply
                when you are ready. The ₹999 registration fee is waived
                during our launch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-300 text-blue-950 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
                  <ArrowRight size={20} />
                  Book a Free 2-Week Trial
                </button>

                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <FileText size={20} />
                  Apply for 2027-28
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}