import React from "react";
import styles from "./contactus.module.css";
import { Input } from "@nextui-org/input";
import { Button, Textarea } from "@nextui-org/react";

function ContactUs() {
  return (
    <div className="py-20">
      <div className="rounded-xl bg-[url('/gym.jpg')] bg-cover  p-10 text-center">
        <h1 className={styles.title}>
          SEND US A FEEDBACK TO IMPROVE OUR SERVICES
        </h1>

        {/*<p className=" mt-5 text-gray-200 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec
          placerat tellus libero sit amet tortor. Suspendisse potenti.
        </p> */}

        <div className="mb-5 mt-10 flex w-full flex-col  gap-4  md:gap-2">
          <Input
            fullWidth={false}
            type="email"
            variant={"flat"}
            label="Email"
            className="w-full md:w-auto md:max-w-[350px]"
          />

          <Textarea
            label="Feedback"
            placeholder="Enter your Feedback"
            className="w-full md:w-auto md:max-w-[350px]"
          />

          <Button
            size="lg"
            className="h-[55px] md:w-auto md:max-w-[350px]"
            variant="solid"
            color="primary"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
