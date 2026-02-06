import React from 'react';
import '../../Academics.css';

const NCFIndia = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">NCF India</h1>
            <p className="text-lg md:text-xl font-light opacity-90">National Curriculum Framework</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; NCF India
          </div>

          <div className="academics-nav">
            <a href="/academics/learning-culture" className="nav-link">Learning Culture</a>
            <a href="/academics/primary" className="nav-link">Primary</a>
            <a href="/academics/pre-primary" className="nav-link">Pre Primary</a>
            <a href="/academics/middle" className="nav-link">Middle</a>
            <a href="/academics/senior-school" className="nav-link">Senior School</a>
            <a href="/academics/ncf-india" className="nav-link active">NCF India</a>
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
        <h2>NCF India</h2>
        <p className="section-description">Developing intellectually curious, independent-minded young adults</p>

        <p className="section-text">
          Athena AI School follows the National Curriculum Framework (NCF) of India. The NCF is designed by National Council of Educational Research and Training (NCERT) and approved by the Ministry of Education, Government of India.
        </p>

        <p className="section-text">
          National Curriculum Framework including research-based recommendations on curriculum, pedagogy, assessment and examination serve as broad guidelines for the entire school education in the country.
        </p>

        <p className="section-text">
          The NCF 2005 has recommended five guiding principles for curricular development:
        </p>

        <ul className="program-list">
          <li>Connecting knowledge to life outside school,</li>
          <li>Ensuring that learning shifts from rote methods</li>
          <li>Enriching curriculum so that it goes beyond textbooks,</li>
          <li>Making examinations more flexible and integrating them with classroom life.</li>
          <li>Nurturing an overriding identity informed by caring concerns within the democratic polity of the country.</li>
        </ul>

        <p className="section-text">
          Apart from these five guiding principles, NCF also emphasises learning without burden.
        </p>

        <p className="section-text">
          Under the new National Education Policy (NEP) announced in 2020, the Government of India has announced that a new National Curriculum Framework will be introduced soon. Athena AI School is committed to adopt and follow the new NCF when it comes into force.
        </p>
      </div>

      <div className="social-highlights">
        <div className="highlight-card blue">
          <h3>#Being Athena AI</h3>
          <p>Dhanush has something to say and we all should listen</p>
        </div>

        <div className="highlight-card green">
          <h3>#Being Athena AI</h3>
          <p>Diy Session With Grade - II</p>
        </div>

        <div className="highlight-card purple">
          <h3>#Being Athena AI</h3>
          <p>Early to bed, Early to rise</p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default NCFIndia;
