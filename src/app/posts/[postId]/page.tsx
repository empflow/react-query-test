import axios from "@/utils/axios";
import { TPost, postSchema } from "@/utils/types";
import PostPage from "./components/Page";
import { cache } from "react";

interface TParams {
  postId: string;
}

interface PostContext {
  params: TParams;
}

export async function generateStaticParams(): Promise<TParams[]> {
  const { data: posts } = await axios.get<TPost[]>("/posts");
  postSchema.array().parse(posts);
  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
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
