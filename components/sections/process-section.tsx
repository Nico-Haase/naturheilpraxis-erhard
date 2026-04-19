const steps = [
  {
    number: "01",
    title: "Anfrage & Terminbuchung",
    text: "Sie nehmen Kontakt auf oder buchen Ihren Termin. Bereits hier wird der erste Rahmen für Ihr Anliegen geschaffen.",
  },
  {
    number: "02",
    title: "Erstgespräch",
    text: "In einem ruhigen, strukturierten Gespräch erfassen wir Ihre Beschwerden, Vorgeschichte und Ihre Ziele.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Je nach Fragestellung erfolgt eine gezielte Auswertung – beispielsweise über hormonelle oder ganzheitliche Blutanalysen.",
  },
  {
    number: "04",
    title: "Individueller Therapieplan",
    text: "Sie erhalten einen klaren, nachvollziehbaren Behandlungsansatz mit naturheilkundischer Ausrichtung.",
  },
  {
    number: "05",
    title: "Begleitung",
    text: "Die Entwicklung wird regelmäßig eingeordnet und bei Bedarf fein abgestimmt – persönlich, achtsam und strukturiert.",
  },
];

export function ProcessSection() {
  return (
    <section id="ablauf" className="section-space">
      <div className="container-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="eyebrow">Ablauf</div>
          <h2 className="section-title mt-5">
            So entsteht eine Zusammenarbeit, die Sicherheit, Klarheit und
            Orientierung gibt.
          </h2>
          <p className="section-text mt-5 text-lg">
            Von der ersten Anfrage bis zur begleiteten Entwicklung ist jeder
            Schritt darauf ausgerichtet, Vertrauen aufzubauen und Ihren Weg
            nachvollziehbar zu strukturieren.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="glass-card rounded-[1.75rem] p-6">
              <div className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--primary)]">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="section-text mt-3 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}