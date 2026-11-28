import React from 'react';
import heroImage from '../assets/gemini.webp';
import OptimizedImage from './OptimizedImage';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, GraduationCap } from 'lucide-react';

const HeroOptimized = () => {
  return (
    <section
      className="hero-optimized"
      style={{
        position: 'relative',
        background: '#F1F0FF',
        padding: '60px 0 100px',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 114px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(60px + 36px + 78px)',
      }}
    >
      {/* Background Decorations */}
      <span
        className="ek-blob"
        style={{
          width: 420,
          height: 420,
          background: '#FFE3C2',
          opacity: 0.65,
          right: -150,
          top: -130,
        }}
      />

      <span
        className="ek-blob"
        style={{
          width: 300,
          height: 300,
          background: '#C6EAE6',
          opacity: 0.6,
          left: -120,
          bottom: -80,
        }}
      />

      {/* Dot Decoration */}
      <div
        style={{
          position: 'absolute',
          left: '46%',
          top: 90,
          width: 150,
          height: 110,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(#5365D9 2px, transparent 2.5px)',
          backgroundSize: '18px 18px',
          opacity: 0.15,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          maxWidth: 'var(--container)',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="hero-grid-ek"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 55,
            alignItems: 'center',
          }}
        >
          {/* Left Content */}
          <div className="hero-content-ek">

            {/* Admissions Badge */}
            <span
              className="ek-eyebrow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#FFFFFF',
                borderRadius: 50,
                padding: '10px 18px',
                color: '#4F46A5',
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 22,
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              }}
            >
              <span style={{ color: '#F59E0B' }}>★</span>
              Admissions Open for 2027–28
            </span>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: 'clamp(38px, 5vw, 64px)',
                lineHeight: 1.12,
                fontWeight: 800,
                letterSpacing: '-1.8px',
                color: '#172554',
                margin: 0,
                maxWidth: 700,
              }}
            >
              Online School for Nursery to Grade 12,
              <span style={{ color: '#5B5BD6' }}>
                {' '}Wherever You Live
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 18,
                maxWidth: 600,
                margin: '22px 0 0',
                color: '#50546B',
                lineHeight: 1.75,
              }}
            >
              Edulectual K12 Online School is a fully online school for children
              from Nursery to Grade 12. Your child learns from home with
              qualified teachers in live online classes, follows one clear
              curriculum and works towards recognised qualifications.
            </p>

            <p
              style={{
                fontSize: 16,
                maxWidth: 600,
                margin: '14px 0 0',
                color: '#656981',
                lineHeight: 1.75,
              }}
            >
              We offer flexible learning pathways designed to support students
              wherever they are in the world, with structured learning,
              personalised support and a school experience built around your
              child's future.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
                alignItems: 'center',
                marginTop: 32,
              }}
            >
              <Link
                to="/contact"
                className="ek-btn ek-btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                Book a Free Trial
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/apply-now"
                className="ek-btn ek-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                Apply for 2027–28
              </Link>
            </div>

            {/* Supporting Information */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                marginTop: 28,
              }}
            >
              {[
                'India',
                'UAE',
                'Qatar',
                'UK',
                'USA',
                'Canada',
                'Australia',
                'Grades 1–5',
                'Grades 6–8',
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 999,
                    padding: '8px 14px',
                    fontWeight: 600,
                    fontSize: 13,
                    boxShadow: '0 3px 10px rgba(31,41,55,0.06)',
                    color: '#30365B',
                    border: '1px solid rgba(91,91,214,0.08)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="ek-hero-art"
            style={{
              position: 'relative',
              maxWidth: 540,
              justifySelf: 'center',
              width: '100%',
              aspectRatio: '1/1',
            }}
          >
            {/* Gradient Ring */}
            <div
              className="ek-ring"
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg,#7C83F5,#6DD5C1,#FFD28F)',
                zIndex: 0,
              }}
            />

            {/* Image */}
            <div
              className="ek-photo"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '8px solid #F1F0FF',
                zIndex: 1,
              }}
            >
              <OptimizedImage
                src={heroImage}
                alt="Student learning online at Edulectual K12"
                width={500}
                height={500}
                priority={true}
                loading="eager"
                fetchpriority="high"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '62% 40%',
                }}
              />
            </div>

            {/* Floating Badge - Live Classes */}
            <div
              className="ek-float"
              style={{
                position: 'absolute',
                left: '-5%',
                top: '12%',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                className="ek-ic"
                style={{
                  background: '#FFE4E9',
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#E11D48',
                    boxShadow: '0 0 0 5px rgba(225,29,72,.18)',
                  }}
                />
              </span>

              <span>
                <strong style={{ color: '#172554', fontSize: 14 }}>
                  Live Online Classes
                </strong>
                <small
                  style={{
                    display: 'block',
                    color: '#777A91',
                    fontSize: 12,
                    marginTop: 4,
                  }}
                >
                  With qualified teachers
                </small>
              </span>
            </div>

            {/* Floating Badge - Grades */}
            <div
              className="ek-float"
              style={{
                position: 'absolute',
                right: '-4%',
                bottom: '14%',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                className="ek-ic"
                style={{
                  background: '#FFF3D6',
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E3A008',
                  fontSize: 22,
                }}
              >
                <GraduationCap size={24} />
              </span>

              <span>
                <strong style={{ color: '#172554', fontSize: 14 }}>
                  Nursery – Grade 12
                </strong>
                <small
                  style={{
                    display: 'block',
                    color: '#777A91',
                    fontSize: 12,
                    marginTop: 4,
                  }}
                >
                  Edexcel or NIOS
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -1,
          height: 80,
          zIndex: 1,
          width: '100%',
        }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 50 C240 90,480 10,720 40 S1200 80,1440 30 V80 H0Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid-ek {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }

          .hero-content-ek {
            text-align: center;
          }

          .hero-content-ek h1,
          .hero-content-ek p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .hero-content-ek > div {
            justify-content: center;
          }

          .ek-hero-art {
            max-width: 440px !important;
          }
        }

        @media (max-width: 600px) {
          .hero-optimized {
            padding-top: 150px !important;
            padding-bottom: 90px !important;
            min-height: auto !important;
          }

          .hero-grid-ek {
            gap: 30px !important;
          }

          .ek-hero-art {
            max-width: 280px !important;
            margin: 0 auto;
          }

          .hero-content-ek h1 {
            font-size: 36px !important;
            line-height: 1.2 !important;
            letter-spacing: -1px !important;
          }

          .hero-content-ek p {
            font-size: 15px !important;
          }

          .ek-float {
            padding: 8px !important;
            background: white;
            border-radius: 16px;
            box-shadow: 0 8px 25px rgba(31,41,55,0.1);
          }

          .ek-float small {
            font-size: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroOptimized;