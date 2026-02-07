import React from 'react';
import '../../Academics.css';

const CambridgeAdvancedLevel = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Cambridge Advanced Level</h1>
            <p className="text-lg md:text-xl font-light opacity-90">From here to the world's leading universities</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Cambridge Advanced Level
          </div>

          <div className="academics-section">
            <h2>Cambridge Advanced Level</h2>
            <p>
              By the time learners begin studying the Cambridge Advanced programme, they often want to specialise more, depending on their current interests, ambitions for higher learning and potential career paths. However, it is still possible to study a wide range of different subjects at this level, creating a broad programme of study, and the co-curricular programme can add breadth and balance to the educational experience.
            </p>
            <p>
              Cambridge International AS Level examinations is usually taken at age 17 and Cambridge International A Level examinations at age 18, though Cambridge does not set any specific age requirements. it is typical for learners to study three or four subjects. The syllabuses develop a deep understanding, critical thinking skills and independent research projects that prepare you for future career goals.
            </p>
            <p>
              Candidates who have already taken Cambridge IGCSEs or equivalent will find many skills they have already learnt relevant and beneficial to Cambridge International A Level study.
            </p>
          </div>

          <div className="academics-section">
            <h2>Skills Development</h2>
            <p>Cambridge Advanced Level develops learners' knowledge, understanding and skills in:</p>
            <div className="skills-grid">
              <div className="skill-item">
                <h3>In-depth Subject Content</h3>
                <p>Comprehensive understanding of advanced topics</p>
              </div>
              <div className="skill-item">
                <h3>Independent Thinking</h3>
                <p>Developing autonomous analytical abilities</p>
              </div>
              <div className="skill-item">
                <h3>Applying Knowledge</h3>
                <p>Using understanding in new and familiar situations</p>
              </div>
              <div className="skill-item">
                <h3>Information Evaluation</h3>
                <p>Handling and evaluating different types of information sources</p>
              </div>
              <div className="skill-item">
                <h3>Logical Thinking</h3>
                <p>Thinking logically and presenting ordered and coherent arguments</p>
              </div>
              <div className="skill-item">
                <h3>Decision Making</h3>
                <p>Making judgements, recommendations and decisions</p>
              </div>
              <div className="skill-item">
                <h3>Communication</h3>
                <p>Presenting reasoned explanations and communicating clearly</p>
              </div>
              <div className="skill-item">
                <h3>English Proficiency</h3>
                <p>Working and communicating effectively in English</p>
              </div>
            </div>
          </div>

          <div className="academics-section">
            <h2>University Recognition</h2>
            <p>
              Cambridge Advanced qualifications are accepted and valued by leading universities and employers worldwide. Thousands of learners worldwide can gain places at leading universities every year with Cambridge International AS & A Levels. For more information, please visit Cambridge Website.
            </p>
          </div>

          <div className="academics-section">
            <h2>Understanding AS & A Levels</h2>
            <p>
              Cambridge International AS & A Level are the names of the qualifications that formally recognise a learner's achievement at the end of a particular subject course. The content of the course is more in-depth and demanding than Cambridge IGCSE or O Level. It is based on an international curriculum developed for 16–19 year olds preparing for higher education.
            </p>
            <p>
              A Level stands for Advanced Level and AS Level stands for Advanced Subsidiary Level. An AS Level contains half the content of the corresponding A Level and is normally completed in one year. This allows for flexibility, as learners can complete AS Levels as qualifications in their own right or as the first half of an A Level, for which they are allowed to carry forward their AS result. Some learners take all the assessments for their full A Level at the end of the second year.
            </p>
            <p>
              The assessment standards of Cambridge International A Levels are aligned to those of UK A Levels and are equivalent on a subject-for-subject, grade-for-grade basis. The grades awarded are A* to E, with A* being the highest. There is no A* grading in the certification of Cambridge International AS Levels. Cambridge International A & AS Levels are viewed as equivalent to AS & A Level qualifications taken by learners in the UK.
            </p>
          </div>

          <div className="academics-section">
            <h2>Our Approach to Cambridge Advanced Level</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <h3>The Curriculum and Progression</h3>
                <p>Structured curriculum designed for advanced academic growth</p>
              </div>
              <div className="approach-item">
                <h3>Pedagogical Approach</h3>
                <p>Innovative teaching methods tailored for advanced level success</p>
              </div>
              <div className="approach-item">
                <h3>Learner Engagement Activities</h3>
                <p>Interactive activities fostering critical thinking and research</p>
              </div>
              <div className="approach-item">
                <h3>Assessment</h3>
                <p>Comprehensive evaluation aligned with Cambridge standards</p>
              </div>
              <div className="approach-item">
                <h3>Facilitators</h3>
                <p>Experienced educators specialized in Cambridge Advanced Level</p>
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

export default CambridgeAdvancedLevel;
