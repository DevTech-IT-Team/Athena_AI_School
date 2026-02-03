import React from 'react';

const InternationalBenchmarkTest = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">International Benchmark Test</span>
      </nav>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-medium text-blue-900">"Our vision is to make 15 years of schooling meaningful and joyful for all."</p>
        <div className="mt-4 flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">Enquire Now</button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">Download Prospectus</button>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">International Benchmark Test</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Athena AI School has adopted the International Benchmark Test (IBT) conducted by one of the world's leading educational research centres, Australian Council for Educational Research (ACER), to diagnose, analyse and compare learner learning against global bench-marks.
        </p>
        
        <p className="text-lg mb-6">
          The International Benchmark Tests is an internationally administered program of assessments to compare learner performance globally, between grades and over time. The tests cover English, Mathematics, Science for our learners in Grade 3 through 8.
        </p>
        
        <p className="text-lg mb-6">
          IBT is skill-based and does not follow any single national curriculum, allowing learners from all countries to be compared fairly. It helps in tracking learner performance against international standards. The assessments are reliable and help to support schools, facilitators and parents to measure learning progress.
        </p>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Why did we choose IBT assessment over any other assessment?</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>The IBT solution compares your child's performance to an international cohort.</li>
            <li>The diagnostic testing is designed to challenge learners across a broad range of ability levels.</li>
            <li>It assesses deep conceptual understanding rather than simple recall of facts.</li>
            <li>The test recognises learning achievement, and monitors progress over time.</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">How is IBT conducted?</h2>
          
          <p className="mb-4">
            The IBT is an online test, conducted in January every year, the duration of which will be 60 minutes per test for Mathematics, English and Science only. The paper will predominantly be a multiple-choice questionnaire (MCQ) with 40 – 45 questions per test.
          </p>
          
          <p className="mb-4">
            The IBT is not tied to a specific curriculum, allowing for fair comparisons between learners across schools and around the world, and content is updated every year.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">English</h3>
              <p>The skills assessed are locating information, inferring, predicting, drawing conclusions and reasoning. Learners are not asked merely to retrieve information from a passage; they are asked to make inferences, form judgements, and reflect on the texts. Questions addressing higher-order thinking skills are used to ascertain whether a learner can 'read between the lines' and understand subtlety and nuance in the English language.</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
              <p>The skills assessed include interpreting data, inferring, predicting, drawing conclusions, reasoning and problem solving. For Mathematics questions, learners are asked to make sense of mathematical concepts in everyday situations. IBT Mathematics is not about simply remembering rules and procedures; it requires learners to use higher-order thinking skills to apply their mathematical skills to solve problems.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Science</h3>
              <p>The skills assessed include observing and measuring, interpreting data, inferring, predicting, drawing conclusions, reasoning and problem solving. Learners are asked to apply scientific principles to specific problems. IBT Science not only assesses learners' knowledge of science, it assesses whether learners are capable of applying this knowledge to given contexts. Many of the questions are based on scientific enquiry.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">How does ACER report results?</h2>
          
          <p className="mb-4">
            The IBT provides many different reports on learner performance to help facilitators and schools better understand where their learners are positioned on the learning continuum. The Individual learner report provides comprehensive details of the learners' performance across strands.
          </p>
          
          <p className="mb-4">
            This experience of IBT is better than any Olympiad exam, as the curriculum of Olympiads is limited in the Indian context only and does not necessarily evaluate skills. IBT on the other hand is of an international standard and helps you compare the abilities of your child to global standards and work on them.
          </p>
          
          <p className="font-semibold text-blue-900">
            There is no additional cost for attempting the IBT assessment. We encourage every learner to mandatorily attempt the IBT and benefit from the outcome.
          </p>
        </div>
        
        <div className="bg-orange-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Times are changing...</p>
        </div>
        
        <div className="bg-pink-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Why did you choose an online school? (Mrs Seemple Sunela)</p>
        </div>
        
        <div className="bg-indigo-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">#Being21K</h3>
          <p>Dhanush has something to say and we all should listen</p>
        </div>
      </div>
    </div>
  );
};

export default InternationalBenchmarkTest;
