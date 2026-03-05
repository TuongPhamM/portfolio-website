import React from "react";
import styles from "./VimeoIntro.module.css";
import ProjectButton from "../projectbutton/ProjectButton";

const VimeoIntro = () => {
  // Replace with your Vimeo video ID
  const vimeoId = "1170575164";

  // Background video settings:
  // background=1 enables background mode (hides UI), loop/autoplay/muted for seamless loop
  const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0`;

  return (
    <header className={styles.header}>
      <div className={styles.videoLayer} aria-hidden="true">
        <iframe
          className={styles.video}
          src={vimeoSrc}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo background"
        />
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.name}>Tuong Pham®</h1>

        <div className={styles.description}>
          <p>FPV Drone Operator — Available in California.</p>
        </div>

        <a href="#projects" className={styles.projectButtonLink}>
          <ProjectButton>VIEW PROJECTS</ProjectButton>
        </a>
      </div>
    </header>
  );
};

export default VimeoIntro;
