import React from "react";
import styles from "./publications-card.module.css";

export default function PublicationsCard({ image, date, title, references }) {
  return (
    <div className={styles["container"]}>
      <img src={image} className={styles["image"]} />
      <div className={styles["content"]}>
        <div className={styles["date"]}>{date}</div>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["references"]}>{references}</div>
        <div className={styles["read-more"]}>
          <div className={styles["read-more-text"]}>Read more</div>
          <img src="/svgs/arrow_forward.svg" />
        </div>
      </div>
    </div>
  );
}
