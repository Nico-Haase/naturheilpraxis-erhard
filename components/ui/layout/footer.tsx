import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-secondary/30">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Naturheilpraxis Erhard</h3>
          <p className="text-sm text-muted-foreground">
            Moderne Naturheilpraxis für hormonelles Gleichgewicht, ganzheitliche
            Analyse und natürliche Begleitung.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Navigation
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Kontakt
          </h4>
          <div className="space-y-2 text-sm">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Öffnungszeiten
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Mo–Fr: nach Vereinbarung</p>
            <p>Termine nur mit Voranmeldung</p>
            <div className="pt-4">
              <Link href="/impressum" className="block hover:underline">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block hover:underline">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}