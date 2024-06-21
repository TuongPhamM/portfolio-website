import React from "react";
import { useRouter } from "next/router";
import ProjectTemplate from "../../components/projecttemplate/ProjectTemplate";
import projectsData from "../../data/projectsData"; // Import your project data

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectTemplate project={project} />;
};

export default ProjectPage;
