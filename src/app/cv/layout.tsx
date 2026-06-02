import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Exhibitions & Awards",
  openGraph: {
    title: "Dee Tivenan — Exhibitions & Awards",
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
