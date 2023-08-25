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
  userId: z.number().optional(),
});

export type TPost = z.infer<typeof postSchema>;

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({ lat: z.string(), lng: z.string() }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

export type TUser = z.infer<typeof userSchema>;

export const channelSchema = z.object({
  name: z.string(),
  id: z.number(),
});

export type TChannel = z.infer<typeof channelSchema>;
