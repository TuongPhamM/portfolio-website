import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={toggleSidebar}>
        &times;
      </button>
      <nav className={styles.navLinks}>
        <Link href="/" passHref>
          <div className={styles.navLink}>
            <div className={styles.linkText}>
              <span className={styles.defaultText}>HOME</span>
              <span className={styles.hoverText}>HOME</span>
            </div>
          </div>
        </Link>
        <Link href="/#projects" passHref>
          <div className={styles.navLink}>
            <div className={styles.linkText}>
              <span className={styles.defaultText}>PROJECTS</span>
              <span className={styles.hoverText}>PROJECTS</span>
            </div>
          </div>
        </Link>
        <Link href="/#about-me" passHref>
          <div className={styles.navLink}>
            <div className={styles.linkText}>
              <span className={styles.defaultText}>ABOUT ME</span>
              <span className={styles.hoverText}>ABOUT ME</span>
            </div>
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className={styles.navLink}>
            <div className={styles.linkText}>
              <span className={styles.defaultText}>CONTACT</span>
              <span className={styles.hoverText}>CONTACT</span>
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
