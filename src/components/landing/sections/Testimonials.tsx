"use client";

import { motion, useReducedMotion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Camille, Gérante",
    place: "Restaurant & Livraison",
    quote:
      "On a arrêté de perdre des commandes au téléphone. Rapidea répond vite, valide la demande et nos clients sont satisfaits.",
  },
  {
    name: "Yanis, Responsable",
    place: "Pizzeria",
    quote:
      "Les messages vocaux ne posent plus problème. L’assistant IA comprend, confirme et transmet — c’est fluide et fiable.",
  },
  {
    name: "Sarah, Propriétaire",
    place: "Boulangerie",
    quote:
      "La prise de commande est devenue simple : moins d’appels, moins d’erreurs, et un suivi plus clair pour l’équipe.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-black/80">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const reduced = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
        Témoignages
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
        Des retours qui reflètent ce que Rapidea apporte aux équipes : réactivité, moins d’erreurs et plus de temps pour le métier.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.03 }}
            className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)] backdrop-blur"
          >
            <Stars />
            <p className="mt-4 text-[14px] leading-relaxed text-black/75">
              “{t.quote}”
            </p>
            <div className="mt-5">
              <div className="text-[13px] font-semibold tracking-tight text-black">
                {t.name}
              </div>
              <div className="text-[12px] text-black/55">{t.place}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

