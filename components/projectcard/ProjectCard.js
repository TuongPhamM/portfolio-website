import React from "react";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ title, description, thumbnail, url }) => {
  return (
    <div className={styles.card}>
      <Link href={url} passHref>
        <div>
          <img
            src={thumbnail}
            alt={`${title} Thumbnail`}
            className={styles.thumbnail}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
