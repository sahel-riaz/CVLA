"use client";

import React from "react";
import styles from "./projects.module.css";
import { useRef } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QuickNavigation from "@/components/QuickNavigation";
import ProjectCard from "@/components/ProjectCard";
import { pb } from "@/lib/pocketbase";

export default function Projects() {
  const ongoingRef = useRef(null);
  const completedRef = useRef(null);

  const quickLinks = {
    "Ongoing projects": "Explore Ongoing Projects for current initiatives",
    "Completed projects": "Review Completed Projects for past achievements",
  };

  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["left-container"]}>
          <div className={styles["projects"]}>
            <div className={styles["title"]}>Projects</div>
            <div className={styles["projects-wrapper"]} ref={ongoingRef}>
              <div className={styles["project-title"]}>Ongoing projects</div>
              <div className={styles["project-list"]}>
                <ProjectCard
                  image="/svgs/blank-image.svg"
                  date="2023-2026"
                  title="[P07] DST-SERB"
                  desc="A Step towards Smart City Environment: A Reinforcement Learning Based
                  Intelligent Traffic control for Transportation System for Smart Cities in Kerala"
                  sponsor="Science and Engineering Research Board, Department of Science and Technology, Government of India"
                  amount="Rs. 25,40,000/-"
                />
                <ProjectCard
                  image="/svgs/blank-image.svg"
                  date="2023-2026"
                  title="[P07] DST-SERB"
                  desc="A Step towards Smart City Environment: A Reinforcement Learning Based
                  Intelligent Traffic control for Transportation System for Smart Cities in Kerala"
                  sponsor="Science and Engineering Research Board, Department of Science and Technology, Government of India"
                  amount="Rs. 25,40,000/-"
                />
              </div>
            </div>
            <div className={styles["projects-wrapper"]} ref={completedRef}>
              <div className={styles["project-title"]}>Completed projects</div>
              <div className={styles["project-list"]}>
                <ProjectCard
                  image="/svgs/blank-image.svg"
                  date="2023-2026"
                  title="[P07] DST-SERB"
                  desc="A Step towards Smart City Environment: A Reinforcement Learning Based
                  Intelligent Traffic control for Transportation System for Smart Cities in Kerala"
                  sponsor="Science and Engineering Research Board, Department of Science and Technology, Government of India"
                  amount="Rs. 25,40,000/-"
                />
                <ProjectCard
                  image="/svgs/blank-image.svg"
                  date="2023-2026"
                  title="[P07] DST-SERB"
                  desc="A Step towards Smart City Environment: A Reinforcement Learning Based
                  Intelligent Traffic control for Transportation System for Smart Cities in Kerala"
                  sponsor="Science and Engineering Research Board, Department of Science and Technology, Government of India"
                  amount="Rs. 25,40,000/-"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["right-container"]}>
          <div className={styles["quick-nav-container"]}>
            <QuickNavigation
              quickLinks={quickLinks}
              ongoingRef={ongoingRef}
              completedRef={completedRef}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
