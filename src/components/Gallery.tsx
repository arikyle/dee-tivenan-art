"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { useSwipe } from "@/hooks/useSwipe";
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

  const goNext = useCallback(() => {
    if (selectedIndex < works.length - 1) goTo(selectedIndex + 1);
  }, [selectedIndex, works.length, goTo]);

  const goPrev = useCallback(() => {
    if (selectedIndex > 0) goTo(selectedIndex - 1);
  }, [selectedIndex, goTo]);

  const mainSwipe = useSwipe(goNext, goPrev);
  const lightboxSwipe = useSwipe(goNext, goPrev);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightbox) {
        setLightbox(false);
        return;
      }
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, lightbox]);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [lightbox]);

  return (
    <>
      <div className="w-full max-w-[720px] mx-auto">
        {/* Main image — swipeable, click opens lightbox */}
        <div
          className="relative mb-5"
          {...mainSwipe}
        >
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
          <p className="text-[13px] md:text-[12px] text-[var(--color-muted)]">
            <strong><em>{current.alt}</em></strong>
          </p>
          {current.medium && (
            <p className="text-[13px] md:text-[12px] text-[var(--color-muted)]">{current.medium}</p>
          )}
          {current.dimensions && (
            <p className="text-[13px] md:text-[12px] text-[var(--color-muted)]">{current.dimensions}</p>
          )}
          {!current.medium && !current.dimensions && (
            <p className="text-[13px] md:text-[12px] text-[var(--color-muted)]">{title}</p>
          )}
        </div>

        {/* Navigation controls — touch-friendly */}
        <div className="flex items-center gap-2 text-[13px] md:text-[12px] text-[var(--color-nav)]">
          <button
            type="button"
            onClick={goPrev}
            disabled={selectedIndex === 0}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors hover:text-[var(--color-foreground)] disabled:opacity-25 disabled:cursor-default"
          >
            prev
          </button>
          <span className="text-[var(--color-border)]">/</span>
          <button
            type="button"
            onClick={goNext}
            disabled={selectedIndex === works.length - 1}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors hover:text-[var(--color-foreground)] disabled:opacity-25 disabled:cursor-default"
          >
            next
          </button>
          <span className="mx-1 text-[11px] text-[var(--color-nav)] tabular-nums opacity-60">
            {selectedIndex + 1} / {works.length}
          </span>
          <span className="ml-auto">
            <button
              type="button"
              onClick={() => setShowThumbnails(!showThumbnails)}
              className="min-h-[44px] px-2 flex items-center transition-colors hover:text-[var(--color-foreground)]"
            >
              {showThumbnails ? "hide thumbnails" : "show thumbnails"}
            </button>
          </span>
        </div>

        {/* Thumbnail grid */}
        {showThumbnails && (
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
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

      {/* Lightbox overlay — swipeable, mobile-optimized */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white cursor-zoom-out safe-top safe-bottom"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-label="Fullscreen image view"
          {...lightboxSwipe}
        >
          {/* Close — top-right, touch-friendly */}
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--color-nav)] hover:text-[var(--color-foreground)] text-[13px] transition-colors z-10"
            aria-label="Close"
          >
            Close
          </button>

          {/* Prev — left side, full-height touch zone on mobile */}
          {selectedIndex > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-0 top-0 bottom-0 w-16 md:w-auto md:left-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto flex items-center justify-center text-[var(--color-nav)] hover:text-[var(--color-foreground)] text-[13px] transition-colors z-10"
              aria-label="Previous"
            >
              <span className="hidden md:inline">prev</span>
              <span className="md:hidden text-[18px]">‹</span>
            </button>
          )}

          {/* Next — right side, full-height touch zone on mobile */}
          {selectedIndex < works.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-0 top-0 bottom-0 w-16 md:w-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto flex items-center justify-center text-[var(--color-nav)] hover:text-[var(--color-foreground)] text-[13px] transition-colors z-10"
              aria-label="Next"
            >
              <span className="hidden md:inline">next</span>
              <span className="md:hidden text-[18px]">›</span>
            </button>
          )}

          <div
            key={imageKey}
            className="relative w-[90vw] h-[70vh] md:w-[80vw] md:h-[80vh] max-w-[1100px] crossfade-enter painting-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain cursor-default"
              sizes="90vw"
              priority
            />
          </div>

          {/* Caption in lightbox */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-center px-4 w-full max-w-[600px]">
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
