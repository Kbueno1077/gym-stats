"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import styles from "./workout.module.css";
import { useGymContext } from "@/store/useGymContext";
import { bodyParts, mapBodyPartToExercises } from "@/utils/exercises";

export default function CreateWorkout() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { theme, resolvedTheme } = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bodyPart, setBodyPart] = useState<string>("");
  const [exercise, setExercise] = useState<string>("");

  const exercises = bodyPart
    ? mapBodyPartToExercises[bodyPart].exercises || []
    : [];

  const { today, addWorkoutToToday } = useGymContext((state) => {
    return { today: state.today, addWorkoutToToday: state.addWorkoutToToday };
  });

  const selectBodyPart = (bodyPartSelected: string) => {
    if (!!!today?.[bodyPartSelected]?.name) {
      setBodyPart(bodyPartSelected);
    }
  };

  const selectExercise = (selectedExercise: string) => {
    setExercise(selectedExercise);
  };

  const handleOpening = () => {
    onOpen();
    setBodyPart("");
    setExercise("");
  };

  const handleSubmit = () => {
    const todayExercises = today?.[bodyPart]?.exercises || [];

    if (bodyPart) {
      addWorkoutToToday({
        name: bodyPart,
        exercises: [...todayExercises, exercise],
      });
      onClose();
    }
  };

  return (
    <>
      <Button
        className="w-full py-20"
        color="primary"
        onPress={handleOpening}
        endContent={<IoAdd className={styles.icon} />}
      >
        <h1 className={styles.btn}>Create Workout</h1>
      </Button>

      <Modal
        scrollBehavior="inside"
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="pt-10">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className={styles.modalTitle}>What are you gonna Hit?</h1>
              </ModalHeader>

              <ModalBody>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {bodyParts.map((bpart) => {
                    return (
                      <Button
                        key={bpart}
                        onPress={() => {
                          selectBodyPart(bpart);
                        }}
                        disabled={!!today[bpart]?.name}
                        variant={bodyPart === bpart ? "solid" : "faded"}
                        color="primary"
                        className={`flex h-[100px] w-[100px] flex-shrink-0 flex-col items-center justify-center ${!!today[bpart]?.name && "text-gray-400"} `}
                      >
                        <p className="text-lg font-bold">{bpart}</p>
                      </Button>
                    );
                  })}
                </div>

                {bodyPart && (
                  <>
                    <h1 className={styles.modalTitle}>Starting Exercise</h1>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {exercises.map((exer) => {
                        return (
                          <Button
                            key={exer.name}
                            onPress={() => {
                              selectExercise(exer.name);
                            }}
                            variant={exercise === exer.name ? "solid" : "faded"}
                            color="primary"
                            className={`flex h-[100px] w-[100px] flex-shrink-0 flex-col items-center justify-center`}
                          >
                            <p className="text-lg font-bold">{exer.name}</p>
                          </Button>
                        );
                      })}
                    </div>
                  </>
                )}

                {!bodyPart && (
                  <div className="mt-20 flex justify-center">
                    <img
                      src="/addWorkout.svg"
                      className="text-md "
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={handleSubmit} variant="light">
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
