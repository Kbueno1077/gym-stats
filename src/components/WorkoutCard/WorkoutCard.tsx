"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";

export default function WorkoutCard() {
  return (
    <Card className="w-full max-w-[500px]  p-2 md:min-w-[320px] ">
      <CardHeader className="flex justify-between gap-3">
        <div className="flex flex-col">
          <p className="text-lg">Romanian Deadlift</p>
          <p className="text-md text-default-500">Legs</p>
        </div>

        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
      </CardHeader>

      {/* <Divider /> */}

      <CardBody>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex-grow bg-primary px-4 pb-4 pt-2 text-white">
            <h2 className="flex justify-end font-bold">Set #1</h2>
            <div className="mt-2 flex flex-col">
              <p>Weight: 100 lbs / 63.3 kg</p>
              <p>Reps: 10</p>
              <p>Assisted: No</p>
              <p>DropSet: No</p>
            </div>
          </div>

          <div className="flex-grow bg-primary px-4 pb-4 pt-2 text-white">
            <h2 className="flex justify-end font-bold">Set #1</h2>
            <div className="mt-2 flex flex-col">
              <p>Weight: 100 lbs / 63.3 kg</p>
              <p>Reps: 10</p>
              <p>Assisted: No</p>
              <p>DropSet: No</p>
            </div>
          </div>

          <div className="flex-grow bg-primary px-4 pb-4 pt-2 text-white">
            <h2 className="flex justify-end font-bold">Set #1</h2>
            <div className="mt-2 flex flex-col">
              <p>Weight: 100 lbs / 63.3 kg</p>
              <p>Reps: 10</p>
              <p>Assisted: No</p>
              <p>DropSet: No</p>
            </div>
          </div>

          <Button
            radius="none"
            variant="ghost"
            color="primary"
            className="mt-1 w-full "
          >
            Add Set
          </Button>
        </div>
      </CardBody>

      <Divider />

      <CardFooter className="flex flex-col px-1">
        <Accordion itemClasses={{ trigger: "p-0" }}>
          <AccordionItem
            key="1"
            aria-label="July 2nd, 2024"
            title={
              <span className="text-primary">Tuesday, July 2nd, 2024</span>
            }
            subtitle={
              <span className="text-primaryLight">
                Press to see <strong>comments</strong>
              </span>
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
            <strong>Link Go to Excercise</strong>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
}
