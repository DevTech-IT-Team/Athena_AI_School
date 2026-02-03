import React from 'react';

const MeetOurAcademicCrew = () => {
  const categories = [
    "Principal",
    "Language Facilitators",
    "Computer Facilitators",
    "Activity Facilitators",
    "Wellbeing Counsellors",
    "Senior School Facilitators",
    "Pre Primary School Facilitators",
    "Middle School Facilitators",
    "Primary School Facilitators",
    "Home Room Facilitators"
  ];

  const principals = [
    {
      name: "Aruna Shetty",
      title: "Head of schools and Senior principal",
      location: "Mumbai",
      education: "BA (Mumbai University)\nDiploma in Fashion designing (JD institute of fashion designing)\nPG Diploma in ECCE (Early Childhood Care and Education - SNDT University, Mumbai)\nCIDTT – Cambridge International Diploma for Teachers and Trainers"
    },
    {
      name: "Tanuja Amin",
      title: "Principal - Indian School",
      location: "Mumbai",
      education: "Cambridge International Diploma - CIDTT (Cambridge International Diploma For Teachers And Trainers) Podar Institute of Education- E.C.C.ED.& A University Of Mumbai- MA (Sociology) Rivzi College of Art, Science and Commerce (Bandra) - BA"
    },
    {
      name: "Paminder Kohli",
      title: "Principal - British School",
      location: "Mumbai",
      education: "Master of Arts-Economics, Delhi School of Economics, Delhi University\nBachelor of Arts-Economics (Hons) Jesus & Mary College, Delhi University\nInternational Baccalaureate Trained Primary Years Program Head"
    },
    {
      name: "Priya Dwivedi",
      title: "Principal - Indian Senior School",
      location: "Chennai",
      education: "Bachelor of Arts in Political Science, Modern History and Economics, University of Lucknow\nMaster of Arts in Political Science, University of Lucknow\nBachelor of Education in Social Sciences, University of Lucknow"
    },
    {
      name: "Vandana Khera",
      title: "Head Training & Development (Academic Crew)",
      location: "Gurgaon, Haryana",
      education: "Post Graduate Diploma in Advertising and Public Relations ( Bombay University)\nBachelor in Microbiology & Biochemistry ( Bombay University) Bachelor in Education ( Annamalai University)\nCertificate in Leadership Skills ( IIM - A)Certified Happiness Coach ( Berkeley Institute Of Well Being & Happitude)"
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Meet Our Academic Crew</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Meet Our Academic Crew</h1>
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{category}</span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">"When you see your child looking forward to his classes, you know the school is doing something really right."</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enquire Now</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Prospectus</button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Principal</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {principals.map((principal, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
              <h3 className="text-xl font-semibold mb-2 text-center">{principal.name}</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">{principal.title}</p>
              <p className="text-gray-500 text-sm mb-3 text-center">{principal.location}</p>
              <div className="text-sm text-gray-700 whitespace-pre-line">{principal.education}</div>
              <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Academic Coordinators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Nidhi Sharma Awasthi", title: "Academic Coordinator - Middle School", location: "Kolkata" },
              { name: "Suman Belliappa", title: "Academic Coordinator - Primary School", location: "Bengaluru, Karnataka" },
              { name: "Smita Pise", title: "Coordinator (Special Needs)", location: "Mumbai" },
              { name: "Shruthi MP", title: "Academic Coordinator - Primary School", location: "Mysore, Karnataka" },
              { name: "Shazia Mohammed Javed Ansari", title: "Academic Coordinator- Pre-Primary", location: "Mumbai, Maharashtra" },
              { name: "Soundariya R", title: "Academic Coordinator - British Middle School", location: "Coimbatore, Tamil Nadu" },
              { name: "Kalpana Prakash Rochlani", title: "Academic Coordinator - Primary School", location: "Pune, Maharashtra" },
              { name: "Arpita Prakash", title: "Early Years & Grade I Coordinator", location: "Bangalore, Karnataka" },
              { name: "Daisy Jafrani", title: "Academic Counsellor", location: "Mumbai, Maharashtra" }
            ].map((coordinator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{coordinator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{coordinator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{coordinator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Language Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Indu Chaturvedi", title: "Secondary School Language Facilitator - Hindi", location: "Gwalior, Madhya Pradesh" },
              { name: "Anindita Roy", title: "Language Facilitator - English", location: "Kolkata, West Bengal" },
              { name: "Mary Sebastian", title: "Language Facilitator-ESOL", location: "Kochi, Kerala" },
              { name: "Rasheeda Ali", title: "Language Facilitator - Urdu", location: "Mumbai, Maharashtra" },
              { name: "Tabassum Bagawan", title: "Language Facilitator - Hindi", location: "Pune" },
              { name: "Laeeqa Khan", title: "Language Facilitator - Urdu", location: "Mumbai, Maharashtra" }
            ].map((facilitator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{facilitator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{facilitator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{facilitator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Computer Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
              <h3 className="text-xl font-semibold mb-2 text-center">Ms Namrata Roy</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">Computer Facilitator</p>
              <p className="text-gray-500 text-sm mb-3 text-center">Bengaluru, Karnataka</p>
              <p className="text-sm text-gray-700">Master of Technology in Instrumentation, West Bengal University of Technology\nBachelor of Technology in Instrumentation, West Bengal University of Technology\n6+ years of experience in Computer applications, physics, maths in primary and middle school.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Activity Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Swati Chopra", title: "Yoga Facilitator", location: "Ghaziabad, Uttar Pradesh" },
              { name: "Yukti Sukhwani", title: "Dance Facilitator", location: "Hyderabad, Telangana" },
              { name: "Dhvani Patel", title: "Art Facilitator", location: "Vadodara" },
              { name: "Mili Sharma", title: "Yoga Facilitator", location: "Bengaluru, Karnataka" },
              { name: "Sneha Verma", title: "Yoga Facilitator", location: "Delhi" },
              { name: "Shweta Shetty", title: "Activity Facilitator", location: "Mumbai, Maharashtra" }
            ].map((facilitator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{facilitator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{facilitator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{facilitator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Wellbeing Counsellors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Angela N", title: "Academic Counsellor", location: "Tirunelveli, Tamilnadu" },
              { name: "Arpreeta Halder", title: "Academic Counsellor", location: "Kolkata, West Bengal" }
            ].map((counsellor, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{counsellor.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{counsellor.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{counsellor.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Senior School Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Avidha Jain", title: "Secondary School Facilitator", location: "Indore, Madhya Pradesh" },
              { name: "Sindhu Nair", title: "Senior School Facilitator", location: "Kochi, Kerala" },
              { name: "Roshni Rishikesh Zagade", title: "Senior Secondary School Facilitator", location: "Malinagar, Maharashtra" },
              { name: "Sakshi Sehgal", title: "Senior Secondary School Facilitator", location: "Mumbai, Maharashtra" },
              { name: "Shabina Puri", title: "Secondary School Facilitator", location: "Mumbai" },
              { name: "Pallavi Bhalotiya", title: "Secondary School Facilitator", location: "Nagpur, Maharashtra" }
            ].map((facilitator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{facilitator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{facilitator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{facilitator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pre Primary School Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Monica Sehgal", title: "Pre-Primary Facilitator", location: "Gurugram, Haryana" },
              { name: "Disha Saini", title: "Pre-Primary Facilitator", location: "Delhi" },
              { name: "Barnita Ray", title: "Pre-Primary Facilitator", location: "Kolkata, West Bengal" },
              { name: "Dibyangana Chattaraj", title: "Pre-Primary Facilitator", location: "Kolkata, West Bengal" },
              { name: "Khushboo Agarwal", title: "Pre-Primary Facilitator", location: "Jaipur, Rajasthan" },
              { name: "Deepika A", title: "Pre-Primary Facilitator", location: "Cuddalore, Tamil Nadu" }
            ].map((facilitator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{facilitator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{facilitator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{facilitator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Middle School Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Ayesha Ahmed", title: "Middle School Facilitator - TGT", location: "Bhopal, Madhya Pradesh" },
              { name: "Farha Shaikh", title: "Middle School Facilitator", location: "Pune, Maharashtra" },
              { name: "Neelam Tripathi", title: "Middle School Facilitator", location: "Noida, Uttar Pradesh" },
              { name: "Anita Pasupuleti", title: "Middle School Facilitator", location: "Secunderabad" },
              { name: "Aashna Agrawal", title: "Middle School Facilitator", location: "Gurugram, Haryana" },
              { name: "Parvathy M V", title: "Middle School Facilitator", location: "Mangalore, Karnataka" }
            ].map((facilitator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{facilitator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{facilitator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{facilitator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Primary School Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Shalini Agarwal", title: "Primary Facilitator", location: "Kolkata, West Bengal" },
              { name: "Babita Arora", title: "Primary Facilitator", location: "Noida, Uttar Pradesh" },
              { name: "Abisheka R S", title: "Primary Facilitator", location: "Chennai, Tamil Nadu" },
              { name: "Nivedita CB", title: "Primary Facilitator", location: "Bengaluru, Karnataka" },
              { name: "Devyani Das", title: "Primary Facilitator", location: "Kolkata, West Bengal" },
              { name: "Nandini V Ananthan", title: "Primary Facilitator", location: "Mumbai, Maharashtra" }
            ].map((facilitator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{facilitator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{facilitator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{facilitator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Home Room Facilitators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Priyanka Atale", title: "Home Room Facilitator", location: "Mumbai, Maharashtra" },
              { name: "Avinash Bhatia", title: "Home Room Facilitator", location: "Durg, Chhattisgarh" },
              { name: "Ramya Ramesh Babu", title: "Home Room Facilitator", location: "Salem, Tamil Nadu" },
              { name: "Shilpa Jeswani", title: "Home Room Facilitator", location: "Mumbai, Maharashtra" },
              { name: "Akanksha Bhati", title: "Home Room Facilitator", location: "Pune, Maharashtra" },
              { name: "Shikha Kapoor", title: "Home Room Facilitator", location: "Lucknow" }
            ].map((facilitator, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">{facilitator.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{facilitator.title}</p>
                <p className="text-gray-500 text-sm mb-3 text-center">{facilitator.location}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium mt-4 block mx-auto">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">#Being Athena AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Scholastic Report - Guide Video</h4>
              <p className="text-sm text-gray-600">Educational resources and guidance materials</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Learning a new language always fun</h4>
              <p className="text-sm text-gray-600">Interactive language learning experiences</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Our orators brought out their a game</h4>
              <p className="text-sm text-gray-600">Student achievements in public speaking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurAcademicCrew;
