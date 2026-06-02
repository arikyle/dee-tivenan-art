"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      setVisible(false);
      const timer = setTimeout(() => {
        setVisible(true);
        prevPathname.current = pathname;
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div
      className="transition-opacity duration-[400ms] ease-[var(--ease-out-quint)]"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </div>
  );
}
