import { TPost } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";

export default function useAddPostMutation() {
  async function addPost(post: Omit<TPost, "id">) {
    const { origin } = location;
    const { data } = await axios.post(`${origin}/api/add-post`, post);
    return data;
  }

  return useMutation(addPost, { mutationKey: ["posts"] });
}
