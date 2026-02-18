import { NextRequest, NextResponse } from "next/server";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_API_URL = "https://connect.mailerlite.com/api";

interface SubscribeRequest {
  email: string;
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscribeRequest = await request.json();
    const { email, name, phone, service, message, source } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!MAILERLITE_API_KEY) {
      console.error("MAILERLITE_API_KEY is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare subscriber data for Mailerlite
    const subscriberData = {
      email,
      fields: {
        name: name || "",
        phone: phone || "",
        company: service || "", // Using company field for service interest
      },
      groups: [] as string[],
      status: "active",
    };

    // Add to appropriate group based on source/service
    // You can create groups in Mailerlite and add their IDs here
    // For now, we'll just add the subscriber

    // Create/update subscriber in Mailerlite
    const response = await fetch(`${MAILERLITE_API_URL}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify(subscriberData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Mailerlite API error:", data);
      return NextResponse.json(
        { error: "Failed to subscribe", details: data },
        { status: response.status }
      );
    }

    // If there's a message, we might want to send a notification email
    // For now, we'll just log it (you can integrate with Zoho later)
    if (message) {
      console.log("Contact form message:", {
        from: email,
        name,
        phone,
        service,
        message,
        source,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed",
      data: {
        id: data.data?.id,
        email: data.data?.email,
      },
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
