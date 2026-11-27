import { Link } from 'react-router-dom';
import { memo } from 'react';

const Footer = memo(() => {
  const linkStyle = {
    color: '#C3CCE8',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  const linkGroups = [
    {
      title: 'Programmes',
      links: [
        { text: 'Early Years', href: '/early-years' },
        { text: 'British Primary', href: '/british-primary' },
        { text: 'Indian Primary', href: '/primary' },
        { text: 'Middle School', href: '/middle' },
        { text: 'IGCSE', href: '/british-upper-secondary' },
        { text: 'A Levels', href: '/british-advanced-levels' },
        { text: 'NIOS Senior School', href: '/senior-school' },
      ],
    },
    {
      title: 'Admissions',
      links: [
        { text: 'Fees 2027-28', href: '/fees' },
        { text: 'How to Apply', href: '/apply-now' },
        { text: 'Class Timings', href: '/batch-timings' },
        { text: 'Refer a Family', href: '/refer-a-parent' },
        { text: 'FAQs', href: '/faq' },
      ],
    },
    {
      title: 'School',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Our Leaders', href: '/our-leaders' },
        { text: 'Our Values', href: '/values-and-ethos' },
        { text: 'How It Works', href: '/how-it-works' },
        { text: 'Special Education', href: '/special-education' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ];

  const socialStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    height: 38,
    borderRadius: '50%',
    background: 'rgba(255,255,255,.12)',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background .2s ease',
  };

  return (
    <>
      {/* Wave divider */}
      <div
        style={{
          position: 'relative',
          height: 40,
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <path
            d="M0 40 C 360 0, 1080 0, 1440 40 Z"
            fill="#101A4A"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <footer
        style={{
          background: '#101A4A',
          color: '#C3CCE8',
          padding: '56px 0 28px',
          fontSize: 15,
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container)',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >

          {/* Footer Grid */}
          <div
            className="footer-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.3fr',
              gap: 40,
            }}
          >

            {/* BRAND */}
            <div>
              <Link
                to="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 11,
                  textDecoration: 'none',
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    flexShrink: 0,
                    background:
                      'conic-gradient(from 200deg,#1660D9,#0D7F7A,#FFC83D,#FF8A5B,#1660D9)',
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      inset: 5,
                      borderRadius: 10,
                      background: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 18px/1 var(--font-h)',
                      color: 'var(--ink-900)',
                    }}
                  >
                    K
                  </span>
                </span>

                <span
                  style={{
                    font: '700 20px/1 var(--font-h)',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Edulectual <span style={{ color: '#67C5F5' }}>K12</span>
                </span>
              </Link>

              <p
                style={{
                  fontSize: 14.5,
                  color: '#C3CCE8',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Edulectual K12 Online School is a fully online school
                for Nursery to Grade 12, teaching the Pearson Edexcel
                British pathway and the Indian curriculum with NIOS exams
                to families in India, the Gulf, the UK, North America
                and Australia.
              </p>

              <p
                style={{
                  fontSize: 13,
                  color: '#8A9ABE',
                  lineHeight: 1.6,
                  marginTop: 12,
                }}
              >
                Edulectual K12 is a fully online school. Our offices
                handle administration only.
              </p>
            </div>

            {/* LINK GROUPS */}
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h4
                  style={{
                    color: '#fff',
                    fontSize: 17,
                    marginBottom: 14,
                    font: '600 17px var(--font-h)',
                  }}
                >
                  {group.title}
                </h4>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {group.links.map(({ text, href }) => (
                    <li key={href} style={{ marginBottom: 9 }}>
                      <Link
                        to={href}
                        style={linkStyle}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = '#fff')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = '#C3CCE8')
                        }
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CONTACT */}
            <div>
              <h4
                style={{
                  color: '#fff',
                  fontSize: 17,
                  marginBottom: 14,
                  font: '600 17px var(--font-h)',
                }}
              >
                Contact
              </h4>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: 14,
                  color: '#C3CCE8',
                }}
              >
                <li style={{ marginBottom: 8 }}>
                  Phone (India):{' '}
                  <a
                    href="tel:+919811773207"
                    style={{
                      color: 'var(--sun-400)',
                      fontWeight: 700,
                    }}
                  >
                    +91 98117 73207
                  </a>
                </li>

                <li style={{ marginBottom: 8 }}>
                  Phone (USA):{' '}
                  <a
                    href="tel:+14254009246"
                    style={{
                      color: 'var(--sun-400)',
                      fontWeight: 700,
                    }}
                  >
                    +1 (425) 400-9246
                  </a>
                </li>

                <li style={{ marginBottom: 8 }}>
                  Email:{' '}
                  <a
                    href="mailto:farah@lmsathena.com"
                    style={{
                      color: 'var(--sun-400)',
                      fontWeight: 700,
                      wordBreak: 'break-all',
                    }}
                  >
                    farah@lmsathena.com
                  </a>
                </li>

                <li style={{ marginBottom: 8 }}>
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/919811773207"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--sun-400)',
                      fontWeight: 700,
                    }}
                  >
                    +91 98117 73207
                  </a>
                </li>

                <li
                  style={{
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  India office: GF-20, Omaxe Square, Jasola District
                  Centre, New Delhi – 110025
                </li>

                <li style={{ lineHeight: 1.6 }}>
                  USA office: 600 1st Ave, Seattle, WA 98104
                </li>
              </ul>

              {/* SOCIAL MEDIA */}
              <h4
                style={{
                  color: '#fff',
                  fontSize: 15,
                  marginTop: 20,
                  marginBottom: 10,
                  font: '600 15px var(--font-h)',
                }}
              >
                Follow us
              </h4>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@edulectualk12"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = '#FF0000')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      'rgba(255,255,255,.12)')
                  }
                  aria-label="YouTube"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12z"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/edulectual-k12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = '#0A66C2')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      'rgba(255,255,255,.12)')
                  }
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.85h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4z"
                    />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            style={{
              borderTop: '1px solid #26336B',
              marginTop: 44,
              paddingTop: 22,
              fontSize: 13.5,
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <span>
              © {new Date().getFullYear()} Edulectual K12 Online School.
              All rights reserved. ·{' '}
              <Link to="/privacy-policy" style={{ color: '#C3CCE8' }}>
                Privacy
              </Link>{' '}
              ·{' '}
              <Link to="/terms" style={{ color: '#C3CCE8' }}>
                Terms
              </Link>{' '}
              ·{' '}
              <Link to="/refund-policy" style={{ color: '#C3CCE8' }}>
                Refunds
              </Link>{' '}
              ·{' '}
              <Link to="/safeguarding" style={{ color: '#C3CCE8' }}>
                Safeguarding
              </Link>
            </span>

            <span
              style={{
                color: '#8A9ABE',
                lineHeight: 1.6,
              }}
            >
              Pearson Edexcel and NIOS qualifications are awarded by
              those organisations. [PLACEHOLDER: registered legal
              entity name]
            </span>
          </div>

        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div
        className="lg:hidden"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 30,
          background: '#fff',
          borderTop: '1px solid var(--line)',
          padding: '10px 14px calc(12px + env(safe-area-inset-bottom))',
          boxShadow: '0 -8px 24px rgba(20,33,91,.10)',
          display: 'flex',
          gap: 10,
        }}
      >
        <Link
          to="/apply-now"
          className="ek-btn ek-btn-secondary"
          style={{
            flex: 1,
            height: 50,
            fontSize: 15,
          }}
        >
          Apply 2027-28
        </Link>

        <Link
          to="/book-trial"
          className="ek-btn ek-btn-primary"
          style={{
            flex: 1,
            height: 50,
            fontSize: 15,
          }}
        >
          Free 2-week trial
        </Link>
      </div>

      {/* RESPONSIVE FOOTER */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }

          footer {
            padding-bottom: 100px !important;
          }
        }
      `}</style>
    </>
  );
});

export default Footer;