import React from 'react';
import '../../Academics.css';

const EdexcelInternationalAdvancedLevel = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Edexcel International A Level (IAL) Online
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Flexible learning, modular examinations and a pathway to universities worldwide.
            </p>

            <div className="cta-buttons mt-6">
              <button className="btn-primary">Book a free 2-week trial</button>
              <button className="btn-secondary">Apply for 2027-28</button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Main Content */}
        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Edexcel International A Level
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>Edexcel International A Level (IAL) Online</h2>
            <p>
              This page explains the Pearson Edexcel International A Level,
              usually shortened to IAL, from an exam point of view: how units
              work, when you can sit them and what online students need to
              arrange. For subject choices and our wider Grades 11–12 programme,
              see our A Levels online page.
            </p>

            <div className="cta-buttons mt-6">
              <button className="btn-primary">Book a free 2-week trial</button>
              <button className="btn-secondary">Apply for 2027-28</button>
            </div>
          </div>

          {/* Structure */}
          <div className="academics-section">
            <h2>How IAL is Structured</h2>
            <p>
              Most IAL subjects are split into units. The first units make up
              the International AS, roughly the first year, and the remaining
              units complete the full International A Level. Because units are
              examined separately, students can spread their exams across the
              two years.
            </p>
          </div>

          {/* Grading */}
          <div className="academics-section">
            <h2>Grading and Resits</h2>
            <p>
              Full International A Levels are graded A* to E. Students can
              resit individual units to improve their results. Resit policies
              and result considerations are explained to families during the
              academic planning process.
            </p>
          </div>

          {/* Exam Series */}
          <div className="academics-section">
            <h2>Exam Series and Centres</h2>
            <p>
              Pearson offers IAL exams in several series each year for many
              subjects. Online students sit them in person at a Pearson-approved
              exam centre. We help each family choose a centre, plan which units
              to take in each series and meet entry deadlines.
            </p>
            <p>
              Exam entry fees are paid directly to the centre and are not part
              of tuition.
            </p>
          </div>

          {/* Teaching */}
          <div className="academics-section">
            <h2>How We Teach IAL</h2>
            <ul>
              <li>Units taught in the order students will sit them.</li>
              <li>Past-paper practice and examiner-style marking.</li>
              <li>Mock exams before each examination series.</li>
              <li>Guidance on predicted grades for university applications.</li>
            </ul>
          </div>

          {/* Universities */}
          <div className="academics-section">
            <h2>Universities</h2>
            <p>
              International A Levels are accepted for university entry in the
              UK and by universities in many other countries. Students should
              always check the requirements of the specific universities and
              courses they are considering.
            </p>
          </div>

          {/* Unit Timetable */}
          <div className="academics-section">
            <h2>Planning Your Unit Timetable</h2>
            <p>
              Because IAL is modular, each student's exam plan can be shaped
              around their strengths and university deadlines. Some students
              sit their AS units at the end of Grade 11 so that they have
              results to show universities, then complete the A Level units in
              Grade 12. Others spread units more evenly.
            </p>
            <p>
              Teachers agree the plan with each family at the start of Grade 11
              and review it after each examination series.
            </p>
          </div>

          {/* Practical Requirements */}
          <div className="academics-section">
            <h2>Practical and Endorsement Requirements</h2>
            <p>
              Some science subjects include practical skills that must be
              evidenced. We explain how practical work is completed and
              recorded for online students and how this fits with the exam
              centre's requirements.
            </p>
          </div>

          {/* FAQ */}
          <div className="academics-section">
            <h2>Frequently Asked Questions</h2>

            <div className="notes-section">
              <div className="note-item">
                <h4>What is the difference between AS and A Level?</h4>
                <p>
                  The International AS covers roughly the first half of the
                  course. Adding the remaining units completes the full
                  International A Level.
                </p>
              </div>

              <div className="note-item">
                <h4>Can units be resat?</h4>
                <p>
                  Yes, individual units can be resat to improve results,
                  subject to the applicable examination rules.
                </p>
              </div>

              <div className="note-item">
                <h4>Are exam fees included in tuition?</h4>
                <p>
                  No. Families pay exam entry fees directly to the exam centre.
                </p>
              </div>
            </div>
          </div>

          {/* Admissions CTA */}
          <div className="academics-cta">
            <h2>Admissions for 2027-28 Are Open</h2>
            <p>
              Try a free 2-week trial class with our teachers, then apply when
              you are ready. The ₹999 registration fee is waived during our
              launch.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">Book a free 2-week trial</button>
              <button className="btn-secondary">Apply for 2027-28</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdexcelInternationalAdvancedLevel;