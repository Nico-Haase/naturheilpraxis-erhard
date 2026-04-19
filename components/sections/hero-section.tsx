import Image from "next/image";
import Link from "next/link";

const trustItems = [
  "Ganzheitlich",
  "Individuell",
  "Natürlich",
  "Ruhige Begleitung",
];

export function HeroSection() {
  return (
    <section id="start" className="section-space relative overflow-hidden pt-12 md:pt-16 lg:pt-20">
      <div className="hero-glow" />

      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="eyebrow">
            Naturheilpraxis für hormonelle Balance & ganzheitliche Begleitung
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Mehr Klarheit, mehr innere Ruhe und ein Weg, der zu Ihnen passt.
          </h1>

          <p className="section-text mt-6 max-w-2xl text-lg md:text-xl">
            In der Naturheilpraxis Erhard stehen Sie als Mensch im Mittelpunkt:
            mit fundierter Analyse, natürlicher Therapieorientierung und einer
            Begleitung, die Vertrauen, Kompetenz und Ruhe spürbar verbindet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#kontakt"
              className="premium-button rounded-full bg-[var(--primary)] px-8 py-4 text-center text-sm font-semibold text-[#143739] transition hover:bg-[var(--primary-dark)]"
            >
              Termin buchen
            </Link>

            <Link
              href="#leistungen"
              className="rounded-full border border-white/15 bg-[rgba(245,239,229,0.12)] px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-[rgba(245,239,229,0.18)]"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="hero-card rounded-2xl px-4 py-4 text-sm font-medium text-white">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-xl rounded-[1.5rem] border border-white/12 bg-[rgba(245,239,229,0.08)] p-5 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
              Naturheilpraxis Erhard
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Für Menschen, die sich eine hochwertige, natürliche und seriöse
              Begleitung bei hormonellen Themen, Erschöpfung und diffusen
              Beschwerden wünschen.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="image-frame">
            <Image
              src="/images/naturheilpraxis.png"
              alt="Naturheilpraxis Innenraum"
              width={900}
              height={1100}
              priority
              className="h-[580px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}