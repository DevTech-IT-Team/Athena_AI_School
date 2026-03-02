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

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Language Selection Guidelines</h2>

          <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
            <li>Learners can select any one 2nd and 3rd language subject from the below-mentioned options.</li>
            <li>While learners must study 2nd Language, studying a third language is optional for Grades 1 to 8.</li>
            <li>There is no additional tuition fee for studying a 2nd Language.</li>
            <li>Learners of Grades 1 through 8 who choose to pursue a third language will incur additional tuition fees of ₹6500 for Indian Language & ₹8500 for Foreign Language.</li>
            <li>This fee will be payable in 2 instalments, mentioned in the below table:</li>
          </ul>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="px-6 py-3 text-left font-semibold">Grade</th>
                  <th className="px-6 py-3 text-left font-semibold">Indian</th>
                  <th className="px-6 py-3 text-left font-semibold">Foreign</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 1</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 2</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 3</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 4</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 5</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 6</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 7</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium">Grade 8</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹8,700</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">₹11,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Language Policy</h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>English is the First Language and Medium of Instruction.</li>
            <li>All learners must opt for Second Language from Grade 1 to 8.</li>
            <li>Learners of Grades 1 to 8 can select a Third Language (optional) on payment of additional charges as mentioned above. Classes for these will be conducted twice a week after regular school hours.</li>
            <li>Except in Grade 1, learners must have studied the language in earlier Grade to opt the 2nd Language at WisdomAI School.</li>
            <li>The learning levels for 3rd Language are defined as per the rubrics detailed here. Parents are encouraged to ask learners to attempt the diagnostic assessment independently without assistance to ascertain the correct level of books and grade placement for 3rd Language only. Incorrect selection of Level of 3rd Language will cause delay, additional cost, returns, and loss of learning.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-bold mb-3">#WisdomAISchool</h3>
            <p className="text-blue-100">Actions Speak louder than words</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-bold mb-3">#WisdomAISchool</h3>
            <p className="text-purple-100">Starting the weekend with love we get from our learners</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-bold mb-3">#WisdomAISchool</h3>
            <p className="text-pink-100">Understanding rainforests with yug</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
