import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div>
      <div className={styles["footer-container"]}>
        <Footer />
      </div>
    </div>
  );
}
