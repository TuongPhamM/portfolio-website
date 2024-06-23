import Image from "next/image";
import ContactForm from "../components/contactform/ContactForm";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.divider2}></div>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.photoContainer}>
            <Image
              src="/contact.jpg"
              alt="Tuong Pham"
              width={200}
              height={200}
              className={styles.photo}
            />
          </div>
          <div className={styles.titleContainer}>
            <p className={styles.subtitle}>SOFTWARE ENGINEER</p>
            <h1 className={styles.title}>Tuong Pham</h1>
            <a
              href="mailto:tuongphamm0610@gmail.com"
              className={styles.emailLink}
            >
              tuongphamm0610@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h1 className={styles.collabText}>Let's Collaborate</h1>
          <ContactForm />
        </div>
      </main>
      <div className={styles.divider}></div>
    </div>
  );
}
