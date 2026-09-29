"use client";

import {
  useEffect,
  useRef,
} from "react";

import { Toaster } from "sonner";

import { useAuthStore } from "@/store/authStore";

import { QueryProvider } from "./QueryProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({
  children,
}: ProvidersProps) {
  const initializeAuth =
    useAuthStore(
      (state) =>
        state.initializeAuth
    );

  const initializedRef =
    useRef(false);

  useEffect(() => {
    if (
      initializedRef.current
    ) {
      return;
    }

    initializedRef.current =
      true;

    void initializeAuth();
  }, [initializeAuth]);

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