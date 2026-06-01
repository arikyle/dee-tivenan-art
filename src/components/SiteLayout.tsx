"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Selected Works" },
  { href: "/small-works", label: "Small Works" },
  { href: "/medium-works", label: "Medium Works" },
  { href: "/large-works", label: "Large Works" },
];

const secondaryLinks = [
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
];

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Mobile header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/95 backdrop-blur-sm px-6 py-4 md:hidden">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-[18px] font-bold tracking-[0.02em] text-[var(--color-foreground)]"
        >
          DEE TIVENAN
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[var(--color-nav)] text-[13px] tracking-wide uppercase transition-colors hover:text-[var(--color-foreground)]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <nav className="fixed inset-0 top-[57px] z-40 bg-white/98 backdrop-blur-sm px-8 py-10 md:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[15px] transition-colors ${
                    pathname === link.href
                      ? "text-[var(--color-foreground)] font-medium"
                      : "text-[var(--color-nav)] hover:text-[var(--color-nav-hover)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-5 w-10 h-px bg-[var(--color-border)]" />
          <ul className="space-y-4">
            {secondaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[15px] transition-colors ${
                    pathname === link.href
                      ? "text-[var(--color-foreground)] font-medium"
                      : "text-[var(--color-nav)] hover:text-[var(--color-nav-hover)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="https://www.instagram.com/deetivenanartist/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-[240px] lg:w-[260px] md:shrink-0 md:sticky md:top-0 md:h-screen md:py-12 md:px-10 lg:px-14">
        <div className="flex flex-col h-full">
          <Link
            href="/"
            className="sidebar-enter font-[family-name:var(--font-heading)] text-[24px] font-bold leading-[1.15] tracking-[0.01em] text-[var(--color-foreground)] block mb-8"
            style={{ animationDelay: "0ms" }}
          >
            DEE
            <br />
            TIVENAN
          </Link>

          <nav>
            <ul className="space-y-[6px]">
              {navLinks.map((link, i) => (
                <li key={link.href} className="sidebar-enter" style={{ animationDelay: `${80 + i * 50}ms` }}>
                  <Link
                    href={link.href}
                    className={`block text-[13px] transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-[var(--color-foreground)]"
                        : "text-[var(--color-nav)] hover:text-[var(--color-nav-hover)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-[13px] transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-[var(--color-foreground)]"
                        : "text-[var(--color-nav)] hover:text-[var(--color-nav-hover)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1" />

          <div>
            <a
              href="https://www.instagram.com/deetivenanartist/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <p className="mt-3 text-[10px] text-[var(--color-nav)] leading-relaxed">
              &copy; {new Date().getFullYear()} Dee Tivenan
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex justify-center px-8 py-10 md:py-16 md:px-16 lg:px-24">
        {children}
      </main>

      {/* Mobile footer */}
      <footer className="md:hidden border-t border-[var(--color-border)] px-6 py-8 text-center">
        <a
          href="https://www.instagram.com/deetivenanartist/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[12px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors"
        >
          <InstagramIcon />
          <span>@deetivenanartist</span>
        </a>
        <p className="mt-3 text-[10px] text-[var(--color-nav)]">
          &copy; {new Date().getFullYear()} Dee Tivenan
        </p>
      </footer>
    </div>
  );
}
