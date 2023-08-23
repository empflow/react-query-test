import { AxiosError, AxiosResponse } from "axios";
import { z } from "zod";

export const enum TQueryErrCodes {
  POSTS_FETCH_FAILED,
  DO_NOT_SHOW_NOTIFICATION,
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
