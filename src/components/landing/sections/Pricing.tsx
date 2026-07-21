"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Plan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Pack Normal",
    price: "90 €",
    period: "/ mois",
    description: "L’abonnement essentiel pour automatiser vos commandes WhatsApp au quotidien.",
    features: [
      "Assistant IA sur WhatsApp",
      "Prise de commandes texte et vocal",
      "Catalogue produits intégré",
      "Gestion automatique des commandes",
      "Notifications en temps réel",
      "Historique des commandes",
    ],
    cta: "Demander une démo",
  },
  {
    name: "Onboarding & Installation",
    price: "285 €",
    description: "Mise en route complète pour démarrer rapidement avec une solution clé en main.",
    features: [
      "Installation et paramétrage initial",
      "Création d’un flyer sur mesure",
      "Intégration de votre menu dans l’application",
      "Accompagnement au lancement",
      "Configuration WhatsApp Business",
    ],
    highlighted: true,
    badge: "Démarrage",
    cta: "Commencer l’installation",
  },
  {
    name: "Pack Premium",
    price: "150 €",
    period: "/ mois",
    description: "Pour les établissements qui veulent un accompagnement sur mesure et une identité visuelle renforcée.",
    features: [
      "Tout le Pack Normal inclus",
      "Paramétrage sur mesure avancé",
      "1 design de flyer personnalisé par mois",
      "Promotions et offres ciblées",
      "Support prioritaire",
      "Évolutions personnalisées",
    ],
    cta: "Choisir le Premium",
  },
];

export function Pricing() {
  const reduced = useReducedMotion();

  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
          Tarifs transparents
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
          Un abonnement simple, une installation clé en main, et une option premium pour aller plus loin.
          Sans engagement caché — contactez-nous pour un devis personnalisé.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {PLANS.map((plan, idx) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
            className={cn(
              "relative flex flex-col rounded-3xl border p-6 backdrop-blur",
              plan.highlighted
                ? "border-[var(--brand)] bg-white shadow-[0_20px_60px_rgba(37,211,102,0.12)]"
                : "border-black/10 bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.03)]"
            )}
          >
            {plan.badge ? (
              <span className="absolute -top-3 left-6 rounded-full bg-[var(--brand)] px-3 py-1 text-[11px] font-bold text-white">
                {plan.badge}
              </span>
            ) : null}

            <h3 className="text-[16px] font-semibold tracking-tight text-black">
              {plan.name}
            </h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[36px] font-bold tracking-tight text-black">
                {plan.price}
              </span>
              {plan.period ? (
                <span className="text-[14px] text-black/55">{plan.period}</span>
              ) : null}
            </div>
            {!plan.period && plan.price === "285 €" ? (
              <div className="text-[12px] text-black/50">paiement unique</div>
            ) : null}

            <p className="mt-4 text-[13px] leading-relaxed text-black/65">
              {plan.description}
            </p>

            <ul className="mt-6 flex-1 space-y-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-[13px] text-black/70">
                  <span
                    className="mt-0.5 text-[var(--brand)]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={cn(
                "mt-8 inline-flex h-11 items-center justify-center rounded-full text-[13px] font-semibold transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.55)]",
                plan.highlighted
                  ? "bg-[var(--brand)] text-white"
                  : "border border-black/10 bg-white text-black/80 hover:bg-black/[0.03]"
              )}
            >
              {plan.cta}
            </a>
          </motion.article>
        ))}
      </div>

      <p className="mt-8 text-center text-[12px] text-black/50">
        L&apos;onboarding (285 €) est requis pour la première mise en service. L&apos;abonnement Pack Normal ou Premium démarre ensuite.
      </p>
    </section>
  );
}
