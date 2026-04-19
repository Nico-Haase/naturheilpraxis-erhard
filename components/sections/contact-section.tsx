import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="section-space">
      <div className="container-shell">
        <div className="mb-8 rounded-[2rem] border border-white/12 bg-[rgba(245,239,229,0.1)] p-8 md:p-10 backdrop-blur">
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
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#184144]">
              Kontakt
            </h3>
            <p className="section-text-dark mt-3">
              Schreiben Sie uns für Ihre erste Anfrage oder Terminvereinbarung.
            </p>

            <div className="mt-8 space-y-5 text-[#214b4e]">
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

            <div className="mt-8 overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/beruhigend.png"
                alt="Beruhigende Praxisatmosphäre"
                width={900}
                height={520}
                className="h-[260px] w-full object-cover"
              />
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#184144]">
              Kontaktformular
            </h3>
            <p className="section-text-dark mt-3">
              Schreiben Sie kurz, worum es geht. So kann Ihre Anfrage bereits
              passend eingeordnet werden.
            </p>

            <form className="mt-8 space-y-4">
              <input
                className="w-full rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white px-4 py-3 text-[#214b4e] outline-none"
                placeholder="Ihr Name"
              />
              <input
                className="w-full rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white px-4 py-3 text-[#214b4e] outline-none"
                placeholder="Ihre E-Mail"
              />
              <textarea
                className="min-h-[180px] w-full rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white px-4 py-3 text-[#214b4e] outline-none"
                placeholder="Ihr Anliegen"
              />
              <button
                type="submit"
                className="premium-button rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[#143739] transition hover:bg-[var(--primary-dark)]"
              >
                Anfrage senden
              </button>
            </form>

            <div className="mt-8 rounded-[1.5rem] bg-[rgba(129,216,208,0.14)] p-5">
              <p className="text-sm font-medium text-[#184144]">
                Hinweis zur Terminbuchung
              </p>
              <p className="section-text-dark mt-2 text-sm">
                Dieser Bereich ist bereits so vorbereitet, dass später dein
                vorhandener Kalender-Code oder ein Buchungsmodul einfach
                ergänzt werden kann.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}