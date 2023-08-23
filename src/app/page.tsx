"use client";
import { TPost } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "@utils/axios";
import LoadingSpinner from "./components/LoadingSpinner";
import Link from "next/link";
import styles from "./Home.module.css";
import wait from "@/utils/wait";

export default function Home() {
  const { fetchStatus, status, isError, error, data, refetch } = useQuery(
    ["posts"],
    fetchPosts,
    { enabled: false }
  );
  console.log({ status, fetchStatus });

  if (isError) {
    return <h2>Error: {String((error as Error).message)}</h2>;
  }
  if (fetchStatus === "fetching") {
    console.log("is loading data");
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        {data &&
          data.map((item, i) => (
            <Link href={`/posts/${item.id}`} key={i}>
              <div className={`p-2 border border-black rounded ${styles.post}`}>
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p className="font-light text-gray-600">{item.body}</p>
              </div>
            </Link>
          ))}
      </div>
      <button
        className="px-3 rounded py-1 border border-blue-700 text-blue-700"
        onClick={() => refetch()}
      >
        Fetch
      </button>
    </>
  );
}

async function fetchPosts() {
  await wait(1000);
  const resp = await axios.get<TPost[]>("/posts");
  return resp.data;
}
