import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/site";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

export function TestimonialsSection() {
  return (
    <SectionShell>
      <div className="space-y-12">
        <AnimatedReveal>
          <SectionHeading
            badge="Vertrauen"
            title="Stimmen, die Ruhe, Kompetenz und persönliche Begleitung widerspiegeln."
            description="Platzhalter für echte, später rechtssicher freigegebene Erfahrungsberichte. Schon jetzt ist die Website so gestaltet, dass Testimonials hochwertig und glaubwürdig eingebunden werden können."
            align="center"
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedReveal key={item.name} delay={index * 0.06}>
              <Card className="glass-card h-full rounded-[2rem] border-0">
                <CardContent className="flex h-full flex-col p-8">
                  <p className="flex-1 text-lg leading-8 text-foreground">
                    “{item.text}”
                  </p>
                  <div className="mt-6 text-sm font-medium text-muted-foreground">
                    {item.name}
                  </div>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.2}>
          <div className="grid gap-4 rounded-[2rem] border border-border bg-white/70 p-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">10+</p>
              <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">1:1</p>
              <p className="text-sm text-muted-foreground">Individuelle Betreuung</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Natürlich</p>
              <p className="text-sm text-muted-foreground">
                Verantwortungsvolle Therapieansätze
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}