import { createStore } from "zustand";

export interface GymProps {
  addWorkoutToToday: any;
  today: TodayWorkouts;
}

// export interface GymState extends GymProps {}

export type GymStore = ReturnType<typeof createGymStore>;

type TodayWorkouts = Record<string, Workouts>;

type Workouts = {
  name: string;
  exercises: Exercise[];
};
type Exercise = {
  name: string;
};

type DefaultProps = object;

type InitialProps = object;

export const createGymStore = (initProps: InitialProps) => {
  const DEFAULT_PROPS: DefaultProps = {};

  return createStore<GymProps>((set, get) => ({
    //   STATES
    ...DEFAULT_PROPS,
    ...initProps,

    today: {},

    // SETTERS
    setToday: (today: TodayWorkouts) => {
      set((state) => ({ today }));
    },

    // ACTIONS
    addWorkoutToToday: (workout: Workouts) => {
      set((state) => ({
        ...state,
        today: { ...state.today, [workout.name]: workout },
      }));
    },
  }));
};
