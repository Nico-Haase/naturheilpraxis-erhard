import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)] bg-[#d9cbb8]">
      <div className="container-shell py-14">
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Praxis */}
          <div>
            <h3 className="text-xl font-semibold text-[#2d3e44]">
              Naturheilpraxis Erhard
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f7280]">
              Moderne Naturheilpraxis für hormonelles Gleichgewicht,
              ganzheitliche Analyse und natürliche Begleitung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3c525a]">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5c707a]">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[#1f2f38]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3c525a]">
              Kontakt
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#5c707a]">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>
                Musterstraße 12
                <br />
                12345 Musterstadt
              </p>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3c525a]">
              Rechtliches
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5c707a]">
              <Link href="/impressum" className="hover:text-[#1f2f38]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#1f2f38]">
                Datenschutz
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-[rgba(0,0,0,0.08)] pt-6 text-sm text-[#5f7280]">
          © 2026 Naturheilpraxis Erhard. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}