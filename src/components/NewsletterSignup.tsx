"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setMessage("Thank you for subscribing.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(data.error || "Could not subscribe. Please check your email and try again.");
    }
  }

  return (
    <div className="w-full">
      <p className="text-[11px] text-[var(--color-nav)] mb-2 tracking-wide uppercase">
        Newsletter
      </p>
      {status === "success" ? (
        <p className="text-[12px] text-[var(--color-foreground)]">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="w-full px-3 py-2 text-[12px] border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-nav)] focus:outline-none focus:border-[var(--color-foreground)] transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-3 py-2 text-[11px] tracking-wide uppercase bg-[var(--color-foreground)] text-white hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
          {status === "error" && (
            <p className="text-[11px] text-red-600">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
