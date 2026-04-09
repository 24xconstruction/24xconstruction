'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ConnectPage() {
  const handleSaveContact = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Singh;Lovepreet & Baghdeep;;;',
      'FN:Lovepreet Singh & Baghdeep Singh',
      'ORG:24X Construction',
      'TEL;TYPE=CELL:+61480808600',
      'EMAIL:info@24xconstruction.com',
      'URL:https://24xconstruction.com',
      'NOTE:Premium Residential Construction - Managing Directors',
      'END:VCARD',
    ].join('\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '24X_Construction_Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Navbar />
      <main 
        className="connect-main"
        style={{ 
          background: 'var(--surface)', 
          minHeight: '100vh', 
          paddingTop: '120px', 
          paddingBottom: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div 
          className="connect-card"
          style={{
            width: '100%',
            maxWidth: '420px',
            background: 'var(--surface-container-lowest)',
            border: '1px solid rgba(83, 68, 52, 0.3)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          {/* Header Card Area */}
          <div 
            className="connect-header"
            style={{ padding: '2.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            
            {/* Header / Logo Row */}
            <div 
              className="connect-logo-row"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                border: '1px dashed rgba(245, 158, 11, 0.4)', 
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--primary)',
                letterSpacing: '0.1em'
              }}>
                LOGO
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ 
                  fontFamily: "'Manrope', sans-serif", 
                  fontSize: '0.65rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.15em', 
                  color: 'var(--primary)',
                  textTransform: 'uppercase'
                }}>
                  CONNECT
                </span>
                <span style={{ 
                  fontFamily: "'Space Grotesk', sans-serif", 
                  fontSize: '1.2rem', 
                  fontWeight: 700, 
                  color: 'var(--on-surface)'
                }}>
                  24X Construction
                </span>
              </div>
            </div>

            {/* Partners Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ 
                fontFamily: "'Manrope', sans-serif", 
                fontSize: '0.65rem', 
                fontWeight: 700, 
                letterSpacing: '0.15em', 
                color: 'var(--primary)',
                textTransform: 'uppercase'
              }}>
                PARTNERS
              </span>
              <h1 style={{ 
                fontFamily: "'Manrope', sans-serif", 
                fontSize: '1.8rem', 
                fontWeight: 600, 
                color: 'var(--on-surface)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: 0
              }}>
                Lovepreet Singh<br/>&amp; Baghdeep Singh
              </h1>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.9rem',
                color: 'var(--on-surface-variant)',
                lineHeight: 1.6,
                margin: 0
              }}>
                Premium residential construction with a direct line to the partners.
              </p>
              
              {/* Chip */}
              <div style={{
                display: 'inline-flex',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: '100px',
                padding: '0.4rem 1rem',
                width: 'fit-content',
                background: 'rgba(245, 158, 11, 0.05)',
                marginTop: '0.5rem'
              }}>
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase'
                }}>
                  RESIDENTIAL CONSTRUCTION
                </span>
              </div>
            </div>
            
          </div>
          
          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(83, 68, 52, 0.2)', width: '100%' }} />

          {/* Action List Area */}
          <div className="connect-actions" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Mobile Contact Box */}
            <a href="tel:+61480808600" className="connect-contact-box" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.2rem',
              background: 'var(--surface-container-low)',
              border: '1px solid rgba(83, 68, 52, 0.3)',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--surface-container)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(83, 68, 52, 0.3)'; e.currentTarget.style.background = 'var(--surface-container-low)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  width: '44px', height: '44px',
                  background: 'rgba(245, 158, 11, 0.08)',
                  borderRadius: '12px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: 'var(--primary)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase' }}>
                    MOBILE
                  </span>
                  <span className="connect-phone-text" style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--on-surface)' }}>
                    +61 480 808 600
                  </span>
                </div>
              </div>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.8rem', color: 'var(--primary)' }}>
                Call
              </span>
            </a>

            {/* Email Contact Box */}
            <a href="mailto:info@24xconstruction.com" className="connect-contact-box" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.2rem',
              background: 'var(--surface-container-low)',
              border: '1px solid rgba(83, 68, 52, 0.3)',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--surface-container)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(83, 68, 52, 0.3)'; e.currentTarget.style.background = 'var(--surface-container-low)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  width: '44px', height: '44px',
                  background: 'rgba(245, 158, 11, 0.08)',
                  borderRadius: '12px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: 'var(--primary)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase' }}>
                    EMAIL
                  </span>
                  <span className="connect-email-text" style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--on-surface)' }}>
                    info@24xconstruction.com
                  </span>
                </div>
              </div>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.8rem', color: 'var(--primary)' }}>
                Email
              </span>
            </a>

            {/* Action Buttons Row */}
            <div className="connect-buttons" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              <button style={{
                background: 'var(--primary-container)',
                color: '#131313',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 700,
                padding: '0.9rem',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }} onClick={handleSaveContact} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                Save Contact
              </button>
              <a href="/" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                color: 'var(--on-surface)',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 600,
                padding: '0.9rem',
                border: '1px solid rgba(83, 68, 52, 0.4)',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                Visit Website
              </a>
            </div>

            {/* Footer Notice */}
            <div className="connect-footer-notice" style={{
              background: 'rgba(200, 198, 197, 0.02)',
              border: '1px solid rgba(83, 68, 52, 0.15)',
              borderRadius: '10px',
              padding: '1.25rem',
              marginTop: '0.5rem'
            }}>
              <div style={{ 
                fontFamily: "'Manrope', sans-serif", 
                fontSize: '0.65rem', 
                fontWeight: 700, 
                letterSpacing: '0.15em', 
                color: 'var(--secondary)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                BEST USE FOR QR VISITORS
              </div>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.85rem',
                color: 'var(--on-surface-variant)',
                lineHeight: 1.6,
                margin: 0
              }}>
                Fast, clean and direct. One tap to call, one tap to email, or save the contact instantly.
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 480px) {
          .connect-main {
            padding-top: 90px !important;
            padding-bottom: 40px !important;
            align-items: flex-start !important;
          }
          .connect-card {
            margin: 0 !important;
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
            max-width: 100% !important;
            box-shadow: none !important;
          }
          .connect-header {
            padding: 2rem 1.25rem 1.5rem !important;
            gap: 1.5rem !important;
          }
          .connect-header h1 {
            font-size: 1.5rem !important;
          }
          .connect-header p {
            font-size: 0.82rem !important;
          }
          .connect-actions {
            padding: 1.25rem !important;
            gap: 1rem !important;
          }
          .connect-contact-box {
            padding: 1rem !important;
          }
          .connect-contact-box .connect-phone-text {
            font-size: 0.95rem !important;
          }
          .connect-contact-box .connect-email-text {
            font-size: 0.78rem !important;
            word-break: break-all !important;
          }
          .connect-buttons {
            gap: 0.75rem !important;
          }
          .connect-buttons button,
          .connect-buttons a {
            padding: 0.8rem !important;
            font-size: 0.82rem !important;
          }
          .connect-footer-notice {
            padding: 1rem !important;
          }
          .connect-footer-notice p {
            font-size: 0.8rem !important;
          }
        }
        @media (max-width: 360px) {
          .connect-header h1 {
            font-size: 1.3rem !important;
          }
          .connect-contact-box .connect-email-text {
            font-size: 0.72rem !important;
          }
        }
      `}</style>
    </>
  );
}
