import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact Dee Tivenan",
    description: "Inquire about paintings or get in touch.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
