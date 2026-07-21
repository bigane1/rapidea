"use client";

import { motion, useReducedMotion } from "framer-motion";

function DemoChat() {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 shadow-[0_30px_90px_rgba(0,0,0,0.07)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[rgba(37,211,102,0.12)] text-[var(--brand)]">
            WhatsApp
          </div>
          <div>
            <div className="text-[14px] font-semibold tracking-tight text-black">
              Commandes — Pizzeria (exemple)
            </div>
            <div className="text-[12px] text-black/55">Rapidea prend la commande</div>
          </div>
        </div>
        <div className="rounded-full bg-black/[0.03] px-3 py-1 text-[12px] font-semibold text-black/60">
          Démo
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex justify-end">
          <div className="max-w-[82%] rounded-2xl bg-black px-4 py-3 text-[13px] leading-relaxed text-white">
            Salut ! Je veux une pizzeria familiale pour 20h. Vous avez une offre ?
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex max-w-[82%] items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-3 shadow-sm">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[rgba(37,211,102,0.12)] text-[var(--brand)]">
              🎧
            </div>
            <div className="min-w-0">
              <div className="text-[12px] font-semibold text-black/80">
                Message vocal
              </div>
              <div className="text-[11px] text-black/55">00:41 • lecture en cours</div>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[86%] rounded-2xl bg-[rgba(37,211,102,0.12)] px-4 py-3 text-[13px] leading-relaxed text-black border border-black/5">
            Bien sûr. Je comprends : une pizzeria familiale pour 20h, et vous voulez l’offre.
            <div className="mt-2 text-[12px] text-black/65">
              Je confirme la commande : livraison ou retrait ?
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex justify-start"
        >
          <div className="max-w-[86%] rounded-2xl bg-[rgba(37,211,102,0.12)] px-4 py-3 text-[13px] leading-relaxed text-black border border-black/5">
            Parfait. Je prépare la commande.
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/70 px-3 py-1 text-[12px] font-semibold text-black/70 border border-black/10">
                1 pizzeria familiale
              </span>
              <span className="rounded-full bg-white/70 px-3 py-1 text-[12px] font-semibold text-black/70 border border-black/10">
                Livraison ou retrait
              </span>
            </div>
            <div className="mt-3 text-[12px] text-black/55">
              Transmission immédiate côté commerçant.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-black/5 px-6 py-4">
        <div className="flex items-center gap-3 rounded-2xl bg-black/5 px-4 py-3">
          <div className="h-2 w-2 rounded-full bg-black/30" />
          <div className="h-2 w-36 rounded-full bg-black/20" />
          <div className="ml-auto flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-white border border-black/10">
              <span className="text-[var(--brand)]" aria-hidden="true">
                ➤
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Demo() {
  const reduced = useReducedMotion();
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[26px] font-semibold tracking-tight text-black sm:text-[34px]">
            Une démonstration qui ressemble à la vraie vie
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
            Le client envoie d’abord un texte, puis un message vocal. Rapidea répond automatiquement,
            comprend la demande et prépare la commande à transmettre au commerçant.
          </p>
        </div>
        {!reduced ? (
          <div className="rounded-3xl border border-black/10 bg-white/70 px-5 py-4 backdrop-blur">
            <div className="text-[12px] font-semibold text-black/60">
              Discret mais premium
            </div>
            <div className="mt-1 text-[14px] font-semibold text-black">
              Animations subtiles
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <DemoChat />
        </motion.div>
      </div>
    </section>
  );
}

