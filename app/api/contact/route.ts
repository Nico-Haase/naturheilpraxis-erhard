import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase";
// import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, concern } = body;

    if (!name || !email || !concern) {
      return NextResponse.json(
        { message: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    /**
     * 1) Hier kannst du später Leads in Supabase speichern:
     *
     * if (supabase) {
     *   await supabase.from("leads").insert({
     *     name,
     *     email,
     *     phone,
     *     concern,
     *     source: "website-contact-form",
     *   });
     * }
     */

    /**
     * 2) Hier kannst du später Resend für E-Mail-Benachrichtigungen einsetzen:
     *
     * if (resend) {
     *   await resend.emails.send({
     *     from: "Website <onboarding@resend.dev>",
     *     to: process.env.PRACTICE_NOTIFICATION_EMAIL!,
     *     subject: "Neue Anfrage über die Website",
     *     html: `
     *       <h2>Neue Kontaktanfrage</h2>
     *       <p><strong>Name:</strong> ${name}</p>
     *       <p><strong>E-Mail:</strong> ${email}</p>
     *       <p><strong>Telefon:</strong> ${phone || "-"}</p>
     *       <p><strong>Anliegen:</strong><br/>${concern}</p>
     *     `,
     *   });
     * }
     */

    console.log("Neue Kontaktanfrage:", { name, email, phone, concern });

    return NextResponse.json(
      { message: "Anfrage erfolgreich gesendet." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Serverfehler beim Senden der Anfrage." },
      { status: 500 }
    );
  }
}