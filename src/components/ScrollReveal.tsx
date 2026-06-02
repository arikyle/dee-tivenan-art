"use client";

import { useInView } from "@/hooks/useInView";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "clip" | "painting";
}) {
  const { ref, isVisible } = useInView(0.12);

  const baseClass =
    variant === "clip"
      ? "reveal-clip"
      : variant === "painting"
        ? "reveal-painting"
        : "fade-in-up";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? "visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
