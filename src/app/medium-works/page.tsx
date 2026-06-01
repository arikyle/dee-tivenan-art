import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/lib/data";

export const metadata: Metadata = { title: "DEE TIVENAN — Medium Works" };

export default function MediumWorks() {
  const gallery = galleries[1];
  return (
    <SiteLayout>
      <Gallery works={gallery.works} title={gallery.title} />
    </SiteLayout>
  );
}
