import { Clock, Users, Calendar, Info, ArrowRight } from 'lucide-react';

export default function BatchTimings() {
  const gradeData = [
    {
      grade: "India",
      morning: ["Time zone: IST (UTC+5:30)", "Batch: India batch"],
      afternoon: ["Live class window: [PLACEHOLDER]"]
    },
    {
      grade: "UAE, Oman",
      morning: ["Time zone: GST (UTC+4)", "Batch: Gulf batch"],
      afternoon: ["Live class window: [PLACEHOLDER]"]
    },
    {
      grade: "Qatar, Kuwait, Bahrain",
      morning: ["Time zone: AST (UTC+3)", "Batch: Gulf batch"],
      afternoon: ["Live class window: [PLACEHOLDER]"]
    },
    {
      grade: "UK",
      morning: ["Time zone: GMT/BST", "Batch: UK batch"],
      afternoon: ["Live class window: [PLACEHOLDER]"]
    },
    {
      grade: "US and Canada",
      morning: ["Time zone: ET to PT", "Batch: North America batch"],
      afternoon: ["Live class window: [PLACEHOLDER]"]
    },
    {
      grade: "Australia",
      morning: ["Time zone: AEST/AWST", "Batch: Australia batch"],
      afternoon: ["Live class window: [PLACEHOLDER]"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Class Timings
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Online School Class Timings for Every Time Zone
          </p>
          <p className="text-blue-700 max-w-3xl mx-auto mt-4">
            Because Edulectual K12 Online School teaches families from India to
            Canada, we run live classes in batches arranged by time zone. Your
            child joins the batch that fits your local day, so lessons never fall
            in the middle of the night. Each pathway follows the same curriculum
            whichever batch your child joins.
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

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-3">
              <Calendar className="text-blue-400 mr-3" size={24} />
              <h3 className="font-semibold text-blue-900">Flexible Batches</h3>
            </div>
            <p className="text-blue-600 text-sm">
              Choose a batch based on your local time zone and daily routine.
              If your family moves or schedules change, you can request a
              different batch subject to availability.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-3">
              <Clock className="text-blue-400 mr-3" size={24} />
              <h3 className="font-semibold text-blue-900">Age-Appropriate Learning</h3>
            </div>
            <p className="text-blue-600 text-sm">
              Younger learners have shorter sessions with movement breaks,
              while older students follow longer study blocks and independent
              learning activities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-3">
              <Users className="text-blue-400 mr-3" size={24} />
              <h3 className="font-semibold text-blue-900">Same Curriculum</h3>
            </div>
            <p className="text-blue-600 text-sm">
              Every batch follows the same lesson plan, assessments and reports,
              ensuring a consistent learning experience across regions.
            </p>
          </div>

        </div>

        {/* Batch Schedule Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Clock className="mr-3" size={28} />
              Batches by Region
            </h2>
            <p className="text-blue-100 mt-2">
              Select the batch that best fits your local time zone.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-100 border-b-2 border-blue-300">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-950">
                    Region
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-950">
                    Time Zone & Batch
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-950">
                    Live Class Window
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {gradeData.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-blue-950">
                      {item.grade}
                    </td>

                    <td className="px-6 py-4">
                      {item.morning.map((time, i) => (
                        <div key={i} className="text-sm text-blue-700 py-1">
                          {time}
                        </div>
                      ))}
                    </td>

                    <td className="px-6 py-4">
                      {item.afternoon.map((time, i) => (
                        <div key={i} className="text-sm text-blue-700 py-1">
                          {time}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* School Day Information */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-950 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold mb-4">
            How Long Is the School Day?
          </h3>
          <p className="text-lg mb-4">
            The length of the online day grows with age. Younger children have
            shorter sessions with breaks for movement and play, while older
            students have longer study blocks and more independent work.
          </p>
          <p className="text-blue-100">
            [PLACEHOLDER: hours per day for each stage.]
          </p>
        </div>

        {/* Breaks and Screen Time */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Breaks and Screen Time
          </h3>
          <p className="text-blue-700">
            We build regular breaks into every timetable and keep live sessions
            short for younger learners. Teachers set off-screen activities such
            as reading, drawing, experiments and handwriting practice.
          </p>
        </div>

        {/* Holidays and Term Dates */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Holidays and Term Dates
          </h3>
          <p className="text-blue-700">
            [PLACEHOLDER: link to the 2027-28 academic calendar with term dates
            and holidays for each region.]
          </p>
        </div>

        {/* Changing Batch */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Changing Batch
          </h3>
          <p className="text-blue-700">
            If you move country or your routine changes, you can request a
            different batch through learner support, subject to seats being
            available.
          </p>
        </div>

        {/* Choosing the Right Batch */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Choosing the Right Batch
          </h3>
          <p className="text-blue-700">
            Pick the batch whose live window falls in your child's best hours
            for concentration, usually the morning for younger children. Think
            about other commitments too, such as sport training, music lessons
            or a parent's working hours. If two batches could work, choose the
            one that leaves time for a proper break and some outdoor time each day.
          </p>
        </div>

        {/* Same Curriculum */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-950 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Same Curriculum in Every Batch
          </h3>
          <p className="text-lg mb-4">
            Every batch follows the same lesson plan, so a child in the Gulf
            batch and a child in the India batch learn the same content in the
            same week. Assessments and reports are the same too, which keeps
            things fair for every learner and makes it easy to change batch if
            your family moves.
          </p>
        </div>

        {/* Daylight Saving */}
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Info className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-blue-950 mb-2">
                Daylight Saving Changes
              </h4>
              <p className="text-blue-700 text-sm">
                When clocks change in the UK, North America or Australia, local
                class times may shift by an hour. We tell families in advance
                and update timetables on the learning platform.
              </p>
            </div>
          </div>
        </div>

        {/* Admissions */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Admissions for 2027-28 Are Open
          </h2>

          <p className="text-blue-700 mb-6">
            Try a free 2-week trial class with our teachers, then apply when
            you are ready. The ₹999 registration fee is waived during our launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      </div>
    </div>
  );
}