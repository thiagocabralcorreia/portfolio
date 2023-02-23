import About from "./components/About";
import IntroBanner from "./components/IntroBanner";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import SocialLinks from "./components/SocialLinks";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="bg-neutral-900">
      <Navbar />

      <div className="relative w-full h-screen max-lg:mb-32 bg-neutral-900">
        <IntroBanner />
        <SocialLinks />
      </div>

      <About />
      <ProjectsGrid />
    </div>
  );
}

export default App;
