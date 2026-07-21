import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import {
  EMAIL_DISPLAY,
  LEGAL,
  TELEPHONE_DISPLAY,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de Rapidea / BiganeWay.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalShell title="Politique de confidentialité" updatedAt="21 juillet 2026">
      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          1. Responsable du traitement
        </h2>
        <p className="mt-3">
          Le responsable du traitement des données personnelles collectées via
          le site Rapidea est :
        </p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5">
          <li>
            <strong>{LEGAL.publisherName}</strong> ({LEGAL.tradeName})
          </li>
          <li>
            {LEGAL.address}, {LEGAL.postalCode} {LEGAL.city}
          </li>
          <li>SIREN : {LEGAL.siren}</li>
          <li>
            Email :{" "}
            <a className="underline decoration-black/20 hover:decoration-black/50" href={`mailto:${EMAIL_DISPLAY}`}>
              {EMAIL_DISPLAY}
            </a>
          </li>
          <li>Téléphone : {TELEPHONE_DISPLAY}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          2. Données collectées
        </h2>
        <p className="mt-3">
          Dans le cadre de l&apos;utilisation du site (notamment via le
          formulaire de demande de démonstration), nous pouvons collecter :
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Nom et prénom</li>
          <li>Nom de l&apos;entreprise / commerce</li>
          <li>Numéro de téléphone</li>
          <li>Adresse email</li>
          <li>Contenu du message / besoin exprimé</li>
          <li>
            Données techniques de navigation (adresse IP, type de navigateur,
            pages consultées) si des outils de mesure d&apos;audience sont
            activés
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          3. Finalités du traitement
        </h2>
        <p className="mt-3">Vos données sont utilisées pour :</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Répondre à vos demandes de démonstration, d&apos;information ou de devis</li>
          <li>Assurer le suivi commercial et relationnel lié à Rapidea</li>
          <li>Améliorer le site et l&apos;expérience utilisateur</li>
          <li>Respecter nos obligations légales et comptables</li>
        </ul>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          4. Base légale
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Mesures précontractuelles / intérêt légitime</strong> :
            traitement des demandes de contact et de démonstration
          </li>
          <li>
            <strong>Consentement</strong> : le cas échéant, pour certains
            cookies non essentiels ou communications marketing
          </li>
          <li>
            <strong>Obligation légale</strong> : conservation de certaines
            données lorsque la loi l&apos;exige
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          5. Destinataires des données
        </h2>
        <p className="mt-3">
          Les données sont destinées à {LEGAL.publisherName} /{" "}
          {LEGAL.tradeName}. Elles peuvent être transmises à des prestataires
          techniques strictement nécessaires au fonctionnement du service
          (hébergement, messagerie, outils d&apos;emailing), dans le respect du
          RGPD.
        </p>
        <p className="mt-3">
          Aucune vente de données personnelles à des tiers n&apos;est réalisée.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          6. Durée de conservation
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            Demandes de contact / démo : durée nécessaire au traitement de la
            demande, puis jusqu&apos;à 3 ans à compter du dernier contact pour
            le suivi commercial, sauf opposition
          </li>
          <li>
            Données de navigation / cookies : selon la finalité, généralement
            jusqu&apos;à 13 mois maximum
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          7. Vos droits (RGPD)
        </h2>
        <p className="mt-3">
          Conformément au Règlement Général sur la Protection des Données
          (RGPD) et à la loi Informatique et Libertés, vous disposez des droits
          suivants :
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Droit d&apos;accès</li>
          <li>Droit de rectification</li>
          <li>Droit d&apos;effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d&apos;opposition</li>
          <li>Droit à la portabilité (lorsque applicable)</li>
        </ul>
        <p className="mt-3">
          Pour exercer vos droits, contactez-nous à{" "}
          <a className="underline decoration-black/20 hover:decoration-black/50" href={`mailto:${EMAIL_DISPLAY}`}>
            {EMAIL_DISPLAY}
          </a>
          , en précisant votre demande et un élément permettant de justifier
          votre identité si nécessaire.
        </p>
        <p className="mt-3">
          Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
          <a
            className="underline decoration-black/20 hover:decoration-black/50"
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cnil.fr
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          8. Cookies
        </h2>
        <p className="mt-3">
          Le site peut utiliser des cookies techniques nécessaires à son
          fonctionnement. Si des cookies de mesure d&apos;audience ou marketing
          sont déployés ultérieurement, un mécanisme de consentement sera mis en
          place conformément à la réglementation applicable.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          9. Sécurité
        </h2>
        <p className="mt-3">
          Nous mettons en œuvre des mesures techniques et organisationnelles
          raisonnables afin de protéger vos données contre tout accès non
          autorisé, perte, altération ou divulgation.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold tracking-tight text-black">
          10. Modification de la politique
        </h2>
        <p className="mt-3">
          La présente politique peut être mise à jour à tout moment. La date de
          dernière mise à jour figure en haut de cette page.
        </p>
      </section>
    </LegalShell>
  );
}
