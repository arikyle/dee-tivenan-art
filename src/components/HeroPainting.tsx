"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { ScrollReveal } from "./ScrollReveal";
import type { Artwork } from "@/lib/data";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+";

export function HeroPainting({ work }: { work: Artwork }) {
  const parallaxRef = useParallax(0.06);

  return (
    <section className="mb-16 md:mb-28">
      <ScrollReveal variant="painting">
        <div className="relative overflow-hidden" ref={parallaxRef}>
          <div className="relative w-full max-w-[1100px] mx-auto aspect-[4/3] overflow-hidden">
            <Image
              src={work.src}
              alt={work.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 860px"
              priority
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="mt-8 max-w-[1100px] mx-auto">
          <p className="text-[12px] text-[var(--color-muted)]">
            <strong><em>{work.alt}</em></strong>
          </p>
          {work.medium && (
            <p className="text-[12px] text-[var(--color-muted)]">{work.medium}</p>
          )}
          {work.dimensions && (
            <p className="text-[12px] text-[var(--color-muted)]">{work.dimensions}</p>
          )}
          <p className="mt-2">
            <a
              href={`/contact?painting=${encodeURIComponent(work.alt)}`}
              className="text-[12px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors duration-500 tracking-wide nav-underline inline-block"
            >
              Inquire
            </a>
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
