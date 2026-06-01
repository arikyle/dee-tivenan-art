import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { HeroPainting } from "@/components/HeroPainting";
import { galleries } from "@/lib/data";

export const metadata: Metadata = {
  title: "DEE TIVENAN — Selected Works",
  description: "Abstract expressionist artist. Mixed media paintings exploring nature, emotion, and bold color.",
};

export default function Home() {
  const heroWork = galleries[2].works[7]; // "New Hope" — large work

  return (
    <SiteLayout>
      <div className="max-w-[900px] mx-auto">
        <HeroPainting work={heroWork} />

        <FeaturedGrid
          works={galleries[2].works}
          title="Large Works"
          href="/large-works"
        />
        <FeaturedGrid
          works={galleries[1].works}
          title="Medium Works"
          href="/medium-works"
        />
        <FeaturedGrid
          works={galleries[0].works}
          title="Small Works"
          href="/small-works"
        />
      </div>
    </SiteLayout>
  );
}
