import Header from "../components/Header";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProjectsGrid from "../components/ProjectsGrid";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <Header
        desktopChildren={
          <Link
            to={"/"}
            className="flex content-center justify-center header-link"
          >
            <AiFillCaretLeft className="mr-2 self-center text-amber-300"></AiFillCaretLeft>
            GO BACK HOME
          </Link>
        }
        mobileChildren={
          <Link
            to={"/"}
            className="flex content-center justify-center header-link"
          >
            <AiFillCaretLeft className="mr-2 self-center text-amber-300"></AiFillCaretLeft>
            GO HOME
          </Link>
        }
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="bg-neutral-900"
      >
        <div className="relative w-full mt-[96px] max-lg:mb-32 bg-neutral-900">
          <ProjectsGrid />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
