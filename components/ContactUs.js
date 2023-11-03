import React from "react";
import styles from "./contact-us.module.css";

export default function ContactUs({ image, title, info, height, width }) {
  return (
    <div
      className={styles["container"]}
      style={{ height: height, width: width }}
    >
      <div className={styles["title-div"]}>
        <img src={image} />
        <div className={styles["title"]}>{title}</div>
      </div>
      <div className={styles["info"]}>{info}</div>
    </div>
  );
}
