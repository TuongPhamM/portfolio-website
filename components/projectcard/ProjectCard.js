import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ id, title, description, thumbnail }) => {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${id}`}>
        <div>
          <Image
            src={thumbnail}
            alt={title}
            className={styles.thumbnail}
            width={380}
            height={250}
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
