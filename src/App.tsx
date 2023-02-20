import IntroBanner from "./components/IntroBanner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-neutral-900">
      <header className="w-full h-screen bg-neutral-900">
        <Navbar />
        <IntroBanner />
      </header>
    </div>
  );
}

export default App;
