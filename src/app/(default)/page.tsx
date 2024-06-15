import { BannerCarousel } from "@/components/shared/banner-carousel";
import ListProduction from "@/components/shared/list-production";
import dynamic from "next/dynamic";

const CategoryList = dynamic(
  () => import("@/components/shared/category-list"),
  {
    ssr: false,
  }
);

const AdsCard = dynamic(() => import("@/components/ads/ads-card"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex">
      <div className="">
        <BannerCarousel />
        <section className="px-8 space-y-12 py-2">
          <ListProduction />
          <CategoryList />
          <AdsCard />
        </section>
      </div>
    </main>
  );
}
