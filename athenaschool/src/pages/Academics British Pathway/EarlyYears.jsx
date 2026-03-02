import React from 'react';
import '../../Academics.css';

const EarlyYears = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Early Years</h1>
            <p className="text-lg md:text-xl font-light opacity-90">Find Your Path</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Early Years
          </div>

          <div className="academics-section">
            <h2>Early Years</h2>
            <p>
              The early years of a child's education are vital for developing their critical thinking and problem-solving skills. We at WisdomAI School have created an environment in which our young learners feel empowered to ask questions, safe to meet challenges head on, and accompanied on their journey towards reaching their full potential.
            </p>
            <p>
              The Early Years Curriculum provides an age-appropriate, activity-based academic plan for every grade. The curriculum content is based on the U.K. designed and globally accepted framework of Early Years Foundation Stage (EYFS), alongside best educational practices with an emphasis on every child's unique learning styles. Values, morals, and ethics for the preschoolers are weaved into our programs with stories & narratives using the Principles of 16 Habits of Mind, (by Art Costa and Bena Kallick) to nurture & build a strong character, independent mind and confident leaders of tomorrow.
            </p>
          </div>

          <div className="academics-section">
            <h2>Subject Areas</h2>
            <p>The main subject areas are:</p>
            <ul>
              <li>Literacy</li>
              <li>Numeracy</li>
              <li>Understanding the world</li>
              <li>Expressive Arts & Designs</li>
              <li>Communication & Language Development</li>
              <li>Physical Development</li>
              <li>Personal, Social and Emotional Development</li>
            </ul>
          </div>

          <div className="academics-section">
            <h2>Program Information</h2>
            <p>The minimum age for registration into the Kindergarten Program is as below:</p>
            <div className="program-table">
              <table>
                <thead>
                  <tr>
                    <th>Programme</th>
                    <th>Indian Equivalent</th>
                    <th>Age</th>
                    <th>As on</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nursery – Pre-K</td>
                    <td>Nursery / Pre-K</td>
                    <td>3-4 years</td>
                    <td>30 September 2025</td>
                  </tr>
                  <tr>
                    <td>Reception – Year R</td>
                    <td>KG1 / LKG</td>
                    <td>4-5 years</td>
                    <td>30 September 2025</td>
                  </tr>
                  <tr>
                    <td>Foundation – Year 1</td>
                    <td>KG2 / UKG</td>
                    <td>5-6 years</td>
                    <td>30 September 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="academics-section">
            <h2>Our Approach</h2>
            <p>
              Our small class sizes permit our facilitators to tailor their lessons to suit individuals' abilities and learning styles. The positive and supportive environment throughout our school and the personal attention each learner receives form the basis of WisdomAI school's difference and are cornerstones of our success.
            </p>
            <p>
              Learners will transition to Primary Years with a solid academic foundation upon which to build and the confidence and curiosity to strive for ever greater academic heights.
            </p>
          </div>

          <div className="academics-cta">
            <h3>"Digital Schools are the future and we are India's first."</h3>
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

export default EarlyYears;
