"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Fireworks } from "fireworks-js";
import { useRef, useState, useEffect } from "react";

type ContactFormLabels = {
  name: string;
  email: string;
  message: string;
  send: string;
};

type SubmissionState = "idle" | "loading";

interface ContactFormProps {
  labels: ContactFormLabels;
}

const FORM_ENDPOINT = "https://formspree.io/f/xjkdkrev";

export default function ContactForm({ labels }: ContactFormProps) {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const containerRef = useRef(null);
  const [fireworks, setFireworks] = useState<Fireworks | null>(null);

  // Initialisation une seule fois :
  useEffect(() => {
    if (containerRef.current) {
      const fw = new Fireworks(containerRef.current, {
        autoresize: true,
        opacity: 0.5,
      });
      setFireworks(fw);
    }
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("loading");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast.success("Message envoyé avec succès !");
      setStatus("idle");
      fireworks?.start();   // 🔥 Lance les feux d’artifice
    setTimeout(() => fireworks?.stop(), 6000);
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'envoi.");
      setStatus("idle");
    }
  };

  return (
    <>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-muted-foreground dark:text-gray-300"
        >
          {labels.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border-2 border-zinc-300 bg-white px-4 py-3 text-foreground transition-colors focus:border-[#E4B9A5] focus:outline-none dark:border-zinc-600 dark:bg-zinc-800"
          placeholder={labels.name}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-muted-foreground dark:text-gray-300"
        >
          {labels.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border-2 border-zinc-300 bg-white px-4 py-3 text-foreground transition-colors focus:border-[#E4B9A5] focus:outline-none dark:border-zinc-600 dark:bg-zinc-800"
          placeholder={labels.email}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-muted-foreground dark:text-gray-300"
        >
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border-2 border-zinc-300 bg-white px-4 py-3 text-foreground transition-colors focus:border-[#E4B9A5] focus:outline-none dark:border-zinc-600 dark:bg-zinc-800"
          placeholder={labels.message}
        />
      </div>
      <div className="space-y-3">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#e76f38] to-[#c4715c] py-6 font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:from-[#d55a2a] hover:to-[#b35d4a] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-80"
        >
          <Send className="mr-2 h-4 w-4" />
          {status === "loading" ? "Envoi…" : labels.send}
        </Button>
      </div>
    </form>
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999"
    />
    </>
  );
}

