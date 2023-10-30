import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/common/Footer";
import PeopleCard from "@/components/PeopleCard";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <PeopleCard
        photo="/svgs/prabhu-sir.png"
        name="Dr.Prabhu Mohandas"
        // designation="Associate Professor/CSED<br></br>Associate Dean"
        contactNumber='9999999999'
        email='prabhum@nitc.ac.in'
      />
      {/* <Footer /> */}
    </div>
  );
}
