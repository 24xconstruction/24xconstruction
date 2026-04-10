'use client';

export default function About() {
  return (
    <section id="about" style={{
      background: 'var(--surface)',
      padding: '0',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '60vh'
    }}>
      {/* Background Image - Full visibility without overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <img
          src="https://res.cloudinary.com/dqdssjby3/image/upload/v1775838132/contractors-installing-and-leveling-metal-fence.jpg_k75n2h.jpg"
          alt="Construction Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
}
