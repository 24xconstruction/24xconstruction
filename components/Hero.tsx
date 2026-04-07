'use client';

import { useEffect, useRef, useState } from 'react';

function StatCounter({ endValue, suffix, label }: { endValue: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * endValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect(); // Unhook after starting animation
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={ref}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1.1,
        marginBottom: '0.4rem',
      }}>
        {count}{suffix}
      </div>
      <div className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
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
          src="https://res.cloudinary.com/dkvxfm1nu/image/upload/q_auto/f_auto/v1775581822/1775581271255_kpswfi.png" 
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
        <div className="section-tag" style={{ marginBottom: '2rem', animationDelay: '0.1s' }}>
          EST. 2008 · ARCHITECTURAL DOMINANCE
        </div>

        {/* Main headline */}
        <h1
          className="display-xl"
          style={{
            color: 'var(--on-surface)',
            maxWidth: '1000px',
            marginBottom: '2rem',
          }}
        >
          WE DON&apos;T JUST BUILD{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>STRUCTURES</span>
          {' '}—{' '}
          WE BUILD{' '}
          <span style={{ color: 'var(--on-surface)' }}>LEGACY</span>
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
        }}>
          Engineering excellence at sub-millimeter tolerances. Every structure we create is a permanent mark on the skyline — built to survive centuries.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#portfolio" className="btn-primary">
            VIEW OUR WORK
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            INITIATE PROJECT
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '0',
          marginTop: '6rem',
          maxWidth: '800px',
        }}>
          {[
            { endValue: 500, suffix: '+', label: 'Projects Delivered' },
            { endValue: 18, suffix: '', label: 'Years Dominance' },
            { endValue: 3, suffix: '', label: 'Global Offices' },
            { endValue: 99, suffix: '%', label: 'On-Time Delivery' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '2rem 0',
                borderTop: '1px solid rgba(83,68,52,0.25)',
                borderRight: i < 3 ? '1px solid rgba(83,68,52,0.15)' : 'none',
                paddingRight: '2rem',
                paddingLeft: i > 0 ? '2rem' : '0',
              }}
            >
              <StatCounter endValue={stat.endValue} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
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
    </section>
  );
}
