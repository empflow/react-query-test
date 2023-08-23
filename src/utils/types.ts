import { AxiosError, AxiosResponse } from "axios";

export interface TPost {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export const enum TQueryErrCodes {
  POSTS_FETCH_FAILED,
}

export type TAxiosErrWithResp<T = any> = Omit<AxiosError<T>, "response"> & {
  response: AxiosResponse<T>;
};
