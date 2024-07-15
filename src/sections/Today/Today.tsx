//@ts-nocheck
"use client";

import WorkoutCard from "@/components/WorkoutCard/WorkoutCard";
import AddWorkout from "@/modules/WorkoutCRUD/AddWorkout";
import CreateWorkout from "@/modules/WorkoutCRUD/CreateWorkout";
import { useGymContext } from "@/store/useGymContext";
import { type Exercise } from "@/store/zustand";
import styles from "./today.module.css";

function Today() {
  const { today } = useGymContext((state) => {
    return { today: state.today };
  });

  return (
    <div className="pt-[40px]">
      <div className="my-2">
        <CreateWorkout />
      </div>

      {Object.entries(today).map((entry) => {
        return (
          <div key={entry[0]} className="my-2">
            <AddWorkout bodyPart={entry[0]} />{" "}
          </div>
        );
      })}

      <div className="mt-8">
        <h1 className={styles.title}>Today</h1>

        {Object.keys(today).map((todayBodyPartString: string) => {
          const todayBodyPart = today[todayBodyPartString];

          return (
            <div key={todayBodyPart.name} className="my-2">
              <div className="mt-10 flex justify-end">
                <h2 className={styles.title}>{todayBodyPart.name}</h2>
              </div>

              {todayBodyPart.exercises.map((ex: Exercise) => {
                return (
                  <div key={ex.name} className="my-4">
                    <WorkoutCard
                      bodyPart={todayBodyPart.name}
                      exerciseName={ex.name}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Today;
