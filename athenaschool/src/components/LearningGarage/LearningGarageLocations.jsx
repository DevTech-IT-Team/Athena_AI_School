import React from 'react';

const LearningGarageLocations = () => {
  const locations = [
    {
      name: "Bangalore",
      status: "Open Now",
      address: "110, Grace Towers, 1st Floor,\nOld Madras Road, Halasuru,\nBangalore - 560038,\nKarnataka, India",
      hours: "🕒 Open Tue–Sun, 11:00 am – 7:00 pm\nMonday's Closed",
      buttonText: "Register Now"
    },
    {
      name: "Pune",
      status: "Coming Soon",
      address: "Nyati Empress, Office 106 & 107,\nViman Nagar Rd, Clover Park,\nViman Nagar,\nPune, Maharashtra 411014",
      hours: "Coming Soon",
      buttonText: "Coming Soon"
    },
    {
      name: "Hyderabad",
      status: "Coming Soon",
      address: "Coming Soon",
      hours: "Coming Soon",
      buttonText: "Coming Soon"
    },
    {
      name: "Delhi",
      status: "Coming Soon",
      address: "Coming Soon",
      hours: "Coming Soon",
      buttonText: "Coming Soon"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Where to Find Our Learning Garages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Learning Garages are vibrant, safe, and purpose-built spaces designed for hands-on learning and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900">{location.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  location.status === "Open Now" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {location.status}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 whitespace-pre-line text-sm">
                  {location.address}
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 whitespace-pre-line text-sm">
                  {location.hours}
                </p>
              </div>
              
              <button 
                className={`w-full py-2 px-4 rounded-full font-medium transition-colors ${
                  location.status === "Open Now"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={location.status !== "Open Now"}
              >
                {location.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGarageLocations;
