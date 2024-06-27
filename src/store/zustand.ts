import { createStore } from "zustand";

export interface GymState {}

export type GymStore = ReturnType<typeof createGymStore>;

type DefaultProps = object;

type InitialProps = object;

export const createGymStore = (initProps: InitialProps) => {
  const DEFAULT_PROPS: DefaultProps = {};

  return createStore<GymState>((set, get) => ({
    //   STATES
    ...DEFAULT_PROPS,
    ...initProps,
  }));
};
