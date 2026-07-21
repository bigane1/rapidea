import nodemailer from "nodemailer";
import { EMAIL_CONTACT } from "@/lib/constants";

export type LeadPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variable d'environnement manquante: ${name}`);
  }
  return value;
}

export function createSmtpTransport() {
  const host = process.env.SMTP_HOST || "smtp.mail.ovh.net";
  const port = Number(process.env.SMTP_PORT || "587");
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendLeadEmail(lead: LeadPayload) {
  const transporter = createSmtpTransport();
  const from = process.env.SMTP_FROM || EMAIL_CONTACT;
  const to = process.env.SMTP_TO || EMAIL_CONTACT;

  const subject = `Nouvelle demande Rapidea — ${lead.company}`;
  const text = [
    "Nouvelle demande de démonstration Rapidea",
    "",
    `Nom : ${lead.name}`,
    `Entreprise : ${lead.company}`,
    `Téléphone : ${lead.phone}`,
    `Email : ${lead.email}`,
    "",
    "Message :",
    lead.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2 style="margin:0 0 12px">Nouvelle demande Rapidea</h2>
      <p style="margin:0 0 16px">Une demande de démonstration vient d'être envoyée depuis le site.</p>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        <tr><td style="padding:8px 0;font-weight:bold">Nom</td><td style="padding:8px 0">${escapeHtml(lead.name)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Entreprise</td><td style="padding:8px 0">${escapeHtml(lead.company)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Téléphone</td><td style="padding:8px 0">${escapeHtml(lead.phone)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Email</td><td style="padding:8px 0">${escapeHtml(lead.email)}</td></tr>
      </table>
      <p style="margin:16px 0 8px;font-weight:bold">Message</p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(lead.message)}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `Rapidea <${from}>`,
    to,
    replyTo: lead.email,
    subject,
    text,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
