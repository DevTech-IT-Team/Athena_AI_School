import { Wifi, Monitor, Home, Package, Volume2, Users, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

export default function EssentialRequirements() {
  const requirements = [
    {
      icon: Monitor,
      title: "Device",
      description: "A laptop or desktop computer is best for daily classes because it has a larger screen and a proper keyboard for writing. A tablet can work for Early Years and early Primary. Phones are fine for checking messages but are too small for full lessons.",
      color: "blue"
    },
    {
      icon: Wifi,
      title: "Internet Connection",
      description: "A stable broadband or fibre connection is more important than a very fast one. We recommend [PLACEHOLDER: minimum Mbps] download speed per learner and a mobile hotspot as a backup for power or line cuts.",
      color: "green"
    },
    {
      icon: Home,
      title: "Study Space",
      description: "A table and a chair at the right height, good lighting on your child's face, a quiet spot with few distractions and a plug point nearby.",
      color: "purple"
    },
    {
      icon: Package,
      title: "Learning Materials",
      description: "Keep books, a notebook, pencils and the learning kit within reach so your child can participate in lessons and complete activities comfortably.",
      color: "orange"
    },
    {
      icon: Volume2,
      title: "Audio & Environment",
      description: "A working webcam and microphone are essential. A headset or earphones with a microphone can help cut background noise and create a better learning experience.",
      color: "indigo"
    },
    {
      icon: Users,
      title: "A Grown-Up Nearby",
      description: "For Nursery to Grade 2, a parent, grandparent or carer should be close by to help with logins and keep younger children on task. From Grade 3 upwards, most children manage on their own after the first few weeks.",
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
            What You Need at Home
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Online School Requirements: What Your Child Needs at Home
          </p>
          <p className="text-blue-700 max-w-3xl mx-auto mt-4">
            You do not need special equipment for online school, but a little
            preparation makes a big difference. This checklist covers what your
            child needs before the first day at Edulectual K12 Online School.
            [PLACEHOLDER: Farah to confirm minimum specifications.]
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Book a free 2-week trial
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Apply for 2027-28
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
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
              <h4 className="text-xl font-semibold text-blue-950 mb-3">
                Important Notes
              </h4>
              <ul className="text-blue-700 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>A laptop or desktop is recommended for full lessons; tablets may work for younger learners.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>A working webcam and microphone are required for participating in live classes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>A stable broadband or fibre connection helps ensure uninterrupted learning.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Keep a mobile hotspot ready as a backup for internet or power disruptions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Checklist */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center">
            Quick Setup Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-900 mb-3">
                Technical Setup
              </h4>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Log in to the learning platform and test camera and sound</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Check internet connection and backup hotspot</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Update browser and operating system</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Charge the device and keep the charger at the desk</span>
              </label>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-900 mb-3">
                Learning Environment
              </h4>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Set up a comfortable table and chair</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Arrange a quiet and well-lit study space</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Keep books, notebooks, pencils and learning kit ready</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <span className="text-blue-700">Join the onboarding session before the first class</span>
              </label>
            </div>

          </div>
        </div>

        {/* If Something Goes Wrong */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-950 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold mb-4">
            If Something Goes Wrong
          </h3>
          <p className="text-lg">
            Power cuts and connection drops happen. If your child loses
            connection, they should rejoin as soon as possible, and teachers
            will help them catch up.
          </p>
        </div>

        {/* Admissions */}
        <div className="text-center bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Admissions for 2027-28 Are Open
          </h2>

          <p className="mb-6">
            Try a free 2-week trial class with our teachers, then apply when
            you are ready. The ₹999 registration fee is waived during our launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Book a free 2-week trial
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="bg-blue-300 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Apply for 2027-28
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}