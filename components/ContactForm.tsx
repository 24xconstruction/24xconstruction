'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PROJECT_TYPES = [
  'FENCING',
  'LANDSCAPING',
  'RETAINING WALLS',
  'CONCRETE WORK',
  'STORMWATER MANAGEMENT',
  'OTHER',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const fd = new FormData(e.currentTarget);
      fd.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '');
      fd.append('subject', `New Project Inquiry — ${formData.projectType || 'General'}`);
      fd.append('from_name', '24X Construction Website');

      // Convert FormData into JSON for React integration
      const object = Object.fromEntries(fd);
      const json = JSON.stringify(object);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const data = await res.json();
      if (data.success) {
        setFormState('success');
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        console.error('API error:', data);
        setFormState('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setFormState('error');
    }
  };


  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '1.1rem 1.25rem',
    background: 'var(--surface-container-high)',
    border: '1px solid transparent',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(83,68,52,0.3)',
    borderRadius: '2px',
    color: 'var(--on-surface)',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.82rem',
    letterSpacing: '0.08em',
    outline: 'none',
    transition: 'all 0.3s ease',
    display: 'block',
  };

  const inputFocused: React.CSSProperties = {
    ...inputBase,
    borderBottomColor: 'var(--primary-container)',
    background: 'var(--surface-container-highest)',
  };

  const getInputStyle = (field: string) =>
    focusedField === field ? inputFocused : inputBase;

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: 'var(--surface)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '10%',
        width: '500px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '6rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* ── LEFT: Info ── */}
          <div>
            <div
              className="section-tag"
              style={{
                marginBottom: '1.5rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.1s'
              }}
            >
              CONTACT US
            </div>
            <h2
              className="display-md"
              style={{
                color: 'var(--on-surface)',
                marginBottom: '3rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease 0.3s'
              }}
            >
              Get in Touch
            </h2>

            {/* Info items */}
            <div
              className="contact-info-grid"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.5s'
              }}
            >

              {/* Email */}
              <div className="contact-info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  className="contact-info-icon"
                  style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(245,158,11,0.1)', color: 'var(--primary)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>PROJECT INQUIRIES</div>
                  <a
                    href="mailto:info@24xconstruction.com"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '0.9rem',
                      color: 'var(--on-surface-variant)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--on-surface-variant)')}
                  >
                    info@24xconstruction.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  className="contact-info-icon"
                  style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(245,158,11,0.1)', color: 'var(--primary)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </div>
                <div>
                  <div className="label-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>DIRECT LINE</div>
                  <a
                    href="tel:+61480808600"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '0.9rem',
                      color: 'var(--on-surface-variant)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--on-surface-variant)')}
                  >
                    +61 480 808 600
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.8s ease 0.4s'
          }}>
            {formState === 'success' ? (
              <div
                className="success-message"
                style={{
                  padding: '4rem 3rem',
                  background: 'var(--surface-container-high)',
                  textAlign: 'center',
                  border: '1px solid rgba(245,158,11,0.15)',
                }}
              >
                <div style={{
                  width: '56px', height: '56px',
                  background: 'rgba(245,158,11,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--primary)',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--on-surface)', marginBottom: '0.75rem' }}>
                  Send Enquiry
                </h3>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--on-surface-variant)', maxWidth: '340px', margin: '0 auto 2rem' }}>
                  We aim to respond to project enquiries within 24 hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="btn-ghost"
                  style={{ margin: '0 auto' }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Full Name */}
                <div>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="FULL NAME"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle('name'),
                    }}
                    className="mobile-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle('email'),
                    }}
                    className="mobile-input"
                  />
                </div>

                {/* Project Type */}
                <div style={{ position: 'relative' }}>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('projectType')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle('projectType'),
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      color: formData.projectType ? 'var(--on-surface)' : 'rgba(216,195,173,0.5)',
                    }}
                  >
                    <option value="" disabled>SELECT PROJECT TYPE</option>
                    {PROJECT_TYPES.map(t => (
                      <option key={t} value={t} style={{ background: 'var(--surface-container-high)', color: 'var(--on-surface)' }}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {/* Custom chevron */}
                  <div style={{
                    position: 'absolute', right: '1.25rem', top: '50%',
                    transform: 'translateY(-50%)', pointerEvents: 'none',
                    color: 'var(--outline)',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="PROJECT BRIEF"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle('message'),
                      resize: 'vertical',
                      minHeight: '130px',
                    }}
                  />
                </div>

                {/* Error state */}
                {formState === 'error' && (
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.8rem',
                    color: 'var(--error)',
                    letterSpacing: '0.06em',
                  }}>
                    TRANSMISSION FAILED. PLEASE TRY AGAIN.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  style={{
                    width: '100%',
                    padding: '1.15rem 2rem',
                    background: formState === 'loading'
                      ? 'rgba(245,158,11,0.5)'
                      : 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
                    border: 'none',
                    borderRadius: '2px',
                    color: '#472A00',
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginTop: '0.5rem',
                  }}
                  onMouseEnter={e => {
                    if (formState !== 'loading') {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(245,158,11,0.35), 0 8px 30px rgba(0,0,0,0.4)';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  {formState === 'loading' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0" opacity="0.3" />
                        <path d="M12 3a9 9 0 019 9" />
                      </svg>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      SEND MISSION BRIEF
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  color: 'var(--outline)',
                  textAlign: 'center',
                  marginTop: '0.25rem',
                }}>
                  ENCRYPTED TRANSMISSION · RESPONSE WITHIN 24 HRS
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        
        /* Mobile Optimizations */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            gap: 2.5rem !important;
          }
          
          /* Reduce section padding on mobile */
          #contact {
            padding: 4rem 0 !important;
          }
          
          /* Stack contact info items vertically with better spacing */
          .contact-info-grid {
            gap: 2rem !important;
          }
          
          /* Optimize form spacing */
          .contact-form {
            gap: 1.25rem !important;
          }
          
          /* Better button sizing */
          .contact-submit-btn {
            padding: 1rem 2rem !important;
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          /* Further reduce padding for small screens */
          #contact {
            padding: 3rem 0 !important;
          }
          
          .contact-grid {
            gap: 2rem !important;
          }
          
          /* Smaller input padding for mobile */
          .mobile-input {
            padding: 0.9rem 1rem !important;
            font-size: 0.8rem !important;
          }
          
          /* Compact contact info */
          .contact-info-item {
            gap: 0.75rem !important;
          }
          
          .contact-info-icon {
            width: 32px !important;
            height: 32px !important;
          }
          
          /* Mobile-friendly button */
          .contact-submit-btn {
            padding: 0.9rem 1.5rem !important;
            font-size: 0.75rem !important;
          }
          
          /* Adjust success message padding */
          .success-message {
            padding: 3rem 2rem !important;
          }
        }
        
        /* Input placeholder styling */
        input::placeholder, textarea::placeholder {
          color: rgba(216,195,173,0.4);
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }
        
        @media (max-width: 480px) {
          input::placeholder, textarea::placeholder {
            font-size: 0.7rem;
          }
        }
        
        select option {
          background: #2A2A2A;
        }
        
        /* Improve touch targets on mobile */
        @media (max-width: 768px) {
          input, textarea, select, button {
            min-height: 44px;
          }
        }
      `}</style>
    </section>
  );
}
