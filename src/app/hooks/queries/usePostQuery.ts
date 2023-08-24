import axios from "@/utils/axios";
import { TPost, TQueryErrCodes, postSchema } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function usePostQuery(
  postId: number | string,
  initData: TPost | null
) {
  const query = useQuery(["posts", postId], fetchPost, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    meta: { doNotShowNotification: true },
    initialData: () => {
      if (!initData) return undefined;
      return initData;
    },
  });

  async function fetchPost() {
    const { data } = await axios.get<TPost>(`/posts/${postId}`);
    postSchema.parse(data);
    return data;
  }

  return query;
}
