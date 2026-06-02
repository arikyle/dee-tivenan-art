"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import { artistStatement, artistBio, testimonials } from "@/lib/data";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+";

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
    <div className="max-w-[700px] mx-auto md:mx-0">
      {/* Testimonials at top, like original */}
      <div className="mb-12">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i}>
            <ParallaxQuote quote={t.quote} attribution={t.attribution} />
          </ScrollReveal>
        ))}
      </div>

      {/* Artist Statement + studio photo */}
      <div className="md:flex md:gap-10 mb-12">
        <div className="md:flex-1">
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
        </div>
        <ScrollReveal delay={200} variant="painting">
          <div className="mt-8 md:mt-0 md:w-[260px] md:shrink-0">
            <Image
              src="/images/about/dee-in-studio.jpg"
              alt="Dee Tivenan working in her studio"
              width={520}
              height={612}
              className="w-full object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
            <p className="mt-2 text-[11px] text-[var(--color-nav)] italic">
              Dee in her studio
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ParallaxDivider />

      {/* Bio + gallery photo */}
      <div className="md:flex md:gap-10">
        <div className="md:flex-1">
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
        </div>
        <div className="mt-8 md:mt-0 md:w-[260px] md:shrink-0 space-y-6">
          <ScrollReveal delay={200} variant="painting">
            <Image
              src="/images/about/dee-with-painting.jpg"
              alt="Dee Tivenan at a gallery exhibition"
              width={520}
              height={520}
              className="w-full object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
          </ScrollReveal>
          <ScrollReveal delay={300} variant="painting">
            <Image
              src="/images/about/dee-press-clipping.png"
              alt="Orinda Living magazine cover featuring Dee Tivenan — Delightful Dee Tivenan: Art and Heart"
              width={426}
              height={533}
              className="w-full object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
            <p className="mt-2 text-[11px] text-[var(--color-nav)] italic">
              Orinda Living, March 2022
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact */}
      <ScrollReveal>
        <div className="py-16 mt-8 border-t border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-nav)] mb-4">
            Contact
          </h2>
          <a
            href="/contact"
            className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-500 nav-underline inline-block"
          >
            Send a message →
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
