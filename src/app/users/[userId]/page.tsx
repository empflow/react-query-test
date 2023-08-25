import { baseUrl } from "@/utils/axios";
import { userSchema } from "@/utils/types";

interface TParams {
  userId: string;
}

interface TUserContext {
  params: TParams;
}

export async function generateStaticParams(): Promise<TParams[]> {
  const resp = await fetch(`${baseUrl}/users`);
  const data = await resp.json();
  const users = userSchema.array().parse(data);
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}

export default async function User({ params: { userId } }: TUserContext) {
  const { name, id, address, company, email, phone, website } = await fetchUser(
    userId
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">{name}</h1>

      <p>ID: {id}</p>
      <p>
        Address: {address.city}, {address.street}
      </p>
      <p>Company: {company.name}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
}

async function fetchUser(userId: string) {
  const resp = await fetch(`${baseUrl}/users/${userId}`);
  const data = await resp.json();
  return userSchema.parse(data);
}
