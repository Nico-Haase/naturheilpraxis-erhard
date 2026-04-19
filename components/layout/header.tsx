import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(24,112,116,0.45)] backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[1.5rem] font-semibold tracking-[-0.03em] text-[var(--accent)]">
            Naturheilpraxis Erhard
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--text-soft)]">
            Hormonbalance · Naturheilkunde · Ganzheitlich
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-soft)] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontakt"
          className="premium-button rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[#15383a] transition hover:bg-[var(--primary-dark)]"
        >
          Termin vereinbaren
        </Link>
      </div>
    </header>
  );
}