"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export default function ReactQueryProviders({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  const DevTools =
    process.env.NODE_ENV === "development" ? <ReactQueryDevtools /> : <></>;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {DevTools}
        {children}
      </QueryClientProvider>
    </>
  );
}
