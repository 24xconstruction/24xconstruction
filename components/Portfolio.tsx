'use client';

import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    id: '01',
    name: 'MERIDIAN TOWER',
    category: 'COMMERCIAL COMPLEX',
    status: 'COMPLETED',
    location: 'Manhattan, New York',
    year: '2023',
    value: '$485M',
    desc: 'A 48-storey mixed-use tower redefining the Manhattan skyline with structural cantilevers and climate-adaptive glass facade.',
    image: 'https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775627931/skyscraper_low_angle_1775624367669_hkppe8.jpg',
    size: 'large'
  },
  {
    id: '02',
    name: 'FORGE INDUSTRIAL',
    category: 'MANUFACTURING FACILITY',
    status: 'IN PROGRESS',
    location: 'London, UK',
    year: '2024',
    value: '£125M',
    desc: 'State-of-the-art manufacturing complex featuring seismic isolation systems and 120m clear-span roof structure.',
    image: 'https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775626794/Gemini_Generated_Image_rfx1uurfx1uurfx1_q4uko9.png',
    size: 'medium'
  },
  {
    id: '03',
    name: 'OBSIDIAN RESIDENCES',
    category: 'LUXURY RESIDENTIAL',
    status: 'COMPLETED',
    location: 'Marina Bay, Singapore',
    year: '2023',
    value: 'S$180M',
    desc: 'Twenty-four ultra-premium villas with bespoke structural frames and full smart-building integration.',
    image: 'https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775626814/Gemini_Generated_Image_cz13hcz13hcz13hc_wqlnmc.png',
    size: 'medium'
  },
  {
    id: '04',
    name: 'AXIOM HEADQUARTERS',
    category: 'CORPORATE CAMPUS',
    status: 'COMPLETED',
    location: 'Singapore CBD',
    year: '2022',
    value: 'S$95M',
    desc: 'Flagship corporate headquarters with biophilic design and full structural transparency.',
    image: 'https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775626834/Gemini_Generated_Image_bbv0epbbv0epbbv0_d9lg4m.png',
    size: 'medium'
  },
  {
    id: '05',
    name: 'TITAN COMPLEX',
    category: 'MIXED-USE DEVELOPMENT',
    status: 'COMPLETED',
    location: 'Dubai, UAE',
    year: '2023',
    value: '$320M',
    desc: 'Revolutionary mixed-use development with integrated smart city infrastructure.',
    image: 'https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775627273/Gemini_Generated_Image_i650gki650gki650_ocdcxv.png',
    size: 'medium'
  },
  {
    id: '06',
    name: 'STEEL WORKS FACILITY',
    category: 'INDUSTRIAL COMPLEX',
    status: 'IN PROGRESS',
    location: 'Pittsburgh, USA',
    year: '2024',
    value: '$280M',
    desc: 'Next-generation steel manufacturing facility with automated production systems.',
    image: 'https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775628001/Gemini_Generated_Image_7ld6aj7ld6aj7ld6_zrkggq.png',
    size: 'small'
  },
  {
    id: '07',
    name: 'QUANTUM RESEARCH CENTER',
    category: 'RESEARCH FACILITY',
    status: 'COMPLETED',
    location: 'Tokyo, Japan',
    year: '2023',
    value: '¥45B',
    desc: 'Advanced research facility with specialized clean rooms and quantum computing infrastructure.',
    image: 'https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775628354/Gemini_Generated_Image_fibbdfibbdfibbdf_gankhd.png',
    size: 'small'
  }
];

const testimonials = [
  { 
    quote: 'Absolute precision. The team handled our high-stakes renovation with a level of professionalism rarely seen in the modern construction industry.',
    author: 'DIRECTOR, HERITAGE TRUST LONDON',
    company: 'Heritage Trust London',
    project: 'Victorian Estate Restoration',
    value: '£12.5M',
    image: '/api/placeholder/60/60'
  },
  { 
    quote: '24X Construction transformed our vision of a flagship corporate headquarters into a structural reality that exceeded every technical specification we provided.',
    author: 'CEO, AXIOM GROUP',
    company: 'Axiom Group',
    project: 'Corporate Headquarters',
    value: '$28M',
    image: '/api/placeholder/60/60'
  },
  {
    quote: 'Their engineering expertise and attention to detail delivered a manufacturing facility that operates at 99.7% efficiency. Exceptional structural integrity.',
    author: 'OPERATIONS DIRECTOR, TITAN INDUSTRIES',
    company: 'Titan Industries',
    project: 'Manufacturing Complex',
    value: '$45M',
    image: '/api/placeholder/60/60'
  }
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
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} style={{ background: 'var(--surface-container-low)', padding: '7rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          marginBottom: '4rem', 
          flexWrap: 'wrap', 
          gap: '2rem' 
        }} className="portfolio-header">
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
          <a href="#" className="btn-ghost" style={{ whiteSpace: 'nowrap' }}>
            EXPLORE FULL ARCHIVE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Projects list */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '5rem' }} className="projects-list">
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
              className="project-item"
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

        {/* Client Testimonials */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="section-tag">CLIENT TESTIMONIALS</div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--on-surface)',
            marginBottom: '3rem',
          }}>
            TRUSTED BY{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>INDUSTRY LEADERS</span>
          </h3>
        </div>

        {/* Enhanced Testimonials */}
        <div style={{
          background: 'linear-gradient(135deg, var(--surface-container-lowest) 0%, var(--surface-container-low) 100%)',
          border: '1px solid rgba(83,68,52,0.15)',
          borderRadius: '8px',
          padding: '0',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '280px',
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Quote Icon */}
          <div style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            width: '48px',
            height: '48px',
            background: 'rgba(245,158,11,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          <div style={{ 
            padding: '4rem 3rem 3rem 3rem',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '3rem',
            alignItems: 'center',
          }} className="testimonial-content">
            
            {/* Left: Quote Content */}
            <div>
              <blockquote style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                lineHeight: 1.5,
                color: 'var(--on-surface)',
                letterSpacing: '-0.01em',
                fontWeight: 500,
                marginBottom: '2rem',
                fontStyle: 'italic',
                position: 'relative',
              }}>
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--surface-container-high)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(245,158,11,0.2)',
                }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                  }}>
                    {testimonials[activeTestimonial].company.charAt(0)}
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                    marginBottom: '0.25rem',
                  }}>
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.8rem',
                    color: 'var(--on-surface-variant)',
                    letterSpacing: '0.02em',
                  }}>
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Stats */}
            <div style={{
              background: 'var(--surface-container)',
              padding: '2rem 1.5rem',
              borderRadius: '4px',
              border: '1px solid rgba(83,68,52,0.2)',
              minWidth: '200px',
            }}>
              <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                PROJECT DETAILS
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--on-surface)',
                  marginBottom: '0.25rem',
                }}>
                  {testimonials[activeTestimonial].project}
                </div>
                <div style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '0.75rem',
                  color: 'var(--on-surface-variant)',
                  letterSpacing: '0.05em',
                }}>
                  PROJECT TYPE
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.25rem',
                }}>
                  {testimonials[activeTestimonial].value}
                </div>
                <div style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '0.75rem',
                  color: 'var(--on-surface-variant)',
                  letterSpacing: '0.05em',
                }}>
                  PROJECT VALUE
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ 
            position: 'absolute', 
            bottom: '1.5rem', 
            left: '3rem',
            display: 'flex', 
            gap: '1rem',
            alignItems: 'center',
          }}>
            <button
              onClick={() => setActiveTestimonial(p => p === 0 ? testimonials.length - 1 : p - 1)}
              style={{
                width: '36px',
                height: '36px',
                background: 'var(--surface-container-high)',
                border: '1px solid rgba(83,68,52,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--on-surface-variant)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(245,158,11,0.1)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--primary)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(245,158,11,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-container-high)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--on-surface-variant)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(83,68,52,0.3)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  style={{
                    width: i === activeTestimonial ? '32px' : '8px',
                    height: '8px',
                    background: i === activeTestimonial ? 'var(--primary)' : 'rgba(83,68,52,0.4)',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveTestimonial(p => (p + 1) % testimonials.length)}
              style={{
                width: '36px',
                height: '36px',
                background: 'var(--surface-container-high)',
                border: '1px solid rgba(83,68,52,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--on-surface-variant)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(245,158,11,0.1)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--primary)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(245,158,11,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-container-high)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--on-surface-variant)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(83,68,52,0.3)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .portfolio-header .btn-ghost {
            align-self: stretch !important;
            justify-content: center !important;
          }
          .testimonial-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 3rem 2rem 2rem 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .project-item {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 1.5rem 0 !important;
            text-align: left !important;
          }
          .project-item span:first-child {
            display: none !important;
          }
          .testimonial-content {
            padding: 2rem 1.5rem 1.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
