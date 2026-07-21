import Link from "next/link";
import { Logo } from "../Logo";
import {
  COMPANY_WEBSITE,
  COMPANY_WEBSITE_DISPLAY,
  EMAIL_DISPLAY,
  TELEPHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  telHref,
  waHref,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <div className="mt-4 text-[13px] leading-relaxed text-black/65">
              L’intelligence artificielle au service de vos commandes WhatsApp.
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:gap-12">
            <div>
              <div className="text-[12px] font-semibold text-black/55">Légal</div>
              <div className="mt-3 space-y-2">
                <Link
                  href="/mentions-legales"
                  className="block text-[13px] font-medium text-black/70 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/politique-de-confidentialite"
                  className="block text-[13px] font-medium text-black/70 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
                >
                  Politique de confidentialité
                </Link>
              </div>
            </div>

            <div>
              <div className="text-[12px] font-semibold text-black/55">Contact</div>
              <div className="mt-3 space-y-2">
                <a
                  href={waHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[13px] font-medium text-black/70 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
                >
                  WhatsApp : {WHATSAPP_DISPLAY}
                </a>
                <a
                  href={telHref()}
                  className="block text-[13px] font-medium text-black/70 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
                >
                  Téléphone : {TELEPHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL_DISPLAY}`}
                  className="block text-[13px] font-medium text-black/70 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
                >
                  Email : {EMAIL_DISPLAY}
                </a>
                <a
                  href={COMPANY_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[13px] font-medium text-black/70 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
                >
                  Site : {COMPANY_WEBSITE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-[12px] text-black/50">
          © {new Date().getFullYear()} Rapidea — édité par Monsieur Abdellatif
          BIGANE (BiganeWay). Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

