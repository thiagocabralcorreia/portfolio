import { Link } from "react-router-dom";
import { ProjectDetailsSchema } from "../../data/projectDetails";
import { AiFillCalendar, AiFillTag } from "react-icons/ai";
import Header from "../Header";
import { motion } from "framer-motion";

interface ProjectHeaderProps {
  project?: ProjectDetailsSchema;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <>
      <Header
        desktopChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link px-3 py-2"
            >
              HOME
            </Link>
            <Link
              to={"/projects"}
              className="flex content-center justify-center header-link px-3 py-2"
            >
              PROJECTS
            </Link>
          </>
        }
        mobileChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link px-3 py-2"
            >
              HOME
            </Link>
            <Link
              to={"/projects"}
              className="flex content-center justify-center header-link px-3 py-2"
            >
              PROJECTS
            </Link>
          </>
        }
      />

      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="pt-36 w-10/12 m-auto px-4 sm:px-6 lg:px-8 bg:neutral-900"
      >
        <p className="section-title text-amber-400">
          {project?.name.toLocaleUpperCase()}
        </p>
        <div className="flex max-sm:flex-col mt-[-14px] lg:mt-[-24px]">
          <div className="flex items-center max-sm:mb-5 mr-10">
            <AiFillCalendar className="text-lg text-neutral-300" />
            <span className="ml-2 leading-none text-neutral-300">
              {project?.date}
            </span>
          </div>
          <div className="flex items-center">
            <AiFillTag className="text-lg text-neutral-300" />
            <span className="ml-2 leading-none text-neutral-300">
              {project?.type}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectHeader;
