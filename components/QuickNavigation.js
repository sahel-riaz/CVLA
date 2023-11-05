"use client";
import React from "react";
import { useRef } from "react";
import styles from "./quick-navigation.module.css";
import QuickLinks from "./sub/quick-link";

export default function QuickNavigation({
  quickLinks,
  ongoingRef,
  completedRef,
}) {
  const data = Object.entries(quickLinks).map(([label, desc]) => ({
    label,
    desc,
  }));

  // function handleClick(section) {
  //   if (section === "Ongoing projects" && ongoingRef.current) {
  //     console.log("scroll ongoinggg");
  //     ongoingRef.current.scrollIntoView({ behavior: "smooth" });
  //   } else if (section === "Completed projects" && completedRef.current) {
  //     console.log("scroll completed");
  //     completedRef.current.scrollIntoView({ behavior: "smooth" });
  //   } else {
  //     console.log("eroororrr");
  //   }
  // }

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Quick navigation</div>
      <div className={styles["quick-links"]}>
        {data.map((data, index) => (
          <QuickLinks
            key={index}
            label={data.label}
            desc={data.desc}
            ongoingRef={ongoingRef}
            completedRef={completedRef}
          />
        ))}
      </div>
    </div>
  );
}
