import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,0,0,0.06)] bg-[rgba(245,239,229,0.95)] backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[1.5rem] font-semibold tracking-[-0.03em] text-[#244447]">
            Naturheilpraxis Erhard
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-[#5c7a7d]">
            Hormonbalance · Naturheilkunde · Ganzheitlich
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#4d6b6e] transition hover:text-[#1f3f42]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontakt"
          className="premium-button rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[#143739] transition hover:bg-[var(--primary-dark)]"
        >
          Termin vereinbaren
        </Link>
      </div>
    </header>
  );
}