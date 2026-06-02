"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import type { GalleryCategory } from "@/lib/data";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+";

const representativeIndex: Record<string, number> = {
  "small-works": 0,
  "medium-works": 0,
  "large-works": 2,
};

export function CategoryCards({ galleries }: { galleries: GalleryCategory[] }) {
  const ordered = [galleries[2], galleries[1], galleries[0]];

  return (
    <section className="mb-16 md:mb-20">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[var(--color-foreground)] tracking-[0.02em] mb-8">
          Explore the Collection
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
        {ordered.map((gallery, i) => {
          const imgIndex = representativeIndex[gallery.slug] ?? 0;
          const work = gallery.works[imgIndex];
          return (
            <ScrollReveal key={gallery.slug} delay={i * 150} variant="painting">
              <Link href={`/${gallery.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 painting-hover">
                  <Image
                    src={work.src}
                    alt={`${gallery.title} — ${work.alt}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[13px] font-[family-name:var(--font-heading)] font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-muted)] transition-colors duration-500">
                    {gallery.title}
                  </h3>
                  <span className="text-[11px] text-[var(--color-nav)] tabular-nums">
                    {gallery.works.length} works
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
