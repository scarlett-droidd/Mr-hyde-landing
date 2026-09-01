import { NextResponse } from 'next/server';

export const runtime = 'edge';

// El email a donde quieres RECIBIR los correos de tus distribuidores
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'info@mrhydecartridges.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'info@mrhydecartridges.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { _replyto, _subject, message } = body;

    if (!message || !_replyto) {
      return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Mr. Hyde Web <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: _replyto,
        subject: _subject || `Nueva solicitud de distribución`,
        text: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error enviando email con Resend:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
