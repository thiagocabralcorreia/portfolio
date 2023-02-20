import IntroBanner from "./components/IntroBanner";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-neutral-900">
      <header className="w-full h-screen bg-neutral-900">
        <Navbar />
        <IntroBanner />

        <SocialLinks />
      </header>
    </div>
  );
}

export default App;
