import React from "react";
import styles from "./contacts.module.css";
import ContactUs from "@/components/ContactUs";

export default function Contacts() {
  return (
    <div className={styles["container"]}>
      <ContactUs
        image="/svgs/contact-call.svg"
        title="BY PHONE"
        info="+91 9999999999"
      />
      <ContactUs
        image="/svgs/contact-loc.svg"
        title="FIND US"
        info="National Institute of Technology Calicut, Kerala 673601"
      />
      <ContactUs
        image="/svgs/contact-email.svg"
        title="BY EMAIL"
        info="contactus@nitc.ac.in"
      />
    </div>
  );
}
