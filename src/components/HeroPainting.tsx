"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { ScrollReveal } from "./ScrollReveal";
import type { Artwork } from "@/lib/data";

export function HeroPainting({ work }: { work: Artwork }) {
  const { ref, offset } = useParallax(0.08);

  return (
    <section className="mb-24" ref={ref}>
      <ScrollReveal>
        <div className="relative overflow-hidden">
          <div
            className="relative w-full max-w-[640px] mx-auto aspect-square overflow-hidden"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <Image
              src={work.src}
              alt={work.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
              priority
            />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="mt-6 max-w-[640px] mx-auto">
          <p className="text-[12px] text-[var(--color-muted)]">
            <strong><em>{work.alt}</em></strong>
          </p>
          {work.medium && (
            <p className="text-[12px] text-[var(--color-muted)]">{work.medium}</p>
          )}
          {work.dimensions && (
            <p className="text-[12px] text-[var(--color-muted)]">{work.dimensions}</p>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
