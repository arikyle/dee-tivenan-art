"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NewsletterSignup } from "./NewsletterSignup";

const navLinks = [
  { href: "/small-works", label: "Small Works" },
  { href: "/medium-works", label: "Medium Works" },
  { href: "/large-works", label: "Large Works" },
];

const secondaryLinks = [
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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

function NavLink({ href, label, pathname, stagger }: { href: string; label: string; pathname: string; stagger?: number }) {
  const isActive = pathname === href;
  return (
    <li
      className={stagger !== undefined ? "sidebar-enter" : ""}
      style={stagger !== undefined ? { animationDelay: `${stagger}ms` } : undefined}
    >
      <Link
        href={href}
        className={`inline-block text-[13px] transition-colors duration-300 ${
          isActive
            ? "text-[var(--color-foreground)] nav-active"
            : "text-[var(--color-nav)] hover:text-[var(--color-nav-hover)] nav-underline"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/95 backdrop-blur-sm px-5 py-3 safe-top md:hidden">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-[18px] font-bold tracking-[0.02em] text-[var(--color-foreground)] min-h-[44px] flex items-center"
        >
          DEE TIVENAN
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--color-nav)] text-[13px] tracking-wide uppercase transition-colors hover:text-[var(--color-foreground)]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <nav className="fixed inset-0 top-[50px] z-40 bg-white/98 backdrop-blur-sm px-8 py-10 md:hidden overflow-y-auto menu-enter">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li key={link.href} className="menu-item-enter" style={{ animationDelay: `${i * 50}ms` }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[16px] min-h-[44px] flex items-center transition-colors ${
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
          <ul className="space-y-1">
            {secondaryLinks.map((link, i) => (
              <li key={link.href} className="menu-item-enter" style={{ animationDelay: `${(navLinks.length + i) * 50}ms` }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[16px] min-h-[44px] flex items-center transition-colors ${
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
          <div className="mt-10 menu-item-enter" style={{ animationDelay: `${(navLinks.length + secondaryLinks.length) * 50}ms` }}>
            <a
              href="https://www.instagram.com/deetivenanartist/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] min-h-[44px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
        </nav>
      )}

      {/* Desktop sidebar — fixed so it stays outside scroll flow */}
      <aside className="hidden md:flex md:flex-col md:fixed md:top-0 md:left-0 md:w-[240px] lg:w-[260px] md:h-screen md:py-12 md:px-10 lg:px-14 md:z-40">
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
                <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} stagger={80 + i * 50} />
              ))}
              <li className="pt-3 mt-3 border-t border-[var(--color-border)]" aria-hidden="true" />
              {secondaryLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
              ))}
            </ul>
          </nav>

          <div className="flex-1" />

          <div className="mb-6">
            <NewsletterSignup />
          </div>

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

      {/* Main content — offset by sidebar width on desktop */}
      <main className="px-5 py-10 md:py-20 md:pl-[280px] lg:pl-[310px] md:pr-12 lg:pr-20">
        {children}
      </main>

      {/* Mobile footer */}
      <footer className="md:hidden border-t border-[var(--color-border)] px-6 py-8 safe-bottom">
        <div className="max-w-[280px] mx-auto mb-6">
          <NewsletterSignup />
        </div>
        <div className="text-center">
          <a
            href="https://www.instagram.com/deetivenanartist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] min-h-[44px] text-[var(--color-nav)] hover:text-[var(--color-foreground)] transition-colors"
          >
            <InstagramIcon />
            <span>@deetivenanartist</span>
          </a>
          <p className="mt-3 text-[10px] text-[var(--color-nav)]">
            &copy; {new Date().getFullYear()} Dee Tivenan
          </p>
        </div>
      </footer>
    </div>
  );
}
