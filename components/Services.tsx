'use client';

import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    tag: 'RESIDENTIAL',
    headline: 'BESPOKE LUXURY ESTATES',
    body: 'Bespoke luxury estates designed with structural precision and aesthetic dominance. Every blueprint engineered to sub-millimeter tolerances.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    tag: 'COMMERCIAL',
    headline: 'CORPORATE ENVIRONMENTS',
    body: 'High-performance corporate environments that command industry respect. Built to reflect the ambition of the organizations within.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    tag: 'ARCHITECTURE',
    headline: 'VISIONARY ENGINEERING',
    body: 'Visionary engineering meets artistic form in every blueprint we create. Where precision blueprint meets cinematic aesthetic.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    tag: 'RENOVATION',
    headline: 'HISTORICAL FOUNDATIONS',
    body: 'Transforming historical foundations into modern monuments of excellence. Legacy structures reborn with contemporary structural integrity.',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(services.length, { threshold: 0.1 });

  return (
    <section id="services" ref={sectionRef} style={{ background: 'var(--surface-container-low)', padding: '7rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div 
            className="section-tag"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease 0.1s'
            }}
          >
            WHAT WE BUILD
          </div>
          <h2 
            className="display-lg" 
            style={{ 
              color: 'var(--on-surface)', 
              maxWidth: '600px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease 0.3s'
            }}
          >
            CORE<br />
            <span style={{
              background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>SPECIALIZATIONS</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div 
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            background: 'rgba(83,68,52,0.2)',
            border: '1px solid rgba(83,68,52,0.2)',
          }} 
          className="services-grid"
        >
          {services.map((s, i) => (
            <div
              key={s.tag}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '40px 40px 40px 32px',
                background: hovered === i ? 'var(--surface-container-highest)' : 'var(--surface-container-high)',
                transition: 'all 0.35s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                opacity: visibleItems[i] ? 1 : 0,
                cursor: 'default',
              }}
              className="service-card"
            >
              {/* Icon */}
              <div style={{
                width: '52px',
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: hovered === i ? 'rgba(245,158,11,0.12)' : 'rgba(83,68,52,0.25)',
                marginBottom: '1.75rem',
                transition: 'all 0.3s',
                color: hovered === i ? 'var(--primary)' : 'var(--on-surface-variant)',
                transform: visibleItems[i] ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                transitionDelay: '0.1s',
              }}>
                {s.icon}
              </div>

              {/* Tag */}
              <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>{s.tag}</div>

              {/* Headline */}
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--on-surface)',
                marginBottom: '1rem',
              }}>{s.headline}</h3>

              {/* Body */}
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'var(--on-surface-variant)',
                fontWeight: 400,
              }}>{s.body}</p>

              {/* Arrow */}
              <div style={{
                marginTop: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: hovered === i ? 'var(--primary)' : 'rgba(83,68,52,0.6)',
                transition: 'all 0.3s',
                transform: hovered === i ? 'translateX(4px)' : 'translateX(0)',
              }}>
                <span className="label-sm">LEARN MORE</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .service-card {
            padding: 2rem 1.5rem !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
