import React from "react";
import styles from "./quick-link.module.css";

export default function Quicklinks({ label, desc, ongoingRef, completedRef }) {
  function handleClick(section) {
    if (section === "Ongoing projects" && ongoingRef.current) {
      console.log("scroll ongoinggg");
      ongoingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Completed projects" && completedRef.current) {
      console.log("scroll completed");
      completedRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("eroororrr");
    }
  }

  return (
    <div className={styles["container"]} onClick={() => handleClick(label)}>
      <div className={styles["link"]}>
        <div className={styles["link-label"]}>{label}</div>
        <img src="/svgs/arrow_outward_b.svg" />
      </div>
      <div className={styles["desc"]}>{desc}</div>
    </div>
  );
}
