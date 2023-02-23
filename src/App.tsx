import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="bg-neutral-900">
      <Router>
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
