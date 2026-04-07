'use client';

import { useRef, useEffect, useState } from 'react';

const projects = [
  {
    id: '01',
    name: 'MERIDIAN TOWER',
    category: 'COMMERCIAL',
    status: 'COMPLETED',
    location: 'New York, USA',
    desc: 'A 48-storey mixed-use tower redefining the Manhattan skyline with structural cantilevers and a climate-adaptive glass facade.',
    bg: 'var(--surface-container-high)',
  },
  {
    id: '02',
    name: 'FORGE PLANT 04',
    category: 'INDUSTRIAL',
    status: 'IN PROGRESS',
    location: 'London, UK',
    desc: 'A state-of-the-art manufacturing complex featuring seismic isolation systems and a 120m clear-span roof structure.',
    bg: 'var(--surface-container)',
  },
  {
    id: '03',
    name: 'OBSIDIAN RESIDENCES',
    category: 'RESIDENTIAL',
    status: 'COMPLETED',
    location: 'Singapore',
    desc: 'Twenty-four ultra-premium villas with bespoke structural frames and full smart-building integration.',
    bg: 'var(--surface-container-high)',
  },
  {
    id: '04',
    name: 'AXIOM HQ',
    category: 'ARCHITECTURE',
    status: 'COMPLETED',
    location: 'Singapore',
    desc: 'A flagship corporate headquarters delivering next-generation workspace environment with full structural transparency.',
    bg: 'var(--surface-container)',
  },
];

const testimonials = [
  { quote: '"24X Construction transformed our vision of a flagship corporate headquarters into a structural reality that exceeded every technical specification we provided."', author: 'CEO, Axiom Group' },
  { quote: '"Absolute precision. The team handled our high-stakes renovation with a level of professionalism rarely seen in the modern construction industry."', author: 'Director, Heritage Trust London' },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} style={{ background: 'var(--surface-container-low)', padding: '7rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="section-tag">OUR WORK</div>
            <h2 className="display-lg" style={{ color: 'var(--on-surface)' }}>
              PORTFOLIO<br />
              <span style={{
                background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>OF POWER</span>
            </h2>
          </div>
          <a href="#" className="btn-ghost">
            EXPLORE FULL ARCHIVE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Projects list */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '5rem' }}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: '2rem',
                alignItems: 'center',
                padding: '2rem 0',
                borderBottom: '1px solid rgba(83,68,52,0.2)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
                cursor: 'pointer',
                background: hovered === i ? 'rgba(245,158,11,0.03)' : 'transparent',
              }}
            >
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                color: hovered === i ? 'var(--primary)' : 'rgba(83,68,52,0.6)',
                letterSpacing: '0.05em',
                transition: 'color 0.3s',
              }}>{p.id}</span>

              <div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: hovered === i ? 'var(--on-surface)' : 'var(--secondary)',
                    transition: 'color 0.3s',
                  }}>{p.name}</h3>
                  <span className="chip" style={{ background: p.status === 'IN PROGRESS' ? 'rgba(245,158,11,0.12)' : 'var(--surface-bright)', color: p.status === 'IN PROGRESS' ? 'var(--primary)' : 'var(--on-surface-variant)' }}>
                    {p.status}
                  </span>
                </div>
                {hovered === i && (
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    color: 'var(--on-surface-variant)',
                    maxWidth: '540px',
                    marginBottom: '0.25rem',
                  }}>{p.desc}</p>
                )}
                <div className="label-sm" style={{ color: 'var(--outline)' }}>{p.category} · {p.location}</div>
              </div>

              <div style={{
                color: hovered === i ? 'var(--primary)' : 'rgba(83,68,52,0.4)',
                transition: 'all 0.3s',
                transform: hovered === i ? 'translateX(4px)' : 'translateX(0)',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          background: 'var(--surface-container-lowest)',
          padding: '3.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '160px',
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '3rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '6rem',
            fontWeight: 700,
            color: 'rgba(245,158,11,0.08)',
            lineHeight: 1,
            userSelect: 'none',
          }}>&ldquo;</div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'var(--on-surface)',
              letterSpacing: '-0.01em',
              fontWeight: 500,
              marginBottom: '1.5rem',
              transition: 'opacity 0.4s',
            }}>
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="label-sm" style={{ color: 'var(--primary)' }}>— {testimonials[activeTestimonial].author}</div>
          </div>

          <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', display: 'flex', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? '24px' : '6px',
                  height: '6px',
                  background: i === activeTestimonial ? 'var(--primary)' : 'rgba(83,68,52,0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
