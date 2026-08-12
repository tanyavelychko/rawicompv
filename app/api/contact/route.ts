import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// testing recipient — replace with the production inbox before launch
const RECIPIENT_EMAIL = "tanya.velychko@gmail.com";

export async function POST(request: NextRequest) {
  const { name, company, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "RAWICOM PV Website <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
