import type { Metadata } from "next";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Large Works",
  openGraph: {
    title: "Dee Tivenan — Large Works",
    images: [{ url: "/images/large-works/03-traveling.jpg" }],
  },
};

export default function LargeWorks() {
  const gallery = galleries[2];
  return (
    <Suspense>
      <Gallery works={gallery.works} title={gallery.title} />
    </Suspense>
  );
}
