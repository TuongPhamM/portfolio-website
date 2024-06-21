import React, { useState } from "react";
import styles from "./ProjectsSection.module.css";
import ProjectCard from "../projectcard/ProjectCard";

const projects = [
  {
    id: "personal-finance-application",
    title: "Personal Finance Application",
    description:
      "A web application for personal finance management and analysis, integrating with the Plaid API to access banking data securely.",
    thumbnail: "/projects/project1.jpg",
  },
  {
    id: "fwccn-application",
    title: "Federal Way Community Caregiving Network",
    description:
      "The FWCCN Application manages applicant information for the FWCCN.",
    thumbnail: "/projects/project2.jpg",
  },
  {
    id: "open-energy-dashboard",
    title: "Open Energy Dashboard",
    description: "LG19 test for OED using Mocha and Chai",
    thumbnail: "/projects/project3.jpg",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h5 className={styles.heading}>PINNED WORKS</h5>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
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

export default ProjectsSection;
