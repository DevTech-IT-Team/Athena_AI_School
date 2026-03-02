import React from 'react';
import '../../Academics.css';

const PrePrimary = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Pre Primary</h1>
            <p className="text-lg md:text-xl font-light opacity-90">NCF India</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Pre Primary
          </div>

      <div className="academics-nav">
        <a href="/academics/learning-culture" className="nav-link">Learning Culture</a>
        <a href="/academics/primary" className="nav-link">Primary</a>
        <a href="/academics/pre-primary" className="nav-link active">Pre Primary</a>
        <a href="/academics/middle" className="nav-link">Middle</a>
        <a href="/academics/senior-school" className="nav-link">Senior School</a>
        <a href="/academics/ncf-india" className="nav-link">NCF India</a>
        <a href="/academics/music-arts-partner" className="nav-link">Music & Arts Partner</a>
      </div>

      <div className="academics-quote">
        <p className="quote-text">
          &quot;The change I have seen in my children is phenomenal. They want to explore more about topics taught in school!&quot;
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Enquire Now</button>
          <button className="btn-secondary">Download Prospectus</button>
        </div>
      </div>

      <div className="academics-section">
        <h2>Pre Primary</h2>
        <p className="section-description">The moment you log in you know you are in good hands.</p>

        <p className="section-text">
          The Pre-Primary Program caters to learners aged 3 to 5 years. It includes the following Grades:
        </p>

        <ul className="program-list">
          <li>Nursery</li>
          <li>KG1 / LKG</li>
          <li>KG2 / UKG</li>
        </ul>

        <p className="section-text">
          The Pre-Primary Curriculum provides an age-appropriate, activity-based academic plan for every grade. The curriculum content is based on the National Curriculum Framework, alongside best educational practices with an emphasis on every child's unique learning styles. Values, morals, and ethics for the preschoolers are weaved into our programs with stories &amp; narratives to nurture &amp; build a strong character, independent mind and confident leaders of tomorrow.
        </p>

        <p className="section-text">The main subject areas are:</p>

        <ul className="program-list">
          <li>Communication and Language</li>
          <li>Personal, Social and Emotional Development</li>
          <li>Literacy</li>
          <li>Mathematics/ Numeracy</li>
          <li>Understanding the World</li>
          <li>Expressive Arts and Design</li>
          <li>Music and Movement</li>
        </ul>

        <p className="section-text">
          Only English Language is taught in Pre-Primary. From Grade 1 onward, learners have the opportunity to explore additional languages as part of their primary education.
        </p>

        <p className="section-text">Learning Material Kit delivered home for written work and home works:</p>

        <ul className="program-list">
          <li>Engaging, Skill-based Set of Concept Books and Workbooks</li>
          <li>Learner Merchandise - ID card, Almanac and Annual Planner</li>
          <li>Based on National Curriculum Framework</li>
          <li>Collaborative Learning Coach</li>
          <li>Only 10 Learners per class</li>
          <li>Personal Attention and Care</li>
          <li>1-2 Hours of Live Engaging Classes, Monday to Friday</li>
          <li>Academic structure and support to parents for stress-free learning</li>
        </ul>
      </div>

      <div className="social-highlights">
        <div className="highlight-card blue">
          <h3>#Being WisdomAI</h3>
          <p>Understanding rainforests with yug</p>
        </div>

        <div className="highlight-card green">
          <h3>#Being WisdomAI</h3>
          <p>It is never too early to take up responsibility</p>
        </div>

        <div className="highlight-card purple">
          <h3>#Being WisdomAI</h3>
          <p>Actions Speak louder than words</p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default PrePrimary;
