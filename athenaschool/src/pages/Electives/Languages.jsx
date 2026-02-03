import React from 'react';

const Languages = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Languages</span>
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Languages</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Additional language is introduced as electives, enabling learners to further develop their linguistic abilities.
        </p>
        
        <p className="text-lg mb-6">
          We provide tailored support for non-English speakers of all levels and ages, helping them to successfully adopt English as their first language of learning.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Language Selection Guidelines</h2>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Learners can select any one 2nd and 3rd language subject from the below-mentioned options.</li>
            <li>While learners must study 2nd Language, studying a third language is optional for Grades 1 to 8.</li>
            <li>There is no additional tuition fee for studying a 2nd Language.</li>
            <li>Learners of Grades 1 through 8 who choose to pursue a third language will incur additional tuition fees of ₹6500 for Indian Language & ₹8500 for Foreign Language.</li>
            <li>This fee will be payable in 2 instalments, mentioned in the below table:</li>
          </ul>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Indian</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Foreign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 1</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 2</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 3</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 4</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 5</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 6</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 7</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grade 8</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,700</td>
                  <td className="border border-gray-300 px-4 py-2">₹11,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Language Policy</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>English is the First Language and Medium of Instruction.</li>
            <li>All learners must opt for Second Language from Grade 1 to 8.</li>
            <li>Learners of Grades 1 to 8 can select a Third Language (optional) on payment of additional charges as mentioned above. Classes for these will be conducted twice a week after regular school hours.</li>
            <li>Except in Grade 1, learners must have studied the language in earlier Grade to opt the 2nd Language at Athena AI School.</li>
            <li>The learning levels for 3rd Language are defined as per the rubrics detailed here. Parents are encouraged to ask learners to attempt the diagnostic assessment independently without assistance to ascertain the correct level of books and grade placement for 3rd Language only. Incorrect selection of Level of 3rd Language will cause delay, additional cost, returns, and loss of learning.</li>
          </ul>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Actions Speak louder than words</p>
        </div>
        
        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Starting the weekend with love we get from our learners</p>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Understanding rainforests with yug</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
