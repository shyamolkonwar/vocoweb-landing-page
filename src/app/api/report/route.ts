import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
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

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
