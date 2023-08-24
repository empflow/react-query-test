import { AxiosError, AxiosResponse } from "axios";
import { z } from "zod";

export const enum TQueryErrCodes {
  POSTS_FETCH_FAILED,
  USER_FETCH_FAILED,
  CHANNEL_FETCH_FAILED,
}

export type TAxiosErrWithResp<T = any> = Omit<AxiosError<T>, "response"> & {
  response: AxiosResponse<T>;
};

export const postSchema = z.object({
  title: z.string(),
  body: z.string(),
  id: z.number(),
  userId: z.number(),
});

export type TPost = z.infer<typeof postSchema>;

export const userSchema = z.object({
  name: z.string(),
  channelId: z.number(),
  id: z.number(),
});

export type TUser = z.infer<typeof userSchema>;

export const channelSchema = z.object({
  name: z.string(),
  id: z.number(),
});

export type TChannel = z.infer<typeof channelSchema>;
