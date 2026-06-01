"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import type { Artwork } from "@/lib/data";

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
    <section className="mb-32">
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[var(--color-foreground)] tracking-[0.02em]">
            {title}
          </h2>
          <Link
            href={href}
            className="text-[12px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors link-underline"
          >
            View all
          </Link>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {works.slice(0, 6).map((work, i) => (
          <ScrollReveal key={work.src} delay={i * 80}>
            <Link href={href} className="group block">
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <p className="text-[11px] text-[var(--color-nav)] group-hover:text-[var(--color-muted)] transition-colors">
                <em>{work.alt}</em>
              </p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
