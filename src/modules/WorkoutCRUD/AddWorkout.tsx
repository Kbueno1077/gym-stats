import { useGymContext } from "@/store/useGymContext";
import { type Exercise } from "@/store/zustand";
import { mapBodyPartToExercises } from "@/utils/exercises";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import styles from "./workout.module.css";

interface AddWorkoutProps {
  bodyPart: string;
}

export default function AddWorkout({ bodyPart }: AddWorkoutProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [exercise, setExercise] = useState<string>("");

  const { today, addExerciseToWorkoutToday } = useGymContext((state) => {
    return {
      today: state.today,
      addExerciseToWorkoutToday: state.addExerciseToWorkoutToday,
    };
  });

  const selectExercise = (selectedExercise: string) => {
    if (
      !today[bodyPart]?.exercises?.find((ex) => ex.name === selectedExercise)
    ) {
      setExercise(selectedExercise);
    }
  };

  const handleOpening = () => {
    setExercise("");
    onOpen();
  };

  const exercises: Exercise[] = bodyPart
    ? //@ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      mapBodyPartToExercises[bodyPart].exercises || []
    : [];

  const handleSubmit = () => {
    if (bodyPart) {
      addExerciseToWorkoutToday(bodyPart, { name: exercise });
      onClose();
    }
  };

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
                  {exercises.map((exer: Exercise) => {
                    return (
                      <Button
                        key={exer.name}
                        onPress={() => {
                          selectExercise(exer.name);
                        }}
                        variant={exercise === exer.name ? "solid" : "faded"}
                        color="primary"
                        className={`flex h-[100px] w-[100px] flex-shrink-0  flex-col items-center justify-center	${
                          !!today[bodyPart]?.exercises?.find(
                            (ex) => ex.name === exer.name,
                          ) && "text-gray-400"
                        } `}
                        disabled={
                          !!today[bodyPart]?.exercises?.find(
                            (ex) => ex.name === exer.name,
                          )
                        }
                      >
                        <p className="break-after-all	 text-lg font-bold">
                          {exer.name}
                        </p>
                      </Button>
                    );
                  })}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={handleSubmit} variant="faded">
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
