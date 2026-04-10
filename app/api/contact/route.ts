import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // --- 1. Parse body ---
    let body: { name?: string; email?: string; projectType?: string; message?: string } = {};
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    const { name, email, projectType, message } = body;

    // --- 2. Validate ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // --- 3. Log submission (always) ---
    console.log('=== CONTACT FORM RECEIVED ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Project Type:', projectType ?? 'Not specified');
    console.log('Message:', message);
    console.log('=============================');

    // --- 4. Send via Web3Forms (optional, non-blocking) ---
    const apiKey = process.env.WEB3FORMS_KEY?.trim();

    if (apiKey && apiKey !== 'your_web3forms_access_key_here') {
      try {
        const w3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'User-Agent': req.headers.get('user-agent') || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          },
          body: JSON.stringify({
            access_key: apiKey,
            subject: `New Project Inquiry — ${projectType ?? 'General'}`,
            name,
            email,
            'Project Type': projectType ?? 'Not specified',
            message,
            from_name: '24X Construction Website',
          }),
        });

        // Safely parse — if key is wrong, Web3Forms returns HTML, not JSON
        const contentType = w3Res.headers.get('content-type') ?? '';
        if (contentType.includes('application/json')) {
          const w3Data = await w3Res.json();
          if (w3Data.success) {
            console.log('✅ Email sent via Web3Forms');
          } else {
            console.warn('⚠️  Web3Forms API error:', JSON.stringify(w3Data));
            console.warn('   ↳ Check that WEB3FORMS_KEY in .env.local is correct.');
          }
        } else {
          const rawBody = await w3Res.text();
          console.error('❌ Web3Forms returned non-JSON (HTTP', w3Res.status, ')');
          console.error('   ↳ Raw response (first 200 chars):', rawBody.slice(0, 200));
          console.error('   ↳ Your WEB3FORMS_KEY is likely invalid. Get a new one at https://web3forms.com');
        }
      } catch (fetchErr) {
        // Network error reaching Web3Forms — log but don't fail the user
        console.warn('⚠️  Could not reach Web3Forms:', fetchErr);
      }
    } else {
      console.log('ℹ️  Web3Forms key not configured — submission logged to console only.');
    }

    // --- 5. Always return success to the client ---
    return NextResponse.json({ success: true });
  } catch (topLevelErr) {
    // Absolute last-resort catch — should never reach here
    console.error('❌ Unhandled error in /api/contact:', topLevelErr);
    return NextResponse.json({ success: true }); // still succeed for the user
  }
}
