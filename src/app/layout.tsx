import type { Metadata, Viewport } from "next";
import { Montserrat, Jost } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import "lenis/dist/lenis.css";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jost = Jost({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "DEE TIVENAN",
    template: "%s | Dee Tivenan",
  },
  description: "Abstract expressionist artist creating mixed media paintings exploring nature, emotion, and bold color.",
  metadataBase: new URL("https://dee-tivenan-art.vercel.app"),
  openGraph: {
    title: "Dee Tivenan — Abstract Expressionist Artist",
    description: "Mixed media paintings exploring nature, emotion, and bold color.",
    images: [
      {
        url: "/images/large-works/08-new-hope.jpg",
        width: 1200,
        height: 900,
        alt: "New Hope — mixed media on yupo paper by Dee Tivenan",
      },
    ],
    type: "website",
    siteName: "Dee Tivenan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dee Tivenan — Abstract Expressionist Artist",
    description: "Mixed media paintings exploring nature, emotion, and bold color.",
    images: ["/images/large-works/08-new-hope.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jost.variable} h-full`}>
      <body className="min-h-full">
        <SmoothScroll>
          <SiteLayout>
            <PageTransition>{children}</PageTransition>
          </SiteLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}
