"use client";
import usePostQuery from "@/app/hooks/queries/usePostQuery";
import { TPost } from "@/utils/types";
import BackBtn from "./BackBtn";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { notFound } from "next/navigation";
import PostContent from "./PostContent";

interface PostContentProps {
  post: TPost | null;
  postId: string;
}

export default function PostPage({ post, postId }: PostContentProps) {
  const postQuery = usePostQuery(postId, post);
  if (!post) return notFound();

  if (postQuery.isError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      <BackBtn />
      <PostContent {...{ postQuery }} />
      <button onClick={() => postQuery.refetch()}>Refetch</button>
    </div>
  );
}
