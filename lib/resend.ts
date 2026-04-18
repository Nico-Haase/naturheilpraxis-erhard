import { Resend } from "resend";

export const resend =
  process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

/**
 * Späterer Einsatz:
 * - Eingangsbestätigung an Patient:innen
 * - interne Benachrichtigung an die Praxis
 * - Follow-up E-Mails / Lead Nurturing
 */