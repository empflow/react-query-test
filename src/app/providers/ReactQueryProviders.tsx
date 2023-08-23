"use client";

import isDev from "@/utils/isDev";
import isObject from "@/utils/isObject";
import queryCacheOnError from "@/utils/queryCacheOnError";
import { TQueryErrCodes } from "@/utils/types";
import {
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";
import { toast } from "react-toastify";

export default function ReactQueryProviders({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      queryCache: new QueryCache({
        onError: queryCacheOnError,
      }),
    });
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isDev() && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </>
  );
}
