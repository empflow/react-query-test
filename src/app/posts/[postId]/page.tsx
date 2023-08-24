"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import usePostQuery from "@/app/hooks/queries/usePostQuery";
import { useRouter } from "next/navigation";
import BackBtn from "./components/BackBtn";

interface PostContext {
  params: { postId: string };
}

export default function Post({ params: { postId } }: PostContext) {
  const router = useRouter();
  const { data, isError, isLoading } = usePostQuery(postId);

  if (isError) {
    return <h1>Something went wrong</h1>;
  }
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <BackBtn />
      <p className="font-light">Written by user {data.userId}</p>
      <h1 className="font-semibold mb-4 text-3xl">{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
