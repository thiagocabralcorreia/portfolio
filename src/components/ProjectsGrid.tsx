import { motion } from "framer-motion";
import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import { ProjecSchema } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="w-full pt-20 pb-12"
    >
      <div className="w-10/12 m-auto text-center">
        <h1 className="section-title">PROJECTS</h1>
      </div>

      <p className="section-text w-8/12 m-auto text-center">
        Here are a few professional and personal projects I’ve built.
        <span className="lg:block"> You can filter them by category.</span>
      </p>

      <div className="w-10/12 m-auto text-center mt-10">
        <ProjectsFilter setSelectProject={setSelectProject} />
      </div>

      <div className="w-9/12 m-auto max-sm:mt-12 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {selectProject !== "All Projects"
          ? selectProjectsByCategory?.map((project: ProjecSchema) => (
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                key={project.id}
              />
            ))
          : projects?.map((project) => (
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                key={project.id}
              />
            ))}
      </div>
    </motion.section>
  );
};

export default ProjectsGrid;
