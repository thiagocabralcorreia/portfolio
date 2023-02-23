import About from "../components/About";
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
      <ProjectsGrid />
    </>
  );
};

export default Home;
