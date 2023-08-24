import LoadingSpinner from "@/app/components/LoadingSpinner";
import { DefinedUseQueryResult } from "@tanstack/react-query";
import PostContentSkeleton from "./PostContentSkeleton";

interface PostContentProps {
  postQuery: DefinedUseQueryResult<{
    title: string;
    body: string;
    id: number;
    userId: number;
  }>;
}

export default function PostContent({ postQuery }: PostContentProps) {
  const { data, isFetching } = postQuery;

  if (isFetching) {
    return <PostContentSkeleton />;
  }

  return (
    <div>
      <p className="font-light">Written by user {data.userId}</p>
      <h1 className="font-semibold mb-4 text-3xl">{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
