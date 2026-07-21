"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";

type Faq = { q: string; a: string };

const FAQ: Faq[] = [
  {
    q: "Rapidea est-il un chatbot ?",
    a: "Non. Rapidea est un assistant IA conversationnel : il comprend les messages (texte et vocaux), répond automatiquement, prend les commandes, les valide et les transmet directement au commerçant.",
  },
  {
    q: "Rapidea comprend-il les messages vocaux ?",
    a: "Oui. L’assistant peut écouter, comprendre et traiter les demandes transmises en vocal, comme il le fait pour les messages texte.",
  },
  {
    q: "Comment la commande est-elle transmise au commerçant ?",
    a: "Dès que la commande est validée, Rapidea la transmet instantanément au commerçant afin de lancer la préparation (livraison ou retrait).",
  },
  {
    q: "Pour quels métiers Rapidea fonctionne ?",
    a: "Restaurants, snacks, pizzerias, boulangeries, boucheries et plus largement tous commerces alimentaires (et certains services) qui veulent automatiser leur relation client via WhatsApp.",
  },
  {
    q: "Quels sont les tarifs Rapidea ?",
    a: "Le Pack Normal est à 90 €/mois. L’onboarding (installation, flyer sur mesure et intégration du menu) est à 285 € en paiement unique. Le Pack Premium, à 150 €/mois, inclut un paramétrage sur mesure et un design de flyer personnalisé chaque mois.",
  },
  {
    q: "Combien de temps faut-il pour démarrer ?",
    a: "Avec l’onboarding à 285 €, nous configurons votre menu, créons votre flyer et intégrons tout dans l’application. La mise en route est rapide, avec un accompagnement complet.",
  },
  {
    q: "Est-ce que Rapidea réduit les erreurs ?",
    a: "Oui. L’IA valide la commande et clarifie les points manquants, ce qui diminue fortement les oublis et les approximations.",
  },
];

export function FAQSection() {
  const reduced = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6"
    >
      <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
        FAQ
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
        Les réponses aux questions les plus fréquentes pour lancer rapidement un assistant IA sur WhatsApp.
      </p>

      <div className="mt-10 space-y-3">
        {FAQ.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div
              key={item.q}
              className="rounded-3xl border border-black/10 bg-white/70 px-4 shadow-[0_20px_60px_rgba(0,0,0,0.02)] backdrop-blur"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 py-4 text-left"
                aria-expanded={open}
                onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
              >
                <span className="text-[14px] font-semibold tracking-tight text-black">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white/60"
                >
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: reduced ? 0.15 : 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-[13px] leading-relaxed text-black/70">
                      {item.a}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

