"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

function CircleIcon({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black/5 text-black/70 ring-1 ring-black/10">
      {children}
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    title: "Compréhension des messages texte",
    description: "L’IA interprète naturellement vos demandes, sans scripts rigides.",
    icon: <span aria-hidden="true">✦</span>,
  },
  {
    title: "Compréhension des messages vocaux",
    description: "Le vocal est compris et transformé en commande exploitable.",
    icon: <span aria-hidden="true">🎙️</span>,
  },
  {
    title: "Intelligence artificielle",
    description: "Conversationnel : validation, reformulation et prise de décision.",
    icon: <span aria-hidden="true">⚡</span>,
  },
  {
    title: "Catalogue produits",
    description: "Vos produits sont structurés pour guider la commande.",
    icon: <span aria-hidden="true">🗂️</span>,
  },
  {
    title: "Gestion automatique des commandes",
    description: "La commande est structurée puis transmise sans action manuelle.",
    icon: <span aria-hidden="true">✓</span>,
  },
  {
    title: "Livraison",
    description: "Rapidea traite livraison et détails associés.",
    icon: <span aria-hidden="true">🛵</span>,
  },
  {
    title: "Click & Collect",
    description: "Retrait préparé avec les informations nécessaires.",
    icon: <span aria-hidden="true">⌚</span>,
  },
  {
    title: "Paiement en ligne",
    description: "Accélérez le parcours client et réduisez les retards.",
    icon: <span aria-hidden="true">💳</span>,
  },
  {
    title: "Notifications",
    description: "Suivi des commandes et événements clés, en temps réel.",
    icon: <span aria-hidden="true">🔔</span>,
  },
  {
    title: "Historique",
    description: "Conservez les échanges et les commandes pour améliorer vos services.",
    icon: <span aria-hidden="true">🕘</span>,
  },
  {
    title: "Tableau de suivi",
    description: "Une vue claire pour piloter la préparation et l’exécution.",
    icon: <span aria-hidden="true">📈</span>,
  },
];

export function Features() {
  const reduced = useReducedMotion();

  return (
    <section
      id="features"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
            Fonctionnalités conçues pour l’opérationnel
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
            Tout est pensé pour transformer WhatsApp en une chaîne de commande fiable : compréhension,
            validation, transmission et suivi.
          </p>
        </div>
        <div className="mt-1 rounded-3xl border border-black/10 bg-white/70 px-5 py-3 text-[13px] text-black/70 backdrop-blur">
          Vert seulement là où c’est important : mise en avant produit et CTA.
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.02 }}
            className="group rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] backdrop-blur transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <CircleIcon>{f.icon}</CircleIcon>
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight text-black">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black/65">
                  {f.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

