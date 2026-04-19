export function AboutSection() {
  const qualifications = [
    "Platzhalter für Qualifikation / Heilpraktikerin / Therapeutin",
    "Platzhalter für Spezialisierung auf hormonelle Zusammenhänge",
    "Platzhalter für Fortbildungen / Laborinterpretation / Naturheilkunde",
    "Platzhalter für Erfahrung in individueller Begleitung",
  ];

  return (
    <section id="praxis" className="section-space">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="image-placeholder min-h-[560px] w-full">
            <div className="image-placeholder-label">
              Platzhalter für Portraitbild:
              professionelle Therapeutin, ruhig, kompetent, natürliches Licht,
              editorial, vertrauenswürdig
            </div>
          </div>

          <div>
            <div className="eyebrow">Über die Praxis</div>

            <h2 className="section-title mt-5">
              Kompetenz, Menschlichkeit und ein klarer Blick auf das, was Ihr
              Körper mitteilen möchte.
            </h2>

            <p className="section-text mt-5 text-lg">
              Naturheilpraxis Erhard steht für eine Begleitung, die medizinische
              Seriosität, Ruhe und persönliche Zuwendung verbindet. Ziel ist
              nicht eine laute Außendarstellung, sondern eine hochwertige,
              vertrauensvolle Erfahrung – vom ersten Eindruck bis zur
              therapeutischen Begleitung.
            </p>

            <p className="section-text mt-5">
              Die Praxis richtet sich an Menschen, die sich eine differenzierte,
              naturheilkundlich orientierte Betrachtung ihrer Beschwerden
              wünschen. Besonders bei hormonellen Themen, Erschöpfung oder
              schwer einzuordnenden Belastungen kann ein individueller Blick
              entscheidend sein.
            </p>

            <div className="mt-8 grid gap-3">
              {qualifications.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[rgba(255,253,249,0.8)] px-4 py-4 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}