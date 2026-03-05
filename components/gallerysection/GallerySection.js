import React from "react";
import styles from "./GallerySection.module.css";
import GalleryCard from "../gallerycard/GalleryCard";

const projects = [
  //data for thumbnail, not individual page.
  {
    id: "fpv-1",
    title: "Oregon West Coast",
    description: "This moment is when dream FPV destination become reality.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1768877764/GX019518.00_04_13_12.Still009_uwa2y2.png",
  },

  {
    id: "fpv-2",
    title: "Seaport City",
    description: "A short sequence from an MV for Cascade Media.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1768877709/downtown_pr_2_toixzh.jpg",
  },
  {
    id: "fpv-3",
    title: "Heather Lake FPV",
    description:
      "Here is a flight that I dreamed about 4 years ago, to capture it from my favorite machine and to celebrate nature at its purest. ",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1769053674/cruise_1_s4jilv.jpg",
  },
  {
    id: "fpv-4",
    title: "Oregon West Coast Pt.2",
    description: "Close up of the giant water movements.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1769053473/GX019563_3_fywfqy.jpg",
  },
  {
    id: "fpv-5",
    title: "Alps in the Summer.",
    description: "From a linear Field of View.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1769053551/Sequence_01_2_t4v0sn.jpg",
  },
  {
    id: "fpv-6",
    title: "Sauk Lake",
    description: "The most proximity flight over water ever.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1769053579/sauk_se0yyl.jpg",
  },
  {
    id: "fpv-7",
    title: "Spirit Peaks Raceway",
    description: "Metal on the pedal.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1769053175/drift_5c4841.jpg",
  },
  {
    id: "fpv-8",
    title: "American Alps surfing",
    description: "Raw color of American alps.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1769053642/AmericanAlps_snipyr.jpg",
  },
  {
    id: "fpv-9",
    title: "Fireworks X FPV",
    description: "July 4th from above.",
    thumbnail:
      "https://res.cloudinary.com/dpdg9inln/image/upload/v1769053606/GX019449_czxr3h.jpg",
  },
];

const GallerySection = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h5 className={styles.heading}>PINNED WORKS</h5>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <GalleryCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
      <div className={styles.divider}></div>
    </section>
  );
};

export default GallerySection;
