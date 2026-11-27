import React from 'react';
import '../../Academics.css';

const NCFIndia = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              NCF and the Indian Pathway
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Learning shaped by India's National Curriculum Framework
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
            <a href="/">Home</a> &gt; NCF and the Indian Pathway
          </div>

          {/* Academics Navigation */}
          <div className="academics-nav">
            <a href="/academics/learning-culture" className="nav-link">
              Learning Culture
            </a>
            <a href="/academics/primary" className="nav-link">
              Primary
            </a>
            <a href="/academics/pre-primary" className="nav-link">
              Pre Primary
            </a>
            <a href="/academics/middle" className="nav-link">
              Middle
            </a>
            <a href="/academics/senior-school" className="nav-link">
              Senior School
            </a>
            <a href="/academics/ncf-india" className="nav-link active">
              NCF India
            </a>
            <a href="/academics/music-arts-partner" className="nav-link">
              Music & Arts Partner
            </a>
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>Learning Shaped by India's National Curriculum Framework (NCF)</h2>

            <p>
              India's National Curriculum Framework (NCF), developed under the
              National Education Policy 2020, describes what good school
              education should look like at every stage. It calls for learning
              that builds real competencies rather than rote memory, respects
              children's home languages, uses play in the early years and links
              subjects to everyday life.
            </p>

            <p>
              Our Indian curriculum pathway draws on these ideas in an online
              setting, creating meaningful learning experiences that encourage
              curiosity, understanding, participation and practical application.
            </p>

            <div className="cta-buttons mt-6">
              <button className="btn-primary">Book a free 2-week trial</button>
              <button className="btn-secondary">Apply for 2027-28</button>
            </div>
          </div>

          {/* 5+3+3+4 Structure */}
          <div className="academics-section">
            <h2>The 5+3+3+4 Stages and How We Follow Them</h2>

            <div className="notes-section">
              <div className="note-item">
                <h4>Foundational Stage (Ages 3–8, Nursery to Grade 2)</h4>
                <p>
                  Play, stories, activities and early literacy and numeracy
                  development help children build a strong foundation for
                  learning.
                </p>
              </div>

              <div className="note-item">
                <h4>Preparatory Stage (Grades 3–5)</h4>
                <p>
                  Discovery, discussion and more structured reading, writing
                  and mathematics support children's growing understanding
                  and confidence.
                </p>
              </div>

              <div className="note-item">
                <h4>Middle Stage (Grades 6–8)</h4>
                <p>
                  Subject concepts, experiments, projects and exploratory
                  learning help students develop critical thinking and
                  independent learning skills.
                </p>
              </div>

              <div className="note-item">
                <h4>Secondary Stage (Grades 9–12)</h4>
                <p>
                  Students develop subject depth, explore choices and prepare
                  for board examinations through the NIOS pathway.
                </p>
              </div>
            </div>
          </div>

          {/* NCF Ideas in Online Classroom */}
          <div className="academics-section">
            <h2>What NCF Ideas Look Like in Our Online Classroom</h2>

            <div className="notes-section">
              <div className="note-item">
                <h4>Competencies, Not Cramming</h4>
                <p>
                  Teachers plan lessons around what children should be able
                  to do, such as explaining, measuring, comparing or arguing.
                  Skills are checked through activities and short tasks as
                  well as tests.
                </p>
              </div>

              <div className="note-item">
                <h4>Languages</h4>
                <p>
                  Children learn in English and are encouraged to use and
                  value their home language, helping them connect learning
                  with their cultural and linguistic experiences.
                </p>
              </div>

              <div className="note-item">
                <h4>Learning Beyond the Screen</h4>
                <p>
                  Projects encourage children to observe their surroundings,
                  talk to family members and create things at home, connecting
                  school learning to real life.
                </p>
              </div>

              <div className="note-item">
                <h4>Assessment for Learning</h4>
                <p>
                  Frequent and specific feedback helps children and parents
                  understand progress, identify strengths and know what to
                  work on next.
                </p>
              </div>
            </div>
          </div>

          {/* Parents */}
          <div className="academics-section">
            <h2>What This Means for Parents</h2>
            <p>
              You can expect fewer long lists to memorise and more activities,
              discussions and projects. Your child will still practise basic
              skills regularly, and assessments will help you understand what
              your child can do as well as their marks.
            </p>
            <p>
              Our approach encourages children to think independently, ask
              questions, explore ideas and apply what they learn in meaningful
              everyday situations.
            </p>
          </div>

          {/* Trial */}
          <div className="academics-section">
            <h2>Try a Lesson</h2>
            <p>
              Book a free 2-week trial class on our Indian pathway to see
              these ideas in action in a real lesson. Experience how our
              teachers encourage participation, curiosity and meaningful
              learning in an online classroom.
            </p>

            <div className="cta-buttons mt-6">
              <button className="btn-primary">Book a free 2-week trial</button>
            </div>
          </div>

          {/* Admissions CTA */}
          <div className="academics-cta">
            <h2>Admissions for 2027-28 Are Open</h2>
            <p>
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">
                Book a free 2-week trial
              </button>
              <button className="btn-secondary">
                Apply for 2027-28
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NCFIndia;