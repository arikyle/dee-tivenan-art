"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import { resumeData } from "@/lib/data";

function ParallaxYear({ year, entries, delay }: { year: string; entries: string[]; delay: number }) {
  const ref = useParallax(0.02);
  return (
    <ScrollReveal delay={delay}>
      <div className="mb-10" ref={ref}>
        <h3 className="text-[15px] font-semibold text-[var(--color-foreground)] mb-3 font-[family-name:var(--font-heading)]">
          {year}
        </h3>
        <ul className="space-y-1.5">
          {entries.map((entry, i) => (
            <li key={i} className="text-[12px] text-[var(--color-muted)] leading-relaxed pl-3 border-l border-[var(--color-border)]">
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

export default function CV() {
  return (
    <div className="max-w-[600px] mx-auto md:mx-0">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-nav)] mb-12">
          Exhibitions &amp; Awards
        </h2>
      </ScrollReveal>

      {resumeData.map((year, yi) => (
        <ParallaxYear key={year.year} year={year.year} entries={year.entries} delay={yi * 60} />
      ))}

      <ScrollReveal>
        <p className="text-[12px] text-[var(--color-nav)] mt-12 pt-8 border-t border-[var(--color-border)]">
          For exhibitions prior to 2021, please{" "}
          <a
            href="/contact"
            className="hover:text-[var(--color-foreground)] transition-colors duration-300 nav-underline inline-block"
          >
            get in touch
          </a>
        </p>
      </ScrollReveal>
    </div>
  );
}
