import { symptoms } from "@/lib/site";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

export function SymptomsSection() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <AnimatedReveal>
          <SectionHeading
            badge="Für wen die Praxis geeignet ist"
            title="Wenn Beschwerden diffus wirken, darf der Blick trotzdem präzise sein."
            description="Diese Praxis richtet sich an Menschen, die sich eine seriöse, naturheilkundliche Einordnung ihrer Beschwerden wünschen – ohne vorschnelle Versprechen, aber mit Achtsamkeit, Struktur und Erfahrung."
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="glass-card rounded-[2rem] p-8">
            <div className="flex flex-wrap gap-3">
              {symptoms.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-border bg-white/85 px-4 py-2 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Hinweis: Die genannten Themen dienen der Orientierung. Sie ersetzen
              keine individuelle medizinische oder naturheilkundliche Einordnung im
              persönlichen Gespräch.
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}