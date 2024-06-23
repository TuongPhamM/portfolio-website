import styles from "./Intro.module.css";
import ProjectButton from "../projectbutton/ProjectButton";
import React, { useEffect } from "react";

const createStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const starStyle = {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${2 + Math.random() * 8}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
    stars.push(<div key={i} className={styles.star} style={starStyle}></div>);
  }
  return stars;
};

const Intro = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const stars = document.querySelectorAll(`.${styles.star}`);
      stars.forEach((star) => {
        const rect = star.getBoundingClientRect();
        const starX = rect.left + rect.width / 2;
        const starY = rect.top + rect.height / 2;
        const angleX = (event.clientY - starY) / 100;
        const angleY = (event.clientX - starX) / 100;
        star.style.transform = `translateX(${angleY}px) translateY(${angleX}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.starsContainer}>{createStars(200)}</div>
      <div className={styles.intro}>
        <h1>Tuong Pham®</h1>
        <div className={styles.description}>
          <h5>Software Engineer graduating in Summer 2024,</h5>
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
