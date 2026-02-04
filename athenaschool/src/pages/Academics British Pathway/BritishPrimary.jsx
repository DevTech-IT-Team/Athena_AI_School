import React from 'react';
import '../../Academics.css';

const BritishPrimary = () => {
  return (
    <>
      <div className="academics-page">
        <div className="academics-hero">
          <div className="academics-overlay">
            <h1>British Primary</h1>
            <p className="academics-subtitle">Developing intellectually curious, independent-minded young learners</p>
          </div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; British Primary
          </div>

          <div className="academics-section">
            <h2>British Primary</h2>
            <p>
              British Primary starts learners on an exciting educational journey, helping them to become confident, responsible, reflective, innovative, and engaged. It is adapted to suit our context, culture, and ethos. It is typically for learners aged 6 to 11 years. By offering British Primary, we provide a broad and balanced education for our learners, helping them to thrive throughout their schooling, work, and life.
            </p>
            <p>
              Our Primary programme starts from Years 2 through Year 6 (Grades 1 to 5). It provides an excellent foundation for the next stage of education, Lower Secondary, and plenty of opportunities to develop creativity, expression and personal well-being in various ways.
            </p>
          </div>

          <div className="academics-section">
            <h2>Our Approach to Primary Education</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <h3>The Curriculum and Progression</h3>
                <p>Comprehensive curriculum designed for continuous learning and development</p>
              </div>
              <div className="approach-item">
                <h3>Pedagogical Approach</h3>
                <p>Innovative teaching methods tailored to individual learning styles</p>
              </div>
              <div className="approach-item">
                <h3>Learner Engagement Activities</h3>
                <p>Interactive activities that foster creativity and critical thinking</p>
              </div>
              <div className="approach-item">
                <h3>Facilitators</h3>
                <p>Experienced educators dedicated to nurturing young minds</p>
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
                <h3>Instant Progress Reports</h3>
                <p>Real-time access to your child's academic performance</p>
              </div>
            </div>
          </div>

          <div className="academics-cta">
            <h3>"When you see your child looking forward to his classes, you know the school is doing something really right."</h3>
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

export default BritishPrimary;
