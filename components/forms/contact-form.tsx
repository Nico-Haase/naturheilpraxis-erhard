"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  phone: string;
  concern: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  concern: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Etwas ist schiefgelaufen.");
      }

      setMessage("Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.");
      setForm(initialState);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte nicht gesendet werden."
      );
    } finally {
      setLoading(false);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Ihr Name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
          className="h-12 rounded-2xl bg-white"
        />
        <Input
          type="email"
          placeholder="Ihre E-Mail"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          required
          className="h-12 rounded-2xl bg-white"
        />
      </div>

      <Input
        placeholder="Telefonnummer"
        value={form.phone}
        onChange={(e) => updateField("phone", e.target.value)}
        className="h-12 rounded-2xl bg-white"
      />

      <Textarea
        placeholder="Worum geht es Ihnen? Beschreiben Sie Ihr Anliegen in ein paar Sätzen."
        value={form.concern}
        onChange={(e) => updateField("concern", e.target.value)}
        required
        className="min-h-[160px] rounded-2xl bg-white"
      />

      <Button
        type="submit"
        disabled={loading}
        className="h-12 rounded-full px-6"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            Anfrage senden
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {message ? (
        <p className="text-sm text-muted-foreground">{message}</p>
      ) : null}
    </form>
  );
}