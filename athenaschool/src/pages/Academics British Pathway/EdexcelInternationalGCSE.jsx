import React from 'react';
import '../../Academics.css';

const EdexcelInternationalGCSE = () => {
  return (
    <>
      <div className="academics-page">
        <div className="academics-hero">
          <div className="academics-overlay">
            <h1>Edexcel International GCSE</h1>
            <p className="academics-subtitle">Wherever your child wishes to go help them get there with Edexcel International GCSE</p>
          </div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Edexcel International GCSE
          </div>

          <div className="academics-section">
            <h2>Edexcel International GCSE</h2>
            <p>
              Pearson is the largest awarding organisation in the UK. Pearson Edexcel is best placed to provide qualifications that are recognised as being most closely aligned with the British educational system. With over 3.4 million learners studying our qualifications worldwide, it offers qualifications to 6,500 schools, colleges and employers globally and marks over 9 million exam scripts on behalf of the UK Department for Education each year. It may be noted that Pearson Edexcel is regulated by Ofqual, UK.
            </p>
            <p>
              Pearson Edexcel International qualifications come from the same team that provides the UK regulated versions and therefore ensures comparability to the UK versions and alignment to the UK government's intentions to raise standards.
            </p>
            <p>
              International GCSEs are part of iProgress, the complete series of Pearson Edexcel academic qualifications for 5 to 19-year-olds for international schools. Edexcel Assessments only offer the 9–1 grading and chose not to continue to provide A*-G. The Assessments are linear over two years programme and offer November and May/June Exam Series.
            </p>
          </div>

          <div className="academics-section">
            <h2>Study Options</h2>
            <p>
              Learners can pursue Edexcel International GCSE either full-time or part-time. Under full-time, the learners will be studying any five of the following subjects:
            </p>
            <div className="subjects-grid">
              <div className="subject-item">Accounting</div>
              <div className="subject-item">Art and Design</div>
              <div className="subject-item">Biology</div>
              <div className="subject-item">Business</div>
              <div className="subject-item">Chemistry</div>
              <div className="subject-item">Chinese</div>
              <div className="subject-item">Commerce</div>
              <div className="subject-item">Computer Science</div>
              <div className="subject-item">Economics</div>
              <div className="subject-item">English (as 2nd language)</div>
              <div className="subject-item">English Language A</div>
              <div className="subject-item">English Language B</div>
              <div className="subject-item">English Literature</div>
              <div className="subject-item">French</div>
              <div className="subject-item">Further Pure Mathematics</div>
              <div className="subject-item">Geography</div>
              <div className="subject-item">Global Citizenship</div>
              <div className="subject-item">History</div>
              <div className="subject-item">Human Biology</div>
              <div className="subject-item">Information and Communication Technology</div>
              <div className="subject-item">Mathematics</div>
              <div className="subject-item">Mathematics A</div>
              <div className="subject-item">Mathematics B</div>
              <div className="subject-item">Physics</div>
              <div className="subject-item">Science (Double Award)</div>
              <div className="subject-item">Science (Single Award)</div>
              <div className="subject-item">Spanish</div>
            </div>
            <p>
              We may add or remove subjects from our programme offering subject to changes by Pearson Edexcel and learner interest.
            </p>
            <p>
              Under part-time, learners can opt to study any one or more of the above subjects while continuing to study in a physical school or as a private candidate.
            </p>
          </div>

          <div className="academics-section">
            <h2>Important Notes</h2>
            <div className="notes-section">
              <div className="note-item">
                <h4>Minimum Cohort Size</h4>
                <p>A cohort of a minimum of 10 learners is mandatory to offer a subject. Learners may be asked to accept a different subject with fewer than 10 learners.</p>
              </div>
              <div className="note-item">
                <h4>Exam Series</h4>
                <p>The Exam Series may change based on the latest update from Pearson Edexcel. Not all subjects are offered in both June and November series.</p>
              </div>
              <div className="note-item">
                <h4>Learning Materials</h4>
                <p>We follow Pearson coursebooks and workbooks for core subjects.</p>
              </div>
            </div>
          </div>

          <div className="academics-section">
            <h2>Additional Information</h2>
            <p>
              For more details on the Edexcel International GCSE Subjects and Curriculum, please visit: 
              <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="external-link">
                https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html
              </a>
            </p>
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

export default EdexcelInternationalGCSE;
