import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { resumeData } from "@/lib/data";

export default function CV() {
  return (
    <SiteLayout>
      <div className="max-w-[600px] mx-auto md:mx-0">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-nav)] mb-12">
            Exhibitions &amp; Awards
          </h2>
        </ScrollReveal>

        {resumeData.map((year, yi) => (
          <ScrollReveal key={year.year} delay={yi * 60}>
            <div className="mb-10">
              <h3 className="text-[15px] font-semibold text-[var(--color-foreground)] mb-3 font-[family-name:var(--font-heading)]">
                {year.year}
              </h3>
              <ul className="space-y-1.5">
                {year.entries.map((entry, i) => (
                  <li key={i} className="text-[12px] text-[var(--color-muted)] leading-relaxed pl-3 border-l border-[var(--color-border)]">
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <p className="text-[12px] text-[var(--color-nav)] mt-12 pt-8 border-t border-[var(--color-border)]">
            For exhibitions prior to 2021, please contact{" "}
            <a
              href="mailto:deetivenan@comcast.net"
              className="hover:text-[var(--color-foreground)] transition-colors link-underline"
            >
              deetivenan@comcast.net
            </a>
          </p>
        </ScrollReveal>
      </div>
    </SiteLayout>
  );
}
