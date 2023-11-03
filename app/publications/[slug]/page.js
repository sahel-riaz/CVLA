import React from "react";
import styles from "./publication-slug.module.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Slug() {
  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["title"]}>
          Multi‑modal, Multi‑task Data Analysis for Automated Plant Phenotyping
        </div>
        <div className={styles["references"]}>
          J. Ritu, E. Barnes, R. Martell, A. Dine and J. Peeples,
          &quot;Histogram Layer Time Delay Neural Network For Passive Sonar
          Classification,&quot; 2023 IEEE Workshop on Applications of Signal
          Processing to Audio and Acoustics (WASPAA). doi:
          10.1109/WASPAA58266.2023.10248102.
        </div>
        <div className={styles["date"]}>23 September 2023</div>
        <img src="/svgs/blank-image.svg" />
        <div className={styles["paragraphs"]}>
          <div className={styles["text"]}>
            J. Ritu, E. Barnes, R. Martell, A. Dine and J. Peeples,
            &quot;Histogram Layer Time Delay Neural Network For Passive Sonar
            Classification,&quot; 2023 IEEE Workshop on Applications of Signal
            Processing to Audio and Acoustics (WASPAA). doi:
          </div>
          <div className={styles["text"]}>
            J. Ritu, E. Barnes, R. Martell, A. Dine and J. Peeples,
            &quot;Histogram Layer Time Delay Neural Network For Passive Sonar
            Classification,&quot; 2023 IEEE Workshop on Applications of Signal
            Processing to Audio and Acoustics (WASPAA). doi: J. Ritu, E. Barnes,
            R. Martell, A. Dine and J. Peeples, &quot;Histogram Layer Time Delay
            Neural Network For Passive Sonar Classification,&quot; 2023 IEEE
            Workshop on Applications of Signal Processing to Audio and Acoustics
            (WASPAA). doi:J. Ritu, E. Barnes, R. Martell, A. Dine and J.
            Peeples, &quot;Histogram Layer Time Delay Neural Network For Passive
            Sonar Classification,&quot; 2023 IEEE Workshop on Applications of
            Signal Processing to Audio and Acoustics (WASPAA). doi:
          </div>
          <div className={styles["text"]}>
            J. Ritu, E. Barnes, R. Martell, A. Dine and J. Peeples,
            &quot;Histogram Layer Time Delay Neural Network For Passive Sonar
            Classification,&quot; 2023 IEEE Workshop on Applications of Signal
            Processing to Audio and Acoustics (WASPAA). doi:
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
