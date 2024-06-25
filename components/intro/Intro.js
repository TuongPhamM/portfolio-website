import styles from "./Intro.module.css";
import ProjectButton from "../projectbutton/ProjectButton";
import React, { useEffect } from "react";
import SplineBackground from "../splinebackground/SplineBackground";

const Intro = () => {
  return (
    <div className={styles.header}>
      <SplineBackground />
      <div className={styles.intro}>
        <h1>Tuong Pham®</h1>
        <div className={styles.description}>
          <h5>Recently graduated Software Engineer,</h5>
          <h5>
            dedicated to enhancing web, application, and software reliability.
          </h5>
          <h5>— Seeking for opportunities.</h5>
        </div>
      </div>
      <div className={styles.projectbutton}>
        <a href="#projects" className={styles.projectButtonLink}>
          <ProjectButton>VIEW PROJECTS</ProjectButton>
        </a>
      </div>
    </div>
  );
};

export default Intro;
