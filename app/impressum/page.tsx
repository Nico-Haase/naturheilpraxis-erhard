import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Impressum",
  description: "Impressum der Naturheilpraxis Erhard",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="section-space">
        <div className="container-shell max-w-4xl">
          <div className="rounded-[2rem] border border-border bg-white/75 p-6 shadow-sm md:p-10">
            <div className="mb-8">
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                Rechtliches
              </p>
              <h1 className="text-4xl font-semibold md:text-5xl">Impressum</h1>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  Naturheilpraxis Erhard
                  <br />
                  Musterstraße 12
                  <br />
                  12345 Musterstadt
                  <br />
                  Deutschland
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">Kontakt</h2>
                <p>
                  Telefon: +49 123 4567890
                  <br />
                  E-Mail: kontakt@naturheilpraxis-erhard.de
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p>
                  Heilpraktikerin / Heilpraktiker
                  <br />
                  <span className="text-sm">
                    Platzhalter – bitte mit den tatsächlichen Angaben ergänzen.
                  </span>
                </p>
                <p>
                  Zuständige Aufsichtsbehörde:
                  <br />
                  <span className="text-sm">
                    Platzhalter – bitte Behörde und Anschrift ergänzen.
                  </span>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p>
                  Sarah Erhard
                  <br />
                  Musterstraße 12
                  <br />
                  12345 Musterstadt
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">Hinweis</h2>
                <p>
                  Dieses Impressum enthält Platzhalter und muss vor der
                  Veröffentlichung rechtlich geprüft und mit den tatsächlichen
                  Praxisdaten vervollständigt werden.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">Links</h2>
                <div className="flex flex-wrap gap-4 text-foreground">
                  <Link href="/" className="underline underline-offset-4">
                    Zur Startseite
                  </Link>
                  <Link
                    href="/datenschutz"
                    className="underline underline-offset-4"
                  >
                    Datenschutz
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}