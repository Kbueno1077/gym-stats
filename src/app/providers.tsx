"use client";

import { StoreProvider } from "@/store/StoreProvider";
import { type GymStore } from "@/store/zustand";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

import React, { createContext } from "react";

export const GymContext = createContext<GymStore | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <StoreProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </StoreProvider>
    </SessionProvider>
  );
}
