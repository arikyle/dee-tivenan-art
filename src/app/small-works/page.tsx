import type { Metadata } from "next";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/lib/data";

export const metadata: Metadata = { title: "DEE TIVENAN — Small Works" };

export default function SmallWorks() {
  const gallery = galleries[0];
  return (
    <Suspense>
      <Gallery works={gallery.works} title={gallery.title} />
    </Suspense>
  );
}
