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
            <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://res.cloudinary.com/dqdssjby3/image/upload/v1775841381/24xConstruction_on0otm.png"
                alt="24X Construction Logo"
                style={{ 
                  width: '160px', 
                  height: '80px', 
                  objectFit: 'contain'
                }}
              />
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
