import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message } = body;

    const apiKey = process.env.WEB3FORMS_KEY;
    if (!apiKey || apiKey === 'your_web3forms_access_key_here') {
      return NextResponse.json(
        { success: false, error: 'API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: apiKey,
        subject: `New Project Inquiry — ${projectType || 'General'}`,
        name,
        email,
        'Project Type': projectType,
        message,
        from_name: '24X Construction Website',
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: data.message ?? 'Submission failed' },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
