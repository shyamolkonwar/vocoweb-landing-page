import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
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
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
