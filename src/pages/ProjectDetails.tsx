import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectHeader from "../components/project/ProjectHeader";
import { projectDetailsData } from "../data/projectDetails";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectContent from "../components/project/ProjectContent";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectDetailsData.find((p) => p.id === id);

  if (project) {
    console.log("Found project:", project);
  } else {
    console.log("Project not found");
  }

  return (
    <>
      <ProjectHeader project={project} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-10/12 m-auto pb-14 max-lg:bb-32 px-4 sm:px-6 lg:px-8 bg-neutral-900"
      >
        <ProjectGallery project={project} />
        <ProjectContent project={project} />
      </motion.div>
    </>
  );
};

export default ProjectDetails;
