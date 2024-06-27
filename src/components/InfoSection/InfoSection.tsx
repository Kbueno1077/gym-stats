import { type ReactNode } from "react";
import styles from "./infoSection.module.css";

interface InfoSectionProps {
  img: string;
  title: string;
  description: string;
  ctaBtn?: ReactNode;
  inverted?: boolean;
  background?: "normal" | "light";
}

function InfoSection({
  img,
  title,
  description,
  ctaBtn,
  inverted = false,
}: InfoSectionProps) {
  if (inverted) {
    return (
      <div
        className={`flex flex-col items-center justify-between gap-5 py-20 md:flex-row `}
      >
        <div className="flex w-full md:justify-center">
          <img src={img} alt="image" />
        </div>

        <div className="w-full">
          <h1 className={styles.title}>{title}</h1>
          <h1 className={styles.subtitle}>{description}</h1>

          <div className="mt-10 flex flex-col items-start  gap-5 md:flex-row">
            {ctaBtn}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-5 py-20 md:flex-row `}>
      <div className="w-full">
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.subtitle}>{description}</h1>

        <div className="mt-10 flex flex-col items-start  gap-5 md:flex-row">
          {ctaBtn}
        </div>
      </div>

      <div className="flex w-full md:justify-center">
        <img src={img} alt="image" className="md:scale-[110%]" />
      </div>
    </div>
  );
}

export default InfoSection;
