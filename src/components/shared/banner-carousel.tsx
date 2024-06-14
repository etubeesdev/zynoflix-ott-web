"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "@/lib/axios";
import { useQuery } from "react-query";
import Loading from "../ui/loading";
import { Ivideo } from "../types/video";
import { PathLink } from "@/lib/generate-aws-link";

// Mock API function
const fetchBannerVideo = async () => {
  const response = await axios.get("/banner");
  if (response.status !== 200) {
    throw new Error("Error loading banner video");
  }
  return response.data;
};

export function BannerCarousel() {
  const { data, error, isLoading } = useQuery("banner", fetchBannerVideo);

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: ";

  return (
    <Carousel className="h-[650px] w-full">
      <CarouselContent>
        {data.video.map((video: Ivideo, index: number) => (
          <CarouselItem key={index} className="">
            <div className="relative">
              <video
                preload="auto"
                playsInline
                autoPlay
                loop
                muted
                poster={PathLink(video.processedImages.medium.path)}
                width="320"
                className="w-full h-[600px] aspect-auto object-cover"
                height="240"
                controls={false}
              >
                <source src={video.preview_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay"></div>
              <div className="absolute  top-[30%] left-12 right-0">
                <div className="">
                  <div className="w-1/2">
                    <div className="text-white">
                      <h2 className="text-3xl w-1/2 line-clamp-2 font-bold">
                        {video.title}
                      </h2>

                      <div className="gap-2 text-xs text-gray-300 flex items-center py-4">
                        <span className="">{video.language}</span>
                        <span>|</span>
                        <span className="">{video.category}</span>
                      </div>
                      <p className="text-xs text-gray-300">
                        {video.description}
                      </p>

                      <button className="bg-white flex items-center gap-2 border rounded-full text-black px-4 py-2 mt-6">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16" />
      <CarouselNext className="mr-16" />
    </Carousel>
  );
}
