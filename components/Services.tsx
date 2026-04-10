'use client';

import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18"/>
        <circle cx="6" cy="6" r="1"/>
        <circle cx="6" cy="12" r="1"/>
        <circle cx="6" cy="18" r="1"/>
        <circle cx="18" cy="6" r="1"/>
        <circle cx="18" cy="12" r="1"/>
        <circle cx="18" cy="18" r="1"/>
      </svg>
    ),
    tag: 'FENCING',
    headline: 'COMPREHENSIVE FENCING SOLUTIONS',
    body: 'Complete fencing services including timber, aluminium, and genuine Colorbond® steel. From residential boundary fences to commercial security barriers, every project is strictly built to Australian Standards.',
    image: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644151/Gemini_Generated_Image_466zg4466zg4466z_bt7xki.jpg',
    details: {
      description: 'We specialize in durable fencing solutions engineered specifically for the harsh Australian climate. Whether you need to withstand intense sun, heavy storms, or coastal salt air, our expert team installs premium materials that deliver long-lasting privacy, security, and street appeal.',
      types: [
        'Genuine Colorbond® Fencing – The Aussie standard, durable and fire-resistant',
        'Timber Paling & Feature Fencing – Treated pine or premium hardwood (like Merbau)',
        'Aluminium Slat Fencing – Modern, rust-proof, and powder-coated',
        'Pool Fencing – Fully council-compliant frameless glass and tubular aluminium',
        'Chain Mesh Fencing – Cost-effective and durable boundary solution',
        'Commercial Security Fencing – Heavy-duty Garrison and steel palisade'
      ],
      features: [
        'Australian Standards Compliant',
        '10-Year Warranty on Materials',
        'Professional Installation',
        'Free Site Inspection & Quote',
        'Council Approval Assistance'
      ],
      detailImage: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644151/Gemini_Generated_Image_466zg4466zg4466z_bt7xki.jpg'
    }
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M8 12h8"/>
      </svg>
    ),
    tag: 'LANDSCAPING',
    headline: 'PROFESSIONAL LANDSCAPING & OUTDOOR LIVING',
    body: 'Transform your property with expert landscape design and structural construction. From drought-resistant native gardens to premium turf and hardscaping, we build sustainable, low-maintenance outdoor spaces perfectly tailored to the harsh Australian climate.',
    image: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644159/Gemini_Generated_Image_10oh910oh910oh91_ovj2bh.png',
    details: {
      description: 'We combine architectural design expertise with practical, hands-on knowledge of local soil conditions to create stunning environments that add real value to your home.',
      types: [
        'Custom Garden Design & Construction – Complete structural landscaping',
        'Premium Turf Installation – Climate-hardy turf perfectly laid',
        'Native & Drought-Resistant Gardens – Low-maintenance, local planting schemes',
        'Smart Irrigation Solutions – Water-efficient, automated sprinkler and drip systems',
        'Hardscaping & Entertainment Areas – Paving, stepping stones, and structural elements',
        'Garden Beds & Edging – Custom planter boxes with clean concrete or timber edging'
      ],
      features: [
        'Water-Wise Plant Selection',
        'Sustainable Design Practices',
        'Soil Analysis & Preparation',
        '12-Month Plant Guarantee',
        'Maintenance Programs Available'
      ],
      detailImage: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644159/Gemini_Generated_Image_10oh910oh910oh91_ovj2bh.png'
    }
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V7l8-4v18"/>
        <path d="M19 21V11l-6-4"/>
        <path d="M9 9v12"/>
        <path d="M15 11v10"/>
      </svg>
    ),
    tag: 'RETAINING WALLS',
    headline: 'ENGINEERED RETAINING WALLS',
    body: 'Expertly built retaining walls that combine structural integrity with stunning aesthetic appeal. Designed specifically for Australian soil conditions and unpredictable weather, our walls provide long-lasting stability, prevent erosion, and maximize your usable outdoor space.',
    image: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644160/Gemini_Generated_Image_gyv7x2gyv7x2gyv7_rd6xno.png',
    details: {
      description: 'Whether you need to level a sloping backyard or secure a massive soil load, we ensure every project is built to strict engineering specifications, complete with proper backfill and integrated drainage systems to guarantee decades of performance.',
      types: [
        'Besser & Split-Face Block Walls – Highly durable, steel-reinforced masonry',
        'Treated Pine & Hardwood Sleeper Walls – Cost-effective, natural-looking timber solutions',
        'Sandstone & Natural Stone Walls – Premium hand-laid rock for a classic aesthetic',
        'Steel-Reinforced Concrete Walls – Heavy-duty structural support for steep slopes',
        'Gabion Basket Walls – Architectural wire-and-stone construction with natural drainage',
        'Terraced & Multi-Level Walls – Transform steep hillsides into flat, functional spaces'
      ],
      features: [
        'Structural Engineering Certified',
        'Proper Drainage Systems',
        'Soil Stability Analysis',
        'Council Approval Support',
        '15-Year Structural Warranty'
      ],
      detailImage: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644160/Gemini_Generated_Image_gyv7x2gyv7x2gyv7_rd6xno.png'
    }
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M9 9h6v6H9z"/>
        <path d="M3 9h18"/>
        <path d="M9 3v18"/>
      </svg>
    ),
    tag: 'CONCRETE WORK',
    headline: 'PROFESSIONAL CONCRETE SERVICES',
    body: 'Delivering high-quality, structurally sound concrete solutions for residential and commercial properties. From heavy-duty driveways to pristine alfresco spaces, our expert concreters use premium materials, proper steel reinforcement, and precise expansion joints to ensure your concrete withstands Australia\'s harsh climate without cracking.',
    image: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644159/Gemini_Generated_Image_648gmq648gmq648g_wooot9.png',
    details: {
      description: 'Whether you are looking for a standard structural pour or a high-end decorative finish to boost your home\'s curb appeal, we provide flawless workmanship built for lasting durability.',
      types: [
        'Exposed Aggregate Driveways – The premium choice for modern Australian homes',
        'Plain & Coloured Concrete – Driveways, side paths, and walkways in fade-resistant colours',
        'House & Shed Slabs – Engineered, steel-reinforced foundations built perfectly level',
        'Alfresco & Outdoor Areas – Seamless concrete pouring for patios and safe pool surrounds',
        'Decorative & Stencilled Concrete – Stamped, stencilled, or resurfaced maintenance-free finishes',
        'Commercial Slabs & Flooring – Heavy-duty, high-MPA solutions designed for industrial loads'
      ],
      features: [
        'High-Grade Concrete Mix',
        'Reinforcement Steel Installation',
        'Expansion Joint Planning',
        '20-Year Structural Guarantee',
        'Weather-Resistant Finishes'
      ],
      detailImage: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644159/Gemini_Generated_Image_648gmq648gmq648g_wooot9.png'
    }
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18"/>
        <path d="M12 3v18"/>
        <path d="M8 8l8 8"/>
        <path d="M16 8l-8 8"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    tag: 'STORMWATER MANAGEMENT',
    headline: 'STORMWATER & DRAINAGE SYSTEMS',
    body: 'Protect your property from flooding, soil erosion, and foundation damage with expertly engineered stormwater solutions. From sudden, heavy downpours to persistent pooling, we design and install highly effective drainage systems that channel water safely away from your home.',
    image: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644159/Gemini_Generated_Image_qlgwwyqlgwwyqlgw_wwirja.png',
    details: {
      description: 'We ensure all installations strictly comply with local Australian council regulations, effectively managing surface runoff and protecting both your property and your neighbours\'.',
      types: [
        'Surface & Underground Stormwater – Heavy-duty PVC piping, grated pits, and linear trench drains',
        'French Drains & Ag Pipe – Subsurface drainage to prevent rising damp and soil saturation',
        'Soakwells & Infiltration Systems – High-capacity underground systems to manage heavy roof runoff',
        'Rainwater Tank Systems – Supply and installation to meet BASIX or water-efficiency requirements',
        'Spoon Drains & Runoff Control – Expert concrete grading and shallow spoon drains on sloping blocks',
        'Permeable Paving Solutions – Eco-friendly driveway and pathway options for natural filtration'
      ],
      features: [
        'Environmental Compliance',
        'Water Quality Treatment',
        'Flood Prevention Systems',
        'Council Approved Designs',
        'Maintenance Support Programs'
      ],
      detailImage: 'https://res.cloudinary.com/dqdssjby3/image/upload/v1775644159/Gemini_Generated_Image_qlgwwyqlgwwyqlgw_wwirja.png'
    }
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation<HTMLDivElement>(services.length, { threshold: 0.1 });
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" ref={sectionRef} style={{ background: 'var(--surface-container-low)', padding: '7rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div 
            className="section-tag"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease 0.1s'
            }}
          >
            Services
          </div>
          <h2 
            className="display-lg" 
            style={{ 
              color: 'var(--on-surface)', 
              maxWidth: '600px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease 0.3s'
            }}
          >
            Construction 
            <span style={{
              background: 'linear-gradient(135deg, #FFC174 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>SERVICES</span>
          </h2>
        </div>

        {/* Horizontal Services List */}
        <div 
          ref={cardsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          className="services-list"
        >
          {services.map((service, i) => (
            <div
              key={service.tag}
              style={{
                background: 'var(--surface-container-high)',
                borderRadius: '12px',
                overflow: 'hidden',
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i] ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease ${i * 0.1}s`,
                border: expandedService === i ? '2px solid var(--primary)' : '1px solid rgba(83,68,52,0.2)',
              }}
              className="service-item"
            >
              {/* Service Header - Always Visible */}
              <div
                onClick={() => toggleService(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto auto',
                  gap: '2rem',
                  alignItems: 'center',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: hovered === i ? 'rgba(245,158,11,0.05)' : 'transparent',
                }}
                className="service-header"
              >
                {/* Service Image */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}>
                  <img 
                    src={service.image}
                    alt={service.headline}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Service Info */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.5rem',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(245,158,11,0.1)',
                      borderRadius: '8px',
                      color: 'var(--primary)',
                    }}>
                      {service.icon}
                    </div>
                    <div className="label-sm" style={{ color: 'var(--primary)' }}>
                      {service.tag}
                    </div>
                  </div>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--on-surface)',
                    marginBottom: '0.5rem',
                  }}>
                    {service.headline}
                  </h3>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--on-surface-variant)',
                    maxWidth: '600px',
                  }}>
                    {service.body}
                  </p>
                </div>

                {/* Expand Button */}
                <button
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    background: expandedService === i ? 'var(--primary)' : 'transparent',
                    color: expandedService === i ? '#472A00' : 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: expandedService === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  onMouseEnter={e => {
                    if (expandedService !== i) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(245,158,11,0.1)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (expandedService !== i) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    }
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
              </div>

              {/* Expanded Content */}
              {expandedService === i && (
                <div
                  style={{
                    padding: '0 2rem 2rem 2rem',
                    borderTop: '1px solid rgba(83,68,52,0.2)',
                    animation: 'fadeIn 0.5s ease',
                  }}
                  className="service-details"
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 400px',
                    gap: '3rem',
                    alignItems: 'start',
                    paddingTop: '2rem',
                  }} className="details-grid">
                    
                    {/* Left: Detailed Information */}
                    <div>
                      <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'var(--on-surface-variant)',
                        marginBottom: '2rem',
                      }}>
                        {service.details.description}
                      </p>

                      {/* Service Types */}
                      <div>
                        <h4 style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--on-surface)',
                          marginBottom: '1rem',
                        }}>
                          Our Services Include:
                        </h4>
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                        }}>
                          {service.details.types.map((type, idx) => (
                            <li
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                marginBottom: '0.75rem',
                                fontFamily: "'Manrope', sans-serif",
                                fontSize: '0.9rem',
                                color: 'var(--on-surface-variant)',
                              }}
                            >
                              <div style={{
                                width: '6px',
                                height: '6px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                marginTop: '0.5rem',
                                flexShrink: 0,
                              }} />
                              {type}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Detail Image */}
                    <div style={{
                      position: 'sticky',
                      top: '2rem',
                    }}>
                      <div style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      }}>
                        <img 
                          src={service.details.detailImage}
                          alt={`${service.headline} Detail`}
                          style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      
                      {/* Call to Action */}
                      <div style={{
                        marginTop: '1.5rem',
                        padding: '1.5rem',
                        background: 'var(--surface-container)',
                        borderRadius: '8px',
                        textAlign: 'center',
                      }}>
                        <h5 style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--on-surface)',
                          marginBottom: '0.5rem',
                        }}>
                          Ready to Get Started?
                        </h5>
                        <p style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '0.85rem',
                          color: 'var(--on-surface-variant)',
                          marginBottom: '1rem',
                        }}>
                          Contact us for a free consultation and quote
                        </p>
                        <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                          GET FREE QUOTE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-header {
            grid-template-columns: 1fr auto !important;
            gap: 1rem !important;
          }
          .service-header > div:first-child {
            display: none !important;
          }
          .details-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .service-header {
            padding: 1.5rem !important;
          }
          .service-details {
            padding: 0 1.5rem 1.5rem 1.5rem !important;
          }
          .details-grid {
            padding-top: 1.5rem !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
