"use client";

import { motion, useReducedMotion } from "framer-motion";
import { waHref } from "@/lib/constants";

function PhoneMockup() {
  const bubbles = [
    {
      kind: "user" as const,
      text: "Bonsoir ! Je voudrais une pizza 4 fromages (taille familiale) pour ce soir.",
    },
    {
      kind: "user" as const,
      voice: true as const,
      label: "Message vocal • 0:24",
    },
    {
      kind: "ai" as const,
      text: "Parfait. Vous préférez une livraison ou un retrait ?",
    },
    {
      kind: "ai" as const,
      text: "Je prépare aussi la commande : 1 pizza 4 fromages (familiale).",
    },
    {
      kind: "ai" as const,
      text: "Confirmez simplement : livraison ou retrait, et votre adresse si livraison.",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[44px] bg-[rgba(37,211,102,0.10)] blur-2xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative overflow-hidden rounded-[38px] border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[rgba(37,211,102,0.12)] text-[10px] font-bold text-[var(--brand)]">
              IA
            </span>
            <div className="leading-tight">
              <div className="text-[12px] font-semibold text-black">Rapidea</div>
              <div className="text-[11px] text-black/55">En ligne</div>
            </div>
          </div>
          <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
        </div>

        <div className="flex flex-col gap-3 px-4 py-5">
          {bubbles.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
              className={b.kind === "user" ? "self-end max-w-[86%]" : "self-start max-w-[86%]"}
            >
              {b.voice ? (
                <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-sm">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl bg-[rgba(37,211,102,0.12)] text-[var(--brand)]"
                    aria-hidden="true"
                  >
                    🎤
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-[12px] font-medium text-black/80">
                      Message vocal
                    </div>
                    <div className="text-[11px] text-black/55">{b.label}</div>
                  </div>
                </div>
              ) : (
                <div
                  className={[
                    "rounded-2xl px-3 py-2 text-[13px] leading-relaxed shadow-sm",
                    b.kind === "user"
                      ? "bg-black text-white"
                      : "bg-[rgba(37,211,102,0.10)] text-black border border-black/5",
                  ].join(" ")}
                >
                  {b.text}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="border-t border-black/5 px-4 py-3">
          <div className="flex items-center gap-3 rounded-2xl bg-black/5 px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-black/30" />
            <div className="h-2 w-24 rounded-full bg-black/20" />
            <div className="ml-auto grid h-8 w-8 place-items-center rounded-full bg-white">
              <span className="text-[var(--brand)]" aria-hidden="true">
                ➤
              </span>
            </div>
          </div>
          <div className="mt-2 text-[11px] text-black/50">
            Rapidea confirme et transmet automatiquement la commande.
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative scroll-mt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-16">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--brand)]" aria-hidden="true" />
              <span className="text-[12px] font-semibold tracking-tight text-black/80">
                Intelligence artificielle pour commandes WhatsApp
              </span>
            </div>

            <h1 className="mt-5 text-[40px] font-semibold tracking-tight text-black sm:text-[52px]">
              L’assistant IA qui prend vos commandes fast-food sur WhatsApp.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-black/70 sm:text-[17px]">
              Rapidea comprend les messages texte et vocaux, répond instantanément, confirme les
              commandes et les transmet en direct à votre snack, pizzeria ou restaurant rapide.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 text-[14px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.55)]"
              >
                Demander une démonstration
              </a>
              <a
                href={waHref("Bonjour, je souhaite une démo Rapidea pour mon commerce.")} // TODO: personnaliser le message
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-[14px] font-semibold text-black/80 transition-colors hover:bg-black/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
              >
                Discuter sur WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-[12px] text-black/60">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/30" aria-hidden="true" />
                Réponse instantanée
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/30" aria-hidden="true" />
                Menus et options compris
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/30" aria-hidden="true" />
                Transmission en cuisine
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <PhoneMockup />
          </motion.div>

          {!reduced ? (
            <motion.div
              aria-hidden="true"
              className="absolute -bottom-10 left-3 hidden h-24 w-24 rounded-full bg-[rgba(37,211,102,0.10)] blur-xl lg:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

