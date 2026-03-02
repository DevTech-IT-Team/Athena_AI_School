import React from 'react';
import '../../Academics.css';

const EdexcelUK = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Edexcel, UK</h1>
            <p className="text-lg md:text-xl font-light opacity-90">Pearson Edexcel Qualifications</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Edexcel, UK
          </div>

          <div className="academics-section">
            <h2>Pearson Edexcel</h2>
            <p>
              Pearson Edexcel are the largest awarding organisation in the UK. Pearson Edexcel are best placed to provide qualifications that are recognised as being most closely aligned to the British educational system. With over 3.4 million learners studying our qualifications worldwide, we offer qualifications to 6,500 schools, colleges and employers globally and mark over 9 million exam scripts on behalf of the UK Department for Education each year.
            </p>
            <p>
              The story started in 1836 when a royal charter gave the University of London its first powers to conduct exams and confer degrees on its learners. Edexcel was formed in 1996.
            </p>
            <p>
              Pearson Edexcel enjoys Extensive worldwide recognition and is regulated by Ofqual. Pearson Edexcel International qualifications come from the same team that provides the UK regulated versions and therefore ensure comparability to the UK versions and alignment to the UK government intentions to raise standards. Pearson Edexcel has set the standard for worldwide recognised qualifications, built on the UK educational system and accepted by universities worldwide, for more than 150 years.
            </p>
          </div>

          <div className="academics-section">
            <h2>iProgress with Pearson Edexcel</h2>
            <p>
              iProgress with Pearson Edexcel is a complete international curriculum from 5-19 years old in international schools like WisdomAI School. The iProgress family includes iPrimary, iLowerSecondary, International GCSE (IG), GCSE, International Advanced level (IAL), and GCE A level, and delivers a consistent learning journey for learners and facilitators, everywhere in the world. These are internationalised versions of the latest English National Curriculum, created specifically with EAL learners in mind and explicitly designed to prepare learners for International GCSE and beyond.
            </p>
          </div>

          <div className="academics-section">
            <h2>University Recognition</h2>
            <p>
              Pearson Edexcel International Advanced Levels (IAL) and GCE A levels are widely recognised by universities in the UK and worldwide for entry onto undergraduate degree programmes. For more details please visit: <a href="https://qualifications.pearson.com/en/support/Services/progress-to-university.html" target="_blank" rel="noopener noreferrer">https://qualifications.pearson.com/en/support/Services/progress-to-university.html</a>
            </p>
          </div>

          <div className="academics-section">
            <h2>Our Affiliation</h2>
            <p>
              WisdomAI School is an approved center of Edexcel bearing affiliation number 94883
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

export default EdexcelUK;
