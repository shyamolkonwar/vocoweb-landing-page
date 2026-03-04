import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { waitlistRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    // Rate limiting based on IP
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const { success, limit, reset, remaining } = await waitlistRateLimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          reset: new Date(reset).toISOString(),
          limit,
          remaining,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": new Date(reset).toISOString(),
            "Retry-After": Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    const body = await req.json();
    const { email, name, business_name, country } = body;

    // Basic validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!country || typeof country !== 'string') {
      return NextResponse.json(
        { error: "Country is required" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error } = await supabaseAdmin
      .from("waitlist")
      .insert([
        {
          email: email.toLowerCase(),
          name: name.trim(),
          business_name: business_name?.trim() || null,
          country: country.trim(),
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      // Check for unique constraint violation
      if (error.code === '23505') {
        return NextResponse.json(
          { error: "You're already on the waitlist" },
          { status: 409 }
        );
      }
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully joined waitlist" },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": new Date(reset).toISOString(),
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
