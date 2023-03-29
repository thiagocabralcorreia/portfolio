import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProjectsProvider } from "./context/ProjectsContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
