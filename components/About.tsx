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
          src="https://res.cloudinary.com/dqdssjby3/image/upload/v1775651009/Gemini_Generated_Image_l5yw4sl5yw4sl5yw_rd2lhx.png"
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
