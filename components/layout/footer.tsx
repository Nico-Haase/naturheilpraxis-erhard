import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(255,253,249,0.86)]">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.03em]">
              Naturheilpraxis Erhard
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
              Moderne Naturheilpraxis für hormonelles Gleichgewicht,
              ganzheitliche Analyse und natürliche Begleitung.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:opacity-70">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Kontakt
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>
                Musterstraße 12
                <br />
                12345 Musterstadt
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Rechtliches
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/impressum" className="hover:opacity-70">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:opacity-70">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
          © 2026 Naturheilpraxis Erhard. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}