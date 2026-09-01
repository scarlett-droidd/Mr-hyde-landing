import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa Resend con tu API Key que viene del archivo .env
const resend = new Resend(process.env.RESEND_API_KEY);

// El email a donde quieres RECIBIR los correos de tus distribuidores
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'tucorreo@empresa.com';

// El email desde donde se ENVÍAN los correos (debe ser un dominio verificado en Resend)
// Por defecto, mientras pruebas y si no tienes dominio verificado, Resend usa este:
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(req: Request) {
  try {
    // Recibimos los datos que manda el formulario (cta-section.tsx)
    const body = await req.json();
    const { _replyto, _subject, message } = body;

    if (!message || !_replyto) {
      return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: `Mr. Hyde Web <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: _replyto,
      subject: _subject || `Nueva solicitud de distribución`,
      text: message,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error enviando email con Resend:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
