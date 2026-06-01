"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import type { Artwork } from "@/lib/data";

export function Gallery({ works, title }: { works: Artwork[]; title: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imageKey, setImageKey] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const current = works[selectedIndex];

  const goTo = useCallback((index: number) => {
    setSelectedIndex(index);
    setImageKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightbox) {
        setLightbox(false);
        return;
      }
      if (e.key === "ArrowRight" && selectedIndex < works.length - 1) {
        goTo(selectedIndex + 1);
      } else if (e.key === "ArrowLeft" && selectedIndex > 0) {
        goTo(selectedIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, works.length, goTo, lightbox]);

  return (
    <>
      <div className="w-full max-w-[720px] mx-auto">
        {/* Main image — click opens lightbox */}
        <div className="relative mb-5">
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="relative aspect-square w-full block cursor-zoom-in"
            aria-label={`View ${current.alt} fullscreen`}
          >
            <div
              key={imageKey}
              className="relative w-full h-full painting-shadow crossfade-enter overflow-hidden"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                priority={selectedIndex === 0}
              />
            </div>
          </button>
        </div>

        {/* Caption */}
        <div className="mb-5">
          <p className="text-[12px] text-[var(--color-muted)]">
            <strong><em>{current.alt}</em></strong>
          </p>
          {current.medium && (
            <p className="text-[12px] text-[var(--color-muted)]">{current.medium}</p>
          )}
          {current.dimensions && (
            <p className="text-[12px] text-[var(--color-muted)]">{current.dimensions}</p>
          )}
          {!current.medium && !current.dimensions && (
            <p className="text-[12px] text-[var(--color-muted)]">{title}</p>
          )}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center gap-4 text-[12px] text-[var(--color-nav)]">
          <button
            type="button"
            onClick={() => goTo(Math.max(0, selectedIndex - 1))}
            disabled={selectedIndex === 0}
            className="transition-colors hover:text-[var(--color-foreground)] disabled:opacity-25 disabled:cursor-default"
          >
            prev
          </button>
          <span className="text-[var(--color-border)]">/</span>
          <button
            type="button"
            onClick={() => goTo(Math.min(works.length - 1, selectedIndex + 1))}
            disabled={selectedIndex === works.length - 1}
            className="transition-colors hover:text-[var(--color-foreground)] disabled:opacity-25 disabled:cursor-default"
          >
            next
          </button>
          <span className="mx-2 text-[11px] text-[var(--color-nav)] tabular-nums opacity-60">
            {selectedIndex + 1} / {works.length}
          </span>
          <span className="ml-auto">
            <button
              type="button"
              onClick={() => setShowThumbnails(!showThumbnails)}
              className="transition-colors hover:text-[var(--color-foreground)]"
            >
              {showThumbnails ? "hide thumbnails" : "show thumbnails"}
            </button>
          </span>
        </div>

        {/* Thumbnail grid — stays visible, clicking updates main image only */}
        {showThumbnails && (
          <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
            {works.map((work, i) => (
              <button
                type="button"
                title={work.alt}
                key={work.src}
                onClick={() => goTo(i)}
                className={`relative aspect-square overflow-hidden painting-shadow transition-all duration-300 ${
                  i === selectedIndex
                    ? "ring-2 ring-[var(--color-foreground)] ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox overlay — white background like a museum */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white cursor-zoom-out"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-label="Fullscreen image view"
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute top-8 right-8 text-[var(--color-nav)] hover:text-[var(--color-foreground)] text-[13px] transition-colors z-10"
            aria-label="Close"
          >
            Close
          </button>

          {/* Prev/Next in lightbox */}
          {selectedIndex > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goTo(selectedIndex - 1); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-[var(--color-nav)] hover:text-[var(--color-foreground)] text-[13px] transition-colors z-10"
              aria-label="Previous"
            >
              prev
            </button>
          )}
          {selectedIndex < works.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goTo(selectedIndex + 1); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-[var(--color-nav)] hover:text-[var(--color-foreground)] text-[13px] transition-colors z-10"
              aria-label="Next"
            >
              next
            </button>
          )}

          <div
            key={imageKey}
            className="relative w-[80vw] h-[80vh] max-w-[1100px] crossfade-enter painting-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain cursor-default"
              sizes="80vw"
              priority
            />
          </div>

          {/* Caption in lightbox */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[12px] text-[var(--color-muted)]">
              <em>{current.alt}</em>
              {current.medium && <span className="mx-2 text-[var(--color-nav)]">·</span>}
              {current.medium && <span>{current.medium}</span>}
              {current.dimensions && <span className="mx-2 text-[var(--color-nav)]">·</span>}
              {current.dimensions && <span>{current.dimensions}</span>}
            </p>
            <p className="text-[11px] text-[var(--color-nav)] mt-1 tabular-nums">
              {selectedIndex + 1} / {works.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
