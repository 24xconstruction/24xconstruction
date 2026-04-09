import { NextResponse } from 'next/server';

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Singh;Lovepreet & Baghdeep;;;
FN:Lovepreet Singh & Baghdeep Singh
ORG:24X Construction
TEL;TYPE=CELL:+61480808600
EMAIL:info@24xconstruction.com
URL:https://24xconstruction.com
NOTE:Premium Residential Construction - Managing Directors
END:VCARD`;

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'inline; filename="24X_Construction.vcf"',
    },
  });
}
