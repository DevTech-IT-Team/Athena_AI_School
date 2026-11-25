import React, { useState } from "react";
import { Award, CheckCircle, Globe, ShieldCheck, BookOpen } from "lucide-react";

const AffiliationsAccreditation = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Is Edulectual K12 Online School recognised?",
      answer:
        "Our students take qualifications from Pearson Edexcel and NIOS, and those certificates are issued by the boards themselves. The school's own accreditation status and affiliations will be published here once confirmed and supported by evidence.",
    },
    {
      question: "Who issues my child's certificates?",
      answer:
        "Pearson issues International GCSE and International A Level certificates, and NIOS issues Secondary and Senior Secondary certificates.",
    },
  ];

  const handleTrialClick = () => {
    window.location.href = "/contact";
  };

  const handleApplyClick = () => {
    window.location.href = "/admissions";
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto text-center">

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
              Qualifications & Recognition
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
              Online School Accreditation and Affiliations
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-4xl mx-auto">
              Parents rightly ask whether an online school's
              qualifications are recognised. At Edulectual K12 the
              answer rests on the exam boards our students sit, so
              this page sets out exactly how each pathway leads to
              a recognised certificate. We only list affiliations
              we can show evidence for.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

              <button
                onClick={handleTrialClick}
                className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                Book a free 2-week trial
              </button>

              <button
                onClick={handleApplyClick}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition-colors"
              >
                Apply for 2027-28
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">

        <div className="max-w-6xl mx-auto">

          {/* Introduction */}
          <div className="text-center mb-16">

            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qualifications That Matter
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Edulectual K12 Online School, our academic pathways
              are built around recognised examination boards. Students
              follow their chosen curriculum and work towards
              qualifications issued by the respective examination
              boards.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
              We believe parents deserve clear information about
              examinations, certificates and school-level affiliations.
              This page distinguishes the qualifications our students
              pursue from any separate institutional accreditation.
            </p>

          </div>

          {/* Pathway Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Pearson */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-blue-600">

              <div className="flex items-center mb-6">

                <Globe className="w-10 h-10 text-blue-600 mr-4" />

                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-blue-600">
                    British Pathway
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    Pearson Edexcel
                  </h3>
                </div>

              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Students on the British pathway take Pearson Edexcel
                International GCSE and International A Level
                qualifications.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                These certificates are issued by Pearson, not by
                the school, and are recognised by universities in
                the UK and many other countries.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">

                <h4 className="font-semibold text-blue-950 mb-2">
                  Examination Board
                </h4>

                <p className="text-sm text-blue-900 leading-relaxed">
                  Pearson Edexcel issues International GCSE and
                  International A Level qualifications.
                </p>

              </div>

              {/* Affiliation Placeholder */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg mt-6">

                <h4 className="font-semibold text-amber-900 mb-2">
                  School Affiliation Details
                </h4>

                <p className="text-sm text-amber-800 leading-relaxed">
                  [PLACEHOLDER: Edulectual K12's Pearson centre
                  or partner status, with reference number.]
                </p>

              </div>

            </div>

            {/* NIOS */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-green-600">

              <div className="flex items-center mb-6">

                <BookOpen className="w-10 h-10 text-green-600 mr-4" />

                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-green-600">
                    Indian Pathway
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    National Institute of Open Schooling
                  </h3>
                </div>

              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Students on the Indian pathway take Secondary and
                Senior Secondary examinations with the National
                Institute of Open Schooling (NIOS), set up by
                the Ministry of Education, Government of India.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Certificates are issued by NIOS, the examination
                board, not by the school.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">

                <h4 className="font-semibold text-green-950 mb-2">
                  Examination Board
                </h4>

                <p className="text-sm text-green-900 leading-relaxed">
                  NIOS issues Secondary and Senior Secondary
                  certificates.
                </p>

              </div>

              {/* Affiliation Placeholder */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg mt-6">

                <h4 className="font-semibold text-amber-900 mb-2">
                  School Affiliation Details
                </h4>

                <p className="text-sm text-amber-800 leading-relaxed">
                  [PLACEHOLDER: Edulectual K12's NIOS accredited
                  institution status and code, if any.]
                </p>

              </div>

            </div>

          </div>

          {/* Other Memberships */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-12">

            <div className="flex items-center mb-8">

              <ShieldCheck className="w-10 h-10 text-blue-600 mr-4" />

              <h3 className="text-2xl font-bold text-gray-900">
                Other Memberships and Standards
              </h3>

            </div>

            <div className="space-y-6">

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">

                <h4 className="font-semibold text-gray-900 mb-3">
                  Other Accreditation and Memberships
                </h4>

                <p className="text-gray-700 leading-relaxed">
                  [PLACEHOLDER: any other accreditation, membership
                  or quality certification, with certificate number
                  and issuing body.]
                </p>

              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">

                <h4 className="font-semibold text-gray-900 mb-3">
                  Data Protection and Information Security
                </h4>

                <p className="text-gray-700 leading-relaxed">
                  [PLACEHOLDER: data protection or information
                  security certification, if held.]
                </p>

              </div>

            </div>

          </div>

          {/* How to Check */}
          <div className="bg-blue-50 rounded-xl p-8 md:p-10 mb-12">

            <div className="flex items-center mb-6">

              <CheckCircle className="w-10 h-10 text-blue-600 mr-4" />

              <h3 className="text-2xl font-bold text-blue-950">
                How to Check
              </h3>

            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              You can ask us for a copy of any certificate listed
              on this page. We will also explain how to verify
              results directly with Pearson or NIOS.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white p-6 rounded-lg">

                <h4 className="font-semibold text-gray-900 mb-3">
                  Pearson Verification
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  International GCSE and International A Level
                  qualifications can be checked through the
                  relevant Pearson verification channels.
                </p>

              </div>

              <div className="bg-white p-6 rounded-lg">

                <h4 className="font-semibold text-gray-900 mb-3">
                  NIOS Verification
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Secondary and Senior Secondary qualifications
                  can be verified through the relevant NIOS
                  verification processes.
                </p>

              </div>

            </div>

          </div>

          {/* Why Exam Board Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-12">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why the Exam Board Matters More Than a Logo
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              For an online school, what counts most is the
              certificate your child receives at the end of
              Grade 10 and Grade 12. Because those certificates
              come from Pearson or NIOS, universities and
              employers can check them directly with the board.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We would rather explain this clearly than fill
              the page with badges, and we will add each
              school-level affiliation here only once it is
              confirmed in writing.
            </p>

          </div>

          {/* FAQ */}
          <div className="mb-16">

            <div className="text-center mb-10">

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                FAQs
              </span>

              <h2 className="text-3xl font-bold text-gray-900 mt-4">
                Frequently Asked Questions
              </h2>

            </div>

            <div className="space-y-4">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm"
                >

                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                    className="w-full flex items-center justify-between text-left p-6"
                  >

                    <h3 className="text-lg font-semibold text-gray-900 pr-6">
                      {faq.question}
                    </h3>

                    <span className="text-2xl text-blue-600 font-bold">
                      {openFAQ === index ? "−" : "+"}
                    </span>

                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-6">

                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

          {/* Admissions CTA */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-700 text-white rounded-2xl p-10 md:p-16 text-center">

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
              Admissions Open
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-8">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto mb-6">
              Try a free 2-week trial class with our teachers,
              then apply when you are ready. The ₹999 registration
              fee is waived during our launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

              <button
                onClick={handleTrialClick}
                className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                Book a free 2-week trial
              </button>

              <button
                onClick={handleApplyClick}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition-colors"
              >
                Apply for 2027-28
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AffiliationsAccreditation;