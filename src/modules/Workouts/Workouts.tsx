import WorkoutCard from "@/components/WorkoutCard/WorkoutCard";
import React from "react";
import { Button } from "@nextui-org/react";

function Workouts() {
  return (
    <div className="">
      <div>
        <div className="mb-2 flex items-center justify-between gap-10 py-3 md:justify-normal">
          <h2 className="text-4xl font-bold text-primary">Today</h2>
          <Button variant="ghost" color="primary">
            + Add Workout
          </Button>
        </div>
      </div>

      <WorkoutCard />

      <div className="mt-10">
        <h2 className="text-xl font-bold text-primary md:text-4xl">
          From July 2nd, 2024 To July 9th, 2024
        </h2>

        <div className="mt-5 flex flex-col gap-10 md:flex-row">
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
        </div>
      </div>
    </div>
  );
}

export default Workouts;
