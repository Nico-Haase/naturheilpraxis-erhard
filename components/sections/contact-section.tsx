import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="section-space">
      <div className="container-shell">
        <div className="mb-8 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(85,107,93,0.08),rgba(216,199,166,0.18),rgba(255,253,249,0.88))] p-8 md:p-10">
          <div className="max-w-4xl">
            <div className="eyebrow">Kontakt & Termin</div>
            <h2 className="section-title mt-5">
              Vereinbaren Sie jetzt Ihren Termin und gewinnen Sie Klarheit für
              den nächsten sinnvollen Schritt.
            </h2>
            <p className="section-text mt-5 text-lg">
              Ob erste Orientierung, konkrete Beschwerden oder der Wunsch nach
              einer ganzheitlichen Einordnung: Die Anfrage ist der erste ruhige,
              klare Schritt in eine individuelle Begleitung.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold">Kontakt</h3>
            <p className="section-text mt-3">
              Schreiben Sie uns für Ihre erste Anfrage oder Terminvereinbarung.
            </p>

            <div className="mt-8 space-y-5 text-[var(--foreground)]">
              <p>
                <strong>Telefon:</strong> {siteConfig.phone}
              </p>
              <p>
                <strong>E-Mail:</strong> {siteConfig.email}
              </p>
              <p>
                <strong>Adresse:</strong> Musterstraße 12, 12345 Musterstadt
              </p>
            </div>

            <div className="image-placeholder mt-8 min-h-[260px] w-full">
              <div className="image-placeholder-label">
                Platzhalter für Karte oder Praxis-Außenaufnahme
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold">Kontaktformular</h3>
            <p className="section-text mt-3">
              Schreiben Sie kurz, worum es geht. So kann Ihre Anfrage bereits
              passend eingeordnet werden.
            </p>

            <form className="mt-8 space-y-4">
              <input
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none"
                placeholder="Ihr Name"
              />
              <input
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none"
                placeholder="Ihre E-Mail"
              />
              <textarea
                className="min-h-[180px] w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none"
                placeholder="Ihr Anliegen"
              />
              <button
                type="submit"
                className="premium-button rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]"
              >
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}