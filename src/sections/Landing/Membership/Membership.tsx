"use client";

import React from "react";
import styles from "./membership.module.css";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import MembershipCard from "@/components/MembershipCard/MembershipCard";
import { FaArrowRight } from "react-icons/fa6";

function Membership() {
  const [selected, setSelected] = React.useState<React.Key>("withTrainer");

  return (
    <div className="py-20 ">
      <h1 className={styles.title}>Membership</h1>
      <h1 className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h1>

      <Tabs
        size="md"
        aria-label="Membership Type"
        //@ts-expect-error
        selectedKey={selected}
        onSelectionChange={setSelected}
        color="primary"
        classNames={{
          base: "mt-10 flex w-full justify-center",
          tabContent: "px-4 md:px-10 text-white",
          tabList: "bg-secondaryDark ",
        }}
      >
        <Tab
          className={`${selected !== "withoutTrainer" && "bg-secondaryDark"} px-0 py-7 text-xl `}
          key="withoutTrainer"
          title="Without Trainer"
        >
          <div className="mt-2 flex flex-col items-start justify-center gap-5 md:mt-10 md:flex-row">
            <MembershipCard
              title="Day"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec placerat tellus libero sit amet tortor. Suspendisse potenti."
              price="$ 0.99"
              bullterPoints={[
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
              ]}
              ctaBtn={
                <Button
                  fullWidth
                  variant="ghost"
                  color="primary"
                  size="lg"
                  endContent={<FaArrowRight />}
                >
                  Join Now
                </Button>
              }
            />
            <MembershipCard
              title="Week"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec placerat tellus libero sit amet tortor. Suspendisse potenti."
              price="$4.99"
              bullterPoints={[
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
              ]}
              ctaBtn={
                <Button
                  fullWidth
                  variant="solid"
                  color="primary"
                  size="lg"
                  endContent={<FaArrowRight />}
                >
                  Join Now
                </Button>
              }
              background="bg-secondaryDark"
            />
            <MembershipCard
              title="Month"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec placerat tellus libero sit amet tortor. Suspendisse potenti."
              price="$12.99"
              bullterPoints={[
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
              ]}
              ctaBtn={
                <Button
                  fullWidth
                  variant="ghost"
                  color="primary"
                  size="lg"
                  endContent={<FaArrowRight />}
                >
                  Join Now
                </Button>
              }
            />
          </div>
        </Tab>
        <Tab
          className={`${selected !== "withTrainer" && "bg-secondaryDark"} px-0 py-7 text-xl `}
          key="withTrainer"
          title="With Trainer"
        >
          <div className="mt-2 flex flex-col items-start justify-center gap-5 md:mt-10 md:flex-row">
            <MembershipCard
              title="1 Session"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec placerat tellus libero sit amet tortor. Suspendisse potenti."
              price="$100"
              bullterPoints={[
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
              ]}
              ctaBtn={
                <Button
                  fullWidth
                  variant="ghost"
                  color="primary"
                  size="lg"
                  endContent={<FaArrowRight />}
                >
                  Join Now
                </Button>
              }
            />
            <MembershipCard
              title="12 Sessions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec placerat tellus libero sit amet tortor. Suspendisse potenti."
              price="$1000"
              bullterPoints={[
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
              ]}
              ctaBtn={
                <Button
                  fullWidth
                  variant="solid"
                  color="primary"
                  size="lg"
                  endContent={<FaArrowRight />}
                >
                  Join Now
                </Button>
              }
              background="bg-secondaryDark"
            />
            <MembershipCard
              title="24 Sessions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec placerat tellus libero sit amet tortor. Suspendisse potenti."
              price="$1850"
              bullterPoints={[
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
                "Ipsum available for all members",
              ]}
              ctaBtn={
                <Button
                  fullWidth
                  variant="ghost"
                  color="primary"
                  size="lg"
                  endContent={<FaArrowRight />}
                >
                  Join Now
                </Button>
              }
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Membership;
