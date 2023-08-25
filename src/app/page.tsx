import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Home page</h1>
      <div className="flex flex-col">
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
      </div>
    </main>
  );
}
