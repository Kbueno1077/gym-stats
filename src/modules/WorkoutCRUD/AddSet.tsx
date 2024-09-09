//@ts-ignore

import { type DropSet } from "@/store/zustand";
import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { GiDroplets } from "react-icons/gi";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import styles from "./workout.module.css";

interface AddSetProps {
  bodyPart: string;
  exercise: string;
}

export default function AddSet({ bodyPart, exercise }: AddSetProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weightMetric, setWeightMetric] = useState<string>("lbs");

  const [assisted, setAssisted] = useState<boolean>(false);
  const [isDropSet, setIsDropSet] = useState<boolean>(false);

  const [dropSets, setDropSets] = useState<DropSet>({
    weights: [],
    reps: [],
  });

  const handleMetricChange = (metric: string) => {
    setWeightMetric(metric);
  };

  const handleAssisted = () => {
    setAssisted((prev) => !prev);
  };

  const handleDropSet = () => {
    setIsDropSet((prev) => !prev);
  };

  const handleDropSetRepsChange = (newReps: string, index: number) => {
    const tempDropSets = { ...dropSets };
    tempDropSets.reps[index] = parseFloat(newReps);

    setDropSets(tempDropSets);
  };

  const handleDropSetWeigthChange = (newWeigth: string, index: number) => {
    const tempDropSets = { ...dropSets };
    tempDropSets.weights[index] = parseFloat(newWeigth);
    setDropSets(tempDropSets);
  };

  const handleRemoveDropSet = (index: number) => {
    const tempDropSets = { ...dropSets };
    tempDropSets.reps.splice(index, 1);
    tempDropSets.weights.splice(index, 1);

    setDropSets(tempDropSets);
  };

  const handleAddDropSet = () => {
    setDropSets((prev) => ({
      ...prev,
      reps: [...prev.reps, 0],
      weights: [...prev.weights, 0],
    }));
  };

  const handleSubmit = () => {
    onClose();
  };

  const handleOpening = () => {
    onOpen();
  };

  return (
    <>
      <Button
        onPress={handleOpening}
        radius="md"
        variant="flat"
        color="primary"
        isIconOnly
      >
        <IoAdd size={22} />
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
                <h1 className={styles.modalTitle}>Add Set to {exercise}</h1>
              </ModalHeader>

              <ModalBody>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row  items-center gap-2">
                    <Input
                      type="number"
                      label={`Weight / ${weightMetric}`}
                      placeholder={`Weight / ${weightMetric}`}
                    />

                    <Button
                      isIconOnly
                      color="primary"
                      size="lg"
                      variant={`${weightMetric === "lbs" ? "solid" : "ghost"}`}
                      onPress={() => handleMetricChange("lbs")}
                    >
                      LBS
                    </Button>
                    <Button
                      isIconOnly
                      color="primary"
                      size="lg"
                      variant={`${weightMetric === "kgs" ? "solid" : "ghost"}`}
                      onPress={() => handleMetricChange("kgs")}
                    >
                      KG
                    </Button>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <Input type="number" label="Reps" placeholder="Reps" />

                    <Button
                      isIconOnly
                      size="lg"
                      className={`${assisted ? "text-white" : "text-primary"} ${assisted ? "bg-primary" : "bg-transparent"} border-2 border-primary`}
                      onPress={() => handleAssisted()}
                    >
                      <IoIosHelpBuoy size={32} />
                    </Button>

                    <Button
                      isIconOnly
                      size="lg"
                      className={`${isDropSet ? "text-white" : "text-primary"} ${isDropSet ? "bg-primary" : "bg-transparent"} border-2 border-primary`}
                      onPress={() => handleDropSet()}
                    >
                      <GiDroplets size={32} />
                    </Button>
                  </div>

                  {isDropSet && (
                    <div className="my-2">
                      <Accordion variant="shadow" fullWidth>
                        <AccordionItem
                          key="1"
                          aria-label="Drop Sets"
                          title="Drop Sets"
                        >
                          <div className="flex flex-col gap-2">
                            {dropSets.weights.map((weight, index) => {
                              const rep = dropSets.reps[index] ?? 0;

                              return (
                                <div
                                  key={weight + rep + index}
                                  className="flex flex-col "
                                >
                                  <h1>Drop Set #{index + 1}</h1>

                                  <div className="flex flex-row items-center gap-2">
                                    <Input
                                      type="number"
                                      label={`Weight / ${weightMetric}`}
                                      placeholder={`Weight / ${weightMetric}`}
                                      value={weight.toString()}
                                      onChange={(e) => {
                                        handleDropSetWeigthChange(
                                          e.target.value,
                                          index,
                                        );
                                      }}
                                    />
                                    <Input
                                      type="number"
                                      label={`Reps`}
                                      placeholder={`Reps`}
                                      value={rep.toString()}
                                      onChange={(e) => {
                                        handleDropSetRepsChange(
                                          e.target.value,
                                          index,
                                        );
                                      }}
                                    />
                                    <Button
                                      isIconOnly
                                      color="primary"
                                      variant="flat"
                                      radius="sm"
                                      className="mb-4 mt-4"
                                      onPress={() => handleRemoveDropSet(index)}
                                    >
                                      X
                                    </Button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <Button
                            fullWidth
                            color="primary"
                            variant="flat"
                            radius="sm"
                            className="mb-4 mt-4"
                            onPress={handleAddDropSet}
                          >
                            Add DropSet
                          </Button>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="faded" onPress={handleSubmit}>
                  Add Set
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
