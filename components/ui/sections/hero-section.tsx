import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionShell } from "@/components/shared/section-shell";

const trustItems = [
  { icon: Leaf, label: "Ganzheitlich" },
  { icon: UserRound, label: "Individuell" },
  { icon: ShieldCheck, label: "Natürlich" },
  { icon: Sparkles, label: "Über 10 Jahre Erfahrung" },
];

export function HeroSection() {
  return (
    <SectionShell id="start" className="pb-10 pt-10 md:pt-14 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <AnimatedReveal className="space-y-8">
          <div className="inline-flex rounded-full border border-border bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Naturheilpraxis für hormonelle Balance & ganzheitliche Begleitung
          </div>

          <div className="space-y-6">
            <h1 className="text-balance text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              Mehr Ruhe, mehr Klarheit, mehr Balance für Ihren Körper.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              In der Naturheilpraxis Erhard stehen Sie als Mensch im Mittelpunkt:
              mit fundierter Analyse, natürlicher Therapieorientierung und einer
              Begleitung, die Kompetenz und Vertrauen spürbar verbindet.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="#kontakt">Termin buchen</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
            >
              <Link href="#leistungen">Leistungen ansehen</Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="glass-card premium-ring flex items-center gap-3 rounded-2xl px-4 py-4"
                >
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 shadow-[0_20px_80px_-30px_rgba(55,45,35,0.28)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/30" />
            <Image
              src="/images/praxis-hero.jpg"
              alt="Hochwertige Innenansicht einer modernen Naturheilpraxis"
              width={900}
              height={1100}
              className="h-full min-h-[520px] w-full object-cover"
              priority
            />
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}