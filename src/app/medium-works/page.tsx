import type { Metadata } from "next";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/lib/data";

export const metadata: Metadata = { title: "DEE TIVENAN — Medium Works" };

export default function MediumWorks() {
  const gallery = galleries[1];
  return (
    <Suspense>
      <Gallery works={gallery.works} title={gallery.title} />
    </Suspense>
  );
}
