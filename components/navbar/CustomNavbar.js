import Link from "next/link";
import styles from "./CustomNavbar.module.css";
import Title from "../title/Title";

const CustomNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Title />
        <div className={styles.navLinks}>
          <Link href="/" passHref>
            <div className={styles.navLink}>
              <div className={styles.linkText}>
                <span className={styles.defaultText}>HOME</span>
                <span className={styles.hoverText}>HOME</span>
              </div>
            </div>
          </Link>
          <Link href="#projects" passHref>
            <div className={styles.navLink}>
              <div className={styles.linkText}>
                <span className={styles.defaultText}>WORK</span>
                <span className={styles.hoverText}>WORK</span>
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
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
