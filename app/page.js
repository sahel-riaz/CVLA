import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/common/Footer";
import PeopleCard from "@/components/PeopleCard";

export default function Home() {
  return (
    <div className={styles["container"]}>
      
      <Footer />
    </div>
  );
}
