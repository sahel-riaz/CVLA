import React from "react";
import styles from "./people.module.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PeopleCard from "@/components/PeopleCard";

export default function page() {
  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["content"]}>
          <div className={styles["heading"]}>Students</div>
          <div className={styles["people-wrappers"]}>
            <div className={styles["people-wrapper"]}>
              <div className={styles["subheading"]}>Ph.D students</div>
              <div className={styles["people-container"]}>
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
              </div>
            </div>
            <div className={styles["people-wrapper"]}>
              <div className={styles["subheading"]}>M.Tech students</div>
              <div className={styles["people-container"]}>
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
              </div>
            </div>
            <div className={styles["people-wrapper"]}>
              <div className={styles["subheading"]}>B.Tech students</div>
              <div className={styles["people-container"]}>
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
              </div>
            </div>
            <div className={styles["people-wrapper"]}>
              <div className={styles["subheading"]}>Interns</div>
              <div className={styles["people-container"]}>
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["heading"]}>Faculties</div>
          <div className={styles["people-wrappers"]}>
            <div className={styles["people-wrapper"]}>
              {/* <div className={styles["subheading"]}>Ph.D students</div> */}
              <div className={styles["people-container"]}>
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
                <PeopleCard
                  photo="/svgs/prabhu-sir.png"
                  name="Dr. Prabu Mohandas"
                  contactNumber="9999999999"
                  email="prabum@nitc.ac.in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
