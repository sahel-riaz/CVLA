import React from "react";
import QuickLinks from "./sub/quick-link";
import styles from "./quick-navigation.module.css";

export default function QuickNavigation() {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Quick navigation</div>
      <div className={styles["quick-links"]}>
        <QuickLinks
          label="Journal"
          desc="Explore the latest research in academic journals"
        />
        <QuickLinks
          label="Journal"
          desc="Explore the latest research in academic journals"
        />
        <QuickLinks
          label="Journal"
          desc="Explore the latest research in academic journals"
        />
        <QuickLinks
          label="Journal"
          desc="Explore the latest research in academic journals"
        />
      </div>
    </div>
  );
}
