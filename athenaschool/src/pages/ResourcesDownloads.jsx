import React from 'react';
import { Download, FileText, Award, Shield, BookOpen, ExternalLink } from 'lucide-react';

const ResourcesDownloads = () => {
  const resources = [
    {
      title: "21K School Brochure",
      description: "Comprehensive information about our school, curriculum, and programs",
      icon: BookOpen,
      color: "bg-blue-600",
      file: "21K-School-Brochure.pdf"
    },
    {
      title: "21K School Annual Report 2020-2021",
      description: "Detailed annual report covering achievements and developments",
      icon: FileText,
      color: "bg-green-600",
      file: "Annual-Report-2020-2021.pdf"
    },
    {
      title: "Report Card Sample Format",
      description: "Sample format of student report cards and assessment structure",
      icon: FileText,
      color: "bg-purple-600",
      file: "Report-Card-Sample.pdf"
    },
    {
      title: "Transfer Certificate - Sample",
      description: "Sample transfer certificate format for student records",
      icon: FileText,
      color: "bg-orange-600",
      file: "Transfer-Certificate-Sample.pdf"
    },
    {
      title: "Cambridge - Certification of Registration",
      description: "Official Cambridge registration certification document",
      icon: Award,
      color: "bg-red-600",
      file: "Cambridge-Registration.pdf"
    },
    {
      title: "ISO/IEC 27001:2013",
      description: "Information security management system certification",
      icon: Shield,
      color: "bg-indigo-600",
      file: "ISO-IEC-27001-2013.pdf"
    },
    {
      title: "ISO 9001:2015",
      description: "Quality management system certification",
      icon: Shield,
      color: "bg-teal-600",
      file: "ISO-9001-2015.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              "Unlock limitless learning possibilities, join us online!"
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Enquire Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Prospectus
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
            <span className="text-blue-600 font-medium">Resources</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access important documents, certifications, and information about 21K School. 
              All resources are available for download in PDF format.
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
                    <div className={`${resource.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Additional Information?</h3>
                <p className="text-gray-700 mb-4">
                  If you can't find the specific document you're looking for or need additional information 
                  about our programs, certifications, or policies, please don't hesitate to contact our 
                  admissions team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contact Support
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    Request Document
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Academic Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Curriculum Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Academic Calendar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Examination Schedule
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Support Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Parent Handbook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Technical Requirements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Fee Structure
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDownloads;
