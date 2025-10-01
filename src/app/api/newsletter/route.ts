
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }

    // Insert into MySQL
    await db.query(
      'INSERT INTO email_subscriptions (email) VALUES (?)',
      [email]
    );

    return new Response(JSON.stringify({ message: 'Subscribed successfully!' }), { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
