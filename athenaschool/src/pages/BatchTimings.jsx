import { useState } from 'react';
import { Clock, Users, Calendar, Info, ArrowRight } from 'lucide-react';

export default function BatchTimings() {
  const [selectedGrade, setSelectedGrade] = useState(null);

  const gradeData = [
    {
      grade: "Pre-Primary (Nursery)",
      morning: ["09.30 am - 10.30 am", "11.30 am - 12.30 pm"],
      afternoon: ["01.30 pm - 02.30 pm", "03.30 pm - 04.30 pm"]
    },
    {
      grade: "Early Years (KG 1 & KG 2)",
      morning: ["9.30 am - 11.30 am"],
      afternoon: ["2.30 pm - 4.30 pm"]
    },
    {
      grade: "British Primary (Grade 1-5)",
      morning: ["09.30 am - 12.30 pm"],
      afternoon: ["01.30 pm - 04.30 pm"]
    },
    {
      grade: "British Lower Secondary (Grade 6-8)",
      morning: ["9.30 am - 01.30 pm"],
      afternoon: ["1.30 pm - 05.30 pm"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Batch Timings
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            The following is the Schedule of Live Classes. You would be required to select any one Section at the time of registration.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-3">
              <Calendar className="text-blue-400 mr-3" size={24} />
              <h3 className="font-semibold text-blue-900">Flexible Schedule</h3>
            </div>
            <p className="text-blue-600 text-sm">
              Option to change your Section (batch) once a month and for a maximum of three times a year.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-3">
              <Clock className="text-blue-400 mr-3" size={24} />
              <h3 className="font-semibold text-blue-900">Age-Appropriate</h3>
            </div>
            <p className="text-blue-600 text-sm">
              Duration of live classes is age-appropriate and as per international standards.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-3">
              <Users className="text-blue-400 mr-3" size={24} />
              <h3 className="font-semibold text-blue-900">Class Size</h3>
            </div>
            <p className="text-blue-600 text-sm">
              Minimum 10 learners required. Batches may be discontinued if less than 10 learners register.
            </p>
          </div>
        </div>

        {/* Batch Schedule Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Clock className="mr-3" size={28} />
              Live Class Schedule
            </h2>
            <p className="text-blue-100 mt-2">
              Select any one Section at the time of registration
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-100 border-b-2 border-blue-300">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-950">Grade</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-950">Morning Batch (M)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-950">Afternoon Batch (A)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gradeData.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-blue-950">{item.grade}</td>
                    <td className="px-6 py-4">
                      {item.morning.map((time, i) => (
                        <div key={i} className="text-sm text-blue-700 py-1">{time}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4">
                      {item.afternoon.map((time, i) => (
                        <div key={i} className="text-sm text-blue-700 py-1">{time}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upper Secondary Information */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-950 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold mb-4">For British Upper Secondary & Advance Level</h3>
          <p className="text-lg mb-4">
            Classes will be conducted five days a week from <span className="font-bold">9.30 am to 5.30 pm India.</span>
          </p>
          <p className="text-blue-100">
            There may be more than one batch running at the same time. A particular batch may be discontinued if there are less than ten learners registered. Such learners will be accommodated in the other Batch timings available.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Info className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-blue-950 mb-2">Important Information</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Additional Batches / Sections may be added in the future</li>
                <li>• Learners will have ample recess in-between the class schedule</li>
                <li>• You can change your Section (batch) once a month</li>
                <li>• Maximum of three batch changes allowed per year</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <blockquote className="text-2xl font-light text-blue-700 italic mb-6">
            "Our vision is to make 16 years of schooling meaningful and joyful for all."
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Enquire Now
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Download Prospectus
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
