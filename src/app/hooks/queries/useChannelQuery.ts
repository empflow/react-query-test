import axios from "@/utils/axios";
import isNullish from "@/utils/isNullish";
import {
  TChannel,
  TQueryErrCodes,
  TUser,
  channelSchema,
  userSchema,
} from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export default function useChannelQuery(
  channelId: number | string | undefined | null
) {
  async function fetchChannel() {
    const { data } = await axios.get<TChannel>(`/channels/${channelId}`);
    channelSchema.parse(data);
    return data;
  }

  const query = useQuery(["channels", channelId], fetchChannel, {
    enabled: !isNullish(channelId),
    meta: { errCode: TQueryErrCodes.CHANNEL_FETCH_FAILED },
    retry: false,
  });

  return query;
}
