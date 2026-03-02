import React from 'react';
import '../../Academics.css';

const BritishUpperSecondary = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">British Upper Secondary</h1>
            <p className="text-lg md:text-xl font-light opacity-90">Wherever your child wishes to go help them get there with British Upper Secondary</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; British Upper Secondary
          </div>

          <div className="academics-section">
            <h2>British Upper Secondary</h2>
            <p>
              Upper Secondary builds on the foundations of British Lower Secondary, although learners do not need to complete that stage before this one. Leading universities and employers worldwide accept IGCSE as evidence of academic ability. It is typically for learners aged 14 to 16 years – Year 1 and Year 2 of IGCSE.
            </p>
          </div>

          <div className="academics-section">
            <h2>Available Pathways</h2>
            <p>The Upper Secondary Level at WisdomAI School offers full-time and part-time learners the following pathways:</p>
            <div className="pathways-grid">
              <div className="pathway-item">
                <h3>Cambridge IGCSE</h3>
                <p>Internationally recognized qualification with extensive subject range</p>
              </div>
              <div className="pathway-item">
                <h3>Edexcel International GCSE</h3>
                <p>Globally recognised qualifications designed for international learners</p>
              </div>
            </div>
            <p>
              Learners must study a recommended five subjects to secure the IGCSE qualification and prepare for the Advanced Level. A few Universities worldwide require IGCSE grades in core subjects as part of their University Undergraduate Programme entry requirements, while most only ask for AS and A Level subjects.
            </p>
          </div>

          <div className="academics-section">
            <h2>Program Details</h2>
            <p>
              The Cambridge Upper Secondary programme has an extensive range of subjects available at Cambridge IGCSE or Cambridge O Level.
            </p>
            <p>
              Learners seeking to study Cambridge O Level or IGCSE taught by English-native Facilitators may click here.
            </p>
            <p>
              Pearson Edexcel International GCSEs are globally recognised qualifications with academic content and assessment designed specifically for international learners. International GCSEs are part of iProgress, the complete series of Pearson Edexcel academic qualifications for 5 to 19-year-olds for international schools.
            </p>
            <p>
              Both Cambridge and Edexcel offer a wide range of subjects. Learners can choose to study 1 or more subjects with WisdomAI School with a combination of different pathways. Learners registering on 5 or more subjects are considered full-time learners, and such learners are generally not registered with any other schools.
            </p>
            <p>
              Learners studying with another school or as private candidates may opt to study one or more subjects online through WisdomAI School. This broadens opportunities for learners to demonstrate their learning, particularly for university undergraduate programmes. A more comprehensive choice of subjects at the IGCSE level will help learners select the right combination of Advanced Level subjects. The increased number of subjects available, and the ability to study them flexibly, means that learners can tailor their studies to match their interests and career aspirations. In addition, the online delivery of courses means that learners can study at their own pace and in their own time. This enhances the learning experience and opens up opportunities for those who might not otherwise have access to such programmes.
            </p>
          </div>

          <div className="academics-section">
            <h2>Quick Overview</h2>
            <div className="overview-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Programmes:</strong></td>
                    <td>Cambridge IGCSE / Edexcel iGCSE</td>
                  </tr>
                  <tr>
                    <td><strong>Age:</strong></td>
                    <td>14 to 16 years</td>
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
                    <td>March / June 2027 or later</td>
                  </tr>
                  <tr>
                    <td><strong>Entry Requirements:</strong></td>
                    <td>Learners must have completed Grade 8 from any recognised Board. Entry is permissible at Grade 9 (year 1 of IGCSE) only</td>
                  </tr>
                  <tr>
                    <td><strong>Class size:</strong></td>
                    <td>24 learners per batch</td>
                  </tr>
                  <tr>
                    <td><strong>Facilitators:</strong></td>
                    <td>Subject Expert Facilitator</td>
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
                    <td>Option to purchase Books through WisdomAI School, delivered to home</td>
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

export default BritishUpperSecondary;
