import React from 'react';
import heroImage from '../assets/gemini.webp';
import OptimizedImage from './OptimizedImage';
import { Link } from 'react-router-dom';

const HeroOptimized = () => {
  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(160deg,#EAF3FF 0%,#F4F0FF 45%,#FFF1E8 100%)',
        padding: '44px 0 120px',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginTop: 0,
        paddingTop: 'calc(44px + 36px + 78px)', /* announce + nav */
      }}
    >
      {/* Blob decorations */}
      <span className="ek-blob" style={{ width: 420, height: 420, background: '#FFE3A3', opacity: .55, right: -120, top: -140 }} />
      <span className="ek-blob" style={{ width: 260, height: 260, background: '#BFE9E2', opacity: .6, left: -90, bottom: -60 }} />

      {/* Dot grid */}
      <div style={{
        position: 'absolute', left: '46%', top: 60, width: 150, height: 110, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(#1660D9 2px, transparent 2.5px)',
        backgroundSize: '18px 18px', opacity: .18,
      }} />

      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.05fr .95fr',
          gap: 56, alignItems: 'center',
        }} className="hero-grid-ek">

          {/* ── Left column: text ── */}
          <div>
            <span className="ek-eyebrow">★ Admissions open for 2027-28</span>

            <h1 style={{ marginBottom: 0 }}>
              k12<span style={{ color: 'var(--blue-600)' }}>online</span>school
            </h1>

            <p style={{ fontSize: 19, maxWidth: 620, margin: '22px 0 0', color: 'var(--muted)' }}>
              PERSONALIZED ONLINE SCHOOLING DESIGNED FOR THE MODERN LEARNER
            </p>

            <p style={{ fontSize: 16, maxWidth: 560, margin: '14px 0 0', color: 'var(--muted)', lineHeight: 1.65 }}>
              Experience education tailored to your child's unique needs, interests, and learning
              style. Our AI-powered platform adapts to create a perfect learning journey.
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginTop: 34 }}>
              <Link to="/contact" className="ek-btn ek-btn-primary">
                Book a free trial <span style={{ transition: '.15s', display: 'inline-block' }}>→</span>
              </Link>
              <Link to="/apply-now" className="ek-btn ek-btn-secondary">
                Apply for 2027-28
              </Link>
            </div>

            {/* Country pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
              {['India', 'UAE', 'Qatar', 'Oman', 'Kuwait', 'Bahrain', 'UK', 'Australia', 'US', 'Canada'].map(c => (
                <span key={c} style={{
                  background: '#fff', borderRadius: 999, padding: '8px 14px',
                  fontWeight: 700, fontSize: 14.5, boxShadow: 'var(--sh-1)', color: 'var(--ink)',
                }}>{c}</span>
              ))}
            </div>
          </div>

          {/* ── Right column: ring art ── */}
          <div className="ek-hero-art" style={{ maxWidth: 540, justifySelf: 'center', width: '100%' }}>
            <div className="ek-ring" />
            <div className="ek-photo">
              <OptimizedImage
                src={heroImage}
                alt="k12onlineschool – child learning online"
                width={500}
                height={500}
                priority={true}
                loading="eager"
                fetchpriority="high"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '62% 40%' }}
              />
            </div>

            {/* Floating badge 1 – live dot */}
            <div className="ek-float" style={{ left: '-6%', top: '12%' }}>
              <span className="ek-ic" style={{ background: '#FFE4E9' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E11D48', boxShadow: '0 0 0 5px rgba(225,29,72,.18)', display: 'block' }} />
              </span>
              <span>
                Live online classes
                <small>With qualified teachers</small>
              </span>
            </div>

            {/* Floating badge 2 – star */}
            <div className="ek-float" style={{ right: '-4%', bottom: '14%' }}>
              <span className="ek-ic" style={{ background: 'var(--sun-50)' }}>★</span>
              <span>
                Nursery – Grade 12
                <small>Edexcel or NIOS</small>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <svg
        style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 80, zIndex: 1, width: '100%' }}
        viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"
      >
        <path d="M0 50 C 240 90, 480 10, 720 40 S 1200 80, 1440 30 V80 H0Z" fill="#fff" />
      </svg>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid-ek { grid-template-columns: 1fr !important; }
          .ek-hero-art { max-width: 440px !important; }
        }
        @media (max-width: 600px) {
          .hero-grid-ek { gap: 22px !important; }
          .ek-hero-art { max-width: 250px !important; margin: 0 auto; order: -1; }
        }
      `}</style>
    </section>
  );
};

export default HeroOptimized;
