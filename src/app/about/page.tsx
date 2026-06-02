"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import { artistStatement, artistBio, testimonials } from "@/lib/data";

function ContactLink() {
  return (
    <a
      href="/contact"
      className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-500 nav-underline inline-block"
    >
      Send a message →
    </a>
  );
}

function ParallaxQuote({ quote, attribution }: { quote: string; attribution: string }) {
  const ref = useParallax(0.04);
  return (
    <div
      ref={ref}
      className="py-16 md:py-24 border-t border-[var(--color-border)]"
    >
      <blockquote>
        <p className="text-[18px] md:text-[22px] leading-[1.5] text-[var(--color-foreground)] font-[family-name:var(--font-heading)] font-light italic max-w-[560px]">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-4 text-[12px] text-[var(--color-nav)] tracking-wide">
          &mdash; {attribution}
        </footer>
      </blockquote>
    </div>
  );
}

function ParallaxDivider() {
  const ref = useParallax(0.06, "x");
  return (
    <div className="my-16 md:my-24 overflow-hidden">
      <div
        ref={ref}
        className="h-px w-full max-w-[120px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent mx-auto"
      />
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-[600px] mx-auto md:mx-0">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-nav)] mb-8">
          Artist Statement
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-[var(--color-muted)] font-light">
          {artistStatement}
        </p>
      </ScrollReveal>

      <ParallaxDivider />

      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-nav)] mb-8">
          Biography
        </h2>
      </ScrollReveal>
      <div className="space-y-6">
        {artistBio.map((paragraph, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <p className="text-[14px] leading-[1.8] text-[var(--color-muted)]">
              {paragraph}
            </p>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i}>
            <ParallaxQuote quote={t.quote} attribution={t.attribution} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="py-16 border-t border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-nav)] mb-4">
            Contact
          </h2>
          <ContactLink />
        </div>
      </ScrollReveal>
    </div>
  );
}
