import Header from "../components/Header";
import { LanguageContext } from "../context/LanguageContext";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import LanguageMenu from "../components/LanguageMenu";
import { enHeaderData, ptHeaderData } from "../data/header";
import { useContext } from "react";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const headerData = language === "en" ? enHeaderData : ptHeaderData;

  return (
    <>
      <Header
        desktopChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link"
            >
              <AiFillCaretLeft className="mr-2 self-center text-primary dark:text-primaryDark"></AiFillCaretLeft>
              {headerData.goBack}
            </Link>
            <ThemeToggleButton />
            <LanguageMenu
              imgStyle="ml-2 cursor-pointer content-center my-auto transition ease-out duration-500
            hover:border-2 hover:border-primary dark:hover:border-primaryDark rounded-xl"
            />
          </>
        }
        mobileChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link"
            >
              <AiFillCaretLeft className="mr-1 self-center text-primary dark:text-primaryDark"></AiFillCaretLeft>
              {headerData.smGoBack}
            </Link>
            <div className="pl-4 flex flex-col content-center justify-center">
              <ThemeToggleButton />
            </div>
            <div className="ml-2 content-center my-auto">
              <LanguageMenu
                imgWidth={22}
                imgStyle="cursor-pointer transition ease-out duration-500
            hover:border-2 hover:border-primary dark:hover:border-primaryDark rounded-xl"
              />
            </div>
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
