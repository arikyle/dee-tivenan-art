import type { Metadata } from "next";
import { HeroPainting } from "@/components/HeroPainting";
import { CategoryCards } from "@/components/CategoryCards";
import { galleries } from "@/lib/data";

export const metadata: Metadata = {
  title: "DEE TIVENAN",
  description: "Abstract expressionist artist. Mixed media paintings exploring nature, emotion, and bold color.",
};

export default function Home() {
  const heroWork = galleries[2].works[7];

  return (
    <div className="max-w-[1100px] w-full mx-auto">
      <HeroPainting work={heroWork} />
      <CategoryCards galleries={galleries} />
    </div>
  );
}
