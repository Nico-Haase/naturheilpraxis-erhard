const trustItems = [
  {
    title: "Individuelle Betreuung",
    text: "Jede Begleitung beginnt mit einem genauen Blick auf Ihre persönliche Situation – ohne Standardlösungen und ohne vorschnelle Einordnung.",
  },
  {
    title: "Ganzheitliche Perspektive",
    text: "Beschwerden werden in Zusammenhängen betrachtet: hormonell, regulativ, alltagsbezogen und naturheilkundlich fundiert.",
  },
  {
    title: "Fundierte Diagnostik",
    text: "Analysen werden verständlich erklärt und als Grundlage für einen nachvollziehbaren Behandlungsweg genutzt.",
  },
  {
    title: "Natürliche Therapieansätze",
    text: "Der Fokus liegt auf sanften, verantwortungsvollen und individuell passenden naturheilkundlichen Lösungen.",
  },
];

export function TrustSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <div className="eyebrow">Warum diese Praxis</div>
            <h2 className="section-title mt-5">
              Ein Ort für Menschen, die sich ernst genommen, klar begleitet und
              ganzheitlich verstanden fühlen möchten.
            </h2>
            <p className="section-text mt-5 text-lg">
              Die Praxis verbindet eine ruhige, vertrauensvolle Atmosphäre mit
              einer strukturierten Herangehensweise. So entsteht eine Begleitung,
              die natürlich wirkt und zugleich professionell trägt.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item.title} className="glass-card rounded-[1.75rem] p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#184144]">
                  {item.title}
                </h3>
                <p className="section-text-dark mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}