import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles["container"]}>
      <img src="/svgs/logo.svg" className={styles["logo"]} />
      <div className={styles['button-container']}>
        <div className={styles['button']}>HOME</div>
        <div className={styles['button']}>RESEARCH</div>
        <div className={styles['button']}>PUBLICATIONS</div>
        <div className={styles['button']}>PROJECTS</div>
        <div className={styles['button']}>PEOPLE</div>
        <div className={styles['button']}>EVENTS</div>
        <div className={styles['button']}>CONTACT US</div>
      </div>
    </div>
  );
}
