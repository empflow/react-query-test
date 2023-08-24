"use client";
import useChannelQuery from "@/app/hooks/queries/useChannelQuery";
import useUserQuery from "@/app/hooks/queries/useUserQuery";

interface TUserContext {
  params: { userId: string };
}

export default function User({ params: { userId } }: TUserContext) {
  const userQuery = useUserQuery(userId);
  const channelId = userQuery.data?.channelId;
  const channelQuery = useChannelQuery(channelId);

  console.log(userQuery.data);
  console.log(channelQuery.data);
  return <h1></h1>;
}
