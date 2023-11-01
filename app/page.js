import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PeopleCard from "@/components/PeopleCard";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <div className={styles["main-container"]}>
        <Navbar />
        <div className={styles["landing-container"]}>
          <div className={styles["landing-content-container"]}>
            <div className={styles["landing-title"]}>
              Computer Vision, Learning and Applications Research Group
            </div>
            <div className={styles["landing-byline"]}>
              Explore the future of Computer Vision, Learning, and Applications
              with our Research Group. Innovation awaits.
            </div>
            <div className={styles["explore-button"]}>
              <div>Explore</div>
              <img src="/svgs/arrow_outward.svg" />
            </div>
          </div>
          <img src="/svgs/landing-svg.svg" className={styles["landing-svg"]} />
        </div>
        <div className={styles["learn-more"]}>
          <div className={styles["learn-more-text"]}>Learn more</div>
          <img src="/svgs/expand_more.svg" className={styles["arrow-svg"]} />
        </div>
      </div>
      <div className={styles["about-us-container"]}>
        <img src="/svgs/about-us.svg" className={styles["about-us-svg"]} />
        <div className={styles["about-us-content"]}>
          <div className={styles["about-us-title"]}>About us</div>
          <p className={styles["about-us-text"]}>
            The Advanced Vision and Learning Lab (AVLL) seeks to develop novel
            artificial intelligence (AI), machine learning (ML), and computer
            vision (CV) algorithms. We aim to be world leaders in the AI/ML/CV
            community through innovative solutions, unique perspectives, and
            reproducible research. Our lab seeks excellence in our research,
            academic, and professional environments.<br></br>
            <br></br> AVLL promotes intellectual, professional, and personal
            growth to achieve desired research and learning outcomes. We hold
            ourselves accountable to create a diverse, equitable, and inclusive
            space for all in the lab, at Texas A&M University, and in the
            broader community.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
