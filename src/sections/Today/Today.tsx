"use client";

import WorkoutCard from "@/components/WorkoutCard/WorkoutCard";
import AddWorkout from "@/modules/WorkoutCRUD/AddWorkout";
import CreateWorkout from "@/modules/WorkoutCRUD/CreateWorkout";
import { useGymContext } from "@/store/useGymContext";
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

      <div className="mt-20">
        <h1 className={styles.title}>Today</h1>

        <WorkoutCard />
      </div>
    </div>
  );
}

export default Today;
