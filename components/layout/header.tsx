import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,243,236,0.84)] backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[1.45rem] font-semibold tracking-[-0.03em]">
            Naturheilpraxis Erhard
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">
            Hormonbalance · Naturheilkunde · Ganzheitliche Analyse
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontakt"
          className="premium-button rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]"
        >
          Termin vereinbaren
        </Link>
      </div>
    </header>
  );
}