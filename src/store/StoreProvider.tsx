// Provider wrapper
import { GymContext } from "@/app/providers";
import { useRef } from "react";
import { createGymStore, type GymStore } from "./zustand";

export function StoreProvider({ children, ...props }: any) {
  const storeRef = useRef<GymStore>();
  if (!storeRef.current) {
    storeRef.current = createGymStore({});
  }

  return (
    <GymContext.Provider value={storeRef.current}>
      {children}
    </GymContext.Provider>
  );
}
