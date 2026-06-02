"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterSignup } from "@/components/NewsletterSignup";

function ContactContent() {
  const searchParams = useSearchParams();
  const painting = searchParams.get("painting") || undefined;

  return (
    <div className="max-w-[600px] mx-auto md:mx-0">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-nav)] mb-3">
          Contact
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-[var(--color-muted)] font-light mb-10">
          Interested in a painting or want to learn more about Dee&apos;s work? Send a message below.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <ContactForm preselectedWork={painting} />
      </ScrollReveal>

      <ScrollReveal delay={240}>
        <div className="mt-16 pt-12 border-t border-[var(--color-border)] max-w-[280px]">
          <p className="text-[13px] text-[var(--color-muted)] mb-4">
            Stay up to date with new work and exhibitions.
          </p>
          <NewsletterSignup />
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
