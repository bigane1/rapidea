"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

function Check() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(37,211,102,0.14)] text-[var(--brand)] ring-1 ring-[rgba(37,211,102,0.18)]"
    >
      ✓
    </span>
  );
}

function Cross() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-black/5 text-black/60 ring-1 ring-black/10"
    >
      —
    </span>
  );
}

export function Compare() {
  const reduced = useReducedMotion();

  const rows = [
    { label: "Temps", tel: "Manuel & lent", rap: "Automatisé instantanément" },
    { label: "Disponibilité", tel: "Limitée", rap: "24/7" },
    { label: "Erreurs", tel: "Possibles", rap: "Validées par IA" },
    { label: "Réactivité", tel: "Selon l’équipe", rap: "Temps réel" },
    { label: "Satisfaction client", tel: "Variable", rap: "Améliorée" },
  ] as const;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
            Pourquoi choisir Rapidea ?
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
            Comparez la prise de commandes classique à une expérience conversationnelle, moderne et fiable.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/70 px-5 py-3 text-[13px] text-black/70 backdrop-blur">
          Performance opérationnelle avant tout
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white/70 backdrop-blur"
      >
        <div className="grid grid-cols-2 border-b border-black/10 bg-white/80">
          <div className="px-6 py-5">
            <div className="text-[14px] font-semibold tracking-tight text-black">
              Téléphone traditionnel
            </div>
            <div className="mt-1 text-[12px] text-black/55">
              Réponses humaines, selon la disponibilité
            </div>
          </div>
          <div className="px-6 py-5 bg-[linear-gradient(90deg,rgba(37,211,102,0.12),rgba(37,211,102,0.04))]">
            <div className="text-[14px] font-semibold tracking-tight text-black">
              Rapidea
            </div>
            <div className="mt-1 text-[12px] text-black/55">
              Assistant IA conversationnel
            </div>
          </div>
        </div>

        <div className="divide-y divide-black/10">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-2">
              <div className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="min-w-[150px] text-[13px] font-medium text-black/70">
                    {r.label}
                  </span>
                  <Cross />
                </div>
                <div className="mt-2 text-[13px] text-black/65">{r.tel}</div>
              </div>
              <div className="px-6 py-4 bg-[linear-gradient(90deg,rgba(37,211,102,0.10),transparent)]">
                <div className="flex items-center gap-3">
                  <span className="min-w-[150px] text-[13px] font-medium text-black/70">
                    {r.label}
                  </span>
                  <Check />
                </div>
                <div className="mt-2 text-[13px] text-black/70">{r.rap}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {reduced ? null : (
        <div className="mt-6 text-[12px] text-black/55">
          Remarque : ce tableau est une comparaison indicative. Le ressenti dépend de votre organisation et de votre catalogue.
        </div>
      )}
    </section>
  );
}

