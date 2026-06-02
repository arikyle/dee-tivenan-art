import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    title: "About Dee Tivenan",
    images: [{ url: "/images/about/dee-with-painting.jpg" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
