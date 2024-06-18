"use client";
import VideoCard from "@/components/card/video-card";
import { UpdateImg } from "@/components/profile/update-img";
import Loading from "@/components/ui/loading";
import axios from "@/lib/axios";
import { userId } from "@/lib/user";
import { Edit, Edit2, VideoIcon } from "lucide-react";
import React from "react";
import { useQuery } from "react-query";

const Page = () => {
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery("user", async () => {
    const response = await axios.get(`/auth/user/${userId}`);
    return response.data.user;
  });
  const {
    data: userVideos,
    isLoading: videoLoading,
    error: videoError,
  } = useQuery("video", async () => {
    const response = await axios.get(`/profile/video`);
    return response.data.video;
  });

  if (isLoading)
    return <Loading className="h-screen flex items-center justify-center" />;

  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="w-full mx-auto">
        <UpdateImg
          refetch={refetch}
          id="backgroundPic"
          name="backgroundPic"
          button={
            <img
              src={user?.backgroundPic}
              alt="User Cover"
              className="w-full xl:h-[20rem] object-cover lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
            />
          }
        />

        {/* User Profile Image */}
        <div className="w-full flex  justify-start pl-12">
          <div className="relative">
            <img
              src={user.profilePic}
              alt="User Profile"
              className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"
            />
            <UpdateImg
              refetch={refetch}
              id="profilePic"
              name="profilePic"
              button={
                <button className="absolute -top-20 -right-0 bg-gray-800 rounded-full p-1 cursor-pointer">
                  <Edit className="w-6 h-6 text-white " />
                </button>
              }
            />
          </div>
        </div>
        <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
          {/* FullName */}
          <h1 className="text-center text-white font-bold text-4xl">
            {user.full_name}
          </h1>
          {/* About */}
          <p className="w-full text-gray-400 text-md text-pretty sm:text-center xs:text-justify">
            {user.description || "No description provided"}
          </p>
        </div>
        <div className="py-8 px-12">
          <button className="flex items-center bg-green-500 rounded-xl px-6 py-3 gap-3">
            <VideoIcon className="w-6 h-6" />
            my Video
          </button>

          {userVideos?.length === 0 && (
            <div className="flex items-center justify-center text-white text-2xl font-bold mt-8">
              No Videos Uploaded
            </div>
          )}

          <div className="grid pt-8 gap-6 grid-cols-5">
            {userVideos?.length > 0 &&
              userVideos?.map((video: any, index: number) => (
                <VideoCard key={index} index={index} video={video} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
