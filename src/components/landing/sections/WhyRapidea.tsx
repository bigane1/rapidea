"use client";

import { motion, useReducedMotion } from "framer-motion";

type Item = {
  title: string;
  problem: string;
  solution: string;
};

const ITEMS: Item[] = [
  {
    title: "Trop d'appels",
    problem: "Les clients appellent pour commander… et vous n’avez pas le temps.",
    solution:
      "Rapidea automatise la conversation WhatsApp et capte les commandes 24/7.",
  },
  {
    title: "Erreurs de commande",
    problem: "Les détails se perdent entre appels, SMS et prises de notes.",
    solution:
      "L’IA comprend naturellement, valide la commande et limite les erreurs.",
  },
  {
    title: "Clients qui attendent",
    problem: "Pendant que vous répondez, le client cherche ailleurs.",
    solution: "Réponse instantanée : l’IA prend en charge le client en temps réel.",
  },
  {
    title: "Perte de temps",
    problem: "Le temps passé au téléphone n’est pas réinvesti dans votre métier.",
    solution: "Vous recevez une commande prête à traiter, directement transmise.",
  },
  {
    title: "Disponibilité limitée",
    problem: "Vous ne pouvez pas répondre partout : service, livraison, retrait.",
    solution:
      "Rapidea gère la demande côté WhatsApp et garde une expérience fluide.",
  },
];

function Icon({ index }: { index: number }) {
  return (
    <div
      className="grid h-11 w-11 place-items-center rounded-2xl bg-black/5 text-black/70 border border-black/5"
      aria-hidden="true"
    >
      <span className="text-[13px] font-semibold">{index + 1}</span>
    </div>
  );
}

export function WhyRapidea() {
  const reduced = useReducedMotion();

  return (
    <section id="why" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
          Pourquoi Rapidea ?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
          En fast-food, chaque minute compte. Rapidea transforme vos messages WhatsApp en commandes
          fiables, confirmées et immédiatement exploitables en préparation.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {ITEMS.map((it, idx) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.03 }}
            className="group rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <Icon index={idx} />
              <div>
                <h3 className="text-[16px] font-semibold tracking-tight text-black">
                  {it.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black/60">
                  <span className="font-semibold text-black/80">Problème :</span> {it.problem}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-black/70">
                  <span className="font-semibold text-black/80">Avec Rapidea :</span>{" "}
                  {it.solution}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

