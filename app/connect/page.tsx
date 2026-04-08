'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


export default function ConnectPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--surface)', minHeight: '100vh', paddingTop: '150px', paddingBottom: '80px' }}>
        <div className="container" ref={headerRef}>
          <div style={{ textAlign: 'center', marginBottom: '5rem', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
            <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '1.5rem', display: 'flex' }}>
              LEADERSHIP TEAM
            </div>
            <h1 className="display-sm" style={{ color: 'var(--on-surface)', marginBottom: '1.5rem' }}>EXECUTIVE CONTACTS</h1>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.1rem', color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Connect directly with our managing directors to discuss your upcoming residential or commercial projects.
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div 
              style={{
                width: '100%',
                background: 'var(--surface-container-high)',
                border: '1px solid rgba(83, 68, 52, 0.3)',
                borderRadius: '2px',
                padding: '4rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4rem',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-container)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(83, 68, 52, 0.3)'}
            >
              {/* Accent line top */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--primary-container)' }} />
              
              <div style={{ flex: '1 1 300px' }}>
                <div style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '0.9rem',
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}>
                  Managing Directors
                </div>

                <h3 style={{ 
                  fontFamily: "'Space Grotesk', sans-serif", 
                  fontSize: '2.5rem', 
                  color: 'var(--on-surface)',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}>
                  Lovepreet Singh
                </h3>
                <h3 style={{ 
                  fontFamily: "'Space Grotesk', sans-serif", 
                  fontSize: '2.5rem', 
                  color: 'var(--on-surface)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}>
                  <span style={{ color: 'var(--on-surface-variant)', fontSize: '1.5rem', marginRight: '0.5rem' }}>&amp;</span> 
                  Baghdeep Singh
                </h3>
              </div>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '2.5rem', 
                flex: '1 1 350px',
                justifyContent: 'center'
              }}>
                {/* Email */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{
                    width: '56px', height: '56px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(245,158,11,0.08)', color: 'var(--primary)',
                    borderRadius: '50%'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.8rem', color: 'var(--on-surface-variant)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</div>
                    <a
                      href={`mailto:info@24xconstruction.com`}
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.2rem',
                        color: 'var(--on-surface)',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--on-surface)')}
                    >
                      info@24xconstruction.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{
                    width: '56px', height: '56px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(245,158,11,0.08)', color: 'var(--primary)',
                    borderRadius: '50%'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.8rem', color: 'var(--on-surface-variant)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Line</div>
                    <a
                      href="tel:+610480808600"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.2rem',
                        color: 'var(--on-surface)',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--on-surface)')}
                    >
                      +61 0480 808 600
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
