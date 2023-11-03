import React from "react";
import styles from "./research.module.css";
import Navbar from "@/components/common/Navbar";
import ResearchCard from "@/components/ResearchCard";
import Footer from "@/components/common/Footer";

export default function Research() {
  return (
    <div className={styles["big-container"]}>
      {/* <Navbar /> */}
      <div className={styles["container"]}>
        <div className={styles["research-container"]}>
          <div className={styles["heading"]}>Research</div>
          <div className={styles["research-cards"]}>
            <ResearchCard
              author="Dr. Ashish Bamania"
              startDate="23 September 2023"
              endDate="Present"
              title="Histogram Layers for Improved Target Classification"
              sponsor="Massachusetts Institute of Technology Lincoln Laboratory"
              image="/svgs/blank-image.svg"
            />
            <ResearchCard
              author="Dr. Ashish Bamania"
              startDate="23 September 2023"
              endDate="Present"
              title="Histogram Layers for Improved Target Classification"
              sponsor="Massachusetts Institute of Technology Lincoln Laboratory"
              image="/svgs/blank-image.svg"
            />
            <ResearchCard
              author="Dr. Ashish Bamania"
              startDate="23 September 2023"
              endDate="Present"
              title="Histogram Layers for Improved Target Classification"
              sponsor="Massachusetts Institute of Technology Lincoln Laboratory"
              image="/svgs/blank-image.svg"
            />
            <ResearchCard
              author="Dr. Ashish Bamania"
              startDate="23 September 2023"
              endDate="Present"
              title="Histogram Layers for Improved Target Classification"
              sponsor="Massachusetts Institute of Technology Lincoln Laboratory"
              image="/svgs/blank-image.svg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
