import { LandingPage } from "@/components/landing/LandingPage";
import Script from "next/script";

export default function Home() {
  // JSON-LD Schema pour FAQPage (utile pour SEO).
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Rapidea",
        operatingSystem: "Web",
        applicationCategory: "BusinessApplication",
        description:
          "Assistant IA conversationnel pour automatiser la prise de commandes sur WhatsApp.",
      },
      {
        "@type": "Organization",
        name: "Rapidea",
        url: "https://rapidea.biganeway.fr/",
        email: "contact@biganeway.fr",
        telephone: "+33660545275",
        sameAs: ["https://biganeway.fr"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "contact@biganeway.fr",
            contactType: "sales",
            telephone: "+33660545275",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Rapidea est-il un chatbot ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non. Rapidea est un assistant IA conversationnel : il comprend les messages (texte et vocaux), répond automatiquement, prend les commandes, les valide et les transmet directement au commerçant.",
            },
          },
          {
            "@type": "Question",
            name: "Rapidea comprend-il les messages vocaux ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. L’assistant peut écouter, comprendre et traiter les demandes transmises en vocal, comme il le fait pour les messages texte.",
            },
          },
          {
            "@type": "Question",
            name: "Comment la commande est-elle transmise au commerçant ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dès que la commande est validée, Rapidea la transmet instantanément au commerçant afin de lancer la préparation (livraison ou retrait).",
            },
          },
          {
            "@type": "Question",
            name: "Quels sont les tarifs Rapidea ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le Pack Normal est à 90 €/mois. L'onboarding (installation, flyer sur mesure et intégration du menu) est à 285 € en paiement unique. Le Pack Premium, à 150 €/mois, inclut un paramétrage sur mesure et un design de flyer personnalisé chaque mois.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps faut-il pour démarrer ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Avec l'onboarding à 285 €, nous configurons votre menu, créons votre flyer et intégrons tout dans l'application. La mise en route est rapide, avec un accompagnement complet.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-rapidea"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LandingPage />
    </>
  );
}
