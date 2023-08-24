import axios from "@/utils/axios";
import { TPost, TQueryErrCodes, postSchema } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function usePostQuery(
  postId: number | string,
  initialData: TPost
) {
  const query = useQuery(["posts", postId], fetchPost, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    meta: { doNotShowNotification: true },
    initialData,
  });

  async function fetchPost() {
    const { data } = await axios.get<TPost>(`/posts/${postId}`);
    postSchema.parse(data);
    return data;
  }

  return query;
}
