
import React, { useState } from "react";
import {
  Award,
  CheckCircle,
  Globe,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Star,
  GraduationCap,
  Video,
  Clock,
  ChevronDown,
} from "lucide-react";

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
    <div className="min-h-screen bg-white text-[#14215B] font-['Nunito',sans-serif]">

      {/* Announcement Banner */}
      <div className="bg-[#14215B] text-white text-center px-4 py-3 text-sm">
        <p>
          Admissions for 2027-28 are open. Founding families save 25%
          when they enrol by 31 March 2027.{" "}
          <a
            href="/fees"
            className="font-bold underline underline-offset-4 ml-1"
          >
            See fees and offers →
          </a>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFF9F2] pt-10 pb-24 md:pt-16 md:pb-28">

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#D8F4E8] rounded-full opacity-60" />
        <div className="absolute bottom-10 -left-20 w-64 h-64 bg-[#FFE4E9] rounded-full opacity-50" />

        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

          {/* Breadcrumb */}
          <div className="text-sm text-[#64748B] mb-8">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span className="mx-2">›</span>
            <a href="/about" className="hover:text-blue-600">
              About
            </a>
            <span className="mx-2">›</span>
            <span>Accreditation</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Hero Content */}
            <div>

              <span className="inline-flex items-center gap-2 bg-[#FFE4E9] text-[#14215B] px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star size={16} />
                Accreditation
              </span>

              <h1 className="font-['Fredoka',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#14215B] mb-6">
                Online School Accreditation and Affiliations
              </h1>

              <p className="text-lg text-[#526078] leading-relaxed">
                Parents rightly ask whether an online school's
                qualifications are recognised. At Edulectual K12 the
                answer rests on the exam boards our students sit, so
                this page sets out exactly how each pathway leads to
                a recognised certificate. We only list affiliations
                we can show evidence for.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <button
                  onClick={handleTrialClick}
                  className="bg-[#14215B] text-white px-7 py-4 rounded-full font-bold hover:bg-[#263a82] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Book a free 2-week trial
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={handleApplyClick}
                  className="bg-white text-[#14215B] border-2 border-[#14215B] px-7 py-4 rounded-full font-bold hover:bg-[#14215B] hover:text-white transition-all duration-300"
                >
                  Apply for 2027-28
                </button>

              </div>

            </div>

            {/* Hero Image */}
            <div className="relative">

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">

                <img
                  src="/images/teen-classroom.jpg"
                  alt="Student learning online"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#14215B]/20 to-transparent" />

              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-4 md:-left-8 bottom-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4 max-w-[260px]">

                <div className="bg-[#FFE4E9] p-3 rounded-xl">
                  <Video className="text-[#14215B]" size={24} />
                </div>

                <div>
                  <p className="font-bold text-[#14215B]">
                    Live online classes
                  </p>
                  <p className="text-sm text-gray-500">
                    Nursery to Grade 12
                  </p>
                </div>

              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-3 md:-right-5 top-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">

                <div className="bg-[#FFF4C5] p-3 rounded-xl">
                  <Award className="text-[#14215B]" size={24} />
                </div>

                <div>
                  <p className="font-bold text-[#14215B]">
                    Admissions open
                  </p>
                  <p className="text-sm text-gray-500">
                    2027-28
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-20 md:h-24"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C240,100 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-10">

          {/* Introduction */}
          <div className="text-center max-w-4xl mx-auto mb-16">

            <div className="inline-flex items-center justify-center bg-[#FFF4C5] p-5 rounded-2xl mb-6">
              <Award size={40} className="text-[#14215B]" />
            </div>

            <h2 className="font-['Fredoka',sans-serif] text-3xl md:text-4xl font-bold mb-6">
              Qualifications That Matter
            </h2>

            <p className="text-lg text-[#526078] leading-relaxed mb-4">
              At Edulectual K12 Online School, our academic pathways
              are built around recognised examination boards. Students
              follow their chosen curriculum and work towards
              qualifications issued by the respective examination
              boards.
            </p>

            <p className="text-lg text-[#526078] leading-relaxed">
              We believe parents deserve clear information about
              examinations, certificates and school-level affiliations.
              This page distinguishes the qualifications our students
              pursue from any separate institutional accreditation.
            </p>

          </div>

          {/* Pathway Cards */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Pearson Card */}
            <div className="bg-[#F0F7FF] rounded-[2rem] p-8 md:p-10 border border-blue-100 hover:shadow-xl transition-all duration-300">

              <div className="flex items-center gap-4 mb-8">

                <div className="bg-[#DCEBFF] p-4 rounded-2xl">
                  <Globe size={32} className="text-[#14215B]" />
                </div>

                <div>
                  <span className="text-sm uppercase tracking-widest font-bold text-blue-600">
                    British Pathway
                  </span>

                  <h3 className="font-['Fredoka',sans-serif] text-2xl md:text-3xl font-bold mt-1">
                    Pearson Edexcel
                  </h3>
                </div>

              </div>

              <p className="text-[#526078] leading-relaxed mb-6">
                Students on the British pathway take Pearson Edexcel
                International GCSE and International A Level
                qualifications.
              </p>

              <p className="text-[#526078] leading-relaxed mb-8">
                These certificates are issued by Pearson, not by
                the school, and are recognised by universities in
                the UK and many other countries.
              </p>

              <div className="bg-white rounded-2xl p-6 mb-6">

                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="text-blue-600" size={24} />

                  <h4 className="font-bold text-[#14215B] text-lg">
                    Examination Board
                  </h4>
                </div>

                <p className="text-[#526078] leading-relaxed">
                  Pearson Edexcel issues International GCSE and
                  International A Level qualifications.
                </p>

              </div>

              <div className="bg-[#FFF4C5] rounded-2xl p-6">

                <h4 className="font-bold text-[#14215B] mb-3">
                  School Affiliation Details
                </h4>

                <p className="text-[#526078] leading-relaxed text-sm">
                  [PLACEHOLDER: Edulectual K12's Pearson centre
                  or partner status, with reference number.]
                </p>

              </div>

            </div>

            {/* NIOS Card */}
            <div className="bg-[#F0FFF7] rounded-[2rem] p-8 md:p-10 border border-green-100 hover:shadow-xl transition-all duration-300">

              <div className="flex items-center gap-4 mb-8">

                <div className="bg-[#D8F4E8] p-4 rounded-2xl">
                  <BookOpen size={32} className="text-green-700" />
                </div>

                <div>
                  <span className="text-sm uppercase tracking-widest font-bold text-green-700">
                    Indian Pathway
                  </span>

                  <h3 className="font-['Fredoka',sans-serif] text-2xl md:text-3xl font-bold mt-1">
                    National Institute of Open Schooling
                  </h3>
                </div>

              </div>

              <p className="text-[#526078] leading-relaxed mb-6">
                Students on the Indian pathway take Secondary and
                Senior Secondary examinations with the National
                Institute of Open Schooling (NIOS), set up by
                the Ministry of Education, Government of India.
              </p>

              <p className="text-[#526078] leading-relaxed mb-8">
                Certificates are issued by NIOS, the examination
                board, not by the school.
              </p>

              <div className="bg-white rounded-2xl p-6 mb-6">

                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="text-green-600" size={24} />

                  <h4 className="font-bold text-[#14215B] text-lg">
                    Examination Board
                  </h4>
                </div>

                <p className="text-[#526078] leading-relaxed">
                  NIOS issues Secondary and Senior Secondary
                  certificates.
                </p>

              </div>

              <div className="bg-[#FFF4C5] rounded-2xl p-6">

                <h4 className="font-bold text-[#14215B] mb-3">
                  School Affiliation Details
                </h4>

                <p className="text-[#526078] leading-relaxed text-sm">
                  [PLACEHOLDER: Edulectual K12's NIOS accredited
                  institution status and code, if any.]
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Other Memberships */}
      <section className="py-20 bg-[#D8F4E8]">

        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <div className="text-center mb-12">

            <span className="inline-block bg-white text-[#14215B] px-5 py-2 rounded-full font-bold text-sm mb-4">
              Our Standards
            </span>

            <h2 className="font-['Fredoka',sans-serif] text-3xl md:text-4xl font-bold">
              Other Memberships and Standards
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Accreditation */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm">

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-[#FFE4E9] p-4 rounded-2xl">
                  <ShieldCheck size={32} className="text-[#14215B]" />
                </div>

                <h3 className="font-['Fredoka',sans-serif] text-2xl font-bold">
                  Other Accreditation and Memberships
                </h3>

              </div>

              <p className="text-[#526078] leading-relaxed">
                [PLACEHOLDER: any other accreditation, membership
                or quality certification, with certificate number
                and issuing body.]
              </p>

            </div>

            {/* Data Protection */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm">

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-[#FFF4C5] p-4 rounded-2xl">
                  <ShieldCheck size={32} className="text-[#14215B]" />
                </div>

                <h3 className="font-['Fredoka',sans-serif] text-2xl font-bold">
                  Data Protection and Information Security
                </h3>

              </div>

              <p className="text-[#526078] leading-relaxed">
                [PLACEHOLDER: data protection or information
                security certification, if held.]
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Verification & Why It Matters */}
      <section className="py-20 bg-[#FFF4C5]">

        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* How to Check */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10">

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-[#D8F4E8] p-4 rounded-2xl">
                  <CheckCircle size={32} className="text-green-700" />
                </div>

                <h3 className="font-['Fredoka',sans-serif] text-2xl md:text-3xl font-bold">
                  How to Check
                </h3>

              </div>

              <p className="text-[#526078] leading-relaxed mb-8">
                You can ask us for a copy of any certificate listed
                on this page. We will also explain how to verify
                results directly with Pearson or NIOS.
              </p>

              <div className="space-y-5">

                <div className="bg-[#F0F7FF] rounded-2xl p-6">

                  <h4 className="font-bold text-[#14215B] mb-3">
                    Pearson Verification
                  </h4>

                  <p className="text-[#526078] text-sm leading-relaxed">
                    International GCSE and International A Level
                    qualifications can be checked through the
                    relevant Pearson verification channels.
                  </p>

                </div>

                <div className="bg-[#F0FFF7] rounded-2xl p-6">

                  <h4 className="font-bold text-[#14215B] mb-3">
                    NIOS Verification
                  </h4>

                  <p className="text-[#526078] text-sm leading-relaxed">
                    Secondary and Senior Secondary qualifications
                    can be verified through the relevant NIOS
                    verification processes.
                  </p>

                </div>

              </div>

            </div>

            {/* Why Exam Board Matters */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10">

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-[#FFE4E9] p-4 rounded-2xl">
                  <Star size={32} className="text-[#14215B]" />
                </div>

                <h3 className="font-['Fredoka',sans-serif] text-2xl md:text-3xl font-bold">
                  Why the Exam Board Matters More Than a Logo
                </h3>

              </div>

              <p className="text-[#526078] leading-relaxed mb-6">
                For an online school, what counts most is the
                certificate your child receives at the end of
                Grade 10 and Grade 12. Because those certificates
                come from Pearson or NIOS, universities and
                employers can check them directly with the board.
              </p>

              <p className="text-[#526078] leading-relaxed">
                We would rather explain this clearly than fill
                the page with badges, and we will add each
                school-level affiliation here only once it is
                confirmed in writing.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* FAQ Intro */}
            <div>

              <span className="inline-block bg-[#FFE4E9] text-[#14215B] px-5 py-2 rounded-full font-bold text-sm mb-5">
                FAQs
              </span>

              <h2 className="font-['Fredoka',sans-serif] text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <p className="text-[#526078] leading-relaxed mb-8">
                Still deciding? Explore more about our qualifications,
                pathways and learning options.
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="/edexcel-uk"
                  className="bg-[#F0F7FF] text-[#14215B] px-4 py-3 rounded-full text-sm font-bold hover:bg-blue-100 transition"
                >
                  Pearson Edexcel
                </a>

                <a
                  href="/senior-school"
                  className="bg-[#F0FFF7] text-[#14215B] px-4 py-3 rounded-full text-sm font-bold hover:bg-green-100 transition"
                >
                  NIOS Senior School
                </a>

                <a
                  href="/pathway"
                  className="bg-[#FFF4C5] text-[#14215B] px-4 py-3 rounded-full text-sm font-bold hover:bg-yellow-100 transition"
                >
                  British vs Indian pathway
                </a>

                <a
                  href="/contact"
                  className="bg-[#FFE4E9] text-[#14215B] px-4 py-3 rounded-full text-sm font-bold hover:bg-pink-100 transition"
                >
                  Contact admissions
                </a>

              </div>

            </div>

            {/* Accordion */}
            <div className="space-y-4">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#FFF9F2] border border-[#F1E5D9] rounded-2xl overflow-hidden"
                >

                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                    className="w-full flex items-center justify-between text-left p-6 gap-4"
                  >

                    <h3 className="text-lg font-bold text-[#14215B]">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      size={22}
                      className={`text-[#14215B] flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      openFAQ === index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="px-6 pb-6">

                        <p className="text-[#526078] leading-relaxed">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Admissions CTA */}
      <section className="py-16 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#14215B] text-white">

            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#60A5FA] rounded-full opacity-20" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#F9A8D4] rounded-full opacity-20" />

            <div className="relative z-10 grid lg:grid-cols-2 items-center">

              {/* CTA Content */}
              <div className="p-8 md:p-14 lg:p-16">

                <span className="inline-block bg-white/10 text-blue-200 px-5 py-2 rounded-full font-bold text-sm mb-6">
                  Admissions Open
                </span>

                <h2 className="font-['Fredoka',sans-serif] text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Admissions for 2027-28 Are Open
                </h2>

                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Try a free 2-week trial class with our teachers,
                  then apply when you are ready. The ₹999 / USD 12
                  registration fee is waived during our launch.
                </p>

                <p className="text-blue-200 leading-relaxed mb-8">
                  Annual fees from ₹71,000 (India) / USD 2,200
                  (international families).
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <button
                    onClick={handleTrialClick}
                    className="bg-white text-[#14215B] px-7 py-4 rounded-full font-bold hover:bg-blue-100 transition flex items-center justify-center gap-2"
                  >
                    Book a free 2-week trial
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={handleApplyClick}
                    className="border-2 border-white text-white px-7 py-4 rounded-full font-bold hover:bg-white hover:text-[#14215B] transition"
                  >
                    Apply for 2027-28
                  </button>

                </div>

                <a
                  href="/fees"
                  className="inline-block mt-6 text-blue-200 font-bold underline underline-offset-4 hover:text-white"
                >
                  See full fees →
                </a>

              </div>

              {/* CTA Image */}
              <div className="h-full min-h-[300px] lg:min-h-[550px]">

                <img
                  src="/images/family-gulf.jpg"
                  alt="Family learning together at home"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AffiliationsAccreditation;
