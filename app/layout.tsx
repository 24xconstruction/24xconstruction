import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '24X CONSTRUCTION | ARCHITECTURAL DOMINANCE',
  description: 'Building dreams into reality. Premium construction, architecture, and renovation services with unyielding standards of excellence.',
  keywords: 'construction, architecture, renovation, residential, commercial, luxury building',
  openGraph: {
    title: '24X CONSTRUCTION | ARCHITECTURAL DOMINANCE',
    description: 'Building dreams into reality.',
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
