import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const qualifications = [
  "Platzhalter für Qualifikation / Heilpraktikerin / Therapeutin",
  "Platzhalter für Spezialisierung auf hormonelle Zusammenhänge",
  "Platzhalter für Fortbildungen / Laborinterpretation / Naturheilkunde",
  "Platzhalter für Erfahrung in individueller Begleitung",
];

export function AboutSection() {
  return (
    <SectionShell id="praxis">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <AnimatedReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/60">
            <Image
              src="/images/therapist-portrait.jpg"
              alt="Portrait der Therapeutin der Naturheilpraxis Erhard"
              width={900}
              height={1100}
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <SectionHeading
            badge="Über die Praxis"
            title="Kompetenz, Menschlichkeit und ein klarer Blick auf das, was Ihr Körper mitteilen möchte."
            description="Naturheilpraxis Erhard steht für eine Begleitung, die medizinische Seriosität, Ruhe und persönliche Zuwendung verbindet. Ziel ist nicht eine möglichst laute Außendarstellung, sondern eine hochwertige, vertrauensvolle Erfahrung – vom ersten Eindruck bis zur therapeutischen Begleitung."
          />

          <div className="mt-8 space-y-5">
            <p className="text-muted-foreground">
              Die Praxis richtet sich an Menschen, die sich eine differenzierte,
              naturheilkundlich orientierte Betrachtung ihrer Beschwerden wünschen.
              Besonders bei hormonellen Themen, Erschöpfung oder schwer
              einzuordnenden Belastungen kann ein individueller Blick entscheidend
              sein.
            </p>

            <p className="text-muted-foreground">
              Hier stehen weder Standardprogramme noch vorschnelle Versprechen im
              Mittelpunkt, sondern eine ruhige, klare und fachlich fundierte
              Zusammenarbeit.
            </p>

            <div className="grid gap-3 pt-2">
              {qualifications.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}