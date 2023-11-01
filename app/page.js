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
      <Footer />
    </div>
  );
}
