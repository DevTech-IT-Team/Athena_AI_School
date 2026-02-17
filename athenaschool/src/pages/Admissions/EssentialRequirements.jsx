import { Wifi, Monitor, Home, Package, Volume2, Users, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

export default function EssentialRequirements() {
  const requirements = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Access to broadband (hi-speed internet) with minimum 10 Mbps download speed",
      color: "blue"
    },
    {
      icon: Monitor,
      title: "Computer System",
      description: "A computer (Desktop or Laptop) with webcam and audio that enables the learners to attend live classes. We do not recommend the use of mobile phones and tablets due to small screen size and limited functionalities.",
      color: "green"
    },
    {
      icon: Home,
      title: "Study Environment",
      description: "Comfortable table, chair, book storage space, and essential stationery including notebooks for written work and home work",
      color: "purple"
    },
    {
      icon: Package,
      title: "Learning Kit",
      description: "Learning Kit (ordered online after registration and delivered at home by Athena AI School)",
      color: "orange"
    },
    {
      icon: Volume2,
      title: "Quiet Space",
      description: "A quiet space with a good background wall or curtains will enrich the learning time.",
      color: "indigo"
    },
    {
      icon: Users,
      title: "Learning Coach",
      description: "Presence of Learning Coach is mandatory for Pre-Primary learners and recommended for other learners. Learning Coach is a parent or a competent adult who can supervise the live classes and follow-up with the homework schedule.",
      color: "pink"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        iconBg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      green: {
        bg: 'bg-blue-100',
        iconBg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      purple: {
        bg: 'bg-blue-100',
        iconBg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      orange: {
        bg: 'bg-blue-100',
        iconBg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      indigo: {
        bg: 'bg-blue-100',
        iconBg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      pink: {
        bg: 'bg-blue-100',
        iconBg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Essential And Process Requirements
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            The learners who register will require:
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {requirements.map((requirement, index) => {
            const colors = getColorClasses(requirement.color);
            const Icon = requirement.icon;

            return (
              <div key={index} className={`${colors.bg} rounded-2xl p-8 border-2 ${colors.border} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <div className={`${colors.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className={`text-xl font-bold ${colors.text} mb-4 text-center`}>
                  {requirement.title}
                </h3>
                <p className="text-blue-700 leading-relaxed text-center">
                  {requirement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-l-4 border-blue-400 rounded-lg p-8 mb-12">
          <div className="flex items-start">
            <AlertCircle className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={28} />
            <div>
              <h4 className="text-xl font-semibold text-blue-950 mb-3">Important Notes</h4>
              <ul className="text-blue-700 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Mobile phones and tablets are not recommended due to small screen size and limited functionalities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Learning Coach presence is mandatory for Pre-Primary learners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Learning Kit will be delivered to your home after registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>A proper study environment significantly enhances the learning experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Checklist */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center">Quick Setup Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-900 mb-3">Technical Setup</h4>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Internet speed test (10+ Mbps)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Computer with webcam and microphone</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Updated web browser</span>
              </label>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-900 mb-3">Learning Environment</h4>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Comfortable desk and chair</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Quiet study space</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Essential stationery supplies</span>
              </label>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <blockquote className="text-2xl font-light mb-6">
            "Our vision is to make 16 years of schooling meaningful and joyful for all."
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Enquire Now
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="bg-blue-300 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Download Prospectus
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
