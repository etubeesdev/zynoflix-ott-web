import * as React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ivideo } from "../types/video";
import Image from "next/image";
import { PathLink } from "@/lib/generate-aws-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useQuery } from "react-query";
import axios from "@/lib/axios";
import { toast } from "sonner";
const fetchWatchLater = async () => {
  const response = await axios.get("/watch-later", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        typeof window !== "undefined" && localStorage.getItem("accessToken")
      }`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Error loading watch later list");
  }

  return response.data;
};
function VideoCarousel({
  data,
  className,
}: {
  data: Ivideo[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const {
    data: watchLaterData,
    isLoading,
    error,
    refetch,
  } = useQuery("watch-later", fetchWatchLater);
  if (isLoading) return <p>Loading...</p>;

  const handletoWatch = async (id: any) => {
    const video_id = id;
    const response = await axios.post(
      `/watch-later/${video_id}`,
      {
        video_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            typeof window !== "undefined" && localStorage.getItem("accessToken")
          }`,
        },
      }
    );
    if (response.status !== 200) {
      toast.error(" Login to add video to watch later list");
    }
    refetch();
    toast.success("Video added to watch later list");
  };

  if (!data) return <p>No data</p>;

  return (
    <Carousel className={cn(className, "w-full overflow-hidden !z-10")}>
      <CarouselContent className="z-10">
        {Array.isArray(data) &&
          data?.map((video: Ivideo, index: number) => (
            <CarouselItem
              className="z-10  basis-auto transition-transform relative transform"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => handletoWatch(video._id)}
                className="absolute top-4 z-50 right-4"
              >
                <Heart
                  className="text-red-500"
                  size={24}
                  fill={
                    watchLaterData.some(
                      (item: any) => item.video_id === video._id
                    )
                      ? "fill"
                      : "none"
                  }
                  stroke="red"
                  color={
                    watchLaterData.some(
                      (item: any) => item.video_id === video._id
                    )
                      ? "red"
                      : "white"
                  }
                />
              </button>
              <Link href={`/video/${video?._id}`} className="">
                <div className="p-1 relative">
                  {hoveredIndex === index ? (
                    <video
                      preload="auto"
                      playsInline
                      autoPlay
                      loop
                      muted
                      poster={PathLink(video.processedImages.medium.path)}
                      className="object-cover rounded-xl w-[289px] h-[216px]"
                      controls={false}
                    >
                      <source src={video.preview_video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      className="rounded-xl"
                      src={PathLink(video.processedImages.medium.path)}
                      alt={video.title}
                      width={289}
                      height={162}
                    />
                  )}
                </div>
                <div className="video-overlay"></div>
                <div className="absolute bottom-5 left-0 right-0">
                  <div className="px-4">
                    <div className="flex items-center">
                      <div className="bg-red-500 w-8 rounded-3xl h-2 rotate-90"></div>
                      <h5 className="text-sm font-bold uppercase">
                        {video.category}
                      </h5>
                    </div>
                    <h1 className="line-clamp-1 pl-4 mt-3 text-sm font-bold">
                      {video.title}
                    </h1>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="ml-12" />
      <CarouselNext className="mr-12" />
    </Carousel>
  );
}

export default VideoCarousel;
