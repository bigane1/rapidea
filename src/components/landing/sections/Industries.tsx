"use client";

import { motion, useReducedMotion } from "framer-motion";

const INDUSTRIES = [
  { name: "Fast-food", emoji: "🍔" },
  { name: "Snack", emoji: "🥤" },
  { name: "Pizzeria", emoji: "🍕" },
  { name: "Tacos & Burgers", emoji: "🌮" },
  { name: "Sandwicherie", emoji: "🥪" },
  { name: "Kebab", emoji: "🥙" },
  { name: "Boulangerie snack", emoji: "🥖" },
  { name: "Restaurant rapide", emoji: "🍟" },
];

export function Industries() {
  const reduced = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
        Pour quels métiers ?
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
        Rapidea est d’abord pensé pour le fast-food et la restauration rapide : forte cadence,
        commandes répétitives, options de menu et besoin de réactivité immédiate.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((i, idx) => (
          <motion.article
            key={i.name}
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.02 }}
            className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black/5 ring-1 ring-black/10 text-black/70">
                <span aria-hidden="true">{i.emoji}</span>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight text-black">
                  {i.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black/65">
                  Automatisation des demandes via WhatsApp.
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

