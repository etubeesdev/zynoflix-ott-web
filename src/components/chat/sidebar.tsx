import axios from "@/lib/axios";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../ui/loading";
import { cn } from "@/lib/utils";
import { useChat } from "../provider/ChatProvider";
import Link from "next/link";

const fetchChat = async () => {
  const response = await axios.get("http://localhost:8080/api/chat/");
  if (response.status === 200) {
    console.log("Network response was not ok");
  }
  return response.data;
};

const Sidebar = () => {
  const { roomId } = useChat();
  const { data, isLoading, isError, refetch } = useQuery("chat", () =>
    fetchChat()
  );

  if (isLoading)
    return <Loading className="flex items-center justify-center h-screen" />;

  if (isError) return <div>Error fetching messages</div>;

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 text-white flex-shrink-0">
      <div className="flex flex-row items-center w-full">
        <button className="flex justify-between items-center w-full hover:bg-gray-100 rounded-xl p-0">
          <div className="flex items-center w-full">
            <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
              M
            </div>
            <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
          </div>
          <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
            2
          </div>
        </button>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center gap-2 text-xs">
          <span className="font-bold">Message</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            {data?.length}
          </span>
        </div>
        <div className="flex flex-col  space-y-1 mt-4 -mx-2 h-[500px] overflow-y-auto">
          {data?.map((chat: any) => (
            <Link
              href={`/chat/${chat.roomId}`}
              key={chat.roomId}
              className={cn(
                "flex flex-row items-center duration-300 hover:bg-gray-800 rounded-xl p-2",
                roomId === chat.roomId ? "bg-gray-800" : ""
              )}
            >
              <div className="flex items-center uppercase justify-center h-8 w-8 bg-indigo-200 rounded-full">
                {chat.name[0]}
              </div>
              <div className="ml-2 text-sm capitalize font-semibold">
                {chat.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
