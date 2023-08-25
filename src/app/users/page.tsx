import { baseUrl } from "@/utils/axios";
import { userSchema } from "@/utils/types";
import wait from "@/utils/wait";
import Link from "next/link";

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users</h1>

      <div className="flex flex-col gap-2">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <div className="border border-gray-300 rounded p-2 flex flex-col gap-1">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <h3>{user.website}</h3>
              <h4>{user.phone}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

async function fetchUsers() {
  await wait(10000);
  const resp = await fetch(`${baseUrl}/users`);
  const data = await resp.json();
  return userSchema.array().parse(data);
}
