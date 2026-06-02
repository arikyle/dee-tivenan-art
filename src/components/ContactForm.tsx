"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { galleries } from "@/lib/data";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

function PaintingSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, close]);

  useEffect(() => {
    if (open && listRef.current && value) {
      const active = listRef.current.querySelector("[data-active]");
      if (active) active.scrollIntoView({ block: "nearest" });
    }
  }, [open, value]);

  const displayLabel = value || "General inquiry";

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-3 py-2.5 text-[13px] border bg-transparent transition-colors duration-300 text-left ${
          open
            ? "border-[var(--color-foreground)]"
            : "border-[var(--color-border)] hover:border-[var(--color-nav)]"
        } ${value ? "text-[var(--color-foreground)]" : "text-[var(--color-nav)]"}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate pr-2">{displayLabel}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          aria-label="Select a painting"
          data-lenis-prevent
          className="absolute z-50 top-[calc(100%+4px)] left-0 right-0 max-h-[320px] overflow-y-auto overscroll-contain bg-white border border-[var(--color-border)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] [scrollbar-width:thin]"
        >
          <button
            type="button"
            role="option"
            aria-selected={!value}
            onClick={() => { onChange(""); close(); }}
            className={`w-full text-left px-3 py-2.5 text-[13px] transition-colors duration-200 ${
              !value
                ? "text-[var(--color-foreground)] bg-[#f8f8f8]"
                : "text-[var(--color-muted)] hover:bg-[#fafafa]"
            }`}
          >
            General inquiry
          </button>

          {galleries.map((g) => (
            <div key={g.slug}>
              <div className="px-3 pt-3 pb-1 text-[10px] text-[var(--color-nav)] tracking-[0.12em] uppercase select-none">
                {g.title}
              </div>
              {g.works.map((w) => {
                const selected = value === w.alt;
                return (
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    key={w.src}
                    data-active={selected || undefined}
                    onClick={() => { onChange(w.alt); close(); }}
                    className={`w-full text-left px-3 py-2 text-[13px] transition-colors duration-200 ${
                      selected
                        ? "text-[var(--color-foreground)] bg-[#f8f8f8]"
                        : "text-[var(--color-muted)] hover:bg-[#fafafa] hover:text-[var(--color-foreground)]"
                    }`}
                  >
                    <em>{w.alt}</em>
                    {w.dimensions && (
                      <span className="ml-2 text-[11px] text-[var(--color-nav)]">
                        {w.dimensions}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
        <label className="block text-[11px] text-[var(--color-nav)] tracking-wide uppercase mb-1.5">
          Painting of Interest <span className="normal-case">(optional)</span>
        </label>
        <PaintingSelect value={painting} onChange={setPainting} />
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
