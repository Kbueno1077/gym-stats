import { Button } from "@nextui-org/react";
import React from "react";
import styles from "./home.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillPlayCircle } from "react-icons/ai";
import InfoCard from "@/components/InfoCard/InfoCard";

function Home() {
  return (
    <div className="pt-[40px] md:pt-0">
      <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
        <div className="md:flex-1/2 md:lg-[-100px] flex max-w-[440px] flex-col items-center justify-center gap-2 md:items-start md:justify-start">
          <h1 className={styles.title}>GET FIT AND FEEL GREAT</h1>
          <h3 className={styles.subtitle}>
            Ipsum available, but the majority have suffered alternation in some
            form, by injected humour, and randomised words which don`t
          </h3>

          <div className="mt-5 flex items-center justify-center gap-2 md:mt-2">
            <Button
              endContent={<FaArrowRight />}
              radius="sm"
              variant="solid"
              color="primary"
            >
              Join now
            </Button>
            <Button
              startContent={<AiFillPlayCircle />}
              radius="sm"
              variant="light"
              color="primary"
            >
              Watch video
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:block ">
          <img src="/homeSection.png" alt="image" className="md:scale-[110%]" />
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center justify-evenly gap-5 md:mt-[40px] md:flex-row">
        <InfoCard
          img="/weightlifting.png"
          title="weightlifters"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        />
        <InfoCard
          img="/privatetraining.png"
          title="PRIVATE TRAINING"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        />
        <InfoCard
          img="/buildmuscle.png"
          title="BUILD MUSCLE"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        />
      </div>
    </div>
  );
}

export default Home;
