import axios from "@/lib/axios";
import { videoRatio } from "@/lib/config";
import { PathLink } from "@/lib/generate-aws-link";
import { convertMinutesToReadableFormat, timeAgoString } from "@/lib/time";
import { isLogin } from "@/lib/user";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useQuery } from "react-query";
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
const VideoCard = ({ video, index, hiddenNew }: any) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const {
    data: watchLaterData,
    isLoading,
    refetch,
  } = useQuery("watch-later", fetchWatchLater);
  const router = useRouter();
  const handletoWatch = async (id: any) => {
    if (isLogin) {
      toast.warning(
        "You need to login to add comment. Please login to add comment"
      );
      router.push("/login");
      return;
    }
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

  const language =
    typeof video?.language[0] === "string"
      ? video.language[0].split(",")[0]
      : "Unknown";
  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="h-auto">
        <button
          onClick={() => handletoWatch(video._id)}
          className="absolute top-4 z-50 right-4"
        >
          <Heart
            className="text-red-500"
            size={24}
            fill={
              watchLaterData?.some((item: any) => item.video_id === video._id)
                ? "fill"
                : "none"
            }
            stroke="red"
            color={
              watchLaterData?.some((item: any) => item.video_id === video._id)
                ? "red"
                : "white"
            }
          />
        </button>
        {!hiddenNew && (
          <div className="absolute top-4 z-50 left-6">
            <div className="border-cut shadow-2xl flex items-center flex-col rounded-t-md bg-green-500 px-2 py-3">
              <span className="text-black text-sm font-bold">NEW</span>
              <span className="text-black text-xs font-extrabold">
                {video.certification}
              </span>
            </div>
          </div>
        )}
        <Link href={`/video/${video?._id}`} className="">
          <div className={"duration-300"}>
            <div className="relative">
              {hoveredIndex === index ? (
                <video
                  preload="auto"
                  playsInline
                  autoPlay
                  loop
                  muted
                  poster={PathLink(video.processedImages.medium.path)}
                  className={cn("object-cover rounded-xl ", videoRatio)}
                  controls={false}
                >
                  <source src={video.preview_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  className={cn("rounded-xl object-cover", videoRatio)}
                  src={PathLink(video.processedImages.medium.path)}
                  alt={video.title}
                  width={310}
                  height={194}
                />
              )}
              <div className="video-overlay !opacity-45"></div>
              <div className={cn("absolute bottom-3 left-0 right-0")}>
                <div className="px-2">
                  <div className="flex items-center">
                    <div className="bg-red-500 w-8 rounded-3xl h-1 rotate-90"></div>
                    <h5 className="text-xs font-bold uppercase">
                      {video.category}
                    </h5>
                  </div>
                  <h1 className="line-clamp-2 text-sm mt-3 font-bold">
                    {video.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center mt-2 gap-4">
              <img
                className="w-10 h-10 rounded-full"
                src={video?.user?.profilePic}
                alt={video?.user?.full_name}
              />
              <div className="font-medium dark:text-white">
                <div>{video?.user?.full_name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {video.followerCount} followers
                </div>
              </div>
            </div>

            <div className="text-white capitalize gap-2 pt-2 flex flex-wrap text-xs font-bold">
              <span>{language}</span> <span>|</span>{" "}
              <span>
                {convertMinutesToReadableFormat(video?.duration, true)}
              </span>{" "}
              <span>|</span>
              <span className="text-xs font-bold">
                {timeAgoString(video?.createdAt)}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
