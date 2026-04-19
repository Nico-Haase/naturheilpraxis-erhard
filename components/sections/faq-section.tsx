const faqItems = [
  {
    question: "Für welche Beschwerden ist die Praxis geeignet?",
    answer:
      "Die Praxis richtet sich an Menschen mit Beschwerden, bei denen hormonelle oder regulative Zusammenhänge eine Rolle spielen könnten – zum Beispiel bei Erschöpfung, Schlafproblemen, Zyklusbeschwerden oder diffusem Unwohlsein. Eine individuelle Einordnung erfolgt immer im persönlichen Gespräch.",
  },
  {
    question: "Wie läuft ein erster Termin ab?",
    answer:
      "Zu Beginn steht ein ausführliches Erstgespräch. Dabei werden Ihre aktuelle Situation, relevante Vorerkrankungen, Beschwerden und Ziele strukturiert erfasst. Auf dieser Basis wird entschieden, welche nächsten Schritte sinnvoll sind.",
  },
  {
    question: "Wie lange dauert ein Termin?",
    answer:
      "Die genaue Dauer kann je nach Anliegen variieren. In der Regel ist für das Erstgespräch deutlich mehr Zeit eingeplant als für Folgetermine, um ausreichend Raum für eine fundierte Anamnese zu schaffen.",
  },
  {
    question: "Muss ich mich auf die Analyse vorbereiten?",
    answer:
      "Ob und wie eine Vorbereitung nötig ist, hängt von der jeweiligen Untersuchung ab. Sie erhalten vorab klare Hinweise, damit Sie wissen, was für Ihren Termin wichtig ist.",
  },
  {
    question: "Werden Heilversprechen gegeben?",
    answer:
      "Nein. Die Website formuliert bewusst seriös und zurückhaltend. Es werden keine pauschalen Heilversprechen gemacht. Ziel ist eine sorgfältige naturheilkundliche Begleitung auf Basis einer fundierten Einordnung Ihrer Situation.",
  },
  {
    question: "Kann ich auch ohne konkrete Vorbefunde kommen?",
    answer:
      "Ja. Viele Patientinnen und Patienten kommen zunächst mit unspezifischen Beschwerden oder offenen Fragen. Im Erstgespräch wird gemeinsam besprochen, welche Informationen bereits vorliegen und was sinnvoll ergänzt werden sollte.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-space">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title mt-5">
              Häufige Fragen vor dem ersten Termin
            </h2>
            <p className="section-text mt-5 text-lg">
              Eine gute Praxis-Website beantwortet nicht nur Fragen – sie nimmt
              Unsicherheit heraus und schafft Orientierung.
            </p>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item) => (
              <div key={item.question} className="glass-card rounded-[1.6rem] p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#184144]">
                  {item.question}
                </h3>
                <p className="section-text-dark mt-3">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}