import React from 'react';
import {
  Download,
  FileText,
  Award,
  Shield,
  BookOpen,
  ExternalLink,
} from 'lucide-react';

const ResourcesDownloads = () => {
  const resources = [
    {
      title: "Prospectus 2027-28",
      description:
        "Explore Edulectual K12 Online School, our curriculum pathways, learning stages, online classes, fees, offers and admissions process.",
      icon: BookOpen,
      color: "bg-blue-600",
      file: "[PLACEHOLDER: link to real PDF]",
    },
    {
      title: "Fee Sheet 2027-28",
      description:
        "View the fee structure, available discounts and payment details for the 2027-28 academic year.",
      icon: FileText,
      color: "bg-green-600",
      file: "[PLACEHOLDER: link, publish once fees are final]",
    },
    {
      title: "Pathway Guide: Pearson Edexcel British vs Indian (NIOS)",
      description:
        "Understand the differences between our Pearson Edexcel British curriculum and Indian curriculum pathway with NIOS examinations.",
      icon: FileText,
      color: "bg-purple-600",
      file: "[PLACEHOLDER: link]",
    },
    {
      title: "Academic Calendar 2027-28",
      description:
        "Stay informed about important academic dates, school activities, schedules and planned events.",
      icon: FileText,
      color: "bg-orange-600",
      file: "[PLACEHOLDER: link]",
    },
    {
      title: "Application Checklist and Documents Required",
      description:
        "Find the documents and information required to complete your child's admission application.",
      icon: FileText,
      color: "bg-indigo-600",
      file: "[PLACEHOLDER: link]",
    },
    {
      title: "Device and Internet Requirements Checklist",
      description:
        "Check the device, connectivity and technical requirements needed for a smooth online learning experience.",
      icon: Shield,
      color: "bg-teal-600",
      file: "[PLACEHOLDER: link]",
    },
    {
      title: "Sample Progress Report",
      description:
        "See a sample of how student learning, progress and academic performance may be reported.",
      icon: FileText,
      color: "bg-red-600",
      file: "[PLACEHOLDER: link]",
    },
    {
      title: "Transfer Certificate Request Form",
      description:
        "Use the transfer certificate request form to request student academic documentation.",
      icon: FileText,
      color: "bg-blue-500",
      file: "[PLACEHOLDER: link]",
    },
    {
      title: "Parent Handbook",
      description:
        "Access helpful information, guidance and expectations for families enrolled at Edulectual K12 Online School.",
      icon: BookOpen,
      color: "bg-green-500",
      file: "[PLACEHOLDER: link]",
    },
    {
      title: "School Policies",
      description:
        "Review our privacy policy, safeguarding policy, fee policy and refund policy.",
      icon: Shield,
      color: "bg-indigo-500",
      file: "[PLACEHOLDER: links]",
    },
    {
      title: "School Certificates",
      description:
        "View certificates and registrations held by Edulectual K12 Online School, with issuing organisations and certificate details.",
      icon: Award,
      color: "bg-purple-500",
      file: "[PLACEHOLDER: only certificates Edulectual K12 actually holds]",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prospectus and Downloads
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Access important documents to explore Edulectual K12 Online School
              and complete your child's admission for the 2027-28 academic year.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Download the Prospectus
              </button>

              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Book a Free 2-Week Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">
              Prospectus and Downloads
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Online School Prospectus and Downloads
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download the documents you need to learn about Edulectual K12
              Online School or to complete your child's admission. All files
              are PDFs unless stated, and we update them for each academic year.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">

                    {/* Icon */}
                    <div
                      className={`${resource.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Download Button */}
                    <button className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors group">
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download PDF
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Additional Information */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <div className="flex items-start">
              <div className="bg-blue-600 p-3 rounded-xl mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can't Find What You Need?
                </h3>

                <p className="text-gray-700 mb-4">
                  If you can't find the specific document you're looking for,
                  ask our admissions team and we will send it to you. We're
                  happy to help you access the information you need about our
                  school, programmes, admissions or policies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ask Admissions
                  </button>

                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    Request a Document
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Using the Prospectus
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              The prospectus gives a full overview of Edulectual K12 Online
              School: our two pathways, the stages from Nursery to Grade 12,
              how online classes work, fees and offers for 2027-28 and how
              to apply. It is a good document to share with other family
              members who are part of the decision.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Keeping Documents Up to Date
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Fees, dates and policies change from year to year. Each document
              shows the academic year and the date it was last updated. If
              you downloaded a copy earlier, please check that you have the
              latest version before you rely on it.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Accessible Formats
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              If you need a document in a different format, such as larger
              text or a plain-text version, ask our team and we will provide it.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Request a Printed Copy
            </h3>

            <p className="text-gray-600 leading-relaxed">
              If you would prefer a printed prospectus, ask our admissions
              team.
              [PLACEHOLDER: confirm whether printed copies are available.]
            </p>
          </div>

          {/* Admissions CTA */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Admissions for 2027-28 Are Open
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Book a Free 2-Week Trial
              </button>

              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                Apply for 2027-28
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResourcesDownloads;