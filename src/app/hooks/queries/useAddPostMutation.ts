import { TPost, postSchema } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/utils/axios";

export default function useAddPostMutation() {
  const queryClient = useQueryClient();

  return useMutation(addPost, {
    onSuccess: (data) => {
      const post = postSchema.parse(data);
      queryClient.setQueryData(["posts"], (prevData) => {
        const prevPosts = postSchema.array().parse(prevData);
        return [...prevPosts, post];
      });
    },
  });
}

async function addPost(post: Omit<TPost, "id">) {
  const { origin } = location;
  const { data } = await axios.post(`${origin}/api/add-post`, post);
  return data;
}
