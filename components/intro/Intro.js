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
          <h5> Graduate student currently pursuing Master's at SJSU,</h5>
          <h5>
            I like enhancing user interface and software capability.
          </h5>
          <h5>— Available in the US.</h5>
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
