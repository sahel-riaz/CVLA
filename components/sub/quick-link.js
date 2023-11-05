import React from "react";
import styles from "./quick-link.module.css";

export default function Quicklinks({
  label,
  desc,
  journalsRef,
  conferencesRef,
  patentsRef,
  bookChaptersRef,
  ongoingRef,
  completedRef,
}) {
  function handleClick(section) {
    if (section === "Journals" && journalsRef.current) {
      journalsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Conferences" && conferencesRef.current) {
      conferencesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Patents" && patentsRef.current) {
      patentsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Book chapters" && bookChaptersRef.current) {
      bookChaptersRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Ongoing projects" && ongoingRef.current) {
      ongoingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Completed projects" && completedRef.current) {
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
