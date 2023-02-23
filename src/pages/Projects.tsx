import Header from "../components/Header";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProjectsGrid from "../components/ProjectsGrid";

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

      <div className="relative w-full mt-[96px] max-lg:mb-32 bg-neutral-900">
        <ProjectsGrid />
      </div>
    </>
  );
};

export default Projects;
