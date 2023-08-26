import axios from "@/utils/axios";
import { TPost, postSchema } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export default function usePostsQuery() {
  async function fetchPosts() {
    const { data } = await axios.get<TPost[]>("http://localhost:4000/posts");
    postSchema.array().parse(data);
    return data;
  }

  function sortPosts(posts: TPost[]) {
    return posts.sort((a, b) => {
      const { id: idA } = a;
      const { id: idB } = b;
      if (idA < idB) return 1;
      else if (idA > idB) return -1;
      return 0;
    });
  }

  const query = useQuery(["posts"], fetchPosts, {
    select: sortPosts,
    meta: { doNotShowNotification: true },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });

  return query;
}
