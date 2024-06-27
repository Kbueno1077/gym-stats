import { GymContext } from "@/app/providers";
import { useContext } from "react";
import { useStore } from "zustand";
import { type GymState } from "./zustand";

export function useBearContext<T>(selector: (state: GymState) => T): T {
  const store = useContext(GymContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStore(store, selector);
}
