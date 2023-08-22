"use client";
import { TPost } from "@/utils/types";
import wait from "@/utils/wait";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@utils/axios";

export default function Home() {
  const postsQuery = useQuery<TPost[]>(["posts"], fetchPosts);

  if (postsQuery.isError) {
    return <h2>Error: {String((postsQuery.error as Error).message)}</h2>;
  }
  if (postsQuery.isLoading) return <h2>Loading...</h2>;

  return (
    <div className="flex flex-col gap-8">
      {postsQuery.data.map((item, i) => (
        <div key={i} className="p-2 border border-black rounded">
          <h2 className="font-semibold text-xl">{item.title}</h2>
          <p className="font-light text-gray-600">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

async function fetchPosts() {
  await wait(1000);
  const resp = await axios.get<TPost[]>("/posts");
  return resp.data;
}

export async function createPost(title: string, body: string) {
  await wait(1000);
  const userId = Math.floor(Math.random() * 1000);
  return axios.post("/posts", { title, body, userId });
}
