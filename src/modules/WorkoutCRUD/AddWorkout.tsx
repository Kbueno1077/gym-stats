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
import { mapBodyPartToExercises } from "@/utils/exercises";

interface AddWorkoutProps {
  bodyPart: string;
}

export default function AddWorkout({ bodyPart }: AddWorkoutProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme, resolvedTheme } = useTheme();
  const [exercise, setExercise] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const selectExercise = (selectedExercise: string) => {
    setExercise(selectedExercise);
  };

  const handleOpening = () => {
    onOpen();
  };

  const exercises = mapBodyPartToExercises[bodyPart].exercises || [];

  return (
    <>
      <Button
        className="w-full py-20"
        color="primary"
        variant="flat"
        onPress={handleOpening}
        endContent={<IoAdd className={styles.icon} />}
      >
        <h1 className={styles.btn}>Add To {bodyPart}</h1>
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
                <h1 className={styles.modalTitle}>
                  Add Exercise to {bodyPart}
                </h1>
              </ModalHeader>

              <ModalBody>
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
                        className={`flex h-[100px] w-[100px] flex-shrink-0  flex-col items-center justify-center	 `}
                      >
                        <p className="break-after-all	 text-lg font-bold">
                          {exer.name}
                        </p>
                      </Button>
                    );
                  })}
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
