import { CalendarDays } from "lucide-react";

export function BookingPlaceholder() {
  return (
    <div className="rounded-[2rem] border border-dashed border-primary/30 bg-primary/5 p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-full bg-primary/10 p-2 text-primary">
          <CalendarDays className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold">Terminbuchung</h3>
      </div>

      <p className="text-sm text-muted-foreground">
        Dieser Bereich ist bewusst für dein bestehendes Terminbuchungsmodul
        vorbereitet.
      </p>

      <div className="mt-5 rounded-2xl border border-border bg-white/80 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">
          Hier kannst du später deinen vorhandenen Kalender-Code einsetzen:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-secondary/60 p-4 text-xs">
{`{/* Beispiel:
import { ExistingBookingCalendar } from "@/components/booking/existing-booking-calendar";

<ExistingBookingCalendar />
*/}`}
        </pre>
      </div>
    </div>
  );
}