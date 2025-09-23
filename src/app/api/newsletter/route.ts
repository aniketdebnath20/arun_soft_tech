
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Here you would typically integrate with a real newsletter service
    // like Mailchimp, ConvertKit, etc.
    // For this example, we'll just simulate a successful subscription.
    console.log(`Subscribing email: ${email}`);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // You can add logic here to simulate an error if you want to test the UI
    // if (email.includes('error')) {
    //   return NextResponse.json({ message: 'This email address is blocked.' }, { status: 400 });
    // }

    return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
