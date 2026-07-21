import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import {
  COMPANY_WEBSITE,
  EMAIL_DISPLAY,
  LEGAL,
  PRODUCT_WEBSITE,
  TELEPHONE_DISPLAY,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Rapidea, édité par Monsieur Abdellatif BIGANE (BiganeWay).",
};

export default function MentionsLegalesPage() {
  return (
    <LegalShell title="Mentions légales" updatedAt="21 juillet 2026">
      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          1. Éditeur du site
        </h2>
        <p className="mt-3">
          Le site <strong>{PRODUCT_WEBSITE.replace("https://", "")}</strong> et
          la solution <strong>{LEGAL.productName}</strong> sont édités par :
        </p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Raison sociale :</strong> {LEGAL.publisherName}
          </li>
          <li>
            <strong>Nom commercial :</strong> {LEGAL.tradeName}
          </li>
          <li>
            <strong>Forme juridique :</strong> {LEGAL.legalForm}
          </li>
          <li>
            <strong>Responsable de la publication :</strong> {LEGAL.director}
          </li>
          <li>
            <strong>Adresse du siège :</strong> {LEGAL.address},{" "}
            {LEGAL.postalCode} {LEGAL.city}, {LEGAL.country}
          </li>
          <li>
            <strong>SIREN :</strong> {LEGAL.siren}
          </li>
          <li>
            <strong>SIRET :</strong> {LEGAL.siret}
          </li>
          <li>
            <strong>N° TVA intracommunautaire :</strong> {LEGAL.tva}
          </li>
          <li>
            <strong>Code APE / NAF :</strong> {LEGAL.naf}
          </li>
          <li>
            <strong>Date de création :</strong> {LEGAL.creationDate}
          </li>
          <li>
            <strong>Activité :</strong> {LEGAL.activity}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          2. Contact
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            Email :{" "}
            <a className="underline decoration-black/20 hover:decoration-black/50" href={`mailto:${EMAIL_DISPLAY}`}>
              {EMAIL_DISPLAY}
            </a>
          </li>
          <li>Téléphone / WhatsApp : {TELEPHONE_DISPLAY}</li>
          <li>
            Site entreprise :{" "}
            <a
              className="underline decoration-black/20 hover:decoration-black/50"
              href={COMPANY_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              {COMPANY_WEBSITE.replace("https://", "")}
            </a>
          </li>
          <li>
            Site produit :{" "}
            <a
              className="underline decoration-black/20 hover:decoration-black/50"
              href={PRODUCT_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              {PRODUCT_WEBSITE.replace("https://", "")}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          3. Hébergement
        </h2>
        <p className="mt-3">
          Le site est hébergé par :
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Hébergeur :</strong> {LEGAL.hosting.name}
          </li>
          <li>
            <strong>Adresse :</strong> {LEGAL.hosting.address}
          </li>
          <li>
            <strong>Site :</strong>{" "}
            <a
              className="underline decoration-black/20 hover:decoration-black/50"
              href={LEGAL.hosting.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com
            </a>
          </li>
        </ul>
        <p className="mt-3 text-black/60">
          Si l&apos;hébergement est modifié (OVH, autre prestataire), cette
          section sera mise à jour en conséquence.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          4. Objet du site
        </h2>
        <p className="mt-3">
          Le site présente la solution <strong>Rapidea</strong>, un assistant IA
          permettant aux commerces (notamment fast-food et restauration rapide)
          d&apos;automatiser la prise de commandes via WhatsApp. Le site permet
          notamment de demander une démonstration, une information ou un devis.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          5. Propriété intellectuelle
        </h2>
        <p className="mt-3">
          L&apos;ensemble des contenus présents sur le site (textes, graphismes,
          logos, icônes, images, maquettes, structure, code) est protégé par le
          droit de la propriété intellectuelle. Toute reproduction,
          représentation, modification, publication ou adaptation, totale ou
          partielle, est interdite sans autorisation écrite préalable de
          l&apos;éditeur.
        </p>
        <p className="mt-3">
          Les marques et logos WhatsApp appartiennent à leurs titulaires
          respectifs. Leur mention sur le site n&apos;implique aucun partenariat
          officiel non déclaré.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          6. Limitation de responsabilité
        </h2>
        <p className="mt-3">
          L&apos;éditeur s&apos;efforce de fournir des informations exactes et
          à jour. Toutefois, il ne saurait être tenu responsable des omissions,
          inexactitudes ou carences dans la mise à jour, qu&apos;elles soient de
          son fait ou du fait de tiers partenaires.
        </p>
        <p className="mt-3">
          L&apos;utilisation du site se fait sous la responsabilité exclusive de
          l&apos;utilisateur. L&apos;éditeur ne pourra être tenu responsable des
          dommages directs ou indirects résultant de l&apos;accès ou de
          l&apos;utilisation du site.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          7. Données personnelles
        </h2>
        <p className="mt-3">
          Les traitements de données personnelles effectués via le site sont
          décrits dans la{" "}
          <a
            className="underline decoration-black/20 hover:decoration-black/50"
            href="/politique-de-confidentialite"
          >
            Politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          8. Droit applicable
        </h2>
        <p className="mt-3">
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, et à défaut de résolution amiable, les tribunaux
          français compétents seront seuls compétents.
        </p>
      </section>
    </LegalShell>
  );
}
