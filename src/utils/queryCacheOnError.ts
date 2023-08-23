import { toast } from "react-toastify";
import { TQueryErrCodes } from "./types";
import { Query } from "@tanstack/react-query";

export default function queryCacheOnError(err: unknown, query: Query) {
  switch (query.meta?.errCode) {
    case TQueryErrCodes.POSTS_FETCH_FAILED:
      return toast.error("Could not fetch posts");
    case TQueryErrCodes.DO_NOT_SHOW_NOTIFICATION:
      break;
    default:
      return toast.error("Something went wrong");
  }
}
