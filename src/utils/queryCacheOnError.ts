import { toast } from "react-toastify";
import { TQueryErrCodes } from "./types";
import { Query } from "@tanstack/react-query";

export default function queryCacheOnError(err: unknown, query: Query) {
  switch (query.meta?.errCode) {
    case TQueryErrCodes.POSTS_FETCH_FAILED:
      // `toast` displays notifications (from the `react-toastify` library)
      return toast.error("Could not fetch posts");
    default:
      return toast.error("Something went wrong");
  }
}
