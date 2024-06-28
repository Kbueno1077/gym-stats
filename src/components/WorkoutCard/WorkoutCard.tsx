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
import { IoAdd } from "react-icons/io5";

import { IoIosHelpBuoy } from "react-icons/io";
import { FaWeight } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { GiDroplets } from "react-icons/gi";

export default function WorkoutCard() {
  return (
    <Card className="w-full p-2 md:min-w-[320px] ">
      <CardHeader className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />

          <div className="flex flex-col">
            <p className="text-lg">Romanian Deadlift</p>
            <p className="text-md text-default-500">Legs</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button radius="md" variant="flat" color="primary" isIconOnly>
            <IoAdd size={22} />
          </Button>
        </div>
      </CardHeader>

      {/* <Divider /> */}

      <CardBody>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg text-gray-600">Set #1</h2>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-col items-center justify-center gap-2">
                <FaWeight className="text-primary" size={25} />
                <p className="font-bold text-primary">100 lbs</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <FaRepeat className="text-primary" size={25} />
                <p className="font-bold text-primary">10</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <GiDroplets className="text-primary" size={32} />
                <p className="font-bold text-primary"> </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <IoIosHelpBuoy className="text-primary" size={32} />
                <p className="font-bold text-primary"> </p>
              </div>
            </div>
          </div>
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
            <strong>Link Go to Exercise</strong>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
}
