import React from "react";
import styles from "./FooterSection.module.css";
import ProjectButton from "../projectbutton/ProjectButton";

const FooterSection = () => {
  return (
    <footer className={styles.footerSection} id="footer">
      <div className={styles.container}>
        <div className={styles.footerCta}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.singleCta}>
                <div className={styles.ctaText}>
                  <span>Seattle, WA</span>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.singleCta}>
                <div className={styles.ctaText}>
                  <span>tuongphamm0610@gmail.com</span>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <ul className={styles.listContainer}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
                <li>
                  <a href="#about-me">About Me</a>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <ul className={styles.listContainer}>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tuong-pham-a76237201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectButtonLink}
                  >
                    <ProjectButton>LINKEDIN</ProjectButton>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TuongPhamM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectButtonLink}
                  >
                    <ProjectButton>GITHUB</ProjectButton>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/troypham_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectButtonLink}
                  >
                    <ProjectButton>INSTAGRAM</ProjectButton>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
