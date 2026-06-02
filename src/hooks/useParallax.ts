"use client";

import { useEffect, useRef } from "react";

export function useParallax(speed = 0.15, axis: "y" | "x" = "y") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.willChange = "transform";

    let target = 0;
    let current = 0;
    let raf = 0;
    let running = false;

    const LERP = 0.055;
    const THRESHOLD = 0.05;

    const tick = () => {
      const diff = target - current;
      if (Math.abs(diff) < THRESHOLD) {
        current = target;
        running = false;
      } else {
        current += diff * LERP;
        raf = requestAnimationFrame(tick);
      }
      el.style.transform =
        axis === "y"
          ? `translate3d(0, ${current}px, 0)`
          : `translate3d(${current}px, 0, 0)`;
    };

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      target = (center - window.innerHeight / 2) * speed;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      el.style.willChange = "";
    };
  }, [speed, axis]);

  return ref;
}
