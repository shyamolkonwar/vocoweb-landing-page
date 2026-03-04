import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;

        // Basic validation
        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: "Email is required" },
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

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
