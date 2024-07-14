import { createStore } from "zustand";

export interface GymProps {
  today: TodayWorkouts;
  addWorkoutToToday: (workout: Workouts) => void;
  addExerciseToWorkoutToday: (bodyPart: string, exercise: Exercise) => void;
}

// export interface GymState extends GymProps {}

export type GymStore = ReturnType<typeof createGymStore>;

type TodayWorkouts = Record<string, Workouts>;

export type Workouts = {
  name: string;
  exercises: Exercise[];
  date?: Date;
};

export type Exercise = {
  name: string;
  sets?: Set[];
  date?: Date;
};

export type Set = {
  set_number: number;
  reps: number;
  weight: number;
  assisted: boolean;
  dropSets: boolean;
  drops?: DropSet[];
};

export type DropSet = {
  weights: number[];
  reps: number[];
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

    addExerciseToWorkoutToday: (bodyPart: string, exercise: Exercise) => {
      const today = get().today;

      if (today) {
        today[bodyPart]?.exercises?.push(exercise);

        set((state) => ({
          ...state,
          today,
        }));
      }
    },
  }));
};
