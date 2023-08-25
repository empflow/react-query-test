interface TPostsErrorProps {
  refetch: () => unknown;
}

export default function PostsError({ refetch }: TPostsErrorProps) {
  return (
    <div className="flex flex-col gap-2">
      <p>Could not load posts</p>
      <button
        className="border border-blue-600 px-4 rounded hover:bg-blue-600 hover:text-white duration-200 py-1 w-min"
        onClick={() => refetch()}
      >
        Retry
      </button>
    </div>
  );
}
