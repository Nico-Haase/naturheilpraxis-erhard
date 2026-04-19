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
    <section
      id="start"
      className="section-space relative overflow-hidden pt-12 md:pt-16 lg:pt-20"
    >
      <div className="hero-glow" />

      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <div className="eyebrow">
            Premium Naturheilpraxis für hormonelle Balance & Wohlbefinden
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl lg:text-7xl">
            Ein ruhiger, hochwertiger Ort für Balance, Klarheit und natürliche Begleitung.
          </h1>

          <p className="hero-subtle-text mt-6 max-w-2xl text-lg md:text-xl">
            In der Naturheilpraxis Erhard stehen Sie als Mensch im Mittelpunkt:
            mit fundierter Analyse, natürlicher Therapieorientierung und einer
            Begleitung, die Vertrauen, Qualität und Ruhe spürbar verbindet.
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
              className="rounded-full border border-white/30 bg-[rgba(248,243,235,0.18)] px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-[rgba(248,243,235,0.28)]"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="hero-card rounded-2xl px-4 py-4 text-sm font-medium text-[#274046]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="luxury-panel mt-10 max-w-xl rounded-[1.6rem] p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#70848c]">
              Naturheilpraxis Erhard
            </p>
            <p className="mt-3 text-sm leading-7 text-[#4f6672]">
              Für Menschen, die sich eine hochwertige, ruhige und seriöse
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
              className="h-[620px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}