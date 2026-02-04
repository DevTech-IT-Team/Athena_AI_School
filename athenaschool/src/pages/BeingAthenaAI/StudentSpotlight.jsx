import React from 'react';

const StudentSpotlight = () => {
  const students = [
    {
      name: "Adarsh",
      grade: "Grade 7",
      curriculum: "Indian",
      description: "Adarsh - Grade 7 MC has won U 14 tournament on the new year open tournament conducted by Boston Indians open tournament..."
    },
    {
      name: "Aishwarya Jingade",
      grade: "Grade 6",
      curriculum: "Indian",
      description: "I started roller skating in 2021 in the month of november in a skating groung near my house . now it's almost the end 2022 and I have..."
    },
    {
      name: "Ananya Vishwesh",
      grade: "Grade 6",
      curriculum: "British",
      description: "Ananya Vishwesh of grade 6 MC participated and represented Athena AI school in Azadi ka Amrut Mahotsav and 125th..."
    },
    {
      name: "Manishka Dubey",
      grade: "Grade 5",
      curriculum: "American",
      description: "Manishka Dubey the ( YOUNGEST)WINNER(Cheque of 10 lakh) OF THE INVENTOR CHALLENGE BY COLORS INFINITY TV..."
    },
    {
      name: "Maria",
      grade: "Grade 2",
      curriculum: "Indian",
      description: "Maria of Grade 2  has written and published a book for \"Bri Books National Young Authors' Fair \"The Day She Saw Santa\"..."
    },
    {
      name: "Pranjal Dedhia",
      grade: "Grade 6",
      curriculum: "Indian",
      description: "Pranjal Dedhia of Grade 6 MB has won a silver medal in the U13 Maharashtra State-Level tournament and the Most Promising player..."
    },
    {
      name: "Ravyanshi Singh",
      grade: "Grade 4",
      curriculum: "Indian",
      description: "Ravyanshi Singh is an author with a keen interest in exploring information related to science, folk culture, natural languages, writing scripts..."
    },
    {
      name: "Sameeksha Sinha",
      grade: "Grade 3",
      curriculum: "Indian",
      description: "SAMEEKSHA SINHA (Gold Medal in Malavalli National Level Karate Championship - 2022) ..."
    },
    {
      name: "Siri Vinay Bandakka",
      grade: "",
      curriculum: "Indian",
      description: "Siri Vinay Bandakka who has won two Gold medals in the 38th Karnataka Roller Skating Championship. And not just that, ..."
    },
    {
      name: "Vaidic Mukherjee",
      grade: "Grade 2",
      curriculum: "Indian",
      description: "Vaidic Mukherjee (2210020646), Grade 2 received an invitation and participation along with his winning a prize..."
    },
    {
      name: "Yashvi",
      grade: "Grade 8",
      curriculum: "Indian",
      description: "Yashvi of Grade 8 AA has achieved the 2nd place in Under 15 State Chess Championship held in Hyderabad..."
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Student Spotlight</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Student Spotlight</h1>
      
      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Students</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Adarsh</h3>
              <p className="text-gray-600 mb-3">Adarsh - Grade 7 MC has won U 14 tournament on the new year open tournament conducted by Boston Indians open tournament</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Ananya Vishwesh</h3>
              <p className="text-gray-600 mb-3">Ananya Vishwesh of grade 6 MC participated and represented Athena AI school in Azadi ka Amrut Mahotsav and 125th Anniversary of Swami Vivekananda's return to India - a cultural inter school event conducted by Ramakrishna Math - a recitation competition - Swami Vivekananda's Chicago Addresses and grabbed the 3rd place.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Manishka Dubey</h3>
              <p className="text-gray-600 mb-3">Manishka Dubey the (YOUNGEST) WINNER(Cheque of 10 lakh) OF THE INVENTOR CHALLENGE BY COLORS INFINITY TV also the YONGEST INNOVATOR who WON GOLD MEDAL IN INEX INDIA INTERNATIONAL INNOVATION AND INVENTION EXPO GOA</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Student Spotlight</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Adarsh", "Aadvik Srivastava", "Alisha", "Aishwarya Jingade", "Ananya Vishwesh", "Manishka Dubey", "Maria", "Pranjal Dedhia", "Ravyanshi Singh", "Sameeksha Sinha", "Siri Vinay Bandakka", "Vaidic Mukherjee", "Yashvi"].map((student, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{student}</span>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">All Student Spotlights</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{student.grade} | {student.curriculum}</p>
              <p className="text-gray-700 mb-4">{student.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSpotlight;
