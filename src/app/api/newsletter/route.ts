import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email' },
        { status: 400 }
      );
    }

    // Insert into MySQL
    // await db.query(
    //   'INSERT INTO email_subscriptions (email) VALUES (?)',
    //   [email]
    // );

    const GOOGLE_SHEET_WEBHOOK = process.env.NEXT_PUBLIC_GOOGLE_EMAIL_SUBSCRIBE_API;
    console.log(GOOGLE_SHEET_WEBHOOK)
    await new Promise((resolve) => setTimeout(resolve, 400));

    // Fire-and-forget request
     fetch(GOOGLE_SHEET_WEBHOOK as string, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(err => {
      console.error('Google Sheets webhook error:', err);
    });

    // Immediately return success
    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}