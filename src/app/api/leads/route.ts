import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      company?: string;
      phone?: string;
      email?: string;
      message?: string;
    };

    const required = ["name", "company", "phone", "email", "message"] as const;
    for (const key of required) {
      if (!body[key] || typeof body[key] !== "string" || body[key]!.trim().length === 0) {
        return NextResponse.json(
          { ok: false, error: `Champ manquant: ${key}` },
          { status: 400 }
        );
      }
    }

    const lead = {
      name: body.name!.trim(),
      company: body.company!.trim(),
      phone: body.phone!.trim(),
      email: body.email!.trim(),
      message: body.message!.trim(),
    };

    await sendLeadEmail(lead);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur envoi lead SMTP:", error);
    return NextResponse.json(
      { ok: false, error: "Impossible d'envoyer la demande pour le moment." },
      { status: 500 }
    );
  }
}
