import type { Metadata } from "next";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Small Works",
  openGraph: {
    title: "Dee Tivenan — Small Works",
    images: [{ url: "/images/small-works/01-pink-fields-1.jpg" }],
  },
};

export default function SmallWorks() {
  const gallery = galleries[0];
  return (
    <Suspense>
      <Gallery works={gallery.works} title={gallery.title} />
    </Suspense>
  );
}
