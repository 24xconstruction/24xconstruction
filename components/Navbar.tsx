'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  // Prevent hydration mismatch by ensuring consistent initial render
  if (!mounted) {
    return (
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(19,19,19,0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid transparent',
          boxShadow: 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.5rem',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>24X</span>
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--on-surface-variant)',
              paddingLeft: '0.5rem',
              borderLeft: '1px solid rgba(83,68,52,0.5)',
            }}>CONSTRUCTION</span>
          </a>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--on-surface-variant)',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s',
                    position: 'relative',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', padding: '0.65rem 1.5rem' }}>
            CONTACT US
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--on-surface)',
              padding: '0.5rem',
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/>
            </svg>
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .nav-links { display: none !important; }
            .hamburger { display: flex !important; }
            nav a.btn-primary { display: none !important; }
          }
        `}</style>
      </nav>
    );
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(32,31,31,0.75)' : 'rgba(19,19,19,0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(83,68,52,0.25)' : '1px solid transparent',
        boxShadow: scrolled ? 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.5rem',
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>24X</span>
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--on-surface-variant)',
            paddingLeft: '0.5rem',
            borderLeft: '1px solid rgba(83,68,52,0.5)',
          }}>CONSTRUCTION</span>
        </a>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--on-surface-variant)',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--on-surface-variant)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', padding: '0.65rem 1.5rem' }}>
          CONTACT US
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--on-surface)',
            padding: '0.5rem',
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--surface-container-low)',
          borderTop: '1px solid rgba(83,68,52,0.2)',
          padding: '1.5rem',
        }} className="mobile-menu">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.85rem 0',
                borderBottom: '1px solid rgba(83,68,52,0.15)',
                textDecoration: 'none',
                color: 'var(--on-surface-variant)',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          nav a.btn-primary { display: none !important; }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1px !important;
            background: rgba(83,68,52,0.15);
            margin-top: 4rem !important;
          }
          .stat-item {
            padding: 1.5rem 1rem !important;
            border-right: none !important;
            border-top: none !important;
            background: var(--surface-container-low);
            text-align: center !important;
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid rgba(83,68,52,0.15) !important;
          }
          .stat-item:nth-child(1),
          .stat-item:nth-child(2) {
            border-bottom: 1px solid rgba(83,68,52,0.15) !important;
          }
        }
      `}</style>
    </nav>
  );
}
