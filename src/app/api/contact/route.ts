import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { contactRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
    try {
        // Rate limiting based on IP
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
        const { success, limit, reset, remaining } = await contactRateLimit.limit(ip);

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
        const { name, email, type, message } = body;

        // Basic generic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Insert into Supabase
        // Note: The user confirmed they have a table 'contact_inquiries' with these columns.
        const { error } = await supabaseAdmin
            .from("contact_inquiries")
            .insert([
                {
                    name,
                    email,
                    type: type || "general",
                    message,
                    created_at: new Date().toISOString(),
                },
            ]);

        if (error) {
            console.error("Supabase Error:", error);
            return NextResponse.json(
                { error: "Failed to save inquiry" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Inquiry received" },
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
