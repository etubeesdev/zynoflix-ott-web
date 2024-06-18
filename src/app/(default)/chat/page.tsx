"use client";
import ChatList from "@/components/chat/list-chat";
import { ChatProvider } from "@/components/provider/ChatProvider";
import React from "react";

const page = () => {
  return (
    <div>
      <ChatProvider roomId="23">
        <div className="">
          <div className="">
            <ChatList />
          </div>
        </div>
      </ChatProvider>
    </div>
  );
};

export default page;
