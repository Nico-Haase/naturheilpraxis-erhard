import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/site";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

export function FaqSection() {
  return (
    <SectionShell id="faq" className="bg-secondary/35">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <AnimatedReveal>
          <SectionHeading
            badge="FAQ"
            title="Häufige Fragen vor dem ersten Termin"
            description="Eine gute Praxis-Website beantwortet nicht nur Fragen – sie nimmt Unsicherheit heraus und schafft Orientierung."
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="rounded-[2rem] border border-border bg-white/75 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}