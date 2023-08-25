import axios from "@/utils/axios";
import { TPost, postSchema } from "@/utils/types";
import PostPage from "./components/Page";
import { cache } from "react";

interface PostContext {
  params: { postId: string };
}

export default async function Post({ params: { postId } }: PostContext) {
  const fetchPost = cache(async () => {
    try {
      const { data } = await axios.get<TPost>(`/posts/${postId}`);
      postSchema.parse(data);
      return data;
    } catch (err) {
      return null;
    }
  });

  const post = await fetchPost();
  return <PostPage {...{ post, postId }} />;
}
