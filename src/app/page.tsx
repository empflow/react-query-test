"use client";
import LoadingSpinner from "./components/LoadingSpinner";
import Link from "next/link";
import styles from "./Home.module.css";
import usePostsQuery from "./hooks/queries/usePostsQuery";

export default function Home() {
  const { isLoading, unknownErr, data, refetch, isFetching } = usePostsQuery();
  const sflkj = usePostsQuery();

  if (unknownErr) {
    return "Something went wrong";
  }
  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <button
        className="px-3 rounded py-1 border border-blue-700 text-blue-700"
        onClick={() => refetch()}
      >
        Fetch
      </button>
      {data && (
        <div className="flex flex-col gap-8">
          {data.map((item, i) => (
            <Link href={`/posts/${item.id}`} key={i}>
              <div className={`p-2 border border-black rounded ${styles.post}`}>
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p className="font-light text-gray-600">{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
