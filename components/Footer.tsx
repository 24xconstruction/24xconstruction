'use client';

export default function Footer() {
  const links = [
    { label: 'PRIVACY POLICY', href: '#' },
    { label: 'TERMS OF SERVICE', href: '#' },
    { label: 'SAFETY PROTOCOLS', href: '#' },
    { label: 'EQUIPMENT FLEET', href: '#' },
  ];
  const socials = [
    {
      label: 'INSTAGRAM',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: 'LINKEDIN',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'TWITTER',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer style={{
      background: 'var(--surface-container-lowest)',
      borderTop: '1px solid rgba(83,68,52,0.2)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
    }}>
      <div className="container">
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
        }} className="footer-grid">

          {/* Branding */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
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
            }}>
              Architectural dominance through structural precision. Building the legacy of tomorrow, today.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>LEGAL</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="label-sm"
                    style={{
                      textDecoration: 'none',
                      color: 'var(--on-surface-variant)',
                      transition: 'color 0.3s',
                      display: 'block',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--on-surface-variant)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations + Social */}
          <div>
            <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>OFFICES</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {['NEW YORK', 'LONDON', 'SINGAPORE'].map(city => (
                <li key={city}>
                  <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>{city}</span>
                </li>
              ))}
            </ul>

            <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>FOLLOW US</div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--surface-container)',
                    color: 'var(--on-surface-variant)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,158,11,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--primary)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--surface-container)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--on-surface-variant)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(83,68,52,0.2)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span className="label-sm" style={{ color: 'var(--outline)' }}>
            © 2024 24X CONSTRUCTION. ARCHITECTURAL DOMINANCE ASSURED.
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span className="label-sm" style={{ color: 'rgba(83,68,52,0.6)' }}>DESIGNED WITH</span>
            <span style={{ color: 'var(--primary)', fontSize: '0.75rem' }}>♦</span>
            <span className="label-sm" style={{ color: 'rgba(83,68,52,0.6)' }}>STRUCTURAL PRECISION</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
