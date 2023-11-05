"use client";

import React from "react";
import styles from "./publications.module.css";
import { useRef } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PublicationsCard from "@/components/PublicationsCard";
import QuickNavigation from "@/components/QuickNavigation";

export default function Publications() {
  const journalsRef = useRef(null);
  const conferencesRef = useRef(null);
  const patentsRef = useRef(null);
  const bookChaptersRef = useRef(null);

  const quickLinks = {
    Journals: "Explore the latest research in academic journals",
    Conferences: "Discover insights from conferences and symposiums",
    Patents: "Access patented innovations and intellectual property",
    "Book chapters": "Find in-depth knowledge in published book chapters",
  };

  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["left-container"]}>
          <div className={styles["publications"]}>
            <div className={styles["title"]}>Publications</div>
            <div className={styles["publications-wrapper"]} ref={journalsRef}>
              <div className={styles["publication-title"]}>Journals</div>
              <div className={styles["publication-list"]}>
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
            </div>
            <div
              className={styles["publications-wrapper"]}
              ref={conferencesRef}
            >
              <div className={styles["publication-title"]}>Conferences</div>
              <div className={styles["publication-list"]}>
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
            </div>
            <div className={styles["publications-wrapper"]} ref={patentsRef}>
              <div className={styles["publication-title"]}>Patents</div>
              <div className={styles["publication-list"]}>
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
            </div>
            <div
              className={styles["publications-wrapper"]}
              ref={bookChaptersRef}
            >
              <div className={styles["publication-title"]}>Book Chapters</div>
              <div className={styles["publication-list"]}>
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
            </div>
          </div>
        </div>
        <div className={styles["right-container"]}>
          <div className={styles["quick-nav-container"]}>
            <QuickNavigation
              quickLinks={quickLinks}
              journalsRef={journalsRef}
              conferencesRef={conferencesRef}
              patentsRef={patentsRef}
              bookChaptersRef={bookChaptersRef}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

//  <QuickNavigation quickLinks={quickLinks} />
