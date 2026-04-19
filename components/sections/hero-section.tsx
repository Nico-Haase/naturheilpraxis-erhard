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
    <section id="start" className="section-space pt-16">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
        
        {/* TEXT */}
        <div>
          <div className="eyebrow">
            Naturheilpraxis für hormonelle Balance
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Mehr Klarheit, mehr Ruhe und ein Weg, der zu Ihnen passt.
          </h1>

          {/* WICHTIG: TEXT JETZT DUNKEL */}
          <p className="mt-6 max-w-xl text-lg text-[#2f4a55] leading-relaxed">
            In der Naturheilpraxis Erhard stehen Sie als Mensch im Mittelpunkt:
            mit fundierter Analyse, natürlicher Therapieorientierung und einer
            Begleitung, die Vertrauen, Qualität und Ruhe spürbar verbindet.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#kontakt"
              className="premium-button rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[#143739]"
            >
              Termin buchen
            </Link>

            <Link
              href="#leistungen"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-4 py-2 text-sm text-[#2f4a55] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* BILD */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/naturheilpraxis.png"
            alt="Naturheilpraxis"
            width={800}
            height={1000}
            className="w-full h-[500px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}