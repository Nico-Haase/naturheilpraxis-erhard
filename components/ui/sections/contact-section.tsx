import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { BookingPlaceholder } from "@/components/booking/booking-placeholder";
import { siteConfig } from "@/lib/site";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

export function ContactSection() {
  return (
    <SectionShell id="kontakt">
      <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
        <AnimatedReveal>
          <SectionHeading
            badge="Kontakt & Termin"
            title="Der erste Schritt darf sich leicht, klar und vertrauensvoll anfühlen."
            description="Nutzen Sie das Formular für Ihre Anfrage oder integrieren Sie hier später direkt Ihr Buchungssystem. Die gesamte technische Struktur ist darauf vorbereitet."
          />

          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.5rem] border border-border bg-white/75 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-white/75 p-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-white/75 p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">E-Mail</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-white/70">
            <Image
              src="/images/map-placeholder.jpg"
              alt="Platzhalter für Kartenansicht der Praxis"
              width={1200}
              height={700}
              className="h-[240px] w-full object-cover"
            />
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="glass-card rounded-[2rem] p-6 md:p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">Kontaktformular</h3>
              <p className="mt-2 text-muted-foreground">
                Schreiben Sie kurz, worum es geht. So kann die Anfrage bereits
                passend eingeordnet werden.
              </p>
            </div>

            <ContactForm />

            <div className="my-8 h-px bg-border" />

            <BookingPlaceholder />
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}