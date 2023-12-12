import React from "react";
import styles from "./peoplecard.module.css";

export default function PeopleCard({
  photo,
  name,
  designation,
contactNumber,
  email,
}) {
  return (
    <div className={styles["container"]}>
      <img src={photo} className={styles["photo"]} />
      <div className={styles["content-container"]}>
        <div className={styles["name"]}>{name}</div>
        <div className={styles["designation"]}>
          Associate Professor/CSED<br></br>Associate Dean
        </div>
        <div className={styles["contact-wrapper"]}>
          <div className={styles["contact"]}>
            <img src="/svgs/call.svg" className={styles["image"]} />
            <p>{contactNumber}</p>
          </div>
          <div className={styles["contact"]}>
            <img src="/svgs/mail.svg" className={styles["image"]} />
            <p>{email}</p>
          </div>
        </div>
        <div className={styles["college"]}>
          National Institute of Technology, Calicut Kerala, 673601
        </div>
      </div>
    </div>
  );
}
