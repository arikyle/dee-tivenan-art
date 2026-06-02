"use client";

import { useState } from "react";
import { galleries } from "@/lib/data";

const allWorks = galleries.flatMap((g) =>
  g.works.map((w) => ({ label: w.alt, category: g.title }))
);

export function ContactForm({ preselectedWork }: { preselectedWork?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [painting, setPainting] = useState(preselectedWork || "");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const subject = painting
      ? `Inquiry about "${painting}"`
      : "General Inquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      painting ? `Painting: ${painting}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:deetivenan@comcast.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => setStatus("sent"), 500);
  }

  if (status === "sent") {
    return (
      <div className="py-12">
        <p className="text-[15px] text-[var(--color-foreground)] font-[family-name:var(--font-heading)] mb-3">
          Your email client should have opened.
        </p>
        <p className="text-[13px] text-[var(--color-muted)] mb-6">
          If it didn&apos;t, you can reach Dee directly at{" "}
          <a
            href="mailto:deetivenan@comcast.net"
            className="hover:text-[var(--color-foreground)] transition-colors duration-300 nav-underline inline-block"
          >
            deetivenan@comcast.net
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setMessage("");
            setPainting("");
          }}
          className="text-[12px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors duration-300 nav-underline inline-block"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-[440px]">
      <div>
        <label htmlFor="contact-name" className="block text-[11px] text-[var(--color-nav)] tracking-wide uppercase mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2.5 text-[13px] border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-nav)] focus:outline-none focus:border-[var(--color-foreground)] transition-colors duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-[11px] text-[var(--color-nav)] tracking-wide uppercase mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2.5 text-[13px] border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-nav)] focus:outline-none focus:border-[var(--color-foreground)] transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-painting" className="block text-[11px] text-[var(--color-nav)] tracking-wide uppercase mb-1.5">
          Painting of Interest <span className="normal-case">(optional)</span>
        </label>
        <select
          id="contact-painting"
          value={painting}
          onChange={(e) => setPainting(e.target.value)}
          className="w-full px-3 py-2.5 text-[13px] border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-foreground)] transition-colors duration-300 appearance-none"
        >
          <option value="">General inquiry</option>
          {galleries.map((g) => (
            <optgroup key={g.slug} label={g.title}>
              {g.works.map((w) => (
                <option key={w.src} value={w.alt}>
                  {w.alt}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-[11px] text-[var(--color-nav)] tracking-wide uppercase mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full px-3 py-2.5 text-[13px] border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-nav)] focus:outline-none focus:border-[var(--color-foreground)] transition-colors duration-300 resize-vertical"
          placeholder="I'm interested in learning more about your work..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-2.5 text-[11px] tracking-[0.1em] uppercase bg-[var(--color-foreground)] text-white hover:opacity-80 transition-opacity duration-300 disabled:opacity-50"
      >
        {status === "sending" ? "Opening..." : "Send Message"}
      </button>
    </form>
  );
}
