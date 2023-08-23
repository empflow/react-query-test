import axios from "@/utils/axios";
import isAxiosErrWithResp from "@/utils/isAxiosErrWithResp";
import isObject from "@/utils/isObject";
import { TQueryErrCodes, TPost } from "@/utils/types";
import wait from "@/utils/wait";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

export default function usePostsQuery() {
  const [unknownErr, setUnknownErr] = useState(false);

  async function fetchPosts() {
    await wait(1000);

    try {
      const payload = {
        email: "sldfkj@slkdjf.com",
        password: "sldkj",
        captchaBypassToken: "password123",
      };
      const resp = await axios.post<TPost[]>(
        "http://localhost:3001/auth/sign-inn",
        payload
      );
      return resp.data;
    } catch (err) {
      if (!isAxiosErrWithResp(err)) {
        return setUnknownErr(true);
      }

      switch (err.response.data.errCode) {
        case "USER_NOT_FOUND":
          console.warn("invalid credentials!!!");
          break;
        default:
          console.warn("unkown error:");
          console.warn(err);
          break;
      }
      throw new Error();
    }
  }

  const query = useQuery(["posts"], fetchPosts, {
    meta: { errCode: TQueryErrCodes.POSTS_FETCH_FAILED },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });

  return { ...query, unknownErr };
}
