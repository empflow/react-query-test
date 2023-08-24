import axios from "@/utils/axios";
import { TPost, TQueryErrCodes, postSchema } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function usePostQuery(postId: number | string) {
  const queryClient = useQueryClient();
  const query = useQuery(["posts", postId], fetchPost, {
    refetchOnMount: false,
    meta: { doNotShowNotification: true },
    initialData: getInitData(),
  });

  async function fetchPost() {
    const { data } = await axios.get<TPost>(`/posts/${postId}`);
    postSchema.parse(data);
    return data;
  }

  function getInitData() {
    const posts = queryClient.getQueryData(["posts"]);
    if (!postSchema.array().safeParse(posts).success) {
      return null;
    }

    const validPosts = posts as TPost[];
    return validPosts.find((post) => post.id === +postId);
  }

  return query;
}
