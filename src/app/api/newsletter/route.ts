import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  if (!API_KEY || !LIST_ID) {
    return NextResponse.json(
      { error: "Newsletter service not configured" },
      { status: 500 }
    );
  }

  const DC = API_KEY.split("-").pop();

  const response = await fetch(
    `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    }
  );

  if (response.ok) {
    return NextResponse.json({ success: true });
  }

  const data = await response.json();

  if (data.title === "Member Exists") {
    return NextResponse.json({ error: "Already subscribed" }, { status: 409 });
  }

  return NextResponse.json(
    { error: "Something went wrong. Please try again." },
    { status: 500 }
  );
}
