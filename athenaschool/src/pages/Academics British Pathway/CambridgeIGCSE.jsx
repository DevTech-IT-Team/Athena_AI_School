import React from 'react';
import '../../Academics.css';

const CambridgeIGCSE = () => {
  return (
    <>
      <div className="academics-page">
        <div className="academics-hero">
          <div className="academics-overlay">
            <h1>Cambridge IGCSE</h1>
            <p className="academics-subtitle">Wherever your child wishes to go help them get there with British Cambridge IGCSE</p>
          </div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Cambridge IGCSE
          </div>

          <div className="academics-section">
            <h2>Cambridge IGCSE</h2>
            <p>
              IGCSE stands for The Cambridge International General Certificate of Secondary Education and is a globally renowned program for 14-16 years old. This qualification, recognised worldwide, provides learners with many more options than any other international certificate or diploma available today, allowing them to decide their career pathway in the ever-changing world. The Cambridge IGCSE standards align with the GCSE qualification taken in England.
            </p>
            <p>
              Cambridge IGCSE is the perfect springboard to advanced study. It improves performance by developing creative thinking, enquiry and problem-solving skills necessary for success in life or work. The syllabuses are international in outlook but retain a local relevance. They have been created specifically for an international learner body and to avoid cultural bias.
            </p>
          </div>

          <div className="academics-section">
            <h2>Skills Development</h2>
            <p>Cambridge IGCSE develops learner knowledge, understanding and skills in:</p>
            <div className="skills-grid">
              <div className="skill-item">
                <h3>Subject Content</h3>
                <p>Comprehensive understanding of core subjects</p>
              </div>
              <div className="skill-item">
                <h3>Applying Knowledge</h3>
                <p>Using understanding in new and familiar situations</p>
              </div>
              <div className="skill-item">
                <h3>Intellectual Enquiry</h3>
                <p>Developing critical thinking and analytical skills</p>
              </div>
              <div className="skill-item">
                <h3>Flexibility</h3>
                <p>Adaptability and responsiveness to change</p>
              </div>
              <div className="skill-item">
                <h3>English Communication</h3>
                <p>Working and communicating effectively in English</p>
              </div>
              <div className="skill-item">
                <h3>Influencing Outcomes</h3>
                <p>Leadership and decision-making abilities</p>
              </div>
              <div className="skill-item">
                <h3>Cultural Awareness</h3>
                <p>Understanding and appreciating diverse perspectives</p>
              </div>
            </div>
          </div>

          <div className="academics-section">
            <h2>Our Approach to Cambridge IGCSE</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <h3>The Curriculum and Progression</h3>
                <p>Structured curriculum designed for continuous academic growth</p>
              </div>
              <div className="approach-item">
                <h3>Pedagogical Approach</h3>
                <p>Innovative teaching methods tailored for IGCSE success</p>
              </div>
              <div className="approach-item">
                <h3>Learner Engagement Activities</h3>
                <p>Interactive activities fostering critical thinking and creativity</p>
              </div>
              <div className="approach-item">
                <h3>Assessment</h3>
                <p>Comprehensive evaluation aligned with Cambridge standards</p>
              </div>
              <div className="approach-item">
                <h3>Facilitators</h3>
                <p>Experienced educators specialized in Cambridge IGCSE</p>
              </div>
              <div className="approach-item">
                <h3>Learning Kit</h3>
                <p>Complete learning resources delivered to your home</p>
              </div>
              <div className="approach-item">
                <h3>Learner Resources</h3>
                <p>Extensive digital and physical materials for enhanced learning</p>
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

export default CambridgeIGCSE;
