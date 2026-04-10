'use client';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface-container-lowest)',
      borderTop: '1px solid rgba(83,68,52,0.2)',
      paddingTop: '3rem',
      paddingBottom: '2rem',
    }}>
      <div className="container">
        {/* Simplified content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
        }}>
          {/* Branding */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '2rem',
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginBottom: '0.5rem',
              }}>24X</span>
              <span className="label-sm" style={{ color: 'var(--outline)', letterSpacing: '0.14em' }}>CONSTRUCTION</span>
            </div>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '0.85rem',
              lineHeight: 1.75,
              color: 'var(--on-surface-variant)',
              maxWidth: '320px',
              margin: '0 auto',
            }}>
              Stormwater, fencing, retaining walls, landscaping, and concrete works for residential builders.
            </p>
          </div>

          {/* Copyright */}
          <div style={{
            borderTop: '1px solid rgba(83,68,52,0.2)',
            paddingTop: '1.5rem',
            width: '100%',
          }}>
            <span className="label-sm" style={{ color: 'var(--outline)' }}>
              © 2026 24X Construction. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
