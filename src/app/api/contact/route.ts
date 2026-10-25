import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, consent } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Lütfen geçerli bir ad soyad giriniz.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Lütfen geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      return NextResponse.json(
        { error: 'Lütfen bir konu başlığı belirtiniz.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Mesajınız en az 10 karakterden oluşmalıdır.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Lütfen gizlilik onayını veriniz.' },
        { status: 400 }
      );
    }

    // Process inquiry
    // In production, this can send an email via Resend, Postmark, or SMTP.
    console.log('[Contact Inquiry Received]:', {
      name,
      email,
      subject,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'İletişim talebiniz başarıyla teslim alınmıştır.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Sunucu tarafında bir hata oluştu.' },
      { status: 500 }
    );
  }
}
