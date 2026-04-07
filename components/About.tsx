'use client';

import { useRef, useEffect, useState } from 'react';

const features = [
  {
    title: 'ON-TIME DELIVERY',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    body: 'We treat project deadlines as unbreakable laws of physics. Precision scheduling ensures zero downtime.',
  },
  {
    title: 'TRANSPARENT PRICING',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    body: 'Financial clarity without compromise. Detailed technical breakdowns for every cent invested.',
  },
  {
    title: 'PREMIUM MATERIALS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    body: 'Sourcing from the global elite of material providers. Built to survive centuries, not decades.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="approach" ref={sectionRef} style={{ background: 'var(--surface)', padding: '7rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left Column */}
          <div>
            <div className="section-tag" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.1s' }}>OUR FOUNDATION</div>
            <h2
              className="display-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: '2rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.2s',
              }}
            >
              BUILT ON TRUST.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>DRIVEN BY EXCELLENCE.</span>
            </h2>

            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--on-surface-variant)',
              marginBottom: '1rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.3s',
            }}>
              At 24X Construction, we believe that the strength of a structure lies in the integrity of its builders. Every weld, every beam, and every design choice is a testament to our commitment to architectural dominance.
            </p>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: 'var(--outline)',
              marginBottom: '2.5rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}>
              Engineered to sub-millimeter tolerances. Unyielding standards of material quality.
            </p>

            <a
              href="#portfolio"
              className="btn-ghost"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.8s ease 0.5s',
              }}
            >
              VIEW PORTFOLIO
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right Column — Feature blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                style={{
                  padding: '2rem 0',
                  borderBottom: i < features.length - 1 ? '1px solid rgba(83,68,52,0.2)' : 'none',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.7s ease ${0.3 + i * 0.15}s`,
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(245,158,11,0.1)',
                  color: 'var(--primary)',
                  marginTop: '0.1rem',
                }}>
                  {f.icon}
                </div>
                <div>
                  <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{f.title}</div>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--on-surface-variant)',
                  }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
