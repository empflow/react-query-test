import axios from "@/utils/axios";
import { TPost, postSchema } from "@/utils/types";
import Link from "next/link";
import { cache } from "react";
import styles from "./posts.module.css";

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Posts</h1>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`}>
            <div
              className={`${styles.post} border border-gray-300 p-2 rounded`}
            >
              <h2>{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const fetchPosts = cache(async () => {
  const { data } = await axios.get<TPost[]>("/posts");
  postSchema.array().parse(data);
  return data;
});
