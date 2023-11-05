"use client";
import React from "react";
import { useRef } from "react";
import styles from "./quick-navigation.module.css";
import QuickLinks from "./sub/quick-link";

export default function QuickNavigation({
  quickLinks,
  journalsRef,
  conferencesRef,
  patentsRef,
  bookChaptersRef,
  ongoingRef,
  completedRef,
}) {
  const data = Object.entries(quickLinks).map(([label, desc]) => ({
    label,
    desc,
  }));

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Quick navigation</div>
      <div className={styles["quick-links"]}>
        {data.map((data, index) => (
          <QuickLinks
            key={index}
            label={data.label}
            desc={data.desc}
            journalsRef={journalsRef}
            conferencesRef={conferencesRef}
            patentsRef={patentsRef}
            bookChaptersRef={bookChaptersRef}
            ongoingRef={ongoingRef}
            completedRef={completedRef}
          />
        ))}
      </div>
    </div>
  );
}
