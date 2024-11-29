"use clinet"

import { getToken } from "@/utils/session-manager";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { io, Socket } from "socket.io-client";

const serverUrl = "http://localhost:8080";

export const SocketContext = createContext<{
    socket?: Socket;
    connected?: boolean;
    resetSocket: () => void;
  }>({
    socket: undefined,
    connected: false,
    resetSocket: () => undefined,
  });

  export const SocketProvider: React.FC<{children : ReactNode}> = ({ children }) => {
    const [socket, setSocket] = useState<Socket | undefined>();
    const [connected, setConnected] = useState<boolean>(false);
  
    const resetSocket = () => {
      const token = getToken();
      if (!token) return;
      setConnected(() => false);
      const s = io(serverUrl, {
        autoConnect: true,
        extraHeaders: { authorization: token },
      });
      s.on("connect", () => {
        setConnected(true);
      });
      s.on("error", (err: { message: string }) => {
        toast.error(err.message);
      });
      setSocket(s);
    };
    
  return (
    <SocketContext.Provider value={{ socket, resetSocket, connected }}>
      {children}
    </SocketContext.Provider>
  );
};