"use client";

import { ChangeEventHandler, useContext, useState } from "react";
import { Input } from "./input";
import { loginService } from "@/apis/services/auth.services";
import { setToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { SocketContext } from "@/providers/socket.provider";

export const AdminLogin: React.FC = () => {
  const [refreshToken, setRefreshToken] = useState<string>("");
  const { push } = useRouter();
  const { resetSocket } = useContext(SocketContext);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRefreshToken(e.target.value);
  };
  const submitHandler = async () => {
    if (!refreshToken) return;
    try {
      const response = await loginService({ refresh_token: refreshToken });
      setToken(response.access_token);
      resetSocket();
      push("/rooms");
    } catch (error) {
        console.log(error as AxiosError)
    }
  };
  return (
    <div className="bg-slate-400 border text-center mx-auto w-80 mt-10 rounded-md py-3 px-4 flex flex-col gap-y-4">
      <h2 className="font-bold">admin login</h2>
      <Input
        label="refresh token"
        value={refreshToken}
        onChange={onChangeHandler}
      />
      <button
        onChange={submitHandler}
        className="bg-green-300 w-full rounded-md"
      >
        login
      </button>
    </div>
  );
};
