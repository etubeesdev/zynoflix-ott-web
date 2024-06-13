import axios from "@/lib/axios";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import FormattedDate from "../formatted-date";
import { toast } from "sonner";
import { userId } from "@/lib/user";
import { Ivideo } from "../types/video";
import { cn } from "@/lib/utils";

const ProfileVideo = ({
  videoId,
  video,
  refetch,
}: {
  userId: string;
  videoId: string;
  video: Ivideo;
  refetch: any;
}) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery("user", async () => {
    const response = await axios.get(`/auth/user/${userId}`);
    return response.data.user;
  });

  const { data: follower, refetch: refetchF } = useQuery(
    "follower",
    async () => {
      const response = await axios.get(`/followers/${videoId}`);
      return response.data.followers;
    }
  );

  const {
    data: like,
    refetch: refetchL,
    isLoading: likeLoading,
  } = useQuery(
    "like",
    async () => {
      const response = await axios.get(`/video/like/${videoId}`);
      return response.data.like;
    },
    {
      // refetchInterval: 5000,
    }
  );

  if (isLoading && likeLoading) return <p>Loading...</p>;
  console.log(follower?.[0]?.user_id, "follower");

  if (error) return <p>Error: </p>;
  const handletoFollow = async () => {
    const response = await axios.post(
      `/follow/${userId}`,
      {
        videoId: videoId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    refetchF();
    if (response.status === 200) {
      toast.success("Followed");
      refetchF();
    }
  };

  const handletoLike = async () => {
    const response = await axios.post(`/video/like/${videoId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    refetch();
    refetchL();
    refetchL();
    if (response.status === 200) {
      toast.success("Liked");
      refetch();
      refetchL();
      refetchL();
    }
    refetchL();
  };

  const isLike = like?.[0]?.user_id?.includes(userId);
  const likeCount = like?.[0]?.user_id?.length;
  console.log(isLike, "isLike");

  return (
    <div>
      <div className="">
        <div className="flex border-t border-b py-4 border-gray-600 items-center gap-4">
          <Image
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            src={user?.profilePic}
            alt=""
          />
          <div className="font-medium dark:text-white">
            <div>{user?.full_name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user?.following} Followers
            </div>
          </div>
          <button
            onClick={handletoFollow}
            className="action-btn-secondary-border  flex-shrink-0 hidden lg:flex duration-300 justify-center gap-2 py-2 px-4 text-xs lg:text-base items-center rounded-full lg:rounded-xl border-[#6c52ee] z-50 relative border-2 font-semibold capitalize"
          >
            {follower?.[0]?.user_id.includes(userId) ? "Following" : "Follow"}
          </button>
        </div>
        <div className="mt-6">
          <button
            onClick={handletoLike}
            className={cn(
              "  text-white  duration-100 text-lg flex items-center px-3 lg:px-6 py-2 rounded-xl gap-2 bg-background_item",
              isLike && "bg-btn_bgcolor3"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className=" lg:w-6 fill-white w-4 h-4 lg:h-6"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <h2 className="text-sm lg:text-base font-semibold">{likeCount}</h2>
          </button>
        </div>

        <div className="mt-5">
          <div className="text-subtext flex-col bg-gray-900 px-6 py-3 rounded-xl lg:flex  ">
            <div className="flex items-center">
              <div className=" flex items-center">
                <h5 className="gap-2 flex items-center">
                  Total Duration : <span>{video.duration}</span>
                </h5>
              </div>
            </div>
            <div className="text-base py-2 w-[90%] text-gray-300 lg:w-3/4 font-normal text-subtext">
              {video.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVideo;
