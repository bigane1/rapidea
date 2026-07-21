import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.55)]"
      aria-label="Rapidea — Accueil"
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white"
      >
        <span className="text-[14px] font-semibold tracking-tight">R</span>
      </span>
      <span className="text-[16px] font-semibold tracking-tight text-black">
        Rapidea
      </span>
    </Link>
  );
}

