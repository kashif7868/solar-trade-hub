"use client";

import { Toaster } from "sonner";

import { QueryProvider } from "./QueryProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <QueryProvider>
      {children}

      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    </QueryProvider>
  );
}