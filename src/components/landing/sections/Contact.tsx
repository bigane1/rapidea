"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  COMPANY_WEBSITE,
  COMPANY_WEBSITE_DISPLAY,
  EMAIL_CONTACT,
  EMAIL_DISPLAY,
  TELEPHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  telHref,
  waHref,
} from "@/lib/constants";

type LeadPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

export function Contact() {
  const reduced = useReducedMotion();
  const whatsappLink = useMemo(() => waHref("Bonjour, je souhaite une démonstration Rapidea."), []);

  const [form, setForm] = useState<LeadPayload>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const subject = encodeURIComponent(`Demande de démo Rapidea - ${form.company}`);
      const body = encodeURIComponent(
        `Nom: ${form.name}
Entreprise: ${form.company}
Téléphone: ${form.phone}
Email: ${form.email}

${form.message}`
      );
      window.location.href = `mailto:${EMAIL_CONTACT}?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
            Contact
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
            Demandez une démo et recevez une présentation adaptée à votre commerce (texte + vocaux sur WhatsApp).
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-black/10 bg-white/70 px-5 py-4 text-left backdrop-blur transition-colors hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
            >
              <div className="text-[12px] font-semibold text-black/55">WhatsApp</div>
              <div className="mt-2 text-[15px] font-semibold tracking-tight text-black">
                {WHATSAPP_DISPLAY}
              </div>
              <div className="mt-2 text-[13px] text-black/65">Réponse rapide</div>
            </a>

            <a
              href={telHref()}
              className="rounded-3xl border border-black/10 bg-white/70 px-5 py-4 text-left backdrop-blur transition-colors hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
            >
              <div className="text-[12px] font-semibold text-black/55">Téléphone</div>
              <div className="mt-2 text-[15px] font-semibold tracking-tight text-black">
                {TELEPHONE_DISPLAY}
              </div>
              <div className="mt-2 text-[13px] text-black/65">Lun–Ven</div>
            </a>

            <a
              href={`mailto:${EMAIL_DISPLAY}`}
              className="rounded-3xl border border-black/10 bg-white/70 px-5 py-4 text-left backdrop-blur transition-colors hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
            >
              <div className="text-[12px] font-semibold text-black/55">Email</div>
              <div className="mt-2 text-[15px] font-semibold tracking-tight text-black">
                {EMAIL_DISPLAY}
              </div>
              <div className="mt-2 text-[13px] text-black/65">
                Démos, devis et informations.
              </div>
            </a>

            <a
              href={COMPANY_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 rounded-3xl border border-black/10 bg-white/70 px-5 py-4 text-left backdrop-blur transition-colors hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
            >
              <div className="text-[12px] font-semibold text-black/55">Site entreprise</div>
              <div className="mt-2 text-[15px] font-semibold tracking-tight text-black">
                {COMPANY_WEBSITE_DISPLAY}
              </div>
              <div className="mt-2 text-[13px] text-black/65">
                En savoir plus sur notre société.
              </div>
            </a>
          </div>

          <div className="mt-6 rounded-3xl border border-black/10 bg-white/70 p-5 backdrop-blur">
            <div className="text-[13px] font-semibold text-black/70">
              Objectif
            </div>
            <div className="mt-2 text-[13px] leading-relaxed text-black/70">
              Obtenir une démo qui montre exactement comment l’assistant IA valide et transmet les commandes.
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:max-w-[520px]"
        >
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[16px] font-semibold tracking-tight text-black">
                  Recevoir une démonstration
                </div>
                <div className="mt-2 text-[13px] text-black/65">
                  Formulaire simple. Aucun compte à créer.
                </div>
              </div>
              <div className="hidden sm:block rounded-2xl border border-black/10 bg-black/5 px-3 py-2 text-[12px] font-semibold text-black/70">
                Réponse sous 24h
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[12px] font-semibold text-black/55">
                    Nom
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[14px] text-black outline-none focus:ring-2 focus:ring-[rgba(37,211,102,0.45)]"
                    placeholder="Votre nom"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-semibold text-black/55">
                    Entreprise
                  </span>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm((v) => ({ ...v, company: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[14px] text-black outline-none focus:ring-2 focus:ring-[rgba(37,211,102,0.45)]"
                    placeholder="Nom du commerce"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[12px] font-semibold text-black/55">
                    Téléphone
                  </span>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[14px] text-black outline-none focus:ring-2 focus:ring-[rgba(37,211,102,0.45)]"
                    placeholder="Ex: +33 6 12 34 56 78"
                    autoComplete="tel"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-semibold text-black/55">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[14px] text-black outline-none focus:ring-2 focus:ring-[rgba(37,211,102,0.45)]"
                    placeholder="email@domaine.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[12px] font-semibold text-black/55">
                  Message
                </span>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                  className="mt-2 min-h-[120px] w-full resize-y rounded-2xl border border-black/10 bg-white px-4 py-3 text-[14px] text-black outline-none focus:ring-2 focus:ring-[rgba(37,211,102,0.45)]"
                  placeholder="Décrivez votre activité et votre besoin (commandes WhatsApp, livraison/retrait, etc.)"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--brand)] px-6 text-[14px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.55)]"
              >
                {status === "sending"
                  ? "Envoi..."
                  : status === "sent"
                    ? "Merci ! Nous vous contactons."
                    : status === "error"
                      ? "Une erreur est survenue."
                      : "Recevoir une démonstration"}
              </button>

              {!reduced && status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[12px] text-black/55"
                >
                  Vous pouvez aussi nous écrire directement sur WhatsApp.
                </motion.div>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

