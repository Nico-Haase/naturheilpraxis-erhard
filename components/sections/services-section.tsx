import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Hormonanalyse",
    text: "Eine strukturierte Betrachtung hormoneller Zusammenhänge – individuell ausgewertet, verständlich erklärt und therapeutisch sinnvoll eingeordnet.",
    points: [
      "Zyklusunregelmäßigkeiten",
      "Erschöpfung",
      "Schlafprobleme",
      "Stimmungsschwankungen",
    ],
  },
  {
    number: "02",
    title: "Ganzheitliche Blutanalyse",
    text: "Laborwerte werden nicht isoliert betrachtet, sondern in einen ganzheitlichen Zusammenhang gesetzt – mit Blick auf Regulation, Belastungen und Versorgung.",
    points: [
      "Müdigkeit",
      "diffuses Unwohlsein",
      "Antriebslosigkeit",
      "Belastungsgefühl",
    ],
  },
  {
    number: "03",
    title: "Pflanzliche Hormonregulierung",
    text: "Sanfte naturheilkundliche Begleitung mit ausgewählten pflanzlichen Ansätzen – verantwortungsvoll, individuell und alltagsnah.",
    points: [
      "hormonelle Dysbalancen",
      "Zyklusbeschwerden",
      "Stressbelastung",
      "Begleitung im Alltag",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="section-space">
      <div className="container-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="eyebrow">Leistungen</div>
          <h2 className="section-title mt-5">
            Moderne naturheilkundliche Leistungen mit Klarheit, Ruhe und
            individueller Einordnung.
          </h2>
          <p className="section-text mt-5 text-lg">
            Die Praxis verbindet strukturierte Analyse mit einer natürlichen,
            verantwortungsvollen therapeutischen Orientierung. So entsteht eine
            Begleitung, die nicht beliebig wirkt, sondern nachvollziehbar und
            hochwertig.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Leistung
                </span>
                <span className="text-sm text-[var(--muted)]">
                  {service.number}
                </span>
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                {service.title}
              </h3>

              <p className="section-text mt-4">{service.text}</p>

              <div className="mt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Typische Themen
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-sm"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-[rgba(85,107,93,0.06)] p-5">
                <p className="text-sm font-medium">
                  Nutzen für Patientinnen und Patienten
                </p>
                <p className="section-text mt-2 text-sm">
                  Mehr Klarheit über mögliche Zusammenhänge und eine fundierte
                  Grundlage für die nächsten sinnvollen Schritte.
                </p>
              </div>

              <Link
                href="#kontakt"
                className="premium-button mt-8 inline-block rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]"
              >
                Termin anfragen
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}