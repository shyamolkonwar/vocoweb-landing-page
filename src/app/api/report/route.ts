import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { reportRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
    try {
        // Rate limiting based on IP
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
        const { success, limit, reset, remaining } = await reportRateLimit.limit(ip);

        if (!success) {
            return NextResponse.json(
                {
                    error: "Too many reports submitted. Please try again later.",
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
        const { name, email, severity, description, steps_to_reproduce } = body;

        // Basic validation
        if (!name || !email || !description || !severity) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Insert into Supabase
        const { error } = await supabaseAdmin
            .from("vulnerability_reports")
            .insert([
                {
                    name,
                    email,
                    severity,
                    description,
                    steps_to_reproduce: steps_to_reproduce || null,
                    created_at: new Date().toISOString(),
                },
            ]);

        if (error) {
            console.error("Supabase Error:", error);
            return NextResponse.json(
                { error: "Failed to save report" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Report submitted successfully" },
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
