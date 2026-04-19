import Link from "next/link";

const trustItems = [
  "Ganzheitlich",
  "Individuell",
  "Natürlich",
  "Über 10 Jahre Erfahrung",
];

export function HeroSection() {
  return (
    <section id="start" className="section-space relative overflow-hidden">
      <div className="hero-glow" />

      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="eyebrow">
            Naturheilpraxis für hormonelle Balance & ruhige Begleitung
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Mehr Ruhe, mehr Klarheit, mehr Balance für Ihren Körper.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            In der Naturheilpraxis Erhard stehen Sie als Mensch im Mittelpunkt:
            mit fundierter Analyse, natürlicher Therapieorientierung und einer
            Begleitung, die Kompetenz, Ruhe und Vertrauen spürbar verbindet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#kontakt"
              className="premium-button rounded-full bg-[var(--primary)] px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]"
            >
              Termin buchen
            </Link>

            <Link
              href="#leistungen"
              className="rounded-full border border-[var(--border)] bg-[rgba(255,253,249,0.86)] px-7 py-4 text-center text-sm font-medium text-[var(--foreground)] transition hover:bg-white"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="glass-card rounded-2xl px-4 py-4 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="image-placeholder min-h-[540px] w-full">
            <div className="image-placeholder-label">
              Platzhalter für Hero-Bild:
              hochwertige Naturheilpraxis, ruhiger heller Behandlungsraum,
              warme Naturtöne, editorial, vertrauenswürdig, hochwertig
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}