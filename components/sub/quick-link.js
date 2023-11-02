import React from "react";
import styles from "./quick-link.module.css";

export default function Quicklinks({ label, desc }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["link"]}>
        <div className={styles["link-label"]}>{label}</div>
        <img src="/svgs/arrow_outward_b.svg" />
      </div>
      <div className={styles["desc"]}>
        {desc}
      </div>
    </div>
  );
}
