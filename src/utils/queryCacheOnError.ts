import { toast } from "react-toastify";
import { TQueryErrCodes } from "./types";
import { Query } from "@tanstack/react-query";

export default function queryCacheOnError(err: unknown, query: Query) {
  if (query.meta?.doNotShowNotification) return;

  switch (query.meta?.errCode) {
    case TQueryErrCodes.POSTS_FETCH_FAILED:
      return toast.error("Could not fetch posts");
    default:
      return toast.error("Something went wrong");
  }
}
