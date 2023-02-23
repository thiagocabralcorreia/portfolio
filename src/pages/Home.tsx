import { Link } from "react-router-dom";
import About from "../components/About";
import Button from "../components/Button";
import IntroBanner from "../components/IntroBanner";
import Navbar from "../components/Navbar";
import ProjectsGrid from "../components/ProjectsGrid";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative w-full h-screen max-lg:mb-32 bg-neutral-900">
        <IntroBanner />
        <SocialLinks />
      </div>

      <About />

      <ProjectsGrid home />
      <div className="w-10/12 m-auto mt-[-20px] mb-20 text-center">
        <Link to={"/projects"}>
          <Button>More Projects</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
