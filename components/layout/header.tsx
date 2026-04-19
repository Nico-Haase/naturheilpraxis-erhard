import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.35)] bg-[rgba(205,189,168,0.92)] backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(40,55,65,0.35)]">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#294046]">
            Naturheilpraxis Erhard
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-[#6f7c82]">
            Hormonbalance · Naturheilkunde · Ganzheitlich
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#445b62] transition hover:text-[#22363d]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontakt"
          className="premium-button rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[#163739] transition hover:bg-[var(--primary-dark)]"
        >
          Termin vereinbaren
        </Link>
      </div>
    </header>
  );
}