import React from "react";
import styles from "./ProjectTemplate.module.css";
import ProjectButton from "../projectbutton/ProjectButton";

const ProjectTemplate = ({ project }) => {
  return (
    <div className={styles.projectPage}>
      <h1 className={styles.title}>{project.title}</h1>
      <img
        src={project.thumbnail}
        alt={project.title}
        className={styles.thumbnail}
      />
      <div className={styles.description}>{project.description}</div>
      <div className={styles.content}>{project.content}</div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectButtonLink}
      >
        <ProjectButton>VIEW PROJECT</ProjectButton>
      </a>
      <div className={styles.divider}></div>
    </div>
  );
};

export default ProjectTemplate;
