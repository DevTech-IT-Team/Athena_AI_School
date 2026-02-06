import React from 'react';
import '../../Academics.css';

const LearningCulture = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Learning Culture</h1>
            <p className="text-lg md:text-xl font-light opacity-90">NCF India</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Learning Culture
          </div>

      <div className="academics-nav">
        <a href="/academics/learning-culture" className="nav-link active">Learning Culture</a>
        <a href="/academics/primary" className="nav-link">Primary</a>
        <a href="/academics/pre-primary" className="nav-link">Pre Primary</a>
        <a href="/academics/middle" className="nav-link">Middle</a>
        <a href="/academics/senior-school" className="nav-link">Senior School</a>
        <a href="/academics/our-partners" className="nav-link">Our Partners</a>
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
        <h2>Learning Culture</h2>
        <p className="section-description">Developing intellectually curious, independent-minded individuals</p>

        <p className="section-text">
          Grounded in a tradition of teaching excellence, Athena AI School puts the learners first at all times. At Athena AI School, we intend to build a culture of openness and genuine caring that enables children to discover and celebrate the joy of learning.
        </p>

        <h3>Some of the components of the Program are:</h3>

        <ul className="program-list">
          <li>Connect learning with real-world applications</li>
          <li>Interdisciplinary approach</li>
          <li>Data-driven performance assessment</li>
          <li>Formative and Summative Assessment</li>
          <li>Learning driven by essential questions or problems</li>
          <li>A strong focus on creativity, critical thinking, collaboration, communication, and character</li>
          <li>Personalised learning</li>
          <li>Respecting learners' curiosity, leadership, and ownership</li>
          <li>Facilitators as mentors</li>
          <li>Connection and involvement with families</li>
          <li>Local and global outreach and partnership</li>
          <li>Developing learners with an entrepreneurial mindset</li>
          <li>Academic excellence and global perspectives</li>
          <li>Providing the right foundation for a lifetime of opportunity and success</li>
        </ul>

        <p className="section-text">
          At Athena AI School, the emphasis is on trusting learners and valuing their lived experiences. We encourage honesty in learning and offer personalised learning pathways that allow learners the freedom to progress at their own pace. The facilitator–learner relationship is built on transparency, mutual respect, and trust.
        </p>
      </div>

      <div className="social-highlights">
        <div className="highlight-card blue">
          <h3>#Being Athena AI</h3>
          <p>Times are changing...</p>
        </div>

        <div className="highlight-card green">
          <h3>#Being Athena AI</h3>
          <p>Why did you choose an online school? (Mrs Seemple Sunela)</p>
        </div>

        <div className="highlight-card purple">
          <h3>#Being Athena AI</h3>
          <p>Starting the weekend with love we get from our learners</p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default LearningCulture;
