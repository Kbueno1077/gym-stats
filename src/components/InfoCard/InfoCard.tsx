import React from "react";
import styles from "./infoCard.module.css";

interface InfoCardProps {
  img: string;
  title: string;
  description: string;
}

function InfoCard({ img, title, description }: InfoCardProps) {
  return (
    <div className="bg-primarylight gap-2 rounded-lg p-5 shadow-md">
      <div className="flex justify-center ">
        <img src={img} alt="image" />
      </div>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default InfoCard;
