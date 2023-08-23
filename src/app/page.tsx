"use client";
import { TPost } from "@/utils/types";
import wait from "@/utils/wait";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@utils/axios";
import LoadingSpinner from "./components/LoadingSpinner";
import Link from "next/link";
import styles from "./Home.module.css";
import { cache } from "react";

export default function Home() {
  const { isError, isLoading, error, data, isFetching } = useQuery(
    ["posts"],
    fetchPosts,
    { refetchInterval: 50 }
  );
  // cacheTime = time after which the data is removed from cache and user sees the loading spinner
  // staleTime = time after which a request is made to check for new data
  console.log({ isLoading, isFetching });

  if (isError) {
    return <h2>Error: {String((error as Error).message)}</h2>;
  }
  if (isLoading) return <LoadingSpinner />;

  return (
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
  );
}

async function fetchPosts() {
  const resp = await axios.get<TPost[]>("/posts");
  return resp.data;
}
