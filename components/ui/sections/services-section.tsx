import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

export function ServicesSection() {
  return (
    <SectionShell id="leistungen" className="bg-secondary/35">
      <div className="space-y-12">
        <AnimatedReveal>
          <SectionHeading
            badge="Leistungen"
            title="Moderne naturheilkundliche Leistungen mit klarem Fokus auf hormonelle Balance und individuelle Einordnung."
            description="Jede Leistung ist darauf ausgerichtet, Zusammenhänge verständlich zu machen und daraus einen sinnvollen therapeutischen Weg abzuleiten."
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedReveal key={service.title} delay={index * 0.06}>
              <Card className="glass-card h-full rounded-[2rem] border-0">
                <CardContent className="flex h-full flex-col p-8">
                  <div className="mb-5 space-y-3">
                    <h3 className="text-3xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  <div className="mb-5">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Typische Themen
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.complaints.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-white/80 px-3 py-1.5 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 mt-auto rounded-2xl bg-primary/5 p-4">
                    <p className="text-sm font-medium text-foreground">
                      Nutzen für Patientinnen und Patienten
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.benefit}
                    </p>
                  </div>

                  <Button asChild className="w-fit rounded-full">
                    <Link href="#kontakt">
                      Termin zur Erstberatung
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}