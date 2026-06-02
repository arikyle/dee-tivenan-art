"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import type { Artwork } from "@/lib/data";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+";

export function FeaturedGrid({
  works,
  title,
  href,
}: {
  works: Artwork[];
  title: string;
  href: string;
}) {
  return (
    <section className="mb-16 md:mb-20 last:mb-0">
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[var(--color-foreground)] tracking-[0.02em]">
            {title}
          </h2>
          <Link
            href={href}
            className="text-[12px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors duration-400 nav-underline"
          >
            View all
          </Link>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-8">
        {works.slice(0, 6).map((work, i) => (
          <ScrollReveal key={work.src} delay={i * 120} variant="painting">
            <Link href={`${href}?start=${i}`} className="group block">
              <div className="relative aspect-square overflow-hidden mb-3 painting-hover">
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
              </div>
              <p className="text-[12px] md:text-[11px] text-[var(--color-nav)] group-hover:text-[var(--color-muted)] transition-colors duration-500">
                <em>{work.alt}</em>
              </p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
