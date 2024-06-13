"use client";
import React from "react";
import "@vidstack/react/player/styles/base.css";

import { useQuery } from "react-query";
import axios from "@/lib/axios";
import dynamic from "next/dynamic";
import Loading from "@/components/ui/loading";
import { timeAgoString } from "@/lib/time";
import { useParams, useSearchParams } from "next/navigation";
const ProfileVideo = dynamic(() => import("@/components/video/profile-video"), {
  ssr: false,
});

const VideoPlayer = dynamic(() => import("@/components/video/video-player"), {
  ssr: false,
});

export default function Page({ params }: { params: { videoId: string } }) {
  const ModeParams = useSearchParams();

  const mode = ModeParams.get("mode");

  const videoId = params.videoId;
  const {
    data: video,
    isLoading,
    error,
    refetch,
  } = useQuery("video", async () => {
    const response = await axios.get(`/video/${videoId}`);
    return response.data.video;
  });
  if (isLoading)
    return <Loading className="h-screen flex items-center justify-center" />;
  if (error) return <p>Error: </p>;

  return (
    <main>
      <div className="">
        <VideoPlayer mode={mode} video={video} />
      </div>
      <div className="p-6">
        <div className="w-full mt-4 flex pb-3 justify-between items-center">
          <div className="w-3/4">
            <h3 className="text-xl font-bold">{video.title}</h3>
            <div className="flex w-full gap-4 items-center">
              <p className="text-sm font-medium text-gray-600">
                {video.views} Views
              </p>
              <span>|</span>
              <p className="text-sm video-content-holder-dot font-medium text-gray-600">
                {timeAgoString(new Date(video.createdAt))}
              </p>
              <span>|</span>
              <h5 className="text-sm video-content-holder-dot font-medium text-gray-600">
                {video.category}
              </h5>
            </div>
          </div>
          <div className="">
            <h2 className="lg:text-lg border px-4 py-1.5 rounded-full text-sm font-semibold">
              Play on
            </h2>
          </div>
        </div>
        <ProfileVideo
          refetch={refetch}
          userId={video.created_by_id}
          video={video}
          videoId={video?._id}
        />
      </div>
    </main>
  );
}
