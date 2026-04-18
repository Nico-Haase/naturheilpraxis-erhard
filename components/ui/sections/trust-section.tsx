import { Card, CardContent } from "@/components/ui/card";
import { trustPoints } from "@/lib/site";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

export function TrustSection() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <AnimatedReveal>
          <SectionHeading
            badge="Warum diese Praxis"
            title="Ein Ort für Menschen, die sich ernst genommen, klar begleitet und ganzheitlich verstanden fühlen möchten."
            description="Die Praxis verbindet eine ruhige, vertrauensvolle Atmosphäre mit einer klaren, strukturierten Herangehensweise. So entsteht eine Begleitung, die natürlich wirkt und zugleich professionell trägt."
          />
        </AnimatedReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {trustPoints.map((item, index) => (
            <AnimatedReveal key={item.title} delay={index * 0.08}>
              <Card className="glass-card h-full rounded-[1.75rem] border-0">
                <CardContent className="p-7">
                  <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}