import { Backdrop } from "./Backdrop";
import { Header } from "./Header";
import { Hero } from "./sections/Hero";
import { ClientRestaurant } from "./sections/ClientRestaurant";
import { WhyRapidea } from "./sections/WhyRapidea";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { Pricing } from "./sections/Pricing";
import { Compare } from "./sections/Compare";
import { Industries } from "./sections/Industries";
import { Testimonials } from "./sections/Testimonials";
import { FAQSection } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-2xl focus:bg-white focus:px-4 focus:py-3 focus:shadow"
      >
        Aller au formulaire de contact
      </a>

      <Backdrop />
      <Header />

      <main className="relative">
        <Hero />
        <ClientRestaurant />
        <WhyRapidea />
        <Features />
        <HowItWorks />
        <Pricing />
        <Compare />
        <Industries />
        <Testimonials />
        <FAQSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

