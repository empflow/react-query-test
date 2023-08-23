import axios from "@/utils/axios";
import isAxiosErrWithResp from "@/utils/isAxiosErrWithResp";
import isObject from "@/utils/isObject";
import { TQueryErrCodes, TPost, postSchema } from "@/utils/types";
import wait from "@/utils/wait";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

export default function usePostsQuery() {
  const [unknownErr, setUnknownErr] = useState(false);

  async function fetchPosts() {
    await wait(1000);
    const resp = await axios.get<TPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (!postSchema.array().safeParse(resp.data).success) {
      throw new Error();
    }
    return resp.data;
  }

  function sortPosts(posts: TPost[]) {
    return posts.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA > titleB) return 1;
      else if (titleA < titleB) return -1;
      return 0;
    });
  }

  const query = useQuery(["posts"], fetchPosts, {
    select: sortPosts,
    meta: { errCode: TQueryErrCodes.POSTS_FETCH_FAILED },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });

  return { ...query, unknownErr };
}
