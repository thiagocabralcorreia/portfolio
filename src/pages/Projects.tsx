import Header from "../components/Header";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import { ThemeToggleButton } from "../components/ThemeToggleButton";

const Projects = () => {
  return (
    <>
      <Header
        desktopChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link"
            >
              <AiFillCaretLeft className="mr-2 self-center text-amber-400"></AiFillCaretLeft>
              GO BACK HOME
            </Link>
            <ThemeToggleButton />
          </>
        }
        mobileChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link"
            >
              <AiFillCaretLeft className="mr-1 self-center text-amber-400"></AiFillCaretLeft>
              GO HOME
            </Link>
            <ThemeToggleButton extraStyle="pl-4" />
          </>
        }
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="bg-neutral-900"
      >
        <div className="relative w-full mt-[96px] max-lg:mb-32 dark:bg-neutral-900 bg-white">
          <ProjectsGrid />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
