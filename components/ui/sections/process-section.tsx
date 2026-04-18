import { processSteps } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

export function ProcessSection() {
  return (
    <SectionShell id="ablauf" className="bg-secondary/35">
      <div className="space-y-12">
        <AnimatedReveal>
          <SectionHeading
            badge="Ablauf"
            title="So entsteht eine Zusammenarbeit, die Sicherheit, Klarheit und Orientierung gibt."
            description="Von der ersten Anfrage bis zur begleiteten Entwicklung ist jeder Schritt darauf ausgerichtet, Vertrauen aufzubauen und Ihren Weg nachvollziehbar zu strukturieren."
          />
        </AnimatedReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((item, index) => (
            <AnimatedReveal key={item.step} delay={index * 0.06}>
              <Card className="glass-card h-full rounded-[1.75rem] border-0">
                <CardContent className="p-6">
                  <div className="mb-4 text-sm uppercase tracking-[0.24em] text-primary">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}