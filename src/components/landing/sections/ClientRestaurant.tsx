"use client";

import { motion, useReducedMotion } from "framer-motion";

function ClientWhatsAppMockup() {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 border-b border-black/5 bg-[#075E54] px-4 py-3 text-white">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-[11px] font-bold">
          PB
        </div>
        <div>
          <div className="text-[13px] font-semibold">Pizzeria Bot</div>
          <div className="text-[11px] text-white/70">en ligne</div>
        </div>
      </div>

      <div className="space-y-3 bg-[#ECE5DD] p-4">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-[12px] leading-relaxed text-black">
          Bonjour, je voudrais 2 pizzas 4 saisons et une boisson
        </div>

        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] leading-relaxed text-black shadow-sm">
          Parfait ! Quelle taille pour vos pizzas ?
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["JUNIOR", "SENIOR", "MEGA"].map((size) => (
              <span
                key={size}
                className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold ${
                  size === "SENIOR"
                    ? "bg-[var(--brand)] text-white"
                    : "border border-black/10 bg-black/5 text-black/70"
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-[12px] text-black">
          SENIOR
        </div>

        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] leading-relaxed text-black shadow-sm">
          Quelle boisson 33cl ?
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Coca 33cl", "Fanta 33cl", "Oasis 33cl"].map((drink) => (
              <span
                key={drink}
                className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold ${
                  drink === "Coca 33cl"
                    ? "bg-[var(--brand)] text-white"
                    : "border border-black/10 bg-black/5 text-black/70"
                }`}
              >
                {drink}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] leading-relaxed text-black shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-wide text-black/50">
            Récapitulatif
          </div>
          <div className="mt-2 space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span>2× Pizza 4 saisons (SENIOR)</span>
              <span>36,00 €</span>
            </div>
            <div className="flex justify-between">
              <span>1× Coca 33cl</span>
              <span>1,70 €</span>
            </div>
            <div className="flex justify-between text-[var(--brand)]">
              <span>Offre à emporter</span>
              <span>-18,00 €</span>
            </div>
            <div className="flex justify-between border-t border-black/10 pt-1 font-bold">
              <span>Total</span>
              <span>19,70 €</span>
            </div>
          </div>
          <div className="mt-2 text-[11px] text-black/60">
            Répondez OUI pour valider votre commande.
          </div>
        </div>

        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] text-black shadow-sm">
          Commande <strong>#1234</strong> enregistrée ! Préparation en cours. Merci 🍕
        </div>
      </div>
    </div>
  );
}

function RestaurantDashboardMockup() {
  const timeline = [
    { label: "Reçue", time: "11:33", done: true },
    { label: "Confirmée", time: "11:33", done: true },
    { label: "En préparation", time: "11:40", done: true },
    { label: "Prête", time: "12:00", done: false },
    { label: "Terminée", time: "12:20", done: false },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
      <div className="border-b border-black/5 px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/50">
              Détail de la commande
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[15px] font-semibold text-black">Commande #1234</span>
              <span className="rounded-full bg-[rgba(37,211,102,0.15)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--brand)]">
                CONFIRMÉE
              </span>
            </div>
            <div className="mt-1 text-[11px] text-black/55">Reçue via WhatsApp • Aujourd&apos;hui 11:33</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-2">
        <div>
          <div className="space-y-2 text-[12px]">
            <div className="flex justify-between">
              <span className="text-black/70">2× Pizza 4 saisons (SENIOR)</span>
              <span className="font-medium">36,00 €</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/70">1× Coca 33cl</span>
              <span className="font-medium">1,70 €</span>
            </div>
            <div className="flex justify-between text-[var(--brand)]">
              <span>Offre à emporter</span>
              <span>-18,00 €</span>
            </div>
            <div className="flex justify-between border-t border-black/10 pt-2 text-[14px] font-bold">
              <span>Total</span>
              <span className="text-[var(--brand)]">19,70 €</span>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/50">
              Suivi de commande
            </div>
            <div className="mt-3 flex justify-between gap-1">
              {timeline.map((step) => (
                <div key={step.label} className="flex flex-1 flex-col items-center text-center">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold ${
                      step.done
                        ? "bg-[var(--brand)] text-white"
                        : "bg-black/5 text-black/40"
                    }`}
                  >
                    {step.done ? "✓" : "·"}
                  </div>
                  <div className="mt-1 text-[9px] font-medium text-black/70">{step.label}</div>
                  <div className="text-[9px] text-black/45">{step.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-black text-[12px] font-bold text-white">
              JD
            </div>
            <div>
              <div className="text-[13px] font-semibold text-black">Jean Dupont</div>
              <span className="rounded-full bg-[rgba(37,211,102,0.12)] px-2 py-0.5 text-[10px] font-semibold text-[var(--brand)]">
                Client fidèle
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-black/10 bg-white px-3 py-2 text-center">
              <div className="text-[16px] font-bold text-black">27</div>
              <div className="text-[10px] text-black/55">commandes</div>
            </div>
            <div className="rounded-xl border border-black/10 bg-white px-3 py-2 text-center">
              <div className="text-[16px] font-bold text-black">523 €</div>
              <div className="text-[10px] text-black/55">dépensés</div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {["Message client", "Ticket PDF"].map((action) => (
              <button
                key={action}
                type="button"
                className="rounded-xl border border-black/10 bg-white px-2 py-2 text-[10px] font-semibold text-black/70"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClientRestaurant() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
          Deux expériences, un seul flux
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
          Le client commande naturellement sur WhatsApp. Votre restaurant reçoit une commande
          structurée, confirmée et prête à préparer — avec suivi et historique client.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4">
            <h3 className="text-[18px] font-semibold tracking-tight text-black">
              Côté client
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-black/65">
              Message texte ou vocal, choix guidé (taille, boisson), récapitulatif automatique
              avec offres, puis validation en un clic. Zéro attente, zéro appel.
            </p>
          </div>
          <ClientWhatsAppMockup />
          <ul className="mt-4 space-y-2 text-[12px] text-black/60">
            <li>• Compréhension des messages texte et vocaux</li>
            <li>• Menus, options et promotions appliquées automatiquement</li>
            <li>• Confirmation instantanée avec numéro de commande</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          <div className="mb-4">
            <h3 className="text-[18px] font-semibold tracking-tight text-black">
              Côté restaurant
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-black/65">
              Commande reçue en temps réel, détail complet, suivi de préparation, fiche client
              et actions rapides (message, ticket, promotion ciblée).
            </p>
          </div>
          <RestaurantDashboardMockup />
          <ul className="mt-4 space-y-2 text-[12px] text-black/60">
            <li>• Transmission instantanée en cuisine ou sur tablette</li>
            <li>• Timeline de commande : reçue → confirmée → prête</li>
            <li>• Historique client et fidélisation intégrés</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
