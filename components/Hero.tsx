'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
        backgroundColor: 'var(--surface)',
      }}
    >
      {/* Dedicated solid background layer - fixes hydration bugs on refresh */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://res.cloudinary.com/dqdssjby3/image/upload/v1775650371/Gemini_Generated_Image_ql03j8ql03j8ql03_i7iqxm.png" 
          alt="Architectural Construction Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(19, 19, 19, 0.95) 0%, rgba(19, 19, 19, 0.2) 100%)'
        }} />
      </div>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse-glow 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(143,213,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Light sweep animation */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '60%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,193,116,0.03), transparent)',
          animation: 'sweep 8s ease-in-out infinite',
          animationDelay: '2s',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '6rem' }}>
        {/* Section tag */}
        <div 
          className="section-tag" 
          style={{ 
            marginBottom: '2rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}
        >
          External Construction Solutions
        </div>

        {/* Main headline */}
        <h1
          className="display-xl"
          style={{
            color: 'var(--on-surface)',
            maxWidth: '1000px',
            marginBottom: '2rem',
            wordWrap: 'break-word',
            hyphens: 'auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s ease 0.4s'
          }}
        >
          Reliable Outdoor Construction for Residential Projects
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          lineHeight: 1.7,
          color: 'var(--on-surface-variant)',
          maxWidth: '560px',
          marginBottom: '3rem',
          fontWeight: 400,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.6s'
        }}>
          24X Construction delivers stormwater management, fencing, retaining walls, landscaping, and concrete works for residential construction projects. We provide practical, durable solutions with a strong focus on quality workmanship, efficient delivery, and reliable site outcomes.
        </p>

        {/* CTA */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          alignItems: 'center',
          justifyContent: 'flex-start',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.8s'
        }}>
          <a href="#contact" className="btn-primary" style={{ minWidth: 'fit-content' }}>
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.5,
      }}>
        <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>SCROLL</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--primary-container), transparent)',
          animation: 'pulse-glow 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-section {
            padding-top: 72px !important;
            min-height: 100vh !important;
          }
          .hero-section .container {
            padding-top: 2rem !important;
            padding-bottom: 4rem !important;
          }
          .hero-section .display-xl {
            font-size: clamp(1.8rem, 8vw, 2.5rem) !important;
            line-height: 1.15 !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-section .btn-primary,
          .hero-section .btn-ghost {
            width: 100% !important;
            margin-bottom: 0.75rem !important;
          }
          .hero-section .btn-primary:last-child,
          .hero-section .btn-ghost:last-child {
            margin-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
