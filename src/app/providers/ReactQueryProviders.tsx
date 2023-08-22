"use client";

import isDev from "@/utils/isDev";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export default function ReactQueryProviders({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isDev() && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </>
  );
}
