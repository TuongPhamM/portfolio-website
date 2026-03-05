import React from "react";
import styles from "./GalleryTemplate.module.css";

const GalleryTemplate = ({ item }) => {
  if (!item) return null;

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{item.title}</h1>

      <div className={styles.videoWrap}>
        <iframe
          src={`https://player.vimeo.com/video/${item.vimeoId}?title=0&byline=0&portrait=0`}
          className={styles.video}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={item.title}
        />
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Description</h3>
        <p className={styles.text}>{item.description}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Gear Used</h3>
        <ul className={styles.list}>
          {item.gear?.map((g, idx) => (
            <li key={idx} className={styles.listItem}>
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GalleryTemplate;
