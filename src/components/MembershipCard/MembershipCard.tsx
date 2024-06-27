import { Button, Divider } from "@nextui-org/react";
import React, { type ReactNode } from "react";
import styles from "./membershipCard.module.css";
import { FaCheckCircle } from "react-icons/fa";

interface MembershipCardProps {
  title: string;
  description: string;
  price: string;
  bullterPoints: string[];
  ctaBtn: ReactNode;
  background?: string;
}

function MembershipCard({
  title,
  description,
  price,
  bullterPoints,
  ctaBtn,
  background,
}: MembershipCardProps) {
  return (
    <div
      className={` flex flex-col rounded-2xl border-2 border-slate-300 p-7 ${background && background}`}
    >
      <div className="mb-5 flex w-full justify-center">
        <Button
          variant="solid"
          color="primary"
          size="lg"
          className="px-10 text-2xl"
        >
          {title}
        </Button>
      </div>

      <div>
        <p className="text text-sm leading-6">{description}</p>
        <p className={styles.price}>{price}</p>
      </div>

      <Divider />
      <Divider />

      <div className="my-5">
        {bullterPoints.map((bullet) => {
          return (
            <div key={bullet} className="my-1 flex items-center gap-3">
              <FaCheckCircle className="text-primary " />
              <p className="text-[16px]">{bullet}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 justify-end">{ctaBtn}</div>
    </div>
  );
}

export default MembershipCard;
