import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Naturheilpraxis Erhard",
};

export default function DatenschutzPage() {
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
              <h1 className="text-4xl font-semibold md:text-5xl">
                Datenschutzerklärung
              </h1>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  1. Allgemeine Hinweise
                </h2>
                <p>
                  Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese
                  Datenschutzerklärung informiert darüber, welche Daten auf dieser
                  Website erfasst und wie sie verwendet werden.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  2. Verantwortliche Stelle
                </h2>
                <p>
                  Naturheilpraxis Erhard
                  <br />
                  Musterstraße 12
                  <br />
                  12345 Musterstadt
                  <br />
                  E-Mail: kontakt@naturheilpraxis-erhard.de
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  3. Hosting
                </h2>
                <p>
                  Diese Website wird über Vercel bereitgestellt. Beim Aufruf der
                  Website können technisch notwendige Verbindungsdaten verarbeitet
                  werden, um die Seite sicher und stabil auszuliefern.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  4. Kontaktformular
                </h2>
                <p>
                  Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
                  werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort
                  angegebenen Kontaktdaten zum Zweck der Bearbeitung Ihrer Anfrage
                  gespeichert und verarbeitet.
                </p>
                <p>
                  <span className="text-sm">
                    Hinweis: Wenn du später Supabase oder Resend einsetzt, muss
                    dieser Abschnitt entsprechend konkret ergänzt werden.
                  </span>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Server-Logfiles
                </h2>
                <p>
                  Der Provider der Seiten kann automatisch Informationen in
                  sogenannten Server-Logfiles erheben und speichern, die Ihr Browser
                  automatisch übermittelt. Dies dient der technischen Sicherheit und
                  Stabilität der Website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  6. Ihre Rechte
                </h2>
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                  Einschränkung der Verarbeitung sowie auf Widerspruch gegen die
                  Verarbeitung Ihrer personenbezogenen Daten im Rahmen der
                  gesetzlichen Bestimmungen.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  7. Hinweis
                </h2>
                <p>
                  Diese Datenschutzerklärung ist eine technische und inhaltliche
                  Vorlage und ersetzt keine rechtliche Beratung. Vor dem Go-Live
                  sollte sie mit den tatsächlich eingesetzten Tools und Prozessen
                  rechtlich geprüft werden.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex flex-wrap gap-4 text-foreground">
                  <Link href="/" className="underline underline-offset-4">
                    Zur Startseite
                  </Link>
                  <Link href="/impressum" className="underline underline-offset-4">
                    Impressum
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