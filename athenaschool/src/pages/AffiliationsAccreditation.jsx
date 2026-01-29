import React from 'react';
import { Award, CheckCircle, Globe, Users } from 'lucide-react';

const AffiliationsAccreditation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Affiliations & Accreditation</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              "The beauty of online schooling is that you can be anywhere and yet have access to quality education - our learners come from all over the world."
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">21K School</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              21K School is a formal recognised and accredited K-12 School offering Indian and British Curriculum online for learners aged 3 to 18 years in India and abroad.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
              We are changing how children learn and grow. With more than 6,000 learners from 500 cities - all over the world studying with us, we have an Indian and British curriculum that is just as traditional in its approach to education as any other school system – but with better learning outcomes! With our unique, cutting-edge platform you will find all the elements of a school delivered in an exciting manner. We use the best facilitators and state-of-the-art technology to educate learners on their own time with no hassle or regret!
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">6,000+</div>
              <div className="text-gray-600">Learners</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Cities Worldwide</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
              <div className="text-gray-600">Curriculum Options</div>
            </div>
          </div>

          {/* Indian Curriculum Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              Indian Curriculum
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                The 21K school follows the National Curriculum Framework of India up-to middle school curriculum. It also uses a system based on NIOS as a private candidate for exit level examinations in Grade 10 and 12, where Marks Sheets and Pass Certificates are issued by NIOS, an autonomous body under Government of India.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="font-semibold text-blue-900">
                  These certificates are at par with CBSE or CISCE Certificates and valid for entry to Colleges and Universities including IIT, Medical Colleges and UPSC.
                </p>
              </div>
            </div>
          </div>

          {/* British Curriculum Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              British Curriculum
            </h3>
            <p className="text-gray-700 mb-6">
              21K School's British Curriculum includes both Pearson Edexcel and Cambridge Assessment International Education (CAIE).
            </p>

            {/* Pearson Edexcel */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Pearson Edexcel</h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  21K School is affiliated and recognised by Pearson Edexcel, the largest awarding organisation in the UK. Pearson Edexcel enjoys Extensive worldwide recognition and is regulated by Ofqual.
                </p>
                <p>
                  Pearson Edexcel International qualifications come from the same team that provides the UK regulated versions and therefore ensures comparability to the UK versions and alignment to the UK government's intentions to raise standards.
                </p>
                <p>
                  Pearson Edexcel has set the standard for worldwide recognised qualifications, built on the UK educational system and accepted by universities worldwide, for more than 150 years.
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="font-semibold text-green-900">
                    21K School is an approved centre of Edexcel bearing affiliation number <span className="font-mono">94883</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Cambridge Assessment */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Cambridge Assessment International Education</h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  21K School is also approved by Cambridge Assessment International Education to offer Cambridge International Examinations fully online. 21K School is now part of a community of 10,000 Cambridge International Schools in more than 160 countries, who are dedicated to helping learners develop a lasting passion for learning, as well as the skills they need for life.
                </p>
                <p>
                  The Cambridge Pathway combines a world-class curriculum, high-quality support for facilitators and integrated assessment, including Cambridge IGCSE and Cambridge International AS & A Level qualifications, which are recognised by universities worldwide.
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="font-semibold text-green-900">
                    21K School is an approved online school of Cambridge with affiliation number <span className="font-mono">IA702</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Globally recognised qualifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">University acceptance worldwide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Government recognised certifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible online learning environment</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ofqual regulated qualifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">150+ years of educational excellence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">State-of-the-art learning platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Experienced facilitators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliationsAccreditation;
