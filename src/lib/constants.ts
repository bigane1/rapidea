export const BRAND_WHATSAPP = "#25d366";

// Numéro E.164 sans le "+" pour `wa.me`.
// 06 60 54 52 75 => +33 6 60 54 52 75
export const WHATSAPP_NUMBER_E164 = "33660545275";

export const WHATSAPP_DISPLAY = "06 60 54 52 75";
export const TELEPHONE_DISPLAY = "06 60 54 52 75";

/** Email unique pour Rapidea et BiganeWay */
export const EMAIL_CONTACT = "contact@biganeway.fr";
/** Alias conservé pour compatibilité — même adresse */
export const EMAIL_RAPIDEA = EMAIL_CONTACT;
/** Email affiché sur la landing Rapidea */
export const EMAIL_DISPLAY = EMAIL_CONTACT;

export const COMPANY_WEBSITE = "https://biganeway.fr";
export const COMPANY_WEBSITE_DISPLAY = "biganeway.fr";
export const PRODUCT_WEBSITE = "https://rapidea.biganeway.fr";
export const PRODUCT_WEBSITE_DISPLAY = "rapidea.biganeway.fr";

/** Informations légales de l'éditeur (Entrepreneur individuel) */
export const LEGAL = {
  publisherName: "Monsieur Abdellatif BIGANE",
  tradeName: "BiganeWay",
  productName: "Rapidea",
  legalForm: "Entrepreneur individuel",
  director: "Abdellatif BIGANE",
  address: "52 rue Paul Cézanne",
  postalCode: "78955",
  city: "Carrières-sous-Poissy",
  country: "France",
  siren: "912 464 625",
  siret: "912 464 625 00017",
  tva: "FR52912464625",
  naf: "6201Z — Programmation informatique",
  creationDate: "5 avril 2022",
  activity:
    "Prestations de services informatiques et développement informatique, e-commerce",
  hosting: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    website: "https://vercel.com",
  },
} as const;

export function waHref(text?: string) {
  const encoded = text ? encodeURIComponent(text) : "";
  return `https://wa.me/${WHATSAPP_NUMBER_E164}${encoded ? `?text=${encoded}` : ""}`;
}

export function telHref() {
  return `tel:+${WHATSAPP_NUMBER_E164}`;
}
