"use client";

import isDev from "@/utils/isDev";
import queryCacheOnError from "@/utils/queryCacheOnError";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

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
