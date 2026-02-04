import React from 'react';
import '../../Academics.css';

const BritishLowerSecondary = () => {
  return (
    <>
      <div className="academics-page">
        <div className="academics-hero">
          <div className="academics-overlay">
            <h1>British Lower Secondary</h1>
            <p className="academics-subtitle">Developing intellectually curious, independent-minded young learners</p>
          </div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; British Lower Secondary
          </div>

          <div className="academics-section">
            <h2>British Lower Secondary</h2>
            <p>
              British Lower Secondary is typically for learners aged 11 to 14 years. It helps learners prepare for the next step of their education, helping them to become confident, responsible, reflective, innovative and engaged.
            </p>
            <p>
              British Lower Secondary prepares learners for Upper Secondary. It builds on the foundations of Primary, although it is not essential to have completed that stage before beginning Lower Secondary. British Lower Secondary provides excellent preparation for Cambridge Upper Secondary and other educational systems, including Edexcel.
            </p>
          </div>

          <div className="academics-section">
            <h2>Our Approach to Lower Secondary Education</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <h3>The Curriculum and Progression</h3>
                <p>Comprehensive curriculum designed for continuous learning and development</p>
              </div>
              <div className="approach-item">
                <h3>Pedagogical Approach</h3>
                <p>Innovative teaching methods tailored to adolescent learning styles</p>
              </div>
              <div className="approach-item">
                <h3>Community And Service (CAS)</h3>
                <p>Developing social responsibility and community engagement</p>
              </div>
              <div className="approach-item">
                <h3>Learner Engagement Activities</h3>
                <p>Interactive activities that foster critical thinking and collaboration</p>
              </div>
              <div className="approach-item">
                <h3>Facilitators</h3>
                <p>Experienced educators specialized in secondary education</p>
              </div>
              <div className="approach-item">
                <h3>Assessment</h3>
                <p>Regular assessments to track progress and identify areas for improvement</p>
              </div>
              <div className="approach-item">
                <h3>Learning Kit</h3>
                <p>Comprehensive learning resources delivered to your home</p>
              </div>
              <div className="approach-item">
                <h3>Learner Resources</h3>
                <p>Extensive digital and physical materials for enhanced learning</p>
              </div>
            </div>
          </div>

          <div className="academics-section">
            <h2>Program Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <h3>Regular Assessments</h3>
                <p>Continuous evaluation to monitor learner progress</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📦</div>
                <h3>Textbooks & Workbooks</h3>
                <p>Delivered directly to your home</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h3>Small Class Sizes</h3>
                <p>24 learners per class for personalized attention</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎥</div>
                <h3>Live Engaging Classes</h3>
                <p>Interactive sessions with experienced facilitators</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏗️</div>
                <h3>Academic Structure</h3>
                <p>Well-organized curriculum and parental support</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h3>Instant Progress Access</h3>
                <p>Real-time access to your child's progress report</p>
              </div>
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

export default BritishLowerSecondary;
