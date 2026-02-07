import React from 'react';
import '../../Academics.css';

const BritishAdvancedLevels = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">British Advanced Levels</h1>
            <p className="text-lg md:text-xl font-light opacity-90">Wherever your child wishes to go help them get there with British Advanced Levels</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; British Advanced Levels
          </div>

          <div className="academics-section">
            <h2>British Advanced Levels</h2>
            <p>
              Advanced Level Qualifications (or A Levels for short) can lead to University, Apprenticeship, Vocational Education or Work. It is typically for learners aged 16 to 18 years. Taking three or more A levels is an intensive educational journey that will prepare you for the future. They're normally assessed by a series of examinations, which can be challenging but ultimately rewarding if they lead to university studies and professional careers in their respective fields. The skills that A-level learners learn will make them competitive for any job they take. They can develop their critical thinking abilities, and improve research techniques and data analysis, among many other things. The syllabuses develop a deep understanding of subjects and independent thinking skills.
            </p>
          </div>

          <div className="academics-section">
            <h2>Available Pathways</h2>
            <p>The Advanced Level at Athena AI School offers full-time and part-time Learners the following pathways:</p>
            <div className="pathways-grid">
              <div className="pathway-item">
                <h3>Cambridge International AS & A Level</h3>
                <p>Internationally recognised qualification with extensive subject range</p>
              </div>
              <div className="pathway-item">
                <h3>Edexcel International Advanced Level (IAL)</h3>
                <p>Globally recognised qualifications designed for international learners</p>
              </div>
            </div>
            <p>
              Learners must study a minimum three 'A' Levels (or a combination of AS and A Levels) in core subjects to secure admission into most University Undergraduate Programmes. A few Universities worldwide also require IGCSE grades in core subjects, while most only ask for AS and A Level subjects. Specific requirements may vary from country to country.
            </p>
          </div>

          <div className="academics-section">
            <h2>Program Details</h2>
            <p>
              The Cambridge Advanced programme has an extensive range of subjects available at AS and A Level.
            </p>
            <p>
              Learners seeking to study Advanced Level taught by English-native Facilitators may click here.
            </p>
            <p>
              Pearson Edexcel International Advanced Level (IAL) are globally recognised qualifications with academic content and assessment designed specifically for international learners. IAL are part of iProgress, the complete series of Pearson Edexcel academic qualifications for 5 to 19-year-olds for international schools.
            </p>
            <p>
              Both Cambridge and Edexcel offer a wide range of subjects. Learners can choose to study 1 or more subjects with Athena AI School with a combination of different pathways. Learners enrolling on 3 or more subjects are considered full-time learners, and such learners are generally not registered with any other Schools.
            </p>
            <p>
              Learners studying with another school or as private candidates may opt to study one or more subjects online through Athena AI School. This broadens opportunities for learners to demonstrate their learning, particularly for university undergraduate programmes. A more comprehensive choice of subjects at the Advanced Level will help learners get admission in their preferred University. The increased number of subjects available, and the ability to study them flexibly, means that learners can tailor their studies to match their interests and career aspirations. In addition, the online delivery of courses means that learners can study at their own pace and in their own time. This enhances the learning experience and opens up opportunities for those who might not otherwise have access to such programmes.
            </p>
          </div>

          <div className="academics-section">
            <h2>Quick Overview</h2>
            <div className="overview-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Programmes:</strong></td>
                    <td>Cambridge Advanced / Edexcel IAL</td>
                  </tr>
                  <tr>
                    <td><strong>Age:</strong></td>
                    <td>16 to 18 years</td>
                  </tr>
                  <tr>
                    <td><strong>Enrollment:</strong></td>
                    <td>Open for Both Full-time and Part-time Learners</td>
                  </tr>
                  <tr>
                    <td><strong>Academic Year begin date:</strong></td>
                    <td>April 2025</td>
                  </tr>
                  <tr>
                    <td><strong>Exam Series:</strong></td>
                    <td>March / June 2026 for AS level and March / June 2027 for A level</td>
                  </tr>
                  <tr>
                    <td><strong>Entry Requirements:</strong></td>
                    <td>Learners must have completed IGCSE or equivalent</td>
                  </tr>
                  <tr>
                    <td><strong>Class size:</strong></td>
                    <td>24 learners per batch</td>
                  </tr>
                  <tr>
                    <td><strong>Facilitators:</strong></td>
                    <td>Subject Experts</td>
                  </tr>
                  <tr>
                    <td><strong>Class Hours:</strong></td>
                    <td>Based on the number of subjects selected</td>
                  </tr>
                  <tr>
                    <td><strong>Batches:</strong></td>
                    <td>Classes are conducted from 9.30 am IST to 5.30 pm IST. Learners will be required to attend classes as per the subject selected</td>
                  </tr>
                  <tr>
                    <td><strong>Mode of Classes:</strong></td>
                    <td>Live Classes, Synchronous learning on our learning platform</td>
                  </tr>
                  <tr>
                    <td><strong>Learning kit:</strong></td>
                    <td>Option to purchase Books through Athena AI School, delivered to home</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="academics-cta">
            <h3>"The change I have seen in my children is phenomenal. They want to explore more about topics taught in school!"</h3>
            <div className="cta-buttons">
              <button className="btn-primary">Enquire Now</button>
              <button className="btn-secondary">Download Prospectus</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BritishAdvancedLevels;
