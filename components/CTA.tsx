'use client';

import { useRef, useEffect, useState } from 'react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: 'var(--surface)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dramatic amber radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse-glow 5s ease-in-out infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="section-tag" style={{
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.1s',
        }}>
          START TODAY
        </div>

        <h2
          className="display-lg"
          style={{
            color: 'var(--on-surface)',
            maxWidth: '800px',
            margin: '0 auto 1.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          READY TO BUILD SOMETHING{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>EXTRAORDINARY?</span>
        </h2>

        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'var(--on-surface-variant)',
          maxWidth: '480px',
          margin: '0 auto 3rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.35s',
        }}>
          Initiate the blueprint for your legacy. Our engineers are ready to deploy.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.45s',
        }}>
          <a href="mailto:contact@24xconstruction.com" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1rem 2.5rem' }}>
            GET IN TOUCH
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="tel:+1234567890" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '1rem 2.5rem' }}>
            CALL US DIRECTLY
          </a>
        </div>

        {/* Contact info chips */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          marginTop: '4rem',
          flexWrap: 'wrap',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.6s',
        }}>
          {[
            { label: 'NEW YORK', value: '+1 (212) 555-0194' },
            { label: 'LONDON', value: '+44 (20) 7946-0294' },
            { label: 'SINGAPORE', value: '+65 6592-0394' },
          ].map(contact => (
            <div key={contact.label} style={{ textAlign: 'center' }}>
              <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '0.4rem' }}>{contact.label}</div>
              <div style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.85rem',
                color: 'var(--on-surface-variant)',
              }}>{contact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
