"use client";

import React from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles["container"]}>
      <img
        src="/svgs/logo.svg"
        className={styles["logo"]}
        onClick={() => router.push("/")}
      />
      <div className={styles["button-container"]}>
        <div className={styles["button"]} onClick={() => router.push("/")}>
          HOME
        </div>
        <div
          className={styles["button"]}
          onClick={() => router.push("/research")}
        >
          RESEARCH
        </div>
        <div
          className={styles["button"]}
          onClick={() => router.push("/publications")}
        >
          PUBLICATIONS
        </div>
        <div
          className={styles["button"]}
          onClick={() => router.push("/projects")}
        >
          PROJECTS
        </div>
        <div
          className={styles["button"]}
          onClick={() => router.push("/people")}
        >
          PEOPLE
        </div>
        <div className={styles["button"]}>EVENTS</div>
        <div
          className={styles["button"]}
          onClick={() => router.push("/contacts")}
        >
          CONTACT US
        </div>
      </div>
    </div>
  );
}
