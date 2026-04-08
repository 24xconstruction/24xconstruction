'use client';

import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    title: 'ON-TIME DELIVERY',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    body: 'We treat project deadlines as unbreakable laws of physics. Precision scheduling ensures zero downtime.',
  },
  {
    title: 'TRANSPARENT PRICING',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    body: 'Financial clarity without compromise. Detailed technical breakdowns for every cent invested.',
  },
  {
    title: 'PREMIUM MATERIALS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    body: 'Sourcing from the global elite of material providers. Built to survive centuries, not decades.',
  },
];

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: featuresRef, visibleItems } = useStaggeredAnimation(features.length, { threshold: 0.2 });

  return (
    <section id="approach" ref={sectionRef} style={{
      background: 'var(--surface)',
      padding: '7rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <img
          src="https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775625223/Gemini_Generated_Image_dv3tjndv3tjndv3t_2_aj2hmd.png"
          alt="Construction Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(19,19,19,0.6) 0%, rgba(19,19,19,0.4) 100%)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left Column */}
          <div>
            <div
              className="section-tag"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.1s'
              }}
            >
              OUR FOUNDATION
            </div>
            <h2
              className="display-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: '2rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease 0.3s',
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
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease 0.5s',
            }}>
              At 24X Construction, we believe that the strength of a structure lies in the integrity of its builders. Every weld, every beam, and every design choice is a testament to our commitment to architectural dominance.
            </p>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: 'var(--outline)',
              marginBottom: '2.5rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease 0.6s',
            }}>
              Engineered to sub-millimeter tolerances. Unyielding standards of material quality.
            </p>

            <a
              href="#portfolio"
              className="btn-ghost"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.7s',
              }}
            >
              VIEW PORTFOLIO
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Column — Feature blocks */}
          <div ref={featuresRef} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                style={{
                  padding: '2rem 0',
                  borderBottom: i < features.length - 1 ? '1px solid rgba(83,68,52,0.2)' : 'none',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? 'translateX(0)' : 'translateX(40px)',
                  transition: 'all 0.8s ease',
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
                  transform: visibleItems[i] ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s ease 0.2s',
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
