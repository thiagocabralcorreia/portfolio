import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from "../components/About";
import Button from "../components/Button";
import Contact from "../components/Contact";
import IntroBanner from "../components/IntroBanner";
import Navbar from "../components/Navbar";
import ProjectsGrid from "../components/ProjectsGrid";
import RecommendationsSlider from "../components/Recommendations";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="bg-neutral-900"
      >
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

        <div className="relative">
          <RecommendationsSlider />
        </div>

        <Contact />
      </motion.div>
    </>
  );
};

export default Home;
