import About from "./components/About";
import IntroBanner from "./components/IntroBanner";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-neutral-900">
      <Navbar />

      <div className="relative w-full h-screen max-lg:mb-32 bg-neutral-900">
        <IntroBanner />
        <SocialLinks />
      </div>

      <About />
    </div>
  );
}

export default App;
