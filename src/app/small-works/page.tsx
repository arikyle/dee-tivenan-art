import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/lib/data";

export const metadata: Metadata = { title: "DEE TIVENAN — Small Works" };

export default function SmallWorks() {
  const gallery = galleries[0];
  return (
    <SiteLayout>
      <Gallery works={gallery.works} title={gallery.title} />
    </SiteLayout>
  );
}
