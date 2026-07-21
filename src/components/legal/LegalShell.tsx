import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/sections/Footer";

type LegalShellProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalShell({ title, updatedAt, children }: LegalShellProps) {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <Link
          href="/"
          className="text-[13px] font-medium text-black/55 transition-colors hover:text-black"
        >
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="mt-6 text-[32px] font-semibold tracking-tight text-black sm:text-[40px]">
          {title}
        </h1>
        <p className="mt-3 text-[13px] text-black/55">
          Dernière mise à jour : {updatedAt}
        </p>

        <div className="prose-legal mt-10 space-y-8 text-[14px] leading-relaxed text-black/75">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
