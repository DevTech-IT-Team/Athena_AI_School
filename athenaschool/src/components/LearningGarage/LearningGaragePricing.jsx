import React from 'react';

const LearningGaragePricing = () => {
  const passes = [
    {
      name: "Starter (6 sessions)",
      validity: "30 days",
      non21kPrice: "₹2,400 + 18% GST",
      WisdomPrice: "₹1,920 + 18% GST",
      status: "Coming Soon"
    },
    {
      name: "Explorer (12 sessions)",
      validity: "Early Bird Offer\nValid till 31st Jan 2026",
      non21kPrice: "₹4,320 + 18% GST",
      WisdomPrice: "₹3,456 + 18% GST",
      status: "FREE",
      popular: true
    },
    {
      name: "Builder (24 sessions)",
      validity: "20% benefit\n90 days",
      non21kPrice: "₹7,680 + 18% GST",
      WisdomPrice: "₹6,144 + 18% GST",
      status: "Coming Soon"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Access & Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            How Learning Garage Works: 1 session = 90 minutes. Max 2 sessions per day.
            Attend any Garage, at any available slot. Certificates earned through outcomes.
          </p>
          
          <div className="bg-yellow-400 text-blue-900 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Special Offer</h3>
            <p className="font-medium">Register with us now! and get 12 sessions for free until 31st Jan</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Per-Session Pricing (90 mins)</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-lg font-bold text-gray-700 mb-2">Non-WisdomAI School Learners</h4>
              <p className="text-2xl font-bold text-blue-900">₹400 + 18% GST</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-blue-900 mb-2">WisdomAI School Learners & Alumni</h4>
              <p className="text-2xl font-bold text-blue-900">₹320 + 18% GST</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">Day Pass</h3>
          <p className="text-center text-gray-600">Learners can also block a Day Pass for 1–2 sessions (subject to availability).</p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Coming Soon</h3>
          <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">Learning Passes</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Pass</th>
                  <th className="px-6 py-4 text-left">Validity</th>
                  <th className="px-6 py-4 text-left">Non-WisdomAI School</th>
                  <th className="px-6 py-4 text-left">WisdomAI School & Alumni</th>
                </tr>
              </thead>
              <tbody>
                {passes.map((pass, index) => (
                  <tr key={index} className={`border-b ${pass.popular ? 'bg-yellow-50' : ''}`}>
                    <td className="px-6 py-4 font-bold">
                      {pass.name}
                      {pass.popular && <span className="ml-2 text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded">Most Popular</span>}
                    </td>
                    <td className="px-6 py-4 whitespace-pre-line text-sm">{pass.validity}</td>
                    <td className="px-6 py-4">
                      {pass.status === "FREE" ? (
                        <span className="text-green-600 font-bold">FREE</span>
                      ) : (
                        <div>
                          <div>{pass.non21kPrice}</div>
                          <div className="text-sm text-gray-500">{pass.status}</div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {pass.status === "FREE" ? (
                        <span className="text-green-600 font-bold">FREE</span>
                      ) : (
                        <div>
                          <div>{pass.WisdomPrice}</div>
                          <div className="text-sm text-gray-500">{pass.status}</div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-gray-600">Passes are non-refundable and non-transferable. Unused sessions expire after validity.</p>
        </div>
      </div>
    </section>
  );
};

export default LearningGaragePricing;
