import axios from "@/utils/axios";
import { TPost, TQueryErrCodes, postSchema } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export default function usePostQuery(postId: number) {
  async function fetchPost() {
    const { data } = await axios.get<TPost>(`/posts/${postId}`);
    postSchema.parse(data);
    return data;
  }

  const query = useQuery(["posts", postId], fetchPost, {
    refetchOnMount: false,
    meta: { doNotShowNotification: true },
    // select: () => {

    // } console.log("new data!!!"),
  });

  return query;
}
