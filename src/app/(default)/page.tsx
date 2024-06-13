import AdsCard from "@/components/ads/ads-card";
import { BannerCarousel } from "@/components/shared/banner-carousel";
import dynamic from "next/dynamic";

const CategoryList = dynamic(
  () => import("@/components/shared/category-list"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex">
      <div className="">
        <BannerCarousel />
        <section className="px-8 space-y-12 py-8">
          <CategoryList />
          <AdsCard />
        </section>
      </div>
    </main>
  );
}
