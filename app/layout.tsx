import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '24X Construction',
  description: 'Residential construction services in Adelaide. Fencing, concreting, landscaping, retaining walls and more.',
  keywords: 'construction Adelaide, fencing, concreting, landscaping, retaining walls, residential construction',
  openGraph: {
    title: '24X Construction',
    description: 'Residential construction services in Adelaide. Quality workmanship you can trust.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
