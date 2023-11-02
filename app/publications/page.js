import React from "react";
import styles from "./publications.module.css";
import PublicationsCard from "@/components/PublicationsCard";
import Navbar from "@/components/common/Navbar";

export default function page() {
  return (
    <div className={styles["container"]}>
      {/* <Navbar /> */}
      <PublicationsCard
        image="/svgs/blank-image.svg"
        date="23 September 2023"
        title="Multi‑modal, Multi‑task Data Analysis for Automated Plant Phenotyping"
        references='J. Ritu, E. Barnes, R. Martell, A. Dine and J. Peeples, "Histogram
          Layer Time Delay Neural Network For Passive Sonar Classification,"
          2023 IEEE Workshop on Applications of Signal Processing to Audio and
          Acoustics (WASPAA). doi: 10.1109/WASPAA58266.2023.10248102.'
      />
      <PublicationsCard
        image="/svgs/blank-image.svg"
        date="23 September 2023"
        title="Multi‑modal, Multi‑task Data Analysis for Automated Plant Phenotyping"
        references='J. Ritu, E. Barnes, R. Martell, A. Dine and J. Peeples, "Histogram
          Layer Time Delay Neural Network For Passive Sonar Classification,"
          2023 IEEE Workshop on Applications of Signal Processing to Audio and
          Acoustics (WASPAA). doi: 10.1109/WASPAA58266.2023.10248102.'
      />
      <PublicationsCard
        image="/svgs/blank-image.svg"
        date="23 September 2023"
        title="Multi‑modal, Multi‑task Data Analysis for Automated Plant Phenotyping"
        references='J. Ritu, E. Barnes, R. Martell, A. Dine and J. Peeples, "Histogram
          Layer Time Delay Neural Network For Passive Sonar Classification,"
          2023 IEEE Workshop on Applications of Signal Processing to Audio and
          Acoustics (WASPAA). doi: 10.1109/WASPAA58266.2023.10248102.'
      />
    </div>
  );
}
