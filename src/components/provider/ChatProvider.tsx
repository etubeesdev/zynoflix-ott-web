import { userId } from "@/lib/user";
import React, { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

type ChatContextType = {
  roomId: any;

  socket: any;
};

const initialContext: ChatContextType = {
  roomId: null,
  socket: null,
};

const ChatContext = createContext<ChatContextType>(initialContext);

const ChatProvider = ({ children, roomId }: any) => {
  const authId = userId;

  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3003"); // Update with your server address
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.emit("join-room", {
      roomId: roomId,
      userId: [authId, "666ff6eab2e260249caa5445"],
      name: "name",
    });
  }, [socket, roomId, authId]);

  return (
    <ChatContext.Provider
      value={{
        socket,
        roomId,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export { ChatProvider, useChat };
