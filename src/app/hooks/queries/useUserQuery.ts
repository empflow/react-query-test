import axios from "@/utils/axios";
import { TQueryErrCodes, TUser, userSchema } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export default function useUserQuery(userId: number | string) {
  async function fetchUser() {
    const { data } = await axios.get<TUser>(`/users/${userId}`);
    userSchema.parse(data);
    return data;
  }

  const query = useQuery(["users", userId], fetchUser, {
    meta: { errCode: TQueryErrCodes.USER_FETCH_FAILED },
    retry: false,
  });

  return query;
}
