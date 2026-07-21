"use client";

import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    title: "Le client écrit ou envoie un message vocal",
    detail: "Texte ou audio : l’IA capte la demande.",
  },
  {
    title: "L’IA comprend la demande",
    detail: "Elle identifie les produits, quantités et contraintes.",
  },
  {
    title: "Rapidea confirme automatiquement la commande",
    detail: "Validation instantanée pour éviter les erreurs.",
  },
  {
    title: "Le commerçant reçoit la commande",
    detail: "Transmission immédiate côté établissement.",
  },
  {
    title: "Préparation",
    detail: "Votre équipe prépare avec des informations claires.",
  },
  {
    title: "Livraison ou retrait",
    detail: "L’exécution suit le choix du client.",
  },
];

export function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <section
      id="how"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6"
    >
      <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
        Comment fonctionne Rapidea ?
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
        Une expérience fluide pour vos clients, et une exécution fiable pour votre établissement.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative rounded-3xl border border-black/10 bg-white/70 p-4 backdrop-blur">
            <div className="absolute inset-x-0 top-5 hidden h-[2px] bg-gradient-to-r from-black/10 via-[rgba(37,211,102,0.25)] to-black/10 lg:block" />
            <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-4">
              {STEPS.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.02 }}
                  className="rounded-2xl border border-black/10 bg-white/80 p-5 lg:flex-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 grid h-9 w-9 place-items-center rounded-2xl bg-black text-white">
                      <span className="text-[13px] font-semibold">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold tracking-tight text-black">
                        {s.title}
                      </div>
                      <div className="mt-2 text-[13px] leading-relaxed text-black/65">
                        {s.detail}
                      </div>
                    </div>
                  </div>
                  {idx < STEPS.length - 1 ? (
                    <div className="mt-4 flex items-center gap-2 lg:hidden">
                      <span className="h-8 w-px bg-black/10" />
                      <span className="text-black/50" aria-hidden="true">
                        ↓
                      </span>
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
            <h3 className="text-[16px] font-semibold tracking-tight text-black">
              Résultat
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-black/70">
              Vos clients reçoivent une réponse immédiate. Votre établissement reçoit une commande claire,
              validée et prête à préparer.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 py-3">
                <span className="text-[13px] font-medium text-black/70">Réactivité</span>
                <span className="text-[13px] font-semibold text-black">
                  Temps réel
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 py-3">
                <span className="text-[13px] font-medium text-black/70">
                  Fiabilité
                </span>
                <span className="text-[13px] font-semibold text-black">
                  Validation IA
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 py-3">
                <span className="text-[13px] font-medium text-black/70">
                  Transmission
                </span>
                <span className="text-[13px] font-semibold text-black">
                  Instantanée
                </span>
              </div>
            </div>

            <div className="mt-6 text-[12px] text-black/55">
              Rapidea n’est pas un chatbot classique : c’est un assistant IA conversationnel conçu pour prendre des commandes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

