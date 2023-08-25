"use client";

import LoadingSpinner from "@/app/components/LoadingSpinner";
import usePostsQuery from "@/app/hooks/queries/usePostsQuery";
import PostsError from "./components/Error";
import Link from "next/link";
import styles from "@/app/posts/posts.module.css";

export default function Posts() {
  const { data, isLoading, isError, refetch } = usePostsQuery();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <PostsError {...{ refetch }} />;

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-2xl">Posts</h1>

      <div className="flex flex-col gap-2">
        {data.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div
              className={`${styles.post} border border-gray-200 p-2 rounded`}
            >
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
